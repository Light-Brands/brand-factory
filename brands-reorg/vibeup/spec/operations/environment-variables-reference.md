# Environment Variables Reference

**Document Purpose**: Complete reference for all environment variables, service accounts, and API credentials required for VIBEUP platform deployment.

**Last Updated**: December 16, 2025

---

## Quick Setup Checklist

- [ ] Supabase account and project created
- [ ] Google Cloud Console OAuth configured
- [ ] Apple Developer account and Sign In configured
- [ ] Facebook Developer app created
- [ ] Twilio account with phone number
- [ ] Sentry project created
- [ ] Anthropic API key obtained
- [ ] Stripe account configured (test + live)
- [ ] OneTreePlanted API access
- [ ] Mapbox account created
- [ ] Vercel project configured
- [ ] All environment variables set in Vercel

---

## 1. Supabase (Database, Auth, Storage)

**Account Required**: [supabase.com](https://supabase.com)

### Setup Steps:
1. Create account at supabase.com
2. Create new project: "vibeup-production"
3. Navigate to Settings → API
4. Copy credentials to environment variables

### Environment Variables:

```bash
# Public Variables (safe to expose in client)
NEXT_PUBLIC_SUPABASE_URL=https://[your-project-ref].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Private Variables (server-side only)
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Where to Find**:
- Supabase Dashboard → Settings → API
- URL: Project Settings → API → Project URL
- Anon Key: Project Settings → API → Project API keys → anon/public
- Service Role Key: Project Settings → API → Project API keys → service_role (keep secret!)

**Security Notes**:
- ⚠️ Never commit service role key to git
- ⚠️ Only use service role key in server-side code
- Store in Vercel environment variables as "encrypted"

---

## 2. Google OAuth (Authentication)

**Account Required**: [console.cloud.google.com](https://console.cloud.google.com)

### Setup Steps:
1. Go to Google Cloud Console
2. Create new project: "VIBEUP"
3. Enable Google+ API
4. Go to Credentials → Create OAuth 2.0 Client ID
5. Configure OAuth consent screen
6. Add authorized redirect URIs:
   - `http://localhost:3000/auth/callback` (development)
   - `https://preview.vibeup.io/auth/callback` (preview)
   - `https://app.vibeup.io/auth/callback` (production)

### Environment Variables:

```bash
GOOGLE_CLIENT_ID=123456789-abcdefghijklmnop.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-AbCdEfGhIjKlMnOpQrStUvWx
```

**Where to Find**:
- Google Cloud Console → APIs & Services → Credentials
- Click on OAuth 2.0 Client ID
- Copy Client ID and Client Secret

**Configuration in Supabase**:
- Supabase Dashboard → Authentication → Providers
- Enable Google provider
- Paste Client ID and Client Secret
- Supabase handles the OAuth flow

---

## 3. Apple Sign In (Authentication)

**Account Required**: [developer.apple.com](https://developer.apple.com)  
**Cost**: $99/year for Apple Developer Program

### Setup Steps:
1. Enroll in Apple Developer Program
2. Go to Certificates, Identifiers & Profiles
3. Create new App ID (e.g., `com.vibeup.app`)
4. Enable "Sign in with Apple" capability
5. Create Service ID for web authentication
6. Create Private Key for authentication
7. Download `.p8` private key file (only chance to download!)

### Environment Variables:

```bash
APPLE_CLIENT_ID=com.vibeup.app.signin
APPLE_CLIENT_SECRET=[Generated JWT - see below]
APPLE_TEAM_ID=ABCD123456
APPLE_KEY_ID=ABCD123456
APPLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIGT...xYZ\n-----END PRIVATE KEY-----"
```

**Where to Find**:
- **Team ID**: Developer Account → Membership → Team ID
- **Service ID (Client ID)**: Identifiers → Services IDs → Identifier
- **Key ID**: Keys → Your key name → Key ID
- **Private Key**: Downloaded `.p8` file (convert to PEM format)

**Generating Client Secret** (JWT):
- Apple requires a JWT generated from your private key
- Valid for 6 months, must be regenerated
- Use script or Supabase handles this automatically
- See: [Apple Sign In Documentation](https://developer.apple.com/documentation/sign_in_with_apple/generate_and_validate_tokens)

**Configuration in Supabase**:
- Supabase Dashboard → Authentication → Providers
- Enable Apple provider
- Paste Service ID, Team ID, Key ID, and Private Key
- Supabase generates the JWT automatically

**Redirect URIs**:
- Add to Apple Service ID configuration:
  - `https://[your-project-ref].supabase.co/auth/v1/callback`

---

## 4. Facebook Login (Authentication)

**Account Required**: [developers.facebook.com](https://developers.facebook.com)

### Setup Steps:
1. Create Facebook Developer account
2. Create new app: "VIBEUP"
3. Add "Facebook Login" product
4. Configure OAuth redirect URIs
5. Submit app for review (required for production)
6. Add privacy policy URL and terms of service URL

### Environment Variables:

```bash
FACEBOOK_APP_ID=1234567890123456
FACEBOOK_APP_SECRET=abcdef1234567890abcdef1234567890
```

**Where to Find**:
- Facebook Developers → Your App → Settings → Basic
- App ID and App Secret shown on this page

**Configuration in Supabase**:
- Supabase Dashboard → Authentication → Providers
- Enable Facebook provider
- Paste App ID and App Secret

**OAuth Redirect URIs**:
- Facebook Login → Settings → Valid OAuth Redirect URIs
- Add: `https://[your-project-ref].supabase.co/auth/v1/callback`

**App Review Requirements**:
- Privacy Policy URL (required)
- Terms of Service URL (required)
- App icon and description
- Screencast demonstrating Facebook Login flow
- ⚠️ App must be reviewed and approved before public use

---

## 5. Twilio (SMS Authentication)

**Account Required**: [twilio.com](https://twilio.com)

### Setup Steps:
1. Create Twilio account
2. Verify your identity (required for SMS)
3. Get a Twilio phone number
4. Fund account (SMS costs ~$0.0075 per message)
5. Configure SMS service for authentication codes

### Environment Variables:

```bash
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_PHONE_NUMBER=+15551234567
```

**Where to Find**:
- Twilio Console → Account Info → Account SID and Auth Token
- Phone Numbers → Manage → Active Numbers

**Configuration in Supabase**:
- Supabase Dashboard → Authentication → Providers
- Enable Phone provider
- Choose "Twilio" as SMS provider
- Paste Account SID, Auth Token, and Phone Number
- Configure message template for verification codes

**Costs**:
- US/Canada SMS: ~$0.0075 per message
- International: varies by country
- Phone number rental: ~$1/month
- Estimate: 1000 signups/month = ~$15/month

**Phone Number Requirements**:
- Must be SMS-capable
- Recommended: US number for US users
- Consider toll-free number for better deliverability

---

## 6. Sentry (Error Tracking & Monitoring)

**Account Required**: [sentry.io](https://sentry.io)

### Setup Steps:
1. Create Sentry account
2. Create organization: "VIBEUP"
3. Create project: "vibeup-app" (Next.js platform)
4. Copy DSN from project settings
5. Create auth token for releases

### Environment Variables:

```bash
# Public (client-side error tracking)
NEXT_PUBLIC_SENTRY_DSN=https://abc123@o123456.ingest.sentry.io/7890123

# Private (for CLI and releases)
SENTRY_AUTH_TOKEN=sntrys_abc123def456...
SENTRY_ORG=vibeup
SENTRY_PROJECT=vibeup-app
```

**Where to Find**:
- **DSN**: Project Settings → Client Keys (DSN)
- **Auth Token**: Settings → Auth Tokens → Create New Token
  - Scopes needed: `project:read`, `project:releases`, `project:write`

**Configuration**:
- See `epic-00-foundation.md` for Sentry initialization code
- Configure sample rates for performance and errors
- Set up alerts for critical errors

**Free Tier**:
- 5,000 events/month free
- Upgrade to Team ($26/month) for 50,000 events/month

---

## 7. Anthropic Claude (AI / Mira)

**Account Required**: [console.anthropic.com](https://console.anthropic.com)

### Setup Steps:
1. Create Anthropic account
2. Go to API Keys section
3. Create new API key
4. Fund account (pay-as-you-go)

### Environment Variables:

```bash
ANTHROPIC_API_KEY=sk-ant-api03-abc123...
```

**Where to Find**:
- Anthropic Console → API Keys
- Create new key with descriptive name: "VIBEUP Production"

**Pricing** (as of Dec 2025):
- **Claude 3.5 Sonnet** (recommended for Mira):
  - Input: $3 per million tokens
  - Output: $15 per million tokens
- **Claude 3 Haiku** (for simple tasks):
  - Input: $0.25 per million tokens
  - Output: $1.25 per million tokens

**Usage Estimates**:
- Average Mira conversation: ~1,000 tokens input, ~500 tokens output
- 1,000 daily active users, 2 Mira interactions/day = ~$180/month
- Budget: $500/month for 5,000 DAU

**Rate Limits**:
- Free tier: 1,000 requests/day
- Paid: Contact Anthropic for higher limits
- Implement caching for repeated prompts

---

## 8. Stripe (Payments & Subscriptions)

**Account Required**: [stripe.com](https://stripe.com)

### Setup Steps:
1. Create Stripe account
2. Complete business verification (required for payouts)
3. Enable test mode for development
4. Create webhook endpoint for subscription events
5. Switch to live mode for production

### Environment Variables:

```bash
# Test Mode (Development)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51Abc...
STRIPE_SECRET_KEY=sk_test_51Abc...
STRIPE_WEBHOOK_SECRET=whsec_test_abc123...

# Live Mode (Production)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_51Abc...
STRIPE_SECRET_KEY=sk_live_51Abc...
STRIPE_WEBHOOK_SECRET=whsec_live_abc123...
```

**Where to Find**:
- **Publishable Key**: Developers → API keys → Publishable key
- **Secret Key**: Developers → API keys → Secret key (reveal to copy)
- **Webhook Secret**: Developers → Webhooks → Add endpoint → Signing secret

**Webhook Configuration**:
- Endpoint URL: `https://app.vibeup.io/api/webhooks/stripe`
- Events to listen for:
  - `customer.subscription.created`
  - `customer.subscription.updated`
  - `customer.subscription.deleted`
  - `invoice.payment_succeeded`
  - `invoice.payment_failed`

**Products to Create in Stripe**:
1. **Regenerative Membership** - $4/month recurring
   - Product ID saved in database for reference
   - Includes tree planting, premium features

**Testing**:
- Use test card: `4242 4242 4242 4242`
- Any future expiry date and CVC
- Test webhook events using Stripe CLI

---

## 9. OneTreePlanted (Tree Planting API)

**Account Required**: Contact [onetreeplanted.org](https://onetreeplanted.org) for API access

### Setup Steps:
1. Contact OneTreePlanted partnership team
2. Discuss integration and bulk planting terms
3. Receive API credentials
4. Set up monthly billing/planting schedule

### Environment Variables:

```bash
ONETREEPLANTED_API_KEY=otp_abc123def456...
ONETREEPLANTED_PROJECT_ID=amazonia-2024
```

**Where to Find**:
- Provided by OneTreePlanted upon partnership approval

**Integration Details**:
- Batch tree planting API calls (monthly)
- Each Regenerative member = 1 tree/month
- API tracks planting certificates and impact metrics
- See `epic-08-monetization.md` for full integration spec

**Costs**:
- ~$1-3 per tree planted (negotiate bulk pricing)
- Budget based on Regenerative member count

---

## 10. Mapbox (Location & Maps)

**Account Required**: [mapbox.com](https://mapbox.com)

### Setup Steps:
1. Create Mapbox account
2. Go to Account → Access Tokens
3. Create public token with appropriate scopes
4. Restrict token to your domains (security)

### Environment Variables:

```bash
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=pk.eyJ1IjoidmlibXVwIiwiYSI6ImNscXh5ejl...
```

**Where to Find**:
- Mapbox Account → Access Tokens
- Create token with scopes:
  - `styles:read`
  - `fonts:read`
  - `datasets:read`

**Token Restrictions** (Security):
- Restrict to URLs:
  - `http://localhost:3000/*`
  - `https://preview.vibeup.io/*`
  - `https://app.vibeup.io/*`

**Free Tier**:
- 50,000 map loads/month free
- $5 per 1,000 additional loads
- Sufficient for MVP, monitor usage

**Usage**:
- Discovery map showing users by location
- Business location maps
- User location selection during profile creation

---

## 11. Vercel (Hosting & Deployment)

**Account Required**: [vercel.com](https://vercel.com)

### Setup Steps:
1. Create Vercel account
2. Connect GitHub repository
3. Create project: "vibeup-app"
4. Configure production domain: `app.vibeup.io`
5. Add all environment variables to project settings

### Environment Variables:

All environment variables from sections 1-10 must be added to Vercel:
- Project Settings → Environment Variables
- Add separately for Development, Preview, and Production

**Vercel-Provided Variables** (automatic):

```bash
NEXT_PUBLIC_VERCEL_ENV=production
NEXT_PUBLIC_VERCEL_URL=vibeup-app-xyz.vercel.app
VERCEL_GIT_COMMIT_SHA=abc123def456
```

**Domain Configuration**:
- Production: `app.vibeup.io`
- Preview: Auto-generated preview URLs for PRs
- Development: `localhost:3000`

---

## 12. Application Configuration

### General Settings:

```bash
# Application URL
NEXT_PUBLIC_APP_URL=https://app.vibeup.io

# Node Environment
NODE_ENV=production

# Logging
LOG_LEVEL=info  # debug | info | warn | error
ENABLE_ALL_LOGGING=false  # true for development only
```

### Feature Flags (Optional Overrides):

```bash
# Enable specific features via environment
ENABLE_MIRA_CHAT=true
ENABLE_BUSINESS_DIRECTORY=true
ENABLE_COMMUNITY_FEATURES=true
ENABLE_IMPACT_VOTING=true
```

---

## Environment Variables by Environment

### Development (`.env.local`)

**Required for local development**:

```bash
# Supabase (use local Supabase or dev project)
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGci...

# Authentication (development OAuth apps)
GOOGLE_CLIENT_ID=123456-dev.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-dev...
# Apple, Facebook, Twilio optional in development

# Sentry (optional in development)
NEXT_PUBLIC_SENTRY_DSN=https://...

# Anthropic (required for Mira)
ANTHROPIC_API_KEY=sk-ant-api03-...

# Stripe (test mode)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_test_...

# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
LOG_LEVEL=debug
ENABLE_ALL_LOGGING=true
```

### Preview (Vercel Environment Variables)

**Set in Vercel for Preview environment**:

All variables from Development, but:
- Use preview Supabase project
- Use preview URLs in OAuth redirects
- Use test mode for Stripe
- `NEXT_PUBLIC_APP_URL=https://preview.vibeup.io`

### Production (Vercel Environment Variables)

**Set in Vercel for Production environment**:

All variables from sections 1-11, with:
- Production Supabase project
- Live OAuth credentials
- Live Stripe keys
- Production API keys for all services
- `NEXT_PUBLIC_APP_URL=https://app.vibeup.io`
- `NODE_ENV=production`

---

## Security Checklist

### Environment Variable Security:

- [ ] Never commit `.env.local` to git
- [ ] Add `.env*.local` to `.gitignore`
- [ ] Use encrypted storage in Vercel for sensitive keys
- [ ] Rotate API keys every 90 days
- [ ] Use separate keys for development vs production
- [ ] Implement rate limiting on API routes
- [ ] Enable Vercel Authentication for admin routes
- [ ] Use service role key only in server-side code
- [ ] Restrict OAuth redirect URIs to known domains
- [ ] Enable 2FA on all service accounts
- [ ] Monitor API usage and set up alerts for anomalies
- [ ] Store backup of production env vars in 1Password/secure vault

### Service Account Security:

- [ ] Use unique, strong passwords for each service
- [ ] Enable 2FA on all accounts
- [ ] Grant minimum required permissions
- [ ] Use team accounts, not personal accounts
- [ ] Document who has access to each account
- [ ] Set up billing alerts to catch unexpected usage
- [ ] Review access logs monthly
- [ ] Implement IP allowlisting where possible

---

## Cost Summary

### Monthly Recurring Costs (Estimated):

| Service | Free Tier | Estimated Cost (1K MAU) | Estimated Cost (10K MAU) |
|---------|-----------|-------------------------|--------------------------|
| Supabase | Free (2 projects) | $25 | $100 |
| Vercel | Free (hobby) | $20 | $80 |
| Sentry | 5K events/mo | $26 | $99 |
| Anthropic | Pay-as-you-go | $180 | $1,800 |
| Stripe | Free + 2.9% + $0.30 | Transaction fees | Transaction fees |
| Twilio | Pay-as-you-go | $15 | $150 |
| OneTreePlanted | N/A | Varies | Varies |
| Mapbox | 50K loads/mo | Free | $50 |
| Apple Developer | N/A | $99/year | $99/year |
| **Total** | | **~$266/mo** | **~$2,279/mo** |

**Notes**:
- Stripe costs based on transaction volume
- Anthropic costs can be optimized with caching
- OneTreePlanted costs scale with Regenerative members
- Most services have generous free tiers for MVP

---

## Setup Order (Recommended)

1. **Supabase** (foundation for auth and database)
2. **Vercel** (deployment platform)
3. **Google OAuth** (primary social login)
4. **Sentry** (catch errors during development)
5. **Anthropic** (required for Mira)
6. **Stripe Test Mode** (payments testing)
7. **Twilio** (SMS authentication)
8. **Apple Sign In** (before iOS launch)
9. **Facebook Login** (after core auth working)
10. **Mapbox** (for location features)
11. **Stripe Live Mode** (before monetization launch)
12. **OneTreePlanted** (for Regenerative membership)

---

## Troubleshooting

### Common Issues:

**"Invalid OAuth redirect URI"**
- Ensure redirect URI in OAuth provider matches exactly
- Include protocol (https://) and trailing `/auth/callback`
- Check Supabase callback URL in provider settings

**"Unauthorized" errors with Supabase**
- Verify anon key is used for client-side
- Verify service role key is only used server-side
- Check RLS policies are correctly configured

**Sentry not capturing errors**
- Verify DSN is correct and for correct environment
- Check sample rate isn't set to 0
- Ensure Sentry.init() is called in app initialization

**Stripe webhook not receiving events**
- Verify webhook URL is correct and publicly accessible
- Check webhook signing secret matches
- Test with Stripe CLI: `stripe listen --forward-to localhost:3000/api/webhooks/stripe`

**Anthropic rate limiting**
- Implement request queuing
- Cache common responses
- Use Haiku model for simple tasks
- Contact Anthropic for rate limit increase

---

## Related Documents

- [`epic-00-foundation.md`](../epics/epic-00-foundation.md) - Infrastructure setup details
- [`master-plan.md`](../master-plan.md) - Overall platform architecture
- [`deployment-infrastructure.md`](../architecture/deployment-infrastructure.md) - Deployment configuration
- [`epic-08-monetization.md`](../epics/epic-08-monetization.md) - Stripe integration details

---

**Document Maintenance**:
- Review quarterly for updated pricing
- Update when new services are added
- Verify all links are current
- Test setup instructions annually

