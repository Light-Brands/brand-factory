# Lawless AI Chat

A sleek chat interface for conversing with Lawless AI - powered by Claude CLI, using your subscription instead of API credits.

## Overview

This app creates a web-based chat interface that connects to Claude through the CLI rather than the API. This means:
- **No API costs** - Uses your existing Claude subscription
- **Full Claude capabilities** - Access to Claude's complete feature set
- **Local operation** - Runs entirely on your machine

## Prerequisites

1. **Node.js** (v18 or higher)
2. **Claude CLI** installed and authenticated
   - Install: `npm install -g @anthropic-ai/claude-code` (or your preferred method)
   - Authenticate: Run `claude` and follow the prompts

## Quick Start

```bash
# Navigate to the app directory
cd brands/lawless-ai/app

# Install dependencies
npm install

# Start the server
npm start

# Or for development with auto-reload
npm run dev
```

Then open **http://localhost:3001** in your browser.

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         Browser                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                 Lawless AI Chat UI                       │    │
│  │  - HTML/CSS/JS frontend                                  │    │
│  │  - Markdown rendering                                    │    │
│  │  - Code syntax highlighting                              │    │
│  └─────────────────────────────────────────────────────────┘    │
└────────────────────────────┬────────────────────────────────────┘
                             │ HTTP/SSE
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Express Server                                │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  - Serves static frontend files                          │    │
│  │  - Manages chat sessions                                 │    │
│  │  - Proxies requests to Claude CLI                        │    │
│  │  - Streams responses back via SSE                        │    │
│  └─────────────────────────────────────────────────────────┘    │
└────────────────────────────┬────────────────────────────────────┘
                             │ Subprocess
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Claude CLI                                  │
│  - Uses your subscription credentials                            │
│  - Full Claude capabilities                                      │
│  - No API costs                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Project Structure

```
app/
├── server/
│   └── index.js          # Express server with Claude CLI integration
├── public/
│   ├── index.html        # Main HTML page
│   ├── styles.css        # Design system styles
│   └── app.js            # Frontend JavaScript
├── package.json
└── README.md
```

## Lawless AI Persona

The chat interface embodies the **Lawless AI Solution Architect** persona:

- **Purpose**: Bridge technical complexity and human understanding
- **Voice**: Warm, clear, inviting, playful yet precise
- **Approach**: Start with human relevance, layer in complexity as needed
- **Values**: Dignity > Efficiency, Simplicity > Power, Trust > Speed

## Customization

### Styling

The CSS uses design tokens (CSS custom properties) for easy customization:

```css
:root {
  --color-accent-primary: #8B5CF6;    /* Main accent color */
  --color-abyss-base: #0A0A0F;        /* Background color */
  --color-moonlight: #F5F5F7;         /* Text color */
  /* ... more tokens in styles.css */
}
```

### System Prompt

Modify the `LAWLESS_SYSTEM_PROMPT` in `server/index.js` to adjust the AI's personality and behavior.

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Health check |
| `/api/session` | POST | Create new chat session |
| `/api/chat` | POST | Send message (SSE response) |
| `/api/session/:id` | DELETE | Clear session history |

## Troubleshooting

**"Failed to start Claude CLI"**
- Ensure Claude CLI is installed: `which claude`
- Ensure you're authenticated: Run `claude` directly to check

**No response streaming**
- Check server console for errors
- Verify Claude CLI works directly: `claude -p "Hello"`

**Connection refused**
- Make sure the server is running on port 3001
- Check for port conflicts

## License

Part of the Light-Brands ecosystem.
