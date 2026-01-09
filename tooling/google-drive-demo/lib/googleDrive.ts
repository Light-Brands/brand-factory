/**
 * Google Drive API Utility Library
 *
 * This module provides functions to interact with Google Drive API
 * including creating files, folders, and managing permissions.
 */

import { google, drive_v3 } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';
import * as fs from 'fs';
import * as path from 'path';

// Google Drive MIME types
export const MIME_TYPES = {
  // Google native formats
  GOOGLE_DOC: 'application/vnd.google-apps.document',
  GOOGLE_SHEET: 'application/vnd.google-apps.spreadsheet',
  GOOGLE_SLIDES: 'application/vnd.google-apps.presentation',
  GOOGLE_FOLDER: 'application/vnd.google-apps.folder',

  // Microsoft formats (for import)
  MS_WORD: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  MS_EXCEL: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  MS_POWERPOINT: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',

  // Other common formats
  PDF: 'application/pdf',
  TEXT: 'text/plain',
  CSV: 'text/csv',
  JSON: 'application/json',
};

// Scopes required for Drive operations
export const SCOPES = [
  'https://www.googleapis.com/auth/drive',
  'https://www.googleapis.com/auth/drive.file',
];

/**
 * Configuration for Google Drive client
 */
export interface DriveConfig {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  refreshToken?: string;
}

/**
 * Result of file creation
 */
export interface FileCreationResult {
  success: boolean;
  fileId?: string;
  fileName?: string;
  webViewLink?: string;
  webContentLink?: string;
  error?: string;
}

/**
 * Google Drive Service Class
 */
export class GoogleDriveService {
  private oauth2Client: OAuth2Client;
  private drive: drive_v3.Drive | null = null;

  constructor(config: DriveConfig) {
    this.oauth2Client = new google.auth.OAuth2(
      config.clientId,
      config.clientSecret,
      config.redirectUri
    );

    if (config.refreshToken) {
      this.oauth2Client.setCredentials({
        refresh_token: config.refreshToken,
      });
      this.initializeDrive();
    }
  }

  /**
   * Initialize the Drive API client
   */
  private initializeDrive(): void {
    this.drive = google.drive({ version: 'v3', auth: this.oauth2Client });
  }

