# Google Drive Demo

This demo shows how to create files in Google Drive using the Google Drive API. It creates:

1. **A Google Doc** (can be downloaded as .docx Word file)
2. **A Google Sheet** (can be downloaded as .xlsx Excel file)

## Quick Start

### Step 1: Set Up Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select an existing one
3. Enable the following APIs:
   - **Google Drive API**
   - **Google Sheets API**
   - **Google Docs API**

### Step 2: Create OAuth Credentials

1. Go to **APIs & Services** → **Credentials**
2. Click **Create Credentials** → **OAuth client ID**
3. If prompted, configure the OAuth consent screen first:
   - Choose "External" user type
   - Fill in app name, user support email, and developer email
   - Add scopes: `../auth/drive` and `../auth/drive.file`
   - Add your email as a test user
4. Select **Web application** as the application type
5. Add `http://localhost:3333/callback` to **Authorized redirect URIs**
6. Click **Create** and copy your **Client ID** and **Client Secret**

### Step 3: Configure Environment

```bash
cd tooling/google-drive-demo
cp .env.example .env
```

Edit `.env` and add your credentials:

```
GOOGLE_DRIVE_CLIENT_ID=your_client_id.apps.googleusercontent.com
GOOGLE_DRIVE_CLIENT_SECRET=your_client_secret
```

### Step 4: Install Dependencies

```bash
npm install
```

### Step 5: Authenticate with Google

```bash
npm run auth
```

This will:
1. Open your browser to Google's login page
2. Ask you to authorize the application
3. Display your refresh token in the terminal

Copy the refresh token and add it to your `.env`:

```
GOOGLE_DRIVE_REFRESH_TOKEN=your_refresh_token
```

### Step 6: Run the Demo

```bash
npm run demo
```

This creates:
- 📁 A folder called "AI Brand Factory Demo"
- 📄 A Google Doc with sample content
- 📊 A Google Sheet with sample data

Links to the files will be displayed in the terminal.

## Files Created

| File | Description |
|------|-------------|
| `lib/googleDrive.ts` | Google Drive API service library |
| `scripts/auth.ts` | OAuth authentication flow |
| `scripts/demo-create-files.ts` | Demo script to create files |

## API Features

The `GoogleDriveService` class provides:

```typescript
// Create files
await driveService.createGoogleDoc(title, content, folderId);
await driveService.createGoogleSheet(title, data, folderId);
await driveService.createFolder(name, parentFolderId);

// Manage files
await driveService.listFiles(folderId);
await driveService.deleteFile(fileId);

// Share files
await driveService.shareFile(fileId, email, role);
await driveService.makePublic(fileId);
```

## Troubleshooting

### "Access Not Configured" Error
- Make sure you've enabled the Google Drive API in Google Cloud Console

### "Invalid Grant" Error
- Your refresh token may have expired
- Run `npm run auth` again to get a new token

### "Redirect URI Mismatch" Error
- Make sure `http://localhost:3333/callback` is added to your OAuth credentials

### App is in "Testing" Mode
- If your app is in testing mode, only test users can authenticate
- Add your email as a test user in OAuth consent screen settings

## Using in Other Projects

You can import the service into any TypeScript project:

```typescript
import { GoogleDriveService } from './lib/googleDrive';

const driveService = new GoogleDriveService({
  clientId: 'your_client_id',
  clientSecret: 'your_client_secret',
  redirectUri: 'your_redirect_uri',
  refreshToken: 'your_refresh_token',
});

// Create a Google Doc
const result = await driveService.createGoogleDoc(
  'My Document',
  'Hello, World!'
);

console.log('Created:', result.webViewLink);
```
