# Epic 02: Humans - Profile System & Chemistry

**Epic ID**: EPIC-02-HUMANS  
**Priority**: P0 (Enables all social features)  
**Timeline**: 2-3 weeks  
**Dependencies**: Epic 0 (Foundation), Epic 1 (Mira)  
**Blocks**: Epic 4 (Discovery), Epic 6 (Business)

---

## Vision & Objectives

**FOCUS**: Human Profiles

Enable users to express their identity and preferences in a guided, low-friction way, seeded from onboarding responses, to unlock personalization and light social discovery. **Mira serves as an identity coach**, making profile creation feel like a thoughtful conversation with a wise friend, not a form-filling exercise. Profiles are expanded through progressive disclosure, with Mira explaining each section's value and celebrating completion milestones.

At the heart of VIBEUP is the belief that **connection happens when we understand not just what someone does, but what moves them, where they're curious, and how they bring their energy into the world.** The profile system organizes attributes into three meaningful groups that make this simple for users yet powerful for discovery.

### What This Epic Delivers (Mira-Enhanced)

1. **Guided Profile Creation**: Progressive disclosure flow that feels like a conversation with Mira, not a form
2. **Profile Completion Prompt**: At end of onboarding, prominent invitation to complete profile for customized experience
3. **Chemistry Framework**: Astrology + personality assessments for deeper matching—**Mira explains each dimension and unlocking benefits**
4. **Connection System**: Follow, connect, and message aligned users—**Mira facilitates introductions and explains compatibility**
5. **Progressive Disclosure**: Complexity revealed gradually as users engage—**Mira introduces sections when ready and explains value**
6. **VIBEUP Verified Badge**: Gamified completion incentive—**Mira celebrates achievement and shows social proof benefits**
7. **Profile URL Scheme**: `vibeup.io/iam/[handle]` for human profiles
8. **Account Management**: Complete account control (email, password, deletion)

### Mira's Role in Profile Building

**Section Introduction**:
- "Now that you've shared your intentions, let's explore what values guide your path. This helps me connect you with people who share your energy."
- "Chemistry might sound mysterious, but it's simply another lens to understand compatibility. Want to unlock this by sharing your birthdate?"

**Completion Encouragement**:
- "Your profile is 65% complete. Adding your interests helps me recommend practices and connections that truly resonate."
- "You're 2 sections away from earning your VIBEUP Verified badge—a sign that you're here for genuine connection."

**Value Explanation**:
- "These 3 core values will guide every connection I suggest. Choose what you can't compromise on."
- "Your interests paint a picture of who you are. The more you share, the better I can introduce you to aligned souls."

**Privacy & Comfort**:
- "You can always hide chemistry details from your public profile while still benefiting from smarter matching."
- "Skip any section that doesn't feel right. Your authenticity matters more than completion percentage."

**Celebration**:
- "🎉 Verified! Your complete profile now attracts 3x more aligned connection requests."
- "Beautiful profile! You've shown up authentically. Ready to discover your people?"

---