  /**
   * Generate authorization URL for OAuth flow
   */
  getAuthUrl(): string {
    return this.oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
      prompt: 'consent',
    });
  }

  /**
   * Exchange authorization code for tokens
   */
  async getTokensFromCode(code: string): Promise<{ refreshToken: string; accessToken: string }> {
    const { tokens } = await this.oauth2Client.getToken(code);
    this.oauth2Client.setCredentials(tokens);
    this.initializeDrive();

    return {
      refreshToken: tokens.refresh_token || '',
      accessToken: tokens.access_token || '',
    };
  }

  /**
   * Set refresh token and initialize Drive client
   */
  setRefreshToken(refreshToken: string): void {
    this.oauth2Client.setCredentials({ refresh_token: refreshToken });
    this.initializeDrive();
  }

  /**
   * Create a Google Document (native Google Docs format)
   */
  async createGoogleDoc(
    title: string,
    content?: string,
    folderId?: string
  ): Promise<FileCreationResult> {
    if (!this.drive) {
      return { success: false, error: 'Drive not initialized. Please authenticate first.' };
    }

    try {
      // Create the document
      const fileMetadata: drive_v3.Schema$File = {
        name: title,
        mimeType: MIME_TYPES.GOOGLE_DOC,
      };

      if (folderId) {
        fileMetadata.parents = [folderId];
      }

      const response = await this.drive.files.create({
        requestBody: fileMetadata,
        fields: 'id, name, webViewLink, webContentLink',
      });

      // If content is provided, update the document using Docs API
      if (content && response.data.id) {
        const docs = google.docs({ version: 'v1', auth: this.oauth2Client });
        await docs.documents.batchUpdate({
          documentId: response.data.id,
          requestBody: {
            requests: [
              {
                insertText: {
                  location: { index: 1 },
                  text: content,
                },
              },
            ],
          },
        });
      }

      return {
        success: true,
        fileId: response.data.id || undefined,
        fileName: response.data.name || undefined,
        webViewLink: response.data.webViewLink || undefined,
        webContentLink: response.data.webContentLink || undefined,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to create Google Doc',
      };
    }
  }

  /**
   * Create a Google Sheet (native Google Sheets format)
   */
  async createGoogleSheet(
    title: string,
    data?: string[][],
    folderId?: string
  ): Promise<FileCreationResult> {
    if (!this.drive) {
      return { success: false, error: 'Drive not initialized. Please authenticate first.' };
    }

    try {
      // Create the spreadsheet using Sheets API for more control
      const sheets = google.sheets({ version: 'v4', auth: this.oauth2Client });

      const spreadsheet = await sheets.spreadsheets.create({
        requestBody: {
          properties: {
            title: title,
          },
          sheets: [
            {
              properties: {
                title: 'Sheet1',
              },
            },
          ],
        },
      });

      const fileId = spreadsheet.data.spreadsheetId;

      // If data is provided, populate the sheet
      if (data && data.length > 0 && fileId) {
        await sheets.spreadsheets.values.update({
          spreadsheetId: fileId,
          range: 'Sheet1!A1',
          valueInputOption: 'RAW',
          requestBody: {
            values: data,
          },
        });
      }

      // Move to folder if specified
      if (folderId && fileId) {
        await this.drive.files.update({
          fileId: fileId,
          addParents: folderId,
          fields: 'id, parents',
        });
      }

      // Get the file details including webViewLink
      const fileDetails = await this.drive.files.get({
        fileId: fileId!,
        fields: 'id, name, webViewLink, webContentLink',
      });

      return {
        success: true,
        fileId: fileDetails.data.id || undefined,
        fileName: fileDetails.data.name || undefined,
        webViewLink: fileDetails.data.webViewLink || undefined,
        webContentLink: fileDetails.data.webContentLink || undefined,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to create Google Sheet',
      };
    }
  }

  /**
   * Create a folder in Google Drive
   */
  async createFolder(
    name: string,
    parentFolderId?: string
  ): Promise<FileCreationResult> {
    if (!this.drive) {
      return { success: false, error: 'Drive not initialized. Please authenticate first.' };
    }

    try {
      const fileMetadata: drive_v3.Schema$File = {
        name: name,
        mimeType: MIME_TYPES.GOOGLE_FOLDER,
      };

      if (parentFolderId) {
        fileMetadata.parents = [parentFolderId];
      }

      const response = await this.drive.files.create({
        requestBody: fileMetadata,
        fields: 'id, name, webViewLink',
      });

      return {
        success: true,
        fileId: response.data.id || undefined,
        fileName: response.data.name || undefined,
        webViewLink: response.data.webViewLink || undefined,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to create folder',
      };
    }
  }

  /**
   * List files in Drive or specific folder
   */
  async listFiles(
    folderId?: string,
    pageSize: number = 10
  ): Promise<{ success: boolean; files?: drive_v3.Schema$File[]; error?: string }> {
    if (!this.drive) {
      return { success: false, error: 'Drive not initialized. Please authenticate first.' };
    }

    try {
      let query = 'trashed = false';
      if (folderId) {
        query += ` and '${folderId}' in parents`;
      }

      const response = await this.drive.files.list({
        pageSize: pageSize,
        fields: 'files(id, name, mimeType, webViewLink, createdTime, modifiedTime)',
        q: query,
        orderBy: 'modifiedTime desc',
      });

      return {
        success: true,
        files: response.data.files || [],
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to list files',
      };
    }
  }

  /**
   * Share a file with specific permissions
   */
  async shareFile(
    fileId: string,
    email: string,
    role: 'reader' | 'writer' | 'commenter' = 'reader'
  ): Promise<{ success: boolean; error?: string }> {
    if (!this.drive) {
      return { success: false, error: 'Drive not initialized. Please authenticate first.' };
    }

    try {
      await this.drive.permissions.create({
        fileId: fileId,
        requestBody: {
          type: 'user',
          role: role,
          emailAddress: email,
        },
        sendNotificationEmail: true,
      });

      return { success: true };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to share file',
      };
    }
  }

  /**
   * Make a file publicly accessible
   */
  async makePublic(
    fileId: string,
    role: 'reader' | 'writer' = 'reader'
  ): Promise<{ success: boolean; error?: string }> {
    if (!this.drive) {
      return { success: false, error: 'Drive not initialized. Please authenticate first.' };
    }

    try {
      await this.drive.permissions.create({
        fileId: fileId,
        requestBody: {
          type: 'anyone',
          role: role,
        },
      });

      return { success: true };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to make file public',
      };
    }
  }

  /**
   * Delete a file
   */
  async deleteFile(fileId: string): Promise<{ success: boolean; error?: string }> {
    if (!this.drive) {
      return { success: false, error: 'Drive not initialized. Please authenticate first.' };
    }

    try {
      await this.drive.files.delete({ fileId });
      return { success: true };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to delete file',
      };
    }
  }
}

/**
 * Create a GoogleDriveService instance from environment variables
 */
export function createDriveServiceFromEnv(): GoogleDriveService {
  const config: DriveConfig = {
    clientId: process.env.GOOGLE_DRIVE_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_DRIVE_CLIENT_SECRET || '',
    redirectUri: process.env.GOOGLE_DRIVE_REDIRECT_URI || 'http://localhost:3000/api/auth/callback',
    refreshToken: process.env.GOOGLE_DRIVE_REFRESH_TOKEN,
  };

  if (!config.clientId || !config.clientSecret) {
    throw new Error('Missing Google Drive credentials. Please set GOOGLE_DRIVE_CLIENT_ID and GOOGLE_DRIVE_CLIENT_SECRET environment variables.');
  }

  return new GoogleDriveService(config);
}
