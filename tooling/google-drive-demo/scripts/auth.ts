#!/usr/bin/env npx ts-node

/**
 * Google Drive Authentication Script
 *
 * This script helps you authenticate with Google Drive API and obtain
 * the refresh token needed for the demo.
 *
 * Usage:
 *   npx ts-node scripts/auth.ts
 *
 * Prerequisites:
 * 1. Create a Google Cloud Project at https://console.cloud.google.com
 * 2. Enable the Google Drive API and Google Sheets API
 * 3. Create OAuth 2.0 credentials (Desktop app or Web application)
 * 4. Set GOOGLE_DRIVE_CLIENT_ID and GOOGLE_DRIVE_CLIENT_SECRET in .env
 */

import * as dotenv from 'dotenv';
import * as path from 'path';
import * as http from 'http';
import * as url from 'url';
import open from 'open';

// Load environment variables
dotenv.config({ path: path.join(__dirname, '..', '.env') });

import { GoogleDriveService, SCOPES } from '../lib/googleDrive';

const PORT = 3333;
const REDIRECT_URI = `http://localhost:${PORT}/callback`;

async function main() {
  console.log('\n🔐 Google Drive Authentication Setup');
  console.log('=====================================\n');

  // Check for required environment variables
  const clientId = process.env.GOOGLE_DRIVE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_DRIVE_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    console.log('❌ Missing credentials!\n');
    console.log('Please create a .env file with the following:');
    console.log('');
    console.log('  GOOGLE_DRIVE_CLIENT_ID=your_client_id');
    console.log('  GOOGLE_DRIVE_CLIENT_SECRET=your_client_secret');
    console.log('');
    console.log('To get these credentials:');
    console.log('1. Go to https://console.cloud.google.com');
    console.log('2. Create a new project (or select existing)');
    console.log('3. Enable "Google Drive API" and "Google Sheets API"');
    console.log('4. Go to "APIs & Services" > "Credentials"');
    console.log('5. Click "Create Credentials" > "OAuth client ID"');
    console.log('6. Choose "Web application" as the application type');
    console.log(`7. Add "${REDIRECT_URI}" to Authorized redirect URIs`);
    console.log('8. Copy the Client ID and Client Secret to your .env file');
    console.log('');
    process.exit(1);
  }

  console.log('✅ Credentials found\n');

  // Create Drive service with the redirect URI
  const driveService = new GoogleDriveService({
    clientId,
    clientSecret,
    redirectUri: REDIRECT_URI,
  });

  // Get the auth URL
  const authUrl = driveService.getAuthUrl();

  console.log('🌐 Opening browser for authentication...\n');
  console.log('If the browser doesn\'t open automatically, visit this URL:\n');
  console.log(authUrl);
  console.log('');

  // Create a temporary server to receive the callback
  return new Promise<void>((resolve) => {
    const server = http.createServer(async (req, res) => {
      const parsedUrl = url.parse(req.url || '', true);

      if (parsedUrl.pathname === '/callback') {
        const code = parsedUrl.query.code as string;
        const error = parsedUrl.query.error as string;

        if (error) {
          res.writeHead(400, { 'Content-Type': 'text/html' });
          res.end(`
            <html>
              <body style="font-family: system-ui; padding: 40px; text-align: center;">
                <h1>❌ Authentication Failed</h1>
                <p>Error: ${error}</p>
                <p>Please try again.</p>
              </body>
            </html>
          `);
          console.error(`\n❌ Authentication failed: ${error}`);
          server.close();
          resolve();
          return;
        }

        if (code) {
          try {
            console.log('\n📡 Exchanging authorization code for tokens...');
            const tokens = await driveService.getTokensFromCode(code);

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`
              <html>
                <body style="font-family: system-ui; padding: 40px; text-align: center;">
                  <h1>✅ Authentication Successful!</h1>
                  <p>You can close this window and return to the terminal.</p>
                  <p style="color: #666;">Your refresh token has been displayed in the terminal.</p>
                </body>
              </html>
            `);

            console.log('\n✅ Authentication successful!\n');
            console.log('========================================');
            console.log('YOUR REFRESH TOKEN:');
            console.log('========================================\n');
            console.log(tokens.refreshToken);
            console.log('\n========================================\n');
            console.log('Add this to your .env file:\n');
            console.log(`GOOGLE_DRIVE_REFRESH_TOKEN=${tokens.refreshToken}\n`);
            console.log('Then run: npx ts-node scripts/demo-create-files.ts\n');
          } catch (err: any) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end(`
              <html>
                <body style="font-family: system-ui; padding: 40px; text-align: center;">
                  <h1>❌ Token Exchange Failed</h1>
                  <p>Error: ${err.message}</p>
                  <p>Please try again.</p>
                </body>
              </html>
            `);
            console.error(`\n❌ Token exchange failed: ${err.message}`);
          }
        }

        server.close();
        resolve();
      }
    });

    server.listen(PORT, () => {
      console.log(`🖥️  Waiting for authentication callback on port ${PORT}...\n`);

      // Try to open the browser
      open(authUrl).catch(() => {
        console.log('Could not open browser automatically.');
        console.log('Please manually visit the URL above.\n');
      });
    });

    // Timeout after 5 minutes
    setTimeout(() => {
      console.log('\n⏱️  Authentication timed out. Please try again.');
      server.close();
      resolve();
    }, 5 * 60 * 1000);
  });
}

main();