**Brand Identity**: This epic's implementation follows [brand identity guidelines](../brand/):
- **Visual**: UI components follow [visual identity standards](../brand/01-visual-identity.md) - profile cards use 16px border radius, subtle elevation shadow (0 2px 8px rgba(0, 43, 127, 0.08))
- **Copy**: All messaging uses [brand voice guidelines](../brand/03-brand-voice-messaging.md) - warm, encouraging, questions over commands
- **Mira**: AI interactions embody [Mira's personality](../brand/04-mira-personality-guide.md) as identity coach
- **Integration**: See [brand-identity-integration.md](brand-identity-integration.md#epic-02-humans-profiles--connections) for Epic 02 specific requirements

**Key Brand Touchpoints**:
- Profile completion prompts use inviting language ("Your first meaningful connection starts here" not "0 connections")
- Alignment scores explained warmly ("You both value Growth and Authenticity" not just "87% match")
- Chemistry matching framed accessibly, not mystically
- Profile cards embody minimal, spacious, intentional design
- Connection suggestions use Mira's encouraging, non-pushy tone

---

### User Journey

**▶ 0. Profile Onboarding Introduction (4 Philosophical Screens)**

Before the 13-slide profile creation, users experience a 4-screen philosophical introduction that grounds them in VIBEUP's mission:

**Screen 1 - Welcome**:
- Headline: "Welcome to VIBEUP—the world's first social wellness platform."
- Body: "A space to live intentionally, connect authentically, and raise your frequency. Here, we simplify your wellness journey—helping you find clarity, calm, and purpose."
- CTA: "Continue with Intention"
- Design: Soft gradient background, expanding light behind VIBEUP, subtle motion

**Screen 2 - Awareness**:
- Headline: "Everything starts with awareness."
- Body: "The more honest and intentional you are, the more VIBEUP can help. Take a breath—this is your moment to reset and realign."
- CTA: "Move with Awareness"
- Design: Breathing animation or ripple effect, ambient tone or haptic vibration

**Screen 3 - The Four Dimensions**:
- Headline: "You are energy—shaping and shaped by your world."
- Body: "Find balance across the 4 Dimensions of your life:
  - 🧘 Internal: Clarity, strength, and intention
  - 🌿 External: Connect with yourself daily
  - 🤝 Relationships: Believe who you align with
  - 🏡 Environment: Be mindful where you spend your time
  
  Find upward growth in the 4 Stages of life:
  - ⛰️ Foundation: Know where you are
  - ☀️ Awaken: See what's possible
  - 🌱 Healing: Grow through what you feel
  - ❤️‍🔥 Live: Be who you came to be"
- CTA: "Flow with Balance"
- Design: Orbit-style animation with four icons moving around center, color-coded dimensions

**Screen 4 - The North Star**:
- Headline: "Our shared intention: To help you truly vibe-up your frequency."
- Body: "Every reflection, connection, and choice here is designed to elevate your connection with Source, Self, Other, and Planet. You're not just joining a platform—you're joining a movement toward collective wellbeing."
- CTA: "I am ready to create my VIBEUP Profile"
- Design: VIBEUP symbol pulsing, wave animation representing frequency

**▶ 1. Complete Profile Prompt**
- At the end of initial account creation onboarding (after 4-screen introduction), users see a prominent prompt that invites them to complete their profile for a more customized experience
- If they don't choose the prompt, they can go to one of the existing options (Journal, Guide, Chat), and the prompt will remain as an icon on their profile avatar until X% of their profile is complete
- (If they choose the prompt) Users will be brought to their profile

**▶ 2. Profile Organization**

The profile is organized as follows:

1. **Header**
   - User name
   - Profile image
   - Background/banner image
   - @handle (clickable for P2P payments - Epic 1A)
   - Location (City, Country)
   - Number of connections
   - Purpose statement
   - Alignment card (Not visible when viewing self-profile)
   - **Pay Button** (visible when viewing others' profiles - Epic 1A integration)
   - **VIBES Balance Badge** (visible on own profile - shows earned VIBES tokens)

2. **Sections: About and Vibes**
   - **Vibes**: Coming Soon
   - **About** (see attribute hierarchy below for all details):
     - About Me
     - Values Section: "What guides me"
     - Intention Section: "Why I'm here"
     - Interests Section: "What I'm Exploring"
     - Skills Section: "What I can give"
     - Energy Style
     - Connection Style
     - Chemistry
     - "More about me": (Other attributes)
       - Gender, Home town, education, work

**▶ 3. Profile Section Completion**
- Users can complete each profile section by **direct edit** (pencil icon) or with **The Guide**
- **Direct edit** allows the user to add tags, choose from lists etc.
- **Guide edit** allows users to enter a conversational path to edit profile attributes with Mira

**▶ 4. Profile Level Completion**
- Completing each level of profile attributes unlocks archetype and personality information, possibly more assessments, etc.
- Different completion thresholds unlock different features and insights

**▶ 5. Profile Section Editing**
- Profile sections need not be completed in order
- If they opt-out at any time, they can come back to the prompt / Edit Profile at any time to add and change selections

**▶ 6. Return to Profile after Section Completed**
- Once a section is completed via The Guide, users will be brought back to the Profile with that section completed
- Profile must be persistently accessible from the main navigation or settings menu

### Success Metrics

- 60%+ users add at least name and image
- 50%+ users proceed to next activity within 5 minutes
- 50%+ users add at least 1 lifestyle interest
- 30%+ users complete Chemistry section
- Profile completion drop-off: <10%
- **New**: 70%+ users rate Mira's profile guidance as "helpful" or "very helpful"

---

## Profile Organization and Attribute Hierarchy

### Attribute Organization Philosophy

At the heart of VIBEUP is the belief that **connection happens when we understand not just what someone does, but what moves them, where they're curious, and how they bring their energy into the world.** To make this both simple for users and powerful for discovery, The Guide organizes profile attributes into three groups:

**What's Guiding You** — the intentions, values, or motivations shaping someone's path right now.
- *How we use it*: Anchors archetype creation and helps the platform suggest connections or practices aligned to someone's deeper "why."

**Where You're Exploring** — the themes, practices, and areas of curiosity a person is drawn to.
- *How we use it*: Provides common ground for social discovery, making it easier to surface like-minded people and relevant content or communities.

**How You Flow** — the way a person expresses and carries their energy (through self-descriptions, astrology insights, or simple vibe cues).
- *How we use it*: Adds nuance to matching, ensuring discovery isn't just about shared interests but about resonance in style and presence.

Together, these three groups form a **living snapshot of identity and intention.** They are easy for users to complete in a guided, gamified flow — yet structured enough for VIBEUP to deliver archetypes, chemistry insights, and meaningful recommendations that feel personal and intentional.

### Profile Attribute Hierarchy

Profiles are organized into three conceptual groups for progressive disclosure:

### 1. What's Guiding You (Motivations & Values)

**Intentions** - Why the user is on VIBEUP:
- Community, Networking, Dating, Like-Minded Connections, Wellness Resources, Promoting My Business
- User selects multiple, one is marked as "Top Intention"
- Top intention displays in profile header

**Values & Drivers** - Core values guiding their path:
- Growth, Connection, Wellbeing, Creativity, Balance, Learning, Presence, Adventure, Responsibility
- User must select exactly 3
- Used heavily for matching algorithm
- [Full list: 124 values in Google Sheets](https://docs.google.com/spreadsheets/d/1-U_sZzFuwIjKHC9fc4UnltivH3p4ZWuj3MXo3pg2wpQ/edit?gid=862976673#gid=862976673)

### 2. Where You're Exploring (Interests & Curiosity)

**Interests** - Organized into 4 categories (user selects up to 12 total):

1. Wellness & Healing: Yoga, Meditation, Nature, Sleep, Nutrition, Breathwork, Energy Work
2. Personal Growth: Mindfulness, Spirituality, Human Rights, Entrepreneurship, Life Coaching
3. Creativity & Expression: Music, Dance, Writing, Visual Arts, Photography, Theater
4. Culture & Lifestyle: Food & Drink, Travel, Reading, Movies, Fashion, Design
5. Play & Recreation: Sports, Hiking, Adventure, Gaming, Outdoor Activities
6. Relationships & Community: Friendship, Parenting, Activism, Volunteering, Mentorship

[Full interest taxonomy in Google Sheets](https://docs.google.com/spreadsheets/d/1-U_sZzFuwIjKHC9fc4UnltivH3p4ZWuj3MXo3pg2wpQ/edit?gid=0#gid=0)

**Skills** - What I Can Give:
- Teaching, Coaching, Healing, Design, Development, Writing, Music, etc.
- Free-form tags or selection from curated list

**About Me** - Free-text bio (500-1000 characters):
- Rich text editor (bold, italic, underline, bullets, links)
- Accepts emojis and basic formatting
- Placeholder guides user to share authentically

### 3. How You Flow (Energy & Vibe)

**Energy Style**:
- Introvert / Extrovert / Ambivert
- Flow / Drive / Nurture / Reflect (energy archetypes)

**Connection Preferences** - How user prefers to connect:
- VIBEUP Messenger, Phone, Video, In-Person, Group Chats, Online Communities, Events, Professional Networking, Mindfulness Circles, Dating
- Multi-select, sets expectations for interactions

**Chemistry Profile** (Advanced/Optional - unlock via birthdate):
- Astrology: Sun, Moon, Rising, North Node, Mercury, Venus
- Human Design: Energy Type (Generator, Manifestor, Projector, Reflector)
- Myers-Briggs: 16 personality types
- Enneagram: Types 1-9
- Ayurveda: Dosha (Vata, Pitta, Kapha)
- Numerology: Life Path Number
- Chinese Zodiac: 12 animals
- Spirit Animal: Archetypal energy

### Additional Attributes

**Basic Details** (optional):
- Gender (Male, Female, Non-Binary, Prefer not to say)
- Age / Birthdate (can hide year in profile)
- Hometown
- Education
- Work (Job Title @ Company)

**Lifestyle & Preferences** (8 categories, multi-select per category):
- Activity Level, Meditation Practice, Diet, Alcohol, Plant Medicine, Tobacco, Communication Style, Sleep Style, Pets
- **Note**: Vaccine Status and Social Media Style have been removed from the platform
- [Full taxonomy in Google Sheets](https://docs.google.com/spreadsheets/d/1-U_sZzFuwIjKHC9fc4UnltivH3p4ZWuj3MXo3pg2wpQ/edit?gid=910896171#gid=910896171)

**Dating Profile** (13 fields, optional - enables Dating tab):
- Looking For, Height, Body Type, Relationship Style, Sexual Orientation, Love Language (Give & Receive), Eye Color, Hair Color, Education Level, Income Range, Home Status
- Plus: **Dating Prompts** (select up to 5 from 32 prompts across 4 categories):

**Dating Prompts - 4 Categories with 32 Total Prompts**:

These fun, colorful, engaging prompts allow members to express their unique personality in ways that spark conversation and connection.

**❤️ Heart & Soul** (Connection · Emotion · Love · Depth)
*How we give and receive love—in flow, feeling, and relationship.*
1. "Being in flow with me feels like…"
2. "I feel most connected when…"
3. "When I'm in love, I…"
4. "An ideal date to me would be…"
5. "How I'd like our relationship to unfold is…"
6. "Love, to me, is a practice of…"
7. "To me, partnership is a path of transformation because…"
8. "I know we'll grow together when…"

**🌞 Purpose & Growth** (Vision · Expansion · Healing · Creation)
*How we evolve individually and together—in purpose, mindset, and growth.*
1. "This year, I really want to…"
2. "We'll thrive together if…"
3. "The dream life I want to create together…"
4. "The kind of partnership I'm calling in is…"
5. "Together, we could co-create…"
6. "A time I followed my intuition and it changed everything…"
7. "Something I'm healing, and something I'm celebrating…"
8. "My dream for partnership and purpose is…"

**🌿 Lifestyle & Wellness** (Presence · Energy · Ritual · Balance)
*How we live, move, and restore—our day-to-day practices and vibe.*
1. "My ideal day of rest and renewal looks like…"
2. "Something that instantly raises my vibration…"
3. "If we shared a mindful meal together, it would include…"
4. "My favorite way to move my body and clear my mind…"
5. "The energy I bring into a relationship…"
6. "The kind of community I'd love to build or be part of…"
7. "My love language (and vibe language) is…"

**🌍 Values & Alignment** (Integrity · Intention · Authenticity · Resonance)
*How we show up in the world—what we stand for, honor, and believe in.*
1. "Core values that I'd like to share are…"
2. "A relationship to me means…"
3. "You'll know we're aligned if we both value…"
4. "To me, conscious connection looks like…"
5. "My sacred boundary that protects my peace…"
6. "The most important lesson I've learned in love…"
7. "The kind of partnership I'm calling in is…"
8. "The dream life I want to create together…"

**UI Layout**: Display these 4 categories as swipeable tabs or soft gradient tiles (Heart • Purpose • Lifestyle • Values).

**Prompt Cards**: Each prompt animates in with a gentle pulse or glow to represent energy resonance.

**Microcopy**: "Choose 3–5 prompts that reflect your truth—how you love, grow, live, and align."

- [Full dating attributes in Google Sheets](https://docs.google.com/spreadsheets/d/1-U_sZzFuwIjKHC9fc4UnltivH3p4ZWuj3MXo3pg2wpQ/edit?gid=910896171#gid=910896171)

### Complete Profile Attribute Table

This table provides comprehensive details on each profile attribute including capture method, suggested values, Mira's guide prompts, and how the platform uses each attribute.

| Group | Attribute | Capture Method | Suggested Values / Options | Guide Prompt (if applicable) | How We Use It |
|-------|-----------|----------------|----------------------------|------------------------------|---------------|
| **Basic Identity** | Name | Onboarding input | Free text | N/A | Identity anchor |
| | Handle | Direct entry | Free text | N/A | Unique identifier |
| | Profile Image | Upload / Camera | N/A | "Want to add a photo so people can recognize your vibe?" | Identity anchor |
| | Location | City + Country | Free text / picker | "Where in the world are you joining us from?" | Contextual matching |
| | Purpose Statement | Direct Entry | Short "headline" that appears near the top of the profile. User can edit. | "What do you feel is your current purpose in the world?" | Contextual matching and can link to Guided Purpose Exercise |
| | Gender | Selection from list | Male, Female, Non-Binary, Would rather not say | N/A | Profile context |
| **What's Guiding You** | Intentions | Tag list | Community, Networking, Dating, Like-Minded Connections, Wellness Resources, Promoting My Business | "What brings you to VIBEUP right now?" | Seeds suggestions & archetype |
| | What's Guiding You (Values / Drivers) | Tag list (choose top 3) | Growth, Connection, Wellbeing, Creativity, Balance, Learning, Presence, Adventure, Responsibility | "What's guiding your path at this moment?" | Core to archetype definition and matchmaking |
| **Where You're Exploring** | About Me | Short text (~500–1000 chars) | Free text | "Want to share a little about yourself?" | Adds richness and personality |
| | Archetype Snapshot | Inferred | Explorer, Nurturer, Visionary, Creator (examples) | N/A | Shared as part of profile card |
| | My Skills ("What I can give") | Quick tag picker | Teaching, Coaching, Healing, Design, etc. | "What skills or gifts can you share with the community?" | Connection matching and value exchange |
| | Exploration Clusters | Quick tag picker by cluster | **Wellness & Healing** (Yoga, Meditation, Nature, Sleep, Nutrition)<br>**Personal Growth** (Mindfulness, Spirituality, Human Rights, Entrepreneurship)<br>**Creativity & Expression** (Music, Dance, Writing, Visual Arts)<br>**Culture & Lifestyle** (Food, Travel, Reading, Movies, Fashion)<br>**Play & Recreation** (Sports, Hiking, Adventure, Gaming)<br>**Relationships & Community** (Friendship, Parenting, Activism, Volunteering) | "Where are you most curious or exploring these days?" | Surfaces content, practices, and shared discovery |
| | Alignment Tags | Inferred / quick pick | Derived from overlapping exploration clusters and guiding values | "Here are a few resonances we see — do these feel true?" | Highlights common ground with others |
| **How You Flow** | Energy Style | Self-ID + optional birth info | Introvert / Extrovert / Ambivert<br>Flow / Drive / Nurture / Reflect<br>Astrology tags (Sun, Moon, Rising etc if birth info given) | "How do you usually flow in the world?" | Powers vibe-matching and chemistry |
| | Ways of Connecting (Connection Preferences) | Tag list | 1:1 Chat, Phone, Video, In-Person, Group Chats, Online Communities, In-Person Events, Professional Networking, Mindfulness Circles, Dating | "What are the ways you'd like to connect with others here?" | Sets expectation for connections |
| | Chemistry Profile (Advanced / Optional) | Guide-led, birth info required | Astrology (Sun, Moon, Rising, Mercury, Venus, North Node) & Human Design<br>Future Assessments: MBTI, Enneagram, Ayurveda | "Want to go deeper? Share your birth details and we'll unlock your astrology and energy insights." | Gamified unlock for deeper resonance |
| **Other Attributes** | Hometown | Enter city/state/country | Free text | N/A | Background context |
| | Education | Name of university or educational institution | Free text | N/A | Background context |
| | Work | Free-text | Job title and company | N/A | Professional context |
| | Current Location | city/state/country | Free text / picker | N/A | Discovery and events |

**Future Version 2:**
- (1) Chemistry ("Coming soon")
  - Reference: [VIBEUP Chemistry Framework Page](https://www.notion.so/27535ae57ba68159baeeed710dff45b9?pvs=25)
  - Tease on the coming soon:
    - "Want to know your VIBEUP Archetype?"
    - Button clicks to popup: "A novel Archetype based on your:
      - Astrology
      - Myers Briggs
      - Human Design energy-type
      - Jungian Archetype"
- (2) Dating-related attributes (Premium feature)
- (3) Professional Experience
- (4) Links to Your Business + Community pages

---

## Account Management Requirements

To build trust, users need to be able to manage basic account options.

**Accessible from**: Profile → Settings

### Main Account Options:

**Edit Profile** (name, image, bio, visibility preferences)
- Handled by profile page itself
- Users can toggle visibility of different profile sections
- Can choose what's public vs. visible only to connections

**Wallet Settings** (Epic 1A Integration):
- View wallet address and @handle
- Display VIBES and USDC balances

**KARMA Recognition Display** (Epic 1B Integration):
- KARMA level badge displayed prominently on profile header (Seedling → Luminary)
- KARMA score breakdown by category (Self, Community, Planetary, Commerce, Content, Platform)
- Recent KARMA actions feed showing what earned recognition
- Badge showcase section highlighting earned achievements
- VIBES multiplier indicator based on KARMA level (e.g., "2x VIBES earning")
- "Karma Journey" timeline view showing progression milestones

**Profile Completion KARMA Awards**:
- Each profile section completed: +25 KARMA
- Achieve VIBEUP Verified badge: +100 KARMA
- Complete Chemistry (birthdate/assessments): +25 KARMA per assessment
- First profile photo: +10 KARMA

**Mira KARMA Awareness**:
- "Your profile is 65% complete. Finishing adds KARMA and helps connections find you."
- "🌟 You've reached Flourishing level! Your profile now shows your 1.25x VIBES multiplier."
- "Adding your Enneagram earns +25 KARMA and unlocks deeper compatibility insights."
- Transaction history with filters
- Payment QR code for receiving payments
- Export wallet keys (for advanced users transitioning to self-custody)
- Connected payment methods (fiat on-ramp)
- Staking dashboard (view active stakes, rewards, unlock dates)
- Set default payment token (USDC or VIBES)
- Enable/disable payment notifications

**Change Email**:
- Flow: Enter current email → New email → Verify via code
- Security: Requires current password confirmation
- Notification: Email sent to both old and new addresses

**Change Password**:
- Requires current password and new password confirmation
- New password must meet security requirements (8+ chars, mix of types)
- All sessions are logged out after password change (except current)

**Forgot Password Flow**:
- Triggered from login screen
- Flow: Enter email → Receive recovery code → Set new password
- Code expires in 15 minutes
- Limited attempts (3 codes per hour)

**Logout**:
- Ends current session and clears local data
- Option: "Logout from all devices"
- Confirms action before executing

**Delete Account**:
- Confirmation modal (irreversible action)
- Requires password re-entry
- Warning: "All your data will be permanently deleted including practices, connections, and messages"
- 30-day grace period option: "Deactivate instead" (can restore within 30 days)
- Hard delete removes all user data from database within 30 days (GDPR compliance)

**Subscription Management** (Future):
- View plan status
- Upgrade/downgrade options
- Cancel subscription
- View billing history
- Update payment method

---

## Database Schema

```sql
-- ============================================================================
-- PROFILE ATTRIBUTES (Flexible Key-Value Storage)
-- ============================================================================

CREATE TABLE profile_attributes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  
  -- Attribute classification
  category TEXT NOT NULL, -- 'values', 'intentions', 'interests', 'skills', 'lifestyle', 'dating', 'chemistry'
  attribute_key TEXT NOT NULL, -- 'growth', 'yoga', 'sun_sign', etc.
  attribute_value TEXT, -- Simple value or JSON for complex data
  
  -- Metadata
  is_primary BOOLEAN DEFAULT false, -- For "Top Intention" or primary values
  is_public BOOLEAN DEFAULT true, -- User can hide sensitive attributes
  display_order INTEGER, -- For ordered lists
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Unique constraint: one attribute per category/key combo per user
  UNIQUE(user_id, category, attribute_key)
);

CREATE INDEX idx_attributes_user_category ON profile_attributes(user_id, category);
CREATE INDEX idx_attributes_public ON profile_attributes(is_public) WHERE is_public = true;

-- ============================================================================
-- CHEMISTRY ASSESSMENTS
-- ============================================================================

CREATE TABLE chemistry_assessments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID UNIQUE NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  
  -- Birth data (required for astrology and human design)
  birth_date DATE,
  birth_time TIME,
  birth_location JSONB, -- { city, country, coordinates, timezone }
  
  -- Astrology (calculated from birth data)
  sun_sign TEXT,
  moon_sign TEXT,
  rising_sign TEXT,
  mercury_sign TEXT,
  venus_sign TEXT,
  north_node_sign TEXT,
  full_chart_data JSONB, -- Complete astrological chart
  
  -- Personality assessments (user-input or quiz results)
  human_design_type TEXT, -- Generator, Manifestor, Projector, Reflector, Manifesting Generator
  myers_briggs_type TEXT, -- INFJ, ENTP, etc. (16 types)
  enneagram_type INTEGER, -- 1-9
  ayurveda_dosha TEXT, -- Vata, Pitta, Kapha, or combinations
  numerology_life_path INTEGER, -- 1-9, 11, 22, 33
  chinese_zodiac TEXT, -- Rat, Ox, Tiger, etc.
  spirit_animal TEXT,
  
  -- Archetype (VIBEUP-specific, calculated from all assessments)
  vibeup_archetype TEXT, -- Explorer, Nurturer, Visionary, Creator, etc.
  archetype_confidence FLOAT, -- 0.0-1.0, how confident we are
  archetype_description TEXT,
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_chemistry_user ON chemistry_assessments(user_id);

-- ============================================================================
-- CONNECTIONS (User-to-User Relationships)
-- ============================================================================

CREATE TYPE connection_status AS ENUM ('pending', 'accepted', 'blocked');

CREATE TABLE connections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Connection participants
  requester_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  addressee_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  
  -- Connection state
  status connection_status DEFAULT 'pending',
  
  -- Metadata
  message TEXT, -- Optional message with connection request
  accepted_at TIMESTAMPTZ,
  blocked_at TIMESTAMPTZ,
  blocked_by UUID REFERENCES profiles(id),
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Constraints
  UNIQUE(requester_id, addressee_id),
  CHECK (requester_id != addressee_id)
);

CREATE INDEX idx_connections_requester ON connections(requester_id, status);
CREATE INDEX idx_connections_addressee ON connections(addressee_id, status);
CREATE INDEX idx_connections_accepted ON connections(accepted_at DESC) WHERE status = 'accepted';

-- ============================================================================
-- PROFILE VIEWS (Who viewed whose profile)
-- ============================================================================

CREATE TABLE profile_views (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Who viewed whom
  viewer_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  viewed_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  
  -- Context
  source TEXT, -- 'discovery', 'search', 'connection_request', 'profile_link'
  
  -- Timestamp
  viewed_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Track unique views per day
  UNIQUE(viewer_id, viewed_id, DATE(viewed_at))
);

CREATE INDEX idx_views_viewed ON profile_views(viewed_id, viewed_at DESC);
CREATE INDEX idx_views_viewer ON profile_views(viewer_id, viewed_at DESC);

-- ============================================================================
-- ROW LEVEL SECURITY
-- ============================================================================

ALTER TABLE profile_attributes ENABLE ROW LEVEL SECURITY;

-- Users can manage their own attributes
CREATE POLICY attributes_select_own ON profile_attributes
  FOR SELECT USING (
    auth.uid() = user_id
    OR (is_public = true) -- Public attributes visible to all
  );

CREATE POLICY attributes_manage_own ON profile_attributes
  FOR ALL USING (auth.uid() = user_id);

ALTER TABLE chemistry_assessments ENABLE ROW LEVEL SECURITY;

-- Chemistry visible to user and their connections
CREATE POLICY chemistry_select_own ON chemistry_assessments
  FOR SELECT USING (
    auth.uid() = user_id
    OR EXISTS (
      SELECT 1 FROM connections
      WHERE status = 'accepted'
      AND ((requester_id = auth.uid() AND addressee_id = user_id)
           OR (addressee_id = auth.uid() AND requester_id = user_id))
    )
  );

CREATE POLICY chemistry_manage_own ON chemistry_assessments
  FOR ALL USING (auth.uid() = user_id);

ALTER TABLE connections ENABLE ROW LEVEL SECURITY;

-- Users can see connections they're involved in
CREATE POLICY connections_select_involved ON connections
  FOR SELECT USING (
    auth.uid() = requester_id OR auth.uid() = addressee_id
  );

-- Users can create connections (send requests)
CREATE POLICY connections_insert_own ON connections
  FOR INSERT WITH CHECK (auth.uid() = requester_id);

-- Users can update connections they're involved in (accept, block)
CREATE POLICY connections_update_involved ON connections
  FOR UPDATE USING (
    auth.uid() = requester_id OR auth.uid() = addressee_id
  );

ALTER TABLE profile_views ENABLE ROW LEVEL SECURITY;

-- Users can insert views when viewing others
CREATE POLICY views_insert_viewer ON profile_views
  FOR INSERT WITH CHECK (auth.uid() = viewer_id OR viewer_id IS NULL);

-- Users can see who viewed their profile
CREATE POLICY views_select_own ON profile_views
  FOR SELECT USING (auth.uid() = viewed_id);
```

---

## Service Layer

```typescript
/**
 * PROFILE SERVICE
 * ===============
 * Manages user profiles, attributes, and chemistry
 */
export class ProfileService extends BaseDatabaseService {
  
  /**
   * Get complete profile with all attributes
   */
  async getProfile(userId: string, viewerId?: string): Promise<CompleteProfile> {
    // Get base profile
    const { data: profile } = await this.supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
    
    // Get attributes
    const { data: attributes } = await this.supabase
      .from('profile_attributes')
      .select('*')
      .eq('user_id', userId)
      .eq('is_public', true); // Only public if viewer is different user
    
    // Get chemistry if available
    const { data: chemistry } = await this.supabase
      .from('chemistry_assessments')
      .select('*')
      .eq('user_id', userId)
      .single();
    
    // Record view if different user
    if (viewerId && viewerId !== userId) {
      await this.recordProfileView(viewerId, userId, 'profile_link');
    }
    
    return {
      ...profile,
      attributes: this.organizeAttributes(attributes || []),
      chemistry: chemistry || null,
      viewCount: await this.getViewCount(userId)
    };
  }
  
  /**
   * Update profile attributes
   */
  async updateAttributes(
    userId: string,
    category: string,
    attributes: Array<{ key: string; value: string; isPrimary?: boolean }>
  ): Promise<void> {
    return this.execute(
      async () => {
        // Upsert attributes
        const records = attributes.map(attr => ({
          user_id: userId,
          category,
          attribute_key: attr.key,
          attribute_value: attr.value,
          is_primary: attr.isPrimary || false
        }));
        
        const { error } = await this.supabase
          .from('profile_attributes')
          .upsert(records, {
            onConflict: 'user_id,category,attribute_key'
          });
        
        if (error) throw error;
        
        // Recalculate profile completion
        await this.updateProfileCompletion(userId);
      },
      { service: 'ProfileService', method: 'updateAttributes', userId }
    );
  }
  
  /**
   * Calculate profile completion percentage
   */
  async updateProfileCompletion(userId: string): Promise<number> {
    const { data: attributes } = await this.supabase
      .from('profile_attributes')
      .select('category')
      .eq('user_id', userId);
    
    const { data: profile } = await this.supabase
      .from('profiles')
      .select('display_name, handle, location')
      .eq('id', userId)
      .single();
    
    const { data: chemistry } = await this.supabase
      .from('chemistry_assessments')
      .select('id')
      .eq('user_id', userId)
      .single();
    
    // Calculate completion (weighted)
    let completion = 0;
    
    // Basic info (30%)
    if (profile?.display_name) completion += 10;
    if (profile?.handle) completion += 10;
    if (profile?.location) completion += 10;
    
    // Attributes (50%)
    const categories = new Set(attributes?.map(a => a.category) || []);
    if (categories.has('values')) completion += 15; // Required
    if (categories.has('intentions')) completion += 10;
    if (categories.has('interests')) completion += 15;
    if (categories.has('skills')) completion += 5;
    if (categories.has('lifestyle')) completion += 5;
    
    // Chemistry (20%)
    if (chemistry) completion += 20;
    
    // Update profile
    await this.supabase
      .from('profiles')
      .update({ profile_completion_percent: completion })
      .eq('id', userId);
    
    return completion;
  }
  
  /**
   * Save chemistry assessment
   */
  async saveChemistry(userId: string, chemistryData: ChemistryInput): Promise<void> {
    // Calculate astrology from birth data
    const astrologyData = await this.calculateAstrology(
      chemistryData.birthDate,
      chemistryData.birthTime,
      chemistryData.birthLocation
    );
    
    // Upsert chemistry
    await this.supabase
      .from('chemistry_assessments')
      .upsert({
        user_id: userId,
        birth_date: chemistryData.birthDate,
        birth_time: chemistryData.birthTime,
        birth_location: chemistryData.birthLocation,
        ...astrologyData,
        human_design_type: chemistryData.humanDesignType,
        myers_briggs_type: chemistryData.myersBriggsType,
        enneagram_type: chemistryData.enneagramType
      }, {
        onConflict: 'user_id'
      });
    
    // Recalculate profile completion
    await this.updateProfileCompletion(userId);
  }
}

/**
 * CONNECTION SERVICE
 * ==================
 * Manages user-to-user connections and relationships
 */
export class ConnectionService extends BaseDatabaseService {
  
  /**
   * Send connection request
   */
  async createConnection(
    requesterId: string,
    addresseeId: string,
    message?: string
  ): Promise<Connection> {
    return this.execute(
      async () => {
        // Check if connection already exists
        const { data: existing } = await this.supabase
          .from('connections')
          .select('*')
          .or(`and(requester_id.eq.${requesterId},addressee_id.eq.${addresseeId}),and(requester_id.eq.${addresseeId},addressee_id.eq.${requesterId})`)
          .single();
        
        if (existing) {
          throw new ConflictError('Connection already exists');
        }
        
        // Create connection request
        const { data, error } = await this.supabase
          .from('connections')
          .insert({
            requester_id: requesterId,
            addressee_id: addresseeId,
            message,
            status: 'pending'
          })
          .select()
          .single();
        
        if (error) throw error;
        
        // Create notification for addressee
        await this.notifyConnectionRequest(addresseeId, requesterId);
        
        return data;
      },
      { service: 'ConnectionService', method: 'createConnection', userId: requesterId }
    );
  }
  
  /**
   * Accept connection request
   */
  async acceptConnection(connectionId: string, userId: string): Promise<void> {
    const { error } = await this.supabase
      .from('connections')
      .update({
        status: 'accepted',
        accepted_at: new Date().toISOString()
      })
      .eq('id', connectionId)
      .eq('addressee_id', userId); // Only addressee can accept
    
    if (error) throw error;
    
    // Notify requester of acceptance
    const { data: connection } = await this.supabase
      .from('connections')
      .select('requester_id')
      .eq('id', connectionId)
      .single();
    
    if (connection) {
      await this.notifyConnectionAccepted(connection.requester_id, userId);
    }
  }
  
  /**
   * Get user's connections
   */
  async getConnections(userId: string, status: 'accepted' | 'pending' | 'all' = 'accepted') {
    let query = this.supabase
      .from('connections')
      .select(`
        *,
        requester:requester_id(id, display_name, handle, location),
        addressee:addressee_id(id, display_name, handle, location)
      `)
      .or(`requester_id.eq.${userId},addressee_id.eq.${userId}`);
    
    if (status !== 'all') {
      query = query.eq('status', status);
    }
    
    const { data } = await query;
    return data || [];
  }
  
  /**
   * Get connection count
   */
  async getConnectionCount(userId: string): Promise<number> {
    const { count } = await this.supabase
      .from('connections')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'accepted')
      .or(`requester_id.eq.${userId},addressee_id.eq.${userId}`);
    
    return count || 0;
  }
}
```

---

## UI Components

### Profile Display Components

```typescript
/**
 * PROFILE HEADER
 * ==============
 * Top section of profile with photo, name, stats
 */
interface ProfileHeaderProps {
  profile: Profile;
  isOwnProfile: boolean;
  onEditClick?: () => void;
  onConnectClick?: () => void;
  onPayClick?: () => void;  // Epic 1A: P2P payment
  walletInfo?: {
    handle: string;
    vibeBalance: number;
    hasWallet: boolean;
  };
}

// Layout:
// - Background image (with gradient overlay for text readability)
// - Profile photo (circular, 120px on mobile, 150px on desktop)
// - Display name
// - @handle (tappable to copy or initiate payment on others' profiles)
// - Handle @username
// - Location (city, country)
// - Profile completion % (if own profile)
// - Stats bar: Connections count | Profile Views | Your Archetype
// - Purpose statement (115 char max, 2 lines)
// - Buttons: Edit Profile (own) or Connect (others)
// - Horizontal scroll: Top Intention | Energy Style | Job @ Company | Education | Hometown | Joined [Month Year]

/**
 * PROFILE TABS
 * ============
 * Tab navigation for profile sections
 */
interface ProfileTabsProps {
  activeTab: 'about' | 'vibes' | 'photos' | 'chemistry' | 'dating';
  onTabChange: (tab: string) => void;
  showDating: boolean; // Only if user has dating profile
}

// Tabs (in order):
// 1. About - Bio, values, interests, lifestyle
// 2. Vibes - User's posts (coming soon teaser)
// 3. Photos - Gallery (up to 9 in 3-column grid, pulls from vibes)
// 4. Chemistry - Assessments and archetypes (with Share button)
// 5. Dating - Dating profile (conditional, with Share button and Hide/Show toggle)

/**
 * ABOUT TAB
 * =========
 * Main profile information
 */
interface AboutTabProps {
  profile: Profile;
  attributes: ProfileAttributes;
}

// Structure:
// 1. Horizontal scroll rows (above bio):
//    - Details: Age, Gender, Relationship Status, Family Status, Ethnicity, etc.
//    - Lifestyle: Activity Level, Meditation, Diet, Alcohol, etc.
// 2. Bio (rich text, can include emojis and links)
// 3. Values & Drivers (3 selected, displayed as badges)
// 4. Intentions: "Why I'm Here" (list)
// 5. Interests: Organized by category with icons
// 6. Skills: "What I Can Give" (badges)
// 7. Connection Preferences: How user likes to connect

/**
 * CHEMISTRY TAB
 * =============
 * Personality assessments and archetypes
 */
interface ChemistryTabProps {
  chemistry: ChemistryAssessment | null;
  onUnlock?: () => void; // If chemistry not yet unlocked
}

// If locked:
// - Teaser: "Unlock Your VIBEUP Archetype"
// - Description: "A novel Archetype based on your:
//   - Astrology
//   - Myers Briggs
//   - Human Design energy-type
//   - Jungian Archetype"
// - CTA: "Take Assessment" → Birthdate/time/location input

// If unlocked:
// 1. **Share Chemistry Button**: Allows users to share chemistry profile directly via VIBEUP Messenger
// 2. Astrology Section (ONE HORIZONTAL BAR - larger design with stars, planets, colors):
//    - Sun | Moon | Rising | North Node | Mercury | Venus
//    - Each card: Symbol, Sign, Short description under each (e.g., "Sun: Core Essence & Identity")
//    - **NEW**: Small dropdown arrow in each card → AI-generated description from Mira
//    - **NEW**: "Learn More" button in dropdown → Opens chat with Mira about this placement
//    - Note "i" icon popup: "This is Western Astrology, Vedic & Babylonian Astrology are coming soon…"
// 3. Personality & Energy (VERTICAL LIST with unique designs per assessment):
//    - Human Design Energy Type (with stars design)
//    - Myers-Briggs Personality (with character illustration)
//    - Enneagram Personality (with number design)
//    - Ayurveda Bio-Energy (with dosha symbols)
//    - Numerology Life Path (with number prominence)
//    - Chinese Zodiac (with animal illustration)
//    - Spirit Animal (with animal image)
//    - Each has short description visible + dropdown arrow for full AI-generated description
//    - Each dropdown has "Learn More" → Opens chat with Mira

/**
 * VIBESS TAB
 * =========
 * User's posts and content
 */
interface VibesTabProps {
  vibes: Vibe[];
  isComingSoon: boolean;
}

// Coming Soon Teaser (for Alpha):
// - Show icon/symbol in tab (little star or lighter font) to indicate "coming soon"
// - Display teaser message:
//   "Introducing VIBESS - your new feed
//   
//   Social media is sick - driven by profit, saturated with ads, censorship, and negative content. 
//   VIBEUP is here to offer you a reimagined, Social Wellness Platform, as a home for the growing 
//   conscious community.
//   
//   Create + Share + Connect + Commune with mindful, intentional users & content.
//   
//   Join us in co-creating a healthier future, today.
//   Coming soon"

// When Active:
// - User's vibes (posts) appear here in chronological order
// - Photos from vibes populate the Photos tab

/**
 * PHOTOS TAB
 * ==========
 * User's photo gallery
 */
interface PhotosTabProps {
  photos: Photo[];
}

// Layout:
// - 3-column grid layout
// - Up to 9 photos maximum
// - Photos automatically pull from user's vibes (posts with images)
// - Clicking photo opens vibe feed showing only vibes with photos
// - Like Instagram/Facebook feed: image + description + comments

/**
 * DATING TAB
 * ==========
 * Dating-specific profile information
 */
interface DatingTabProps {
  datingProfile: DatingProfile;
  onEdit?: () => void;
}

// Only visible if user has filled dating information
// Only activates when dating information is filled in Edit Profile
// Layout:
// - **Share Dating Profile button** at top (allows sharing via VIBEUP Messenger)
// - **Hide/Show Dating Tab toggle** (in user's own view only)
// - "Looking For" (prominent, large text) - dating intention
// - Horizontal bar: Height | Body Type | Relationship Style | Sexual Orientation | Eye Color | Hair Color | Pronouns
// - Love Language visualization (give & receive) - fun, colorful, iconic
// - Dating Prompts (up to 5 cards with user's responses)
// - Less prominent fields at bottom: Education Level | Income Range | Home Status
```

### Profile Editing Components

```typescript
/**
 * EDIT PROFILE PAGE
 * =================
 * Comprehensive profile editing with sections
 */
interface EditProfileProps {
  userId: string;
}

// Sections (expandable accordions):
// 1. Basic Information
//    - Handle, Name, Location, Hometown, Job Title, Work Place, Education
//    - Profile photo, Background photo
//    - Purpose statement (with link to Purpose Exercise)
//    - Bio (rich text editor)
// 2. Values & Intentions & Style
//    - Values & Drivers (must select 3)
//    - Top Intention + Additional Intentions
//    - Energy Style
// 3. Gallery Photos
//    - Upload up to 9 photos
//    - Photos pull from Vibes when posted
// 4. Personal Details
//    - Gender, Age, Relationship Status, Family Status, Ethnicity, Political View, Religious View, Languages, Pronouns
// 5. Interests & Explorations
//    - Wellness & Healing, Personal Growth, Creativity & Expression, Culture & Lifestyle, Play & Recreation, Relationships & Community
//    - Select up to 12 total
// 6. Skills
//    - What I Can Give (multi-select tags)
// 7. Lifestyle & Preferences
//    - 8 categories with multi-select options each
// 8. Chemistry & Assessments
//    - Birthdate, time, location
//    - Assessment results (Human Design, Myers-Briggs, etc.)
//    - Links to take assessments
// 9. Astrological Chemistry
//    - Sun, Moon, Rising, North Node, Mercury, Venus
//    - Auto-calculated from birth data
// 10. Dating Profile (MOVED TO BOTTOM)
//     - **Header**: Add toggle button: "Deactivate / Reactivate My Dating Profile" (makes tab disappear/reappear)
//     - **Description text**: "Filling out your dating profile activates it in your VIBEUP profile. The more you complete, the more compatible connections you'll find. All fields include privacy options."
//     - All dating fields (remove redundant duplicate headers)
//     - Height: Slider or Feet (3-7+) and Inches (1-11) select
//     - **Dating Prompts**: "Prompts give users something to respond to. Be fun. Clever. Cute. Serious. Be YOU. Select, complete, and save up to 5 - they'll show in your Dating Profile."
//       - Display 4 categories as swipeable tabs or soft gradient tiles
//       - 32 total prompts across 4 categories (see Dating Prompts section above)
//       - User can select/edit/"hide from profile" up to 5 prompts

/**
 * PROFILE ONBOARDING (4 Intro Screens + 13 Slides)
 * =================================================
 * Guided profile creation flow with philosophical grounding
 */
interface ProfileOnboardingProps {
  userId: string;
  onComplete: () => void;
}

// **4 Philosophical Introduction Screens** (before 13 slides):
// See "User Journey" section above for complete screen specifications
// Purpose: Ground users in VIBEUP's mission and the Four Dimensions framework

// **13 Profile Creation Slides**:
// 1. Add Your Photo, VIBEUP Username (Handle), Location (city autocomplete)
//    - Image cropping available
//    - Header text: "Add Your Photo"
//    - All cities must be searchable/typeable
// 2. Current Purpose (115 char limit), Intentions (select all that apply, mark top one)
//    - Link to Purpose Exercise popup
//    - Top Intention displays in profile header
//    - Additional intentions show in About section
// 3-10. Interests (8 slides for 6 categories, select up to 12 total)
//    - Wellness & Healing
//    - Personal Growth
//    - Creativity & Expression
//    - Culture & Lifestyle
//    - Play & Recreation
//    - Relationships & Community
// 11. Connection Preferences
//    - Change "1:1 Chat" to "VIBEUP Messenger"
//    - Multi-select allowed
// 12. Birth Location, Date, Time (for Chemistry unlock)
//    - City autocomplete or zip code
//    - Toggle: "Hide year & age in my profile" (You can change this later)
//    - Bottom text: "More details = More insights. Time & Location unlocks your VIBEUP Archetype… What's yours?"
// 13. Summary & Confirmation (show ALL selections from all slides)
//    - Longer vertical scroll box to show more content
//    - Allow editing any selection
//    - Must include: Photo, Purpose, Intentions, Interests, Connection Preferences, Birth info
//    - Final screen: "Saving..." (not "Epic 2 complete")
//    - Redirect to filled-out profile

// **Design requirements** (ALL slides with selection options):
// - All options viewable horizontally (text fully readable on phone)
// - All options viewable vertically via scroll with search capability
// - Number of options available per category displayed (e.g., "124 total available")
// - Selection box visible immediately (no page jump when selecting)
// - Different color per category (Lifestyle vs Interests vs Chemistry vs Dating)
// - Can select up to 12 interests total across all categories

// **Text Input Requirements**:
// - Purpose Statement: 115 character limit (including spaces and punctuation)
// - Bio: Rich text editor with formatting options (bold, italic, underline, bullets, emojis, links)
// - Bio placeholder: "Use your bio to share your life, intentions, interests, & add quick links to your social, website, and anything else."
// - City autocomplete: Pull all cities AND allow manual typing
```

---

## API Contracts

```typescript
/**
 * GET /api/profile/:userId
 * =========================
 * Get user profile (public view or own profile)
 */
interface ProfileResponse {
  success: boolean;
  profile: {
    id: string;
    display_name: string;
    handle: string;
    location: { city: string; country: string };
    purpose_statement?: string;
    bio?: string;
    profile_completion_percent: number;
    view_count: number;
    connection_count: number;
    created_at: string;
    
    attributes: {
      values: string[]; // 3 selected values
      intentions: string[]; // All intentions, first is "top"
      interests: string[]; // Up to 12 interests
      skills: string[];
      lifestyle: Record<string, string[]>; // Category -> values
    };
    
    chemistry?: {
      sun_sign: string;
      moon_sign: string;
      rising_sign: string;
      human_design_type: string;
      myers_briggs_type: string;
      vibeup_archetype: string;
      // Full chemistry only visible to connections
    };
  };
}

/**
 * PUT /api/profile
 * ================
 * Update own profile
 */
interface UpdateProfileRequest {
  display_name?: string;
  handle?: string;
  location?: { city: string; country: string };
  purpose_statement?: string; // Max 115 chars
  bio?: string; // Max 1000 chars, rich text
}

interface UpdateProfileResponse {
  success: boolean;
  profile?: Profile;
  error?: string;
}

/**
 * POST /api/profile/attributes
 * ============================
 * Update profile attributes
 */
interface UpdateAttributesRequest {
  category: 'values' | 'intentions' | 'interests' | 'skills' | 'lifestyle' | 'dating';
  attributes: Array<{
    key: string;
    value: string;
    isPrimary?: boolean;
  }>;
}

/**
 * POST /api/profile/chemistry
 * ===========================
 * Save chemistry assessment
 */
interface SaveChemistryRequest {
  birthDate: string; // ISO date
  birthTime: string; // HH:MM format
  birthLocation: {
    city: string;
    country: string;
    coordinates: [number, number];
    timezone: string;
  };
  
  // User-input assessments
  humanDesignType?: string;
  myersBriggsType?: string;
  enneagramType?: number;
}

/**
 * POST /api/connections
 * =====================
 * Create connection request
 */
interface CreateConnectionRequest {
  addresseeId: string;
  message?: string; // Optional message with request
}

interface CreateConnectionResponse {
  success: boolean;
  connection?: Connection;
  error?: string;
}

/**
 * PUT /api/connections/:id/accept
 * ================================
 * Accept connection request
 */
interface AcceptConnectionResponse {
  success: boolean;
}

/**
 * GET /api/connections
 * ====================
 * Get user's connections
 */
interface ConnectionsResponse {
  success: boolean;
  connections: Array<{
    id: string;
    status: 'pending' | 'accepted';
    user: Profile; // The other user in the connection
    created_at: string;
    accepted_at?: string;
  }>;
}
```

---

## Feature Flags

```typescript
export const EPIC_02_FLAGS = {
  // Core profile features
  'profile_creation': {
    enabled: true,
    description: 'User can create and edit profiles',
    rollout: 100
  },
  'profile_onboarding_13_slides': {
    enabled: true,
    description: '13-slide guided profile creation',
    rollout: 100
  },
  
  // Chemistry features
  'chemistry_unlock': {
    enabled: true,
    description: 'Users can unlock Chemistry section',
    rollout: 100
  },
  'chemistry_astrology': {
    enabled: true,
    description: 'Astrology calculations from birth data',
    rollout: 100
  },
  'chemistry_assessments': {
    enabled: false,
    description: 'Beta: Myers-Briggs, Enneagram, etc.',
    rollout: 0
  },
  
  // Connection features
  'connections_enabled': {
    enabled: true,
    description: 'Users can connect with each other',
    rollout: 100
  },
  'connection_requests': {
    enabled: true,
    description: 'Pending connections before acceptance',
    rollout: 100
  },
  
  // Dating features
  'dating_profiles': {
    enabled: false,
    description: 'Dating profile tab and attributes',
    rollout: 0
  },
  'dating_prompts': {
    enabled: false,
    description: 'Fun prompt-response cards for dating',
    rollout: 0
  },
  
  // Advanced features
  'profile_views_tracking': {
    enabled: true,
    description: 'Track who viewed whose profile',
    rollout: 100
  },
  'vibeup_verified_badge': {
    enabled: true,
    description: 'Badge for completing profile',
    rollout: 100
  }
};
```

---

## Admin Controls

### Profile Management

**Page**: `/admin/users`

**Features**:
- Search users by name, email, handle
- Filter by: profile completion %, role, active status, verification
- View complete profile (including private attributes)
- Edit user profile (moderation)
- View user activity (logins, practices, connections)
- Manage user roles (promote to admin, moderator)
- Suspend/unsuspend accounts
- Delete accounts (with confirmation)
- Export user data (GDPR compliance)

### Chemistry Management

**Page**: `/admin/chemistry`

**Features**:
- View chemistry completion rates
- Approve/reject custom astrology interpretations
- Configure assessment options (Myers-Briggs types, etc.)
- View archetype distribution
- Export chemistry data for analysis

---

## Proposed Tasks for Development

These are the key development priorities for Epic 2, organized sequentially:

### 1. Data Model & API
- Create schema for profile table with primary attributes
- Support inferred vs explicit fields (nullable where optional)
- Add endpoints for creating/updating profiles with all attribute types
- Implement flexible profile_attributes table for extensibility
- Add chemistry_assessments table with birth data support

### 2. Onboarding Integration
- Map onboarding responses to profile attributes
- Ensure Spirit Guide (Mira) flow passes data to profile service
- Implement profile completion prompt at end of onboarding
- Create seamless handoff from onboarding to profile completion

### 3. Profile Completion UI
- Design and implement lightweight profile completion screen with all sections
- Display auto-filled fields from onboarding
- Allow editing and expanding of any section
- Include optional prompts for image, bio, and additional attributes
- Implement both "Direct Edit" (pencil icon) and "Guide Edit" (conversational with Mira) modes

### 4. Archetype Logic (Basic + Future Prep)
- Implement rule-based archetype assignment from onboarding data
- Create foundation for future enrichment with Chemistry section
- Prepare for initial "Chemistry" based on birthdate + time + location (Astrology + Human Design)
- Plan for future assessments: Myers-Briggs, Enneagram alignment, Ayurveda, etc.

### 5. Navigation & Handoff
- After profile completion, route user to next experience (Practice or Discovery)
- Implement profile persistence icon/prompt if user skips completion
- Make profile persistently accessible from main navigation or settings menu
- Create smooth transitions between profile sections

### 6. Analytics & Metrics
- Track profile completion rate by section
- Monitor image upload rate
- Track drop-off points in profile flow
- Enable A/B testing for handoff path (Practice vs Social Discovery)
- Monitor Mira interaction effectiveness in profile completion

---

## Appendix & Supporting Notes

### External References

**Chemistry Framework**: [VIBEUP Chemistry Framework & Proposed Archetypes](https://www.notion.so/27535ae57ba68159baeeed710dff45b9)

**Full Attribute Lists**:
- [Values List (124 values)](https://docs.google.com/spreadsheets/d/1-U_sZzFuwIjKHC9fc4UnltivH3p4ZWuj3MXo3pg2wpQ/edit?gid=862976673#gid=862976673)
- [Interests & Connection Styles](https://docs.google.com/spreadsheets/d/1-U_sZzFuwIjKHC9fc4UnltivH3p4ZWuj3MXo3pg2wpQ/edit?gid=0#gid=0)
- [Lifestyle, Details & Dating Attributes](https://docs.google.com/spreadsheets/d/1-U_sZzFuwIjKHC9fc4UnltivH3p4ZWuj3MXo3pg2wpQ/edit?gid=910896171#gid=910896171)

### Profile Design Mockups

**Figma Reference**: [Design mockups and prototypes for profile UI]

**Current Prototype**: [Live prototype example](https://www.wevibeup.com/copy-of-humans-1/ncourchesne20273y5h7q)

---

## Implementation Checklist

### Backend (Test-Driven)

- [ ] Write ProfileService test suite
- [ ] Implement ProfileService
- [ ] Write ConnectionService test suite
- [ ] Implement ConnectionService
- [ ] Write ChemistryService for astrology calculations
- [ ] Implement chemistry calculation logic
- [ ] Write profile API route tests
- [ ] Implement profile endpoints
- [ ] Write connection API route tests
- [ ] Implement connection endpoints
- [ ] Create all database migrations
- [ ] Test RLS policies thoroughly
- [ ] Add Sentry tracking
- [ ] Add logging
- [ ] Performance test matching algorithms

### Frontend (Test-Driven)

- [ ] Write ProfileHeader tests
- [ ] Implement ProfileHeader with responsive design
- [ ] Write ProfileTabs tests
- [ ] Implement ProfileTabs
- [ ] Write AboutTab tests
- [ ] Implement AboutTab with all sections
- [ ] Write ChemistryTab tests
- [ ] Implement ChemistryTab with unlock flow
- [ ] Write DatingTab tests
- [ ] Implement DatingTab
- [ ] Write EditProfile tests
- [ ] Implement EditProfile with all 10 sections
- [ ] Write ProfileOnboarding tests (13 slides)
- [ ] Implement ProfileOnboarding flow
- [ ] Test mobile responsiveness
- [ ] Test all interactive elements
- [ ] Verify design system compliance

---

## Conscious Development Approach

**Divine Guide**: **Sophia** (Divine Wisdom) leads Epic 02 development—architecture and database design as sacred geometry.

### Sophia's Guidance for Profile Architecture

Epic 02 is about self-knowing manifesting as data. Profile schema is sacred geometry—the structure that holds human complexity, enables discovery, and facilitates authentic connection.

**Development Practices**:

1. **Database as Sacred Structure**:
   - Each table is an archetype (profiles, chemistry_profiles, dating_preferences)
   - Relationships mirror reality (one profile, many practices, many connections)
   - Normalization for clarity (separate concerns cleanly)
   - Strategic denormalization for performance (computed fields cached thoughtfully)
   - RLS policies as consciousness boundaries (privacy through awareness)

2. **Conscious Commit Examples**:
   ```
   🔯 Design chemistry profile schema as sacred compatibility geometry
   
   Intention: Enable depth-based matching beyond interests through
   astrological, Human Design, and Enneagram compatibility patterns.
   
   Mantra: Structure reveals alignment.
   
   Dedication: To Sophia's wisdom of sacred database geometry.
   
   Gratitude: For the insight that compatibility is multi-dimensional,
   not single-scored.
   ```

3. **Architecture Meditation**:
   - Before designing schema, see the whole system
   - How do profiles connect to practices? (user_id foreign key)
   - How do profiles enable discovery? (public vs. private fields)
   - How do profiles grow? (progressive disclosure, not all-at-once)
   - Let structure emerge from understanding, not force from assumption

4. **Testing Sacred Structure**:
   - Test all CRUD operations (Arjuna guards data integrity)
   - Test RLS policies thoroughly (privacy is sacred)
   - Test progressive disclosure flow (70% unlock chemistry)
   - Test computation caching (performance without complexity)
   - Test profile completion calculation (accurate reflection)

**Sophia's Questions for This Epic**:
- Does this schema honor human complexity without becoming complicated?
- Do these relationships mirror natural connections?
- Will this architecture support 100K users? 1M users?
- Can users understand their own data structure?
- Does progressive disclosure feel natural or forced?

**Sacred Patterns in Epic 02**:

```
Core Profile (Foundation):
  - Identity (display_name, email, phone)
  - Self-expression (bio, tagline, profile_photo)
  - Essence (intentions, values, interests)
  
Extended Profile (Depth):
  - Chemistry (astrology, Human Design, Enneagram)
  - Dating (preferences, relationship goals)
  - Professional (skills, certifications, services)
  
Computed Profile (Intelligence):
  - Completion percentage (clarity metric)
  - Last seen (presence awareness)
  - Verification status (trust signal)
  - Alignment scores (cached for performance)
```

Each layer serves a purpose. Each field has meaning. Each relationship enables connection.
This is database as temple architecture.

**Invocation**:
```bash
/personality-change sophia

# Sophia reviews schema with sacred geometry lens
> Review the chemistry profile database schema
> How should profiles and connections integrate?
> Is this denormalization serving performance without sacrificing clarity?
```

---

**Related Documents**:
- [`epic-01-mira.md`](epic-01-mira.md) - Mira seeds profile data
- [`epic-04-discovery.md`](epic-04-discovery.md) - Uses profiles for matching
- [`data-models.md`](../architecture/data-models.md) - Complete schema details

