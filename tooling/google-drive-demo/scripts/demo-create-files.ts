#!/usr/bin/env npx ts-node

/**
 * Demo Script: Create Word Doc and Google Sheet in Google Drive
 *
 * This script demonstrates the Google Drive integration by creating:
 * 1. A Google Doc (Word-compatible document)
 * 2. A Google Sheet (Excel-compatible spreadsheet)
 *
 * Prerequisites:
 * - Set up Google Cloud Project with Drive API enabled
 * - Configure OAuth credentials
 * - Run the auth script first to get refresh token
 *
 * Usage:
 *   npx ts-node scripts/demo-create-files.ts
 */

import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables
dotenv.config({ path: path.join(__dirname, '..', '.env') });

import { createDriveServiceFromEnv, GoogleDriveService } from '../lib/googleDrive';

// Demo content for the Google Doc
const DOC_CONTENT = `
AI Brand Factory - Demo Document
================================

This document was automatically created by the Google Drive integration demo.

Created: ${new Date().toISOString()}

Purpose
-------
This demonstrates that the Google Drive API integration is working correctly.
You can edit this document directly in Google Docs or download it as a Word file (.docx).

Features Demonstrated
--------------------
✓ OAuth 2.0 authentication with Google
✓ Creating native Google Documents
✓ Adding content to documents via API
✓ Generating shareable links

Next Steps
----------
1. Check your Google Drive - you should see this document
2. Try editing it to confirm full access
3. Download as .docx to verify Word compatibility
4. Check the Google Sheet that was also created

For more information, visit the AI Brand Factory documentation.
`;

// Demo data for the Google Sheet
const SHEET_DATA = [
  ['AI Brand Factory - Demo Spreadsheet'],
  [''],
  ['Created', new Date().toISOString()],
  ['Status', 'Active'],
  [''],
  ['Sample Data Table'],
  ['Brand Name', 'Type', 'Status', 'Revenue Goal', 'Launch Date'],
  ['VibeUp', 'SaaS', 'Active', '$100,000', '2024-01-15'],
  ['Light Brand Consulting', 'Services', 'Active', '$50,000', '2024-02-01'],
  ['Solar AI Accelerator', 'Platform', 'Planning', '$250,000', '2024-06-01'],
  ['Earth Weavers', 'Community', 'Planning', '$25,000', '2024-04-15'],
  ['Cho Ventures AI', 'Investment', 'Active', '$500,000', '2024-03-01'],
  [''],
  ['Summary Statistics'],
  ['Total Brands', '5'],
  ['Active Brands', '3'],
  ['Planning Brands', '2'],
  ['Total Revenue Goal', '$925,000'],
];

async function main() {
  console.log('\n🚀 AI Brand Factory - Google Drive Demo');
  console.log('========================================\n');

  // Check for required environment variables
  if (!process.env.GOOGLE_DRIVE_CLIENT_ID || !process.env.GOOGLE_DRIVE_CLIENT_SECRET) {
    console.error('❌ Error: Missing Google Drive credentials.');
    console.error('\nPlease set the following environment variables in .env:');
    console.error('  GOOGLE_DRIVE_CLIENT_ID=your_client_id');
    console.error('  GOOGLE_DRIVE_CLIENT_SECRET=your_client_secret');
    console.error('  GOOGLE_DRIVE_REFRESH_TOKEN=your_refresh_token');
    console.error('\nRun `npx ts-node scripts/auth.ts` to get your refresh token.');
    process.exit(1);
  }

  if (!process.env.GOOGLE_DRIVE_REFRESH_TOKEN) {
    console.error('❌ Error: Missing refresh token.');
    console.error('\nPlease run `npx ts-node scripts/auth.ts` first to authenticate');
    console.error('and get your refresh token.');
    process.exit(1);
  }

  try {
    // Initialize the Drive service
    console.log('📡 Connecting to Google Drive API...');
    const driveService = createDriveServiceFromEnv();
    console.log('✅ Connected successfully!\n');

    // Create a demo folder
    console.log('📁 Creating demo folder...');
    const folderResult = await driveService.createFolder('AI Brand Factory Demo');

    if (!folderResult.success) {
      console.error(`❌ Failed to create folder: ${folderResult.error}`);
      process.exit(1);
    }

    console.log(`✅ Folder created: ${folderResult.fileName}`);
    console.log(`   📎 Link: ${folderResult.webViewLink}\n`);

    // Create a Google Doc
    console.log('📄 Creating Google Doc (Word-compatible)...');
    const docResult = await driveService.createGoogleDoc(
      'AI Brand Factory - Demo Document',
      DOC_CONTENT,
      folderResult.fileId
    );

    if (!docResult.success) {
      console.error(`❌ Failed to create document: ${docResult.error}`);
    } else {
      console.log(`✅ Document created: ${docResult.fileName}`);
      console.log(`   📎 Link: ${docResult.webViewLink}`);
      console.log(`   💡 Tip: You can download this as .docx from Google Drive\n`);
    }

    // Create a Google Sheet
    console.log('📊 Creating Google Sheet (Excel-compatible)...');
    const sheetResult = await driveService.createGoogleSheet(
      'AI Brand Factory - Demo Spreadsheet',
      SHEET_DATA,
      folderResult.fileId
    );

    if (!sheetResult.success) {
      console.error(`❌ Failed to create spreadsheet: ${sheetResult.error}`);
    } else {
      console.log(`✅ Spreadsheet created: ${sheetResult.fileName}`);
      console.log(`   📎 Link: ${sheetResult.webViewLink}`);
      console.log(`   💡 Tip: You can download this as .xlsx from Google Drive\n`);
    }

    // Summary
    console.log('========================================');
    console.log('📋 SUMMARY');
    console.log('========================================\n');
    console.log('Created the following files in your Google Drive:\n');

    console.log(`📁 Folder: AI Brand Factory Demo`);
    console.log(`   ${folderResult.webViewLink}\n`);

    if (docResult.success) {
      console.log(`📄 Document: AI Brand Factory - Demo Document`);
      console.log(`   ${docResult.webViewLink}\n`);
    }

    if (sheetResult.success) {
      console.log(`📊 Spreadsheet: AI Brand Factory - Demo Spreadsheet`);
      console.log(`   ${sheetResult.webViewLink}\n`);
    }

    console.log('✨ Demo completed successfully!');
    console.log('\nYou can:');
    console.log('  • Open the links above to view your files');
    console.log('  • Download the document as .docx (Word format)');
    console.log('  • Download the spreadsheet as .xlsx (Excel format)');
    console.log('  • Edit the files directly in Google Docs/Sheets');
    console.log('  • Share the files with others\n');
  } catch (error: any) {
    console.error('\n❌ Error:', error.message);
    if (error.message.includes('invalid_grant')) {
      console.error('\n💡 Your refresh token may have expired.');
      console.error('   Run `npx ts-node scripts/auth.ts` to re-authenticate.');
    }
    process.exit(1);
  }
}

main();
