# Epic 07: Community - Constellations & Groups

**Epic ID**: EPIC-07-COMMUNITY  
**Priority**: P1 (Engagement & retention)  
**Timeline**: 2-3 weeks  
**Dependencies**: Epic 0, 1, 2, 4, 6

> **Onyx Design System**: Community UI uses dark mode palette from `design-system-v2/tokens/`.
> See `components/CommunityComponents.tsx` for CommunityHeader, CommunityPostCard, CommunityTabs implementations.

---

## Vision & Objectives

Help members create, discover, and participate in soul-aligned communities that reflect their values and interests. Foster ongoing engagement and group identity to increase retention and platform growth. **Mira serves as community facilitator**, recommending perfect-fit communities, prompting engagement, nurturing participation, and helping moderators build thriving groups. Communities become vibrant spaces for connection through Mira's intelligent facilitation.

### What This Epic Delivers (Mira-Enhanced)

1. **Community Profiles**: Both humans and businesses can create communities—**Mira guides creation and optimization**
   - Human communities use the same Business Profile template structure as their "About" section
   - Business communities integrate with their Business Profile and can create multiple communities (Premium feature)
   - Each community has its own name, access level, and member management
2. **Vibes Feed**: Community posts and content sharing—**Mira prompts contribution and surfaces relevant content**
3. **Member Directory**: See and connect with community members—**Mira suggests member connections**
4. **Moderation Tools**: Owners assign moderators and manage content—**Mira assists with community health**
5. **Access Levels**: Public (searchable + join freely), Semi-Private (searchable but request required), Private (invitation only)—**Mira explains options and recommends settings**
6. **Community Transformation**: Human communities can be transformed into Business Profiles—**Mira guides this transition**
7. **Recommended Practices**: Each community can curate practice stacks for members—**Mira suggests practices to add**

### Mira's Role as Community Facilitator

**Community Discovery & Matching**:
- "Based on your values of Growth and Creativity, I think the Conscious Creators community would resonate. They host weekly virtual gatherings."
- "There's an active Mindfulness community in San Francisco with 47 members. 5 of your connections are already members!"
- "Your interest in Personal Growth and Spirituality suggests these 3 communities might feel like home..."
- "This community's purpose aligns perfectly with your top intention: Connection through authentic relating."

**Join Decision Support**:
- "This community has 127 members, posts daily, and hosts monthly virtual events. Active and engaged!"
- "Semi-private means you can see posts, but only members can comment. Want the access?"
- "The community creator shares your Enneagram type and practices similar meditations. Natural alignment!"

**Engagement Prompts & Participation**:
- "The Conscious Living community posted a question about morning routines. Your meditation practice might inspire others!"
- "It's been 2 weeks since you last engaged in this community. Want to check in with a post?"
- "Your community has a virtual gathering tonight at 7 PM. Interested in joining?"
- "3 members just joined your community! Want to welcome them with a post?"

**Content Suggestions**:
- "Your recent practice milestone (21-day streak) would inspire your community. Want to share?"
- "Members are discussing Plant Medicine—a topic you listed in interests. Join the conversation?"
- "This community values vulnerable sharing. Your recent reflection note would resonate beautifully here."

**Community Journey Facilitation**:
- "Your Meditation community is starting a 21-day practice journey. Join to practice together?"
- "Day 7 of 21—you're doing great! 14 other members are also showing up consistently."
- "Your journey completion rate is 85%—among the highest in the community. You're leading by example!"

**Member Connection**:
- "Sarah just joined your community and shares your interest in Sound Healing. Send a welcome message?"
- "You and Alex are both active in this community and have 82% overall alignment. Consider connecting?"
- "Your community has 5 members within 3 miles of you. Want to organize a local meetup?"

**Moderation Support (For Community Leaders)**:
- "Your post received 12 reactions—highest engagement this week! Members love authentic vulnerability."
- "Community growth: 8 new members this month. Engagement is up 40%. You're creating something special."
- "Consider pinning your community guidelines post. New members benefit from clear expectations."
- "This member has been inactive 30 days. A personal check-in message might re-engage them."

**Community Health Insights**:
- "Your community posts daily but comments are low. Try asking more questions to spark discussion?"
- "47% of members have posted this month—healthy engagement! Consider recognizing active contributors."
- "New member onboarding: Welcome posts get 3x more replies. Help newcomers feel seen."

**Creation Guidance (For Community Founders)**:
- "What's your community's purpose? Clear intention attracts aligned members."
- "Public communities grow faster. Semi-private creates intimacy. Which feels right?"
- "Welcome messages set the tone. Make yours warm, specific, and values-driven."
- "Your first 10 members are critical. Invite people you trust to establish culture."

**Vibe Feed Curation**:
- "This post from your community received 24 reactions. Members are connecting deeply."
- "Your community's most engaged topics: Meditation practices, Personal growth, Vulnerability. Create more of what resonates!"
- "Cross-community discovery: This post from Conscious Entrepreneurs might interest your community members."

**Event Facilitation**:
- "Your community's virtual gathering starts in 1 hour. Ready to join?"
- "Sarah, Alex, and Maya confirmed attendance. 12 members total—great turnout!"
- "Post-event check-in: How was the gathering? Gathering feedback helps improve future events."

**Values Alignment**:
- "This community practices what VIBEUP stands for: Authentic connection, vulnerable sharing, mutual support."
- "Your community moderator explicitly welcomes all identities and backgrounds. Safe space confirmed."
- "Community guidelines emphasize respect, curiosity, and non-judgment. Aligned with your values."

---

**Brand Identity**: This epic's implementation follows [brand identity guidelines](../brand/):
- **Visual**: Community cards follow [visual identity standards](../brand/01-visual-identity.md) - spacious, breathable design emphasizing intentional belonging
- **Copy**: All messaging uses [brand voice guidelines](../brand/03-brand-voice-messaging.md) - warm, inclusive, depth over volume
- **Mira**: AI interactions embody [Mira's personality](../brand/04-mira-personality-guide.md) as community facilitator
- **Integration**: See [brand-identity-integration.md](brand-identity-integration.md#epic-07-community-constellations) for Epic 07 specific requirements

**Key Brand Touchpoints**:
- Community join prompts inviting ("Find your people here" not "Join Community")
- Empty states supportive ("Be the first to share something meaningful" not "0 posts")
- Event invitations warm and inclusive
- Post feeds prioritize depth over volume (quality engagement visible)
- Moderation framed as compassionate boundaries, not enforcement

---

### Success Metrics

**Profile & Creation**:
- 40%+ of businesses create communities (Mira's guidance)
- 60%+ community profile fields completed
- 50%+ add at least name, image, and description
- 30%+ proceed to member invitations within 5 minutes of creation

**Engagement & Retention**:
- 50%+ of community members post monthly (Mira's prompts)
- 60%+ member retention in communities (Mira's engagement)
- 30%+ users join at least 1 community (Mira's recommendations)
- Drop-off during community creation <10%

**Mira-Specific**:
- 70%+ users join communities Mira recommends vs 20% organic discovery
- Communities with Mira-facilitated engagement show 2.5x higher activity
- 80%+ community creators rate Mira's guidance as "helpful" during setup

---

## User Journey & Onboarding Flow

### Discovery Points for Community Creation

**1. During Account Creation Onboarding**:
- If users select "Grow My Business" or "Networking" as an intention, after creating their Human Profile, they are prompted to create a Business Profile
- Prompt includes: "Want to Create a Community for Your Business? Create a Business Profile First"
- **Mira's role**: "Communities help you gather aligned people around shared values. Ready to start building yours?"

**2. Within Account Settings**:
- Users can access "Create a Business Profile and Community" from Settings at any time
- **Mira's role**: "I notice you're interested in community building. Let's start by creating your profile foundation."

**3. While Exploring Other Communities**:
- Call-to-action appears: "Create your own Business or Community"
- **Mira's role**: "Inspired by what you're seeing? You can create your own community. I'll guide you through it."

**4. After Profile Completion**:
- Once Human profile is created, users see prompt: "Want to Create a Community?"
- **Mira's role**: "Your profile is complete! Ready to gather your people? Let's create a community where your values come alive."

### Community Creation Flow

**Step 1: Choose Community Type**

Users must confirm whether they are creating:
- **Human Community**: Linked to their personal profile, using Business Profile template structure
- **Business Community**: Requires Business Profile creation first

**Mira's guidance**:
- "Are you creating this community as yourself, or for a business you run?"
- "Human communities are perfect for gathering friends, interest groups, or local meetups."
- "Business communities help you serve customers, host events, and build brand loyalty."

**Step 2A: For Human Communities**

1. **Complete Community Profile (Using Business Profile Template)**:
   - Users complete the same Business Profile structure which becomes their Community "About" section
   - This creates consistency across all community types on the platform
   
2. **Community Profile Structure**:
   
   **Header Section**:
   - Community name (required)
   - Community image (recommended)
   - Short description (140 characters)
   - Handle (@communityname)
   - Location (City, Country or "Online")
   - Stats: # of total members | # of total vibes (posts)
   
   **Body Section** (About Tab):
   - "Connect" button to join the community
   - "Community Managed by" (links to human profile)
   - Community Purpose statement
   - Service Tags (themes of the community)
   - Alignment card (shown to non-members based on compatibility)
   - Recommended Practices (curated by community admin)
   - About section (full description)
   - Welcome Message (shown to new members upon joining)
   - Community Guidelines (rules and expectations)
   - Connection Prompts (conversation starters to spark engagement)
   - Social Links | Contact Info | Location
   
3. **Tab Navigation**:
   - Tabs displayed: **VIBES | MEMBERS | ABOUT**
   - **First-time visitors (not yet members)**: Automatically shown ABOUT tab first to learn about the community
   - **Existing members**: Automatically shown VIBES tab first for active engagement
   - **Mira's role**: "New to this community? Start with 'About' to understand their purpose. Already a member? Jump into 'Vibes' to see what's happening."

4. **Profile Section Completion Methods**:
   - **Direct Edit**: Click pencil icon or "Edit Profile" to add tags, select from lists, upload images directly
   - **Guide Edit**: Conversational path with Mira to thoughtfully edit profile attributes through prompts
   - **Mira's role**: "Want to add your community values quickly? Use Direct Edit. Need help thinking through your purpose? Try Guide Edit—I'll ask questions to clarify."
   
5. **Progressive Disclosure**:
   - Sections need not be completed in order
   - Users can opt-out at any time and return later via "Edit Profile"
   - Once a section is completed via Guide, users return to the profile with that section filled
   - Profile persistently accessible from settings menu

**Step 2B: For Business Communities**

1. **Create/Link Business Profile First**:
   - If user doesn't have a Business Profile, they must create one following Epic 6 specifications
   - Business Profile serves as the foundation for all communities that business creates
   - **Mira's role**: "To create a business community, we'll first set up your business profile. This becomes your home base for all communities and services."

2. **Activate Community Features**:
   - Once Business Profile exists, businesses can activate communities
   - **Premium businesses** can create **multiple communities** with separate management
   - Each community has its own:
     - Community name
     - Member list and access control (Public, Semi-Private, Private)
     - Vibes (posts) feed
     - Recommended practices
   
3. **Business + Community Profile Structure**:
   
   **Top-Level Tabs**:
   - **ABOUT** (Business Profile)
   - **SERVICES** (Listings: Services, Products, Events, Courses, Properties, Jobs)
   - **[COMMUNITY NAME 1]** → Sub-tabs: VIBES | MEMBERS
   - **[COMMUNITY NAME 2]** → Sub-tabs: VIBES | MEMBERS
   - (Multiple communities for Premium businesses)
   
4. **Individual Community Sections**:
   - Each community shows its name above its VIBES | MEMBERS tabs
   - Brief community-specific description appears on the VIBES tab
   - Members list is unique and contained per community
   - **Mira's role**: "You can create different communities for different audiences. Maybe one for beginners, one for advanced practitioners, and one for local members?"

5. **Access Level Selection** (Per Community):
   - **Public**: Anyone can search, discover, and join freely
   - **Semi-Private**: Searchable in discovery, but join requests must be approved by admin/moderators
   - **Private**: Not searchable, invitation-only, admin must invite and admit members
   - **Mira's role**: "Public communities grow fast. Semi-private builds trust. Private creates exclusivity. Which matches your intention?"

### Community Transformation: Human → Business

**When Applicable**:
- Human community creators who want to professionalize their community
- Users who start a community and later realize it's becoming a business
- Creators who want to monetize or offer services through their community

**Transformation Process**:
1. Human community creator initiates transformation from community settings
2. System prompts user to create a Business Profile
3. Community ownership transfers from Human Profile to newly created Business Profile
4. Human Profile maintains link/affiliation with the Business (as owner/founder)
5. Community structure remains intact (members, posts, settings preserved)
6. Business Profile now appears prominently in the community's "About" section

**Mira's guidance**:
- "Your community has grown! Transforming to a Business Profile unlocks services, events, and monetization. Ready to take that step?"
- "Don't worry—all your members, posts, and community culture stay intact. You're just adding business capabilities."
- "After transformation, your personal profile will still show you as the founder, but the community will live under your new business presence."

**Technical Requirements**:
- One-way transformation (cannot convert back to human community)
- Preserves all community data (members, posts, vibes, reactions)
- Updates `communities.owner_type` from 'human' to 'business'
- Updates `communities.owner_id` to new business ID
- Creates audit log of transformation
- Notifies all community members of the change

### Post-Creation UX Flow

**After Creating Community**:
When a user completes community creation, they should land on their newly created community profile (not back to a list or settings page).

**Why This Matters**:
- Immediate sense of accomplishment
- Easy to view what they just created
- Quick access to edit/refine
- Easy to share on social media
- Clear path to invite first members

**Implementation**:
1. User completes community creation form
2. System creates community in database
3. **Redirect to**: `vibeup.io/us/[community-handle]`
4. **Show Celebration Modal**:
   - "🎉 Your Community is Live!"
   - Brief preview of profile
   - Actions: "Invite Members" | "Edit Profile" | "Share" | "View Community"
5. User can immediately:
   - View their community profile as others will see it
   - Click "Edit Profile" to make changes
   - Click "Share" to share on social media or copy link
   - Click "Invite Members" to send invitations
   - Browse to other parts of app

**Mira's Role**:
- "Congratulations on creating [Community Name]! Your community is now visible to aligned members."
- "Want to invite your first members? Share your community link or invite connections directly."
- "Pro tip: Complete your welcome message and guidelines before inviting members. This sets expectations and builds trust."

---

## Community Features & Functionality

### Moderators & Permissions

**Moderator Roles**:
- **Owner**: Full control—manage settings, assign moderators, delete community
- **Moderator**: Can approve members (semi-private/private), moderate posts (approve/delete), manage reported content
- **Member**: Standard participation—post, comment, react

**Moderator Assignment**:
- Community owners can assign any community member as moderator
- Moderators have access to moderation dashboard
- See Figma boards for moderator UI/UX flows

**Moderator Capabilities**:
- Approve or deny join requests (semi-private/private communities)
- Review and approve/reject posts (if moderation enabled)
- Delete inappropriate posts or comments
- Remove members from community
- Pin important posts to top of feed
- Send community-wide announcements

**Mira's Support for Moderators**:
- "Your community has 5 pending member requests. Want to review them now?"
- "This post received 3 reports. Review the content to decide if it aligns with community guidelines."
- "Consider pinning your welcome post so new members see it first."
- "Community health check: 47% of members posted this month. Engagement is strong!"

### Listings Integration (Business Communities)

**How Listings Appear**:
- Business communities can showcase their **Listings** (Services, Products, Events, Courses, Properties, Jobs)
- Listings appear as horizontal tabs at the top level of the Business Profile, alongside ABOUT
- Each listing type has its own tab with cards displaying offerings
- See Epic 6 for detailed Listing card templates

**Listing Types**:
1. **Services**: Yoga classes, coaching sessions, healing services
2. **Products**: Physical or digital products for sale
3. **Events**: Workshops, retreats, gatherings
4. **Courses**: Educational programs and trainings
5. **Properties**: Physical locations (studios, retreat centers)
6. **Jobs**: Employment opportunities

**Integration Flow**:
```
Business Profile → Top Tabs:
  - ABOUT (Business info)
  - SERVICES (Listing cards)
  - EVENTS (Listing cards)
  - [Community 1] → VIBES | MEMBERS
  - [Community 2] → VIBES | MEMBERS
```

**Mira's Guidance**:
- "Add your first service listing so members know what you offer!"
- "Your upcoming event appears in your community's feed. Members can RSVP directly."
- "Linking services to your community helps members discover what you do. Want to add more?"

### Welcome Messages & Community Guidelines

**Welcome Message**:
- Shown to new members immediately upon joining
- Appears as a modal or prominent banner on first visit to VIBES tab
- Should communicate community purpose, values, and culture
- Recommended length: 2-3 paragraphs
- **Rich Text Editing**: Community owners can format with paragraphs, bold, italics, bullets, links, emojis

**Example Welcome Message** (Mira-suggested template):
```
Welcome to [Community Name]! 🌟

We're a community of [description of members] who gather to [community purpose]. 
This is a space for [values: authentic sharing, mutual support, growth, etc.].

Here's how to get started:
1. Introduce yourself in a post
2. Browse our recommended practices
3. Connect with members who resonate with you

We're so glad you're here. Your voice matters, and this community is richer with you in it.
```

**Community Guidelines**:
- Clear rules and expectations for behavior
- Displayed in ABOUT tab and linked during join flow
- **Agreement Popup**: Members must explicitly agree to guidelines upon joining
  - Modal popup appears immediately after clicking "Join Community"
  - Shows full guidelines with scroll
  - Two buttons: "Agree & Join" or "Cancel"
  - Cannot access community until agreed
- Members must acknowledge guidelines again before their first post
- **Rich Text Editing**: Community owners can format guidelines with proper formatting

**Example Guidelines** (Mira-suggested structure):
```
Community Guidelines

We ask all members to:
✓ Practice respect and kindness
✓ Share authentically and vulnerably
✓ Honor confidentiality (what's shared here, stays here)
✓ Approach with curiosity, not judgment
✓ Celebrate diversity of perspectives and identities

We do not allow:
✗ Hate speech, discrimination, or harassment
✗ Spam, self-promotion without context
✗ Medical advice or diagnosis (wellness guidance is welcome)
✗ Solicitation or pyramid schemes
```

**Mira's Role**:
- "Your welcome message sets the tone. Make it warm, specific, and values-driven."
- "Clear guidelines help members feel safe. Want me to suggest a template?"
- "New members appreciate knowing what's expected. These guidelines feel aligned with your community purpose."

### Reviews Section

**Purpose**:
- Allow members to leave testimonials and feedback about the community
- Build trust and social proof for communities
- Help users decide which communities to join

**Implementation**:
- **Review Limit**: Only 1 review per member
- **Moderation**: Community owner can hide up to 3 reviews maximum
- **Display**: Reviews appear in ABOUT tab, below community description
- **Fields**: Star rating (1-5), review text (500 char limit), reviewer name + profile link
- **Sorting**: Most recent first
- **Mira Integration**: "This community has 24 5-star reviews from members. Strong social proof!"

**Review Form**:
- Available after being member for 7+ days
- Prompt: "Share your experience in this community"
- Optional star rating + text review
- Must follow community guidelines (no hate speech, etc.)

**Moderation Tools** (Community Owners):
- View all reviews
- Hide inappropriate reviews (max 3)
- Report spam/abusive reviews to VIBEUP
- Cannot delete or edit member reviews (only hide)

---

### Search & Filter Within Community

**Purpose**:
- Large communities need internal search to find members and content
- Helps users discover specific posts, topics, or members within a community

**Search Features**:
- **Member Search**: Find community members by name, interests, values
- **Content Search**: Find vibes/posts by keyword, tags, author
- **Filter Options**: Same as Discovery page (date range, post type, etc.)

**Implementation**:
- Search bar at top of VIBES and MEMBERS tabs
- Filters accessible via filter icon next to search
- Results show in same tab (Vibes or Members depending on context)
- **Quick Filters**: Most Active, Recent Joiners, Aligned Members

**Search Scope**:
- **Within VIBES Tab**: Search posts/vibes only
- **Within MEMBERS Tab**: Search members only
- **Global Community Search**: Available from community settings (searches both)

**Mira Integration**:
- "Try searching for 'meditation' to find members who practice daily"
- "Your community has 47 members interested in Plant Medicine. Want to see them?"

---

### Connection Prompts (Engagement Sparkers)

**Purpose**:
- Conversation starters that appear in the community to spark meaningful discussion
- Community admins can create custom prompts or use Mira-suggested prompts
- Displayed prominently in VIBES feed or as pinned posts

**Example Prompts**:
- "What practice shifted your energy this week?"
- "Share a moment when you felt deeply aligned with your purpose."
- "What's one value you won't compromise on, and why?"
- "Introduce yourself: What brought you to this community?"
- "What's your morning routine, and how does it set your day's frequency?"

**Implementation**:
- Stored in `community_prompts` table (or as special vibe type)
- Can be scheduled to appear at intervals
- Members can respond as comments or new posts referencing the prompt

**Mira's Suggestions**:
- "Your community values Growth. Try this prompt: 'What's one area where you're currently growing?'"
- "It's been quiet this week. Want to post an engagement prompt to spark conversation?"
- "Your 'morning routine' prompt got 18 responses! Members love sharing practices."

---

## Database Schema

```sql
CREATE TABLE communities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Ownership
  owner_type TEXT NOT NULL, -- 'human' or 'business'
  owner_id UUID NOT NULL, -- References profiles or businesses
  
  -- Community info
  community_name TEXT NOT NULL,
  handle TEXT UNIQUE NOT NULL,
  short_description TEXT, -- 140 chars, shown in discovery
  description TEXT, -- Full about section
  purpose_statement TEXT, -- Headline describing community purpose
  welcome_message TEXT, -- Shown to new members on join
  community_guidelines TEXT, -- Rules and expectations
  
  -- Access
  access_level TEXT DEFAULT 'public', -- 'public', 'semi_private', 'private'
  
  -- Media
  image_url TEXT,
  
  -- Location
  location JSONB, -- { city, country, coordinates } or "online"
  
  -- Attributes
  service_tags TEXT[], -- Themes/topics of community
  values TEXT[], -- Core values of community
  
  -- Stats
  member_count INTEGER DEFAULT 0,
  post_count INTEGER DEFAULT 0,
  
  -- Recommended practices
  recommended_practice_ids UUID[],
  
  -- Contact
  social_links JSONB,
  contact_email TEXT,
  
  -- Premium features (business communities)
  parent_business_id UUID REFERENCES businesses(id), -- If part of business with multiple communities
  
  -- State
  is_active BOOLEAN DEFAULT true,
  is_transformed BOOLEAN DEFAULT false, -- If transformed from human to business
  transformation_date TIMESTAMPTZ, -- When transformation occurred
  original_owner_id UUID, -- Original human owner before transformation
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- URL: vibeup.io/us/[handle] for human communities
  -- URL: vibeup.io/weare/[business-handle]/[community-handle] for business communities
  CONSTRAINT handle_format CHECK (handle ~ '^[a-z0-9_]{3,30}$')
);

CREATE TABLE community_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  community_id UUID NOT NULL REFERENCES communities(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  
  -- Membership
  role TEXT DEFAULT 'member', -- 'owner', 'moderator', 'member'
  status TEXT DEFAULT 'active', -- 'pending', 'active', 'removed'
  joined_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- State
  is_active BOOLEAN DEFAULT true,
  has_acknowledged_guidelines BOOLEAN DEFAULT false,
  
  UNIQUE(community_id, user_id)
);

CREATE TABLE community_moderators (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  community_id UUID NOT NULL REFERENCES communities(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  
  -- Permissions
  can_approve_members BOOLEAN DEFAULT true,
  can_moderate_posts BOOLEAN DEFAULT true,
  can_remove_members BOOLEAN DEFAULT true,
  can_pin_posts BOOLEAN DEFAULT true,
  
  assigned_at TIMESTAMPTZ DEFAULT NOW(),
  assigned_by UUID REFERENCES profiles(id),
  
  UNIQUE(community_id, user_id)
);

CREATE TABLE community_prompts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  community_id UUID NOT NULL REFERENCES communities(id) ON DELETE CASCADE,
  
  prompt_text TEXT NOT NULL,
  prompt_type TEXT DEFAULT 'discussion', -- 'discussion', 'introduction', 'practice', 'reflection'
  
  -- Scheduling
  is_active BOOLEAN DEFAULT true,
  scheduled_for TIMESTAMPTZ,
  posted_at TIMESTAMPTZ,
  
  -- Engagement
  response_count INTEGER DEFAULT 0,
  
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE vibes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Author
  author_type TEXT NOT NULL, -- 'user', 'business', 'vibeup'
  author_id UUID NOT NULL,
  
  -- Community (optional - can be posted to personal feed or community feed)
  community_id UUID REFERENCES communities(id) ON DELETE CASCADE,
  
  -- Content
  content TEXT NOT NULL,
  media_urls TEXT[],
  
  -- Moderation
  is_moderated BOOLEAN DEFAULT false, -- If post requires approval
  moderation_status TEXT DEFAULT 'approved', -- 'pending', 'approved', 'rejected'
  moderated_by UUID REFERENCES profiles(id),
  moderated_at TIMESTAMPTZ,
  
  -- Pinning (for important community posts)
  is_pinned BOOLEAN DEFAULT false,
  pinned_by UUID REFERENCES profiles(id),
  pinned_at TIMESTAMPTZ,
  
  -- Engagement
  reaction_count INTEGER DEFAULT 0,
  comment_count INTEGER DEFAULT 0,
  share_count INTEGER DEFAULT 0,
  
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE vibe_reactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  vibe_id UUID NOT NULL REFERENCES vibes(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  
  -- Emotion-based reactions (8 emotions)
  emotion TEXT NOT NULL, -- 'inspired', 'grateful', 'peaceful', 'joyful', 'motivated', 'connected', 'curious', 'empowered'
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  
  UNIQUE(vibe_id, user_id) -- One reaction per user per vibe
);

CREATE TABLE vibe_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  vibe_id UUID NOT NULL REFERENCES vibes(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  
  comment_text TEXT NOT NULL,
  
  -- Nesting (for replies to comments)
  parent_comment_id UUID REFERENCES vibe_comments(id) ON DELETE CASCADE,
  
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE community_reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  community_id UUID NOT NULL REFERENCES communities(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  
  -- Review content
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text TEXT CHECK (length(review_text) <= 500),
  
  -- Moderation
  is_hidden BOOLEAN DEFAULT false,
  hidden_by UUID REFERENCES profiles(id), -- Community owner who hid it
  hidden_at TIMESTAMPTZ,
  
  -- Membership requirement (7+ days)
  created_at TIMESTAMPTZ DEFAULT NOW(),
  
  UNIQUE(community_id, user_id), -- One review per member per community
  
  -- Ensure user has been member for 7+ days (enforced in service layer)
  CHECK (created_at >= NOW() - INTERVAL '7 days')
);

ALTER TABLE communities ENABLE ROW LEVEL SECURITY;
ALTER TABLE vibes ENABLE ROW LEVEL SECURITY;

-- Public communities visible to all
CREATE POLICY communities_select_public ON communities
  FOR SELECT USING (access_level = 'public' OR access_level = 'semi_private');

-- Members can view private communities they belong to
CREATE POLICY communities_select_member ON communities
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM community_members
      WHERE community_id = communities.id
      AND user_id = auth.uid()
      AND is_active = true
    )
  );

-- Vibes visible based on community access
CREATE POLICY vibes_select_community_access ON vibes
  FOR SELECT USING (
    community_id IS NULL -- Public vibes
    OR EXISTS (
      SELECT 1 FROM communities c
      LEFT JOIN community_members cm ON c.id = cm.community_id
      WHERE c.id = vibes.community_id
      AND (
        c.access_level = 'public'
        OR (cm.user_id = auth.uid() AND cm.is_active = true)
      )
    )
  );
```

---

## Service Layer

```typescript
/**
 * COMMUNITY SERVICE
 * =================
 */
export class CommunityService extends BaseDatabaseService {
  
  /**
   * Create a new community (human or business-owned)
   */
  async createCommunity(
    ownerId: string,
    ownerType: 'human' | 'business',
    communityData: CreateCommunityInput
  ): Promise<Community> {
    const { data } = await this.supabase
      .from('communities')
      .insert({
        owner_id: ownerId,
        owner_type: ownerType,
        community_name: communityData.name,
        handle: communityData.handle,
        short_description: communityData.shortDescription,
        description: communityData.description,
        purpose_statement: communityData.purposeStatement,
        welcome_message: communityData.welcomeMessage,
        community_guidelines: communityData.guidelines,
        access_level: communityData.accessLevel || 'public',
        location: communityData.location,
        service_tags: communityData.serviceTags,
        values: communityData.values,
        parent_business_id: communityData.parentBusinessId // For multi-community businesses
      })
      .select()
      .single();
    
    // Add owner as member with owner role
    await this.supabase.from('community_members').insert({
      community_id: data!.id,
      user_id: ownerId,
      role: 'owner',
      has_acknowledged_guidelines: true // Owners automatically acknowledge
    });
    
    return data!;
  }
  
  /**
   * Join a community (handles access levels)
   */
  async joinCommunity(
    userId: string, 
    communityId: string,
    accessLevel: 'public' | 'semi_private' | 'private'
  ): Promise<{ status: 'joined' | 'pending' }> {
    // Public: instant join
    // Semi-private/Private: pending approval
    const status = accessLevel === 'public' ? 'active' : 'pending';
    
    await this.supabase.from('community_members').insert({
      community_id: communityId,
      user_id: userId,
      role: 'member',
      status
    });
    
    if (status === 'active') {
      // Increment member count only if immediately joined
      await this.supabase.rpc('increment_community_members', { 
        community_id: communityId 
      });
    }
    
    return { status: status === 'active' ? 'joined' : 'pending' };
  }
  
  /**
   * Approve pending member (moderator action)
   */
  async approveMember(
    communityId: string,
    userId: string,
    moderatorId: string
  ): Promise<void> {
    // Verify moderator has permission
    const { data: moderator } = await this.supabase
      .from('community_moderators')
      .select('can_approve_members')
      .eq('community_id', communityId)
      .eq('user_id', moderatorId)
      .single();
    
    if (!moderator?.can_approve_members) {
      throw new Error('Insufficient permissions to approve members');
    }
    
    // Update member status
    await this.supabase
      .from('community_members')
      .update({ status: 'active' })
      .eq('community_id', communityId)
      .eq('user_id', userId);
    
    // Increment member count
    await this.supabase.rpc('increment_community_members', { 
      community_id: communityId 
    });
  }
  
  /**
   * Assign a moderator to community
   */
  async assignModerator(
    communityId: string,
    userId: string,
    assignedBy: string,
    permissions: ModeratorPermissions
  ): Promise<void> {
    // Verify assigner is owner
    const { data: member } = await this.supabase
      .from('community_members')
      .select('role')
      .eq('community_id', communityId)
      .eq('user_id', assignedBy)
      .single();
    
    if (member?.role !== 'owner') {
      throw new Error('Only community owners can assign moderators');
    }
    
    // Update member role
    await this.supabase
      .from('community_members')
      .update({ role: 'moderator' })
      .eq('community_id', communityId)
      .eq('user_id', userId);
    
    // Add moderator permissions
    await this.supabase.from('community_moderators').insert({
      community_id: communityId,
      user_id: userId,
      assigned_by: assignedBy,
      can_approve_members: permissions.canApproveMembers,
      can_moderate_posts: permissions.canModeratePosts,
      can_remove_members: permissions.canRemoveMembers,
      can_pin_posts: permissions.canPinPosts
    });
  }
  
  /**
   * Transform human community to business community
   */
  async transformCommunityToBusiness(
    communityId: string,
    newBusinessId: string,
    originalOwnerId: string
  ): Promise<Community> {
    // Update community ownership
    const { data } = await this.supabase
      .from('communities')
      .update({
        owner_type: 'business',
        owner_id: newBusinessId,
        is_transformed: true,
        transformation_date: new Date().toISOString(),
        original_owner_id: originalOwnerId
      })
      .eq('id', communityId)
      .select()
      .single();
    
    // Maintain original owner as community moderator
    await this.assignModerator(communityId, originalOwnerId, originalOwnerId, {
      canApproveMembers: true,
      canModeratePosts: true,
      canRemoveMembers: true,
      canPinPosts: true
    });
    
    return data!;
  }
  
  /**
   * Create a vibe (post) in community or personal feed
   */
  async createVibe(
    authorId: string,
    authorType: 'user' | 'business' | 'vibeup',
    content: string,
    communityId?: string,
    mediaUrls?: string[]
  ): Promise<Vibe> {
    // Check if community requires post moderation
    let moderationStatus = 'approved';
    if (communityId) {
      const { data: community } = await this.supabase
        .from('communities')
        .select('requires_post_approval')
        .eq('id', communityId)
        .single();
      
      if (community?.requires_post_approval) {
        moderationStatus = 'pending';
      }
    }
    
    const { data } = await this.supabase
      .from('vibes')
      .insert({
        author_id: authorId,
        author_type: authorType,
        community_id: communityId,
        content,
        media_urls: mediaUrls || [],
        moderation_status: moderationStatus
      })
      .select()
      .single();
    
    return data!;
  }
  
  /**
   * React to a vibe with emotion
   */
  async reactToVibe(
    vibeId: string,
    userId: string,
    emotion: VibeEmotion
  ): Promise<void> {
    // Upsert reaction (update if exists, insert if not)
    await this.supabase
      .from('vibe_reactions')
      .upsert({
        vibe_id: vibeId,
        user_id: userId,
        emotion
      });
    
    // Increment reaction count
    await this.supabase.rpc('increment_vibe_reactions', { vibe_id: vibeId });
  }
  
  /**
   * Pin a post to top of community feed (moderator action)
   */
  async pinVibe(
    vibeId: string,
    communityId: string,
    moderatorId: string
  ): Promise<void> {
    // Verify moderator permission
    const { data: moderator } = await this.supabase
      .from('community_moderators')
      .select('can_pin_posts')
      .eq('community_id', communityId)
      .eq('user_id', moderatorId)
      .single();
    
    if (!moderator?.can_pin_posts) {
      throw new Error('Insufficient permissions to pin posts');
    }
    
    await this.supabase
      .from('vibes')
      .update({
        is_pinned: true,
        pinned_by: moderatorId,
        pinned_at: new Date().toISOString()
      })
      .eq('id', vibeId);
  }
  
  /**
   * Create a review for a community
   */
  async createCommunityReview(
    communityId: string,
    userId: string,
    rating: number,
    reviewText?: string
  ): Promise<CommunityReview> {
    // Check if user has been member for 7+ days
    const { data: membership } = await this.supabase
      .from('community_members')
      .select('joined_at')
      .eq('community_id', communityId)
      .eq('user_id', userId)
      .eq('status', 'active')
      .single();
    
    if (!membership) {
      throw new Error('Must be a community member to leave a review');
    }
    
    const membershipDays = Math.floor(
      (Date.now() - new Date(membership.joined_at).getTime()) / (1000 * 60 * 60 * 24)
    );
    
    if (membershipDays < 7) {
      throw new Error('Must be a member for at least 7 days to leave a review');
    }
    
    // Create review
    const { data } = await this.supabase
      .from('community_reviews')
      .insert({
        community_id: communityId,
        user_id: userId,
        rating,
        review_text: reviewText
      })
      .select()
      .single();
    
    return data!;
  }
  
  /**
   * Hide a community review (owner action)
   */
  async hideCommunityReview(
    reviewId: string,
    communityId: string,
    ownerId: string
  ): Promise<void> {
    // Verify owner
    const { data: community } = await this.supabase
      .from('communities')
      .select('owner_id, owner_type')
      .eq('id', communityId)
      .single();
    
    if (community?.owner_id !== ownerId) {
      throw new Error('Only community owner can hide reviews');
    }
    
    // Check hidden count limit (max 3)
    const { count } = await this.supabase
      .from('community_reviews')
      .select('*', { count: 'exact', head: true })
      .eq('community_id', communityId)
      .eq('is_hidden', true);
    
    if (count && count >= 3) {
      throw new Error('Maximum of 3 reviews can be hidden');
    }
    
    // Hide review
    await this.supabase
      .from('community_reviews')
      .update({
        is_hidden: true,
        hidden_by: ownerId,
        hidden_at: new Date().toISOString()
      })
      .eq('id', reviewId);
  }
  
  /**
   * Search within community (members or vibes)
   */
  async searchCommunity(
    communityId: string,
    searchType: 'members' | 'vibes',
    query: string,
    filters?: SearchFilters
  ): Promise<SearchResults> {
    if (searchType === 'members') {
      // Search members by name, interests, values
      const { data } = await this.supabase
        .from('community_members')
        .select(`
          user:profiles(
            id,
            full_name,
            handle,
            image_url,
            values,
            interests
          )
        `)
        .eq('community_id', communityId)
        .eq('status', 'active')
        .ilike('profiles.full_name', `%${query}%`);
      
      return { results: data || [], type: 'members' };
    } else {
      // Search vibes by content, tags
      const { data } = await this.supabase
        .from('vibes')
        .select('*')
        .eq('community_id', communityId)
        .ilike('content', `%${query}%`)
        .order('created_at', { ascending: false });
      
      return { results: data || [], type: 'vibes' };
    }
  }
}

/**
 * TYPE DEFINITIONS
 * ================
 */
interface CreateCommunityInput {
  name: string;
  handle: string;
  shortDescription?: string;
  description?: string;
  purposeStatement?: string;
  welcomeMessage?: string;
  guidelines?: string;
  accessLevel: 'public' | 'semi_private' | 'private';
  location?: { city: string; country: string } | 'online';
  serviceTags?: string[];
  values?: string[];
  parentBusinessId?: string; // For business with multiple communities
}

interface ModeratorPermissions {
  canApproveMembers: boolean;
  canModeratePosts: boolean;
  canRemoveMembers: boolean;
  canPinPosts: boolean;
}

type VibeEmotion = 
  | 'inspired' 
  | 'grateful' 
  | 'peaceful' 
  | 'joyful' 
  | 'motivated' 
  | 'connected' 
  | 'curious' 
  | 'empowered';
```

---

## API Contracts

```typescript
/**
 * POST /api/communities
 * =====================
 * Create a new community
 */
interface CreateCommunityRequest {
  ownerType: 'human' | 'business';
  name: string;
  handle: string;
  shortDescription?: string;
  description?: string;
  purposeStatement?: string;
  welcomeMessage?: string;
  guidelines?: string;
  accessLevel: 'public' | 'semi_private' | 'private';
  location?: { city: string; country: string } | 'online';
  serviceTags?: string[];
  values?: string[];
  parentBusinessId?: string;
}

interface CreateCommunityResponse {
  community: Community;
  message: string;
}

/**
 * POST /api/communities/:id/join
 * ===============================
 * Join a community
 */
interface JoinCommunityResponse {
  status: 'joined' | 'pending';
  message: string;
}

/**
 * POST /api/communities/:id/transform
 * ====================================
 * Transform human community to business
 */
interface TransformCommunityRequest {
  newBusinessId: string;
}

/**
 * POST /api/communities/:id/moderators
 * =====================================
 * Assign a moderator
 */
interface AssignModeratorRequest {
  userId: string;
  permissions: {
    canApproveMembers: boolean;
    canModeratePosts: boolean;
    canRemoveMembers: boolean;
    canPinPosts: boolean;
  };
}

/**
 * POST /api/vibes
 * ===============
 * Create a vibe (post)
 */
interface CreateVibeRequest {
  content: string;
  communityId?: string;
  mediaUrls?: string[];
}

/**
 * POST /api/vibes/:id/react
 * ==========================
 * React to a vibe
 */
interface ReactToVibeRequest {
  emotion: 'inspired' | 'grateful' | 'peaceful' | 'joyful' | 'motivated' | 'connected' | 'curious' | 'empowered';
}

/**
 * POST /api/communities/:id/reviews
 * ==================================
 * Create a community review
 */
interface CreateReviewRequest {
  rating: number; // 1-5
  reviewText?: string; // Optional, max 500 chars
}

interface CreateReviewResponse {
  review: CommunityReview;
  message: string;
}

/**
 * PATCH /api/communities/:id/reviews/:reviewId/hide
 * ==================================================
 * Hide a community review (owner only)
 */
interface HideReviewResponse {
  message: string;
  hiddenCount: number; // How many reviews are now hidden
}

/**
 * GET /api/communities/:id/search
 * ================================
 * Search within community
 */
interface SearchCommunityRequest {
  type: 'members' | 'vibes';
  query: string;
  filters?: {
    dateRange?: { start: string; end: string };
    interests?: string[];
    values?: string[];
  };
}

interface SearchCommunityResponse {
  results: Member[] | Vibe[];
  count: number;
  type: 'members' | 'vibes';
}
```

---

## UI Components

```typescript
/**
 * COMMUNITY PROFILE
 * =================
 * Similar structure to Business Profile (Epic 6)
 * 
 * Layout:
 * - Header: Name, image, description, handle, location, stats
 * - Join/Connect button
 * - Tabs: VIBES | MEMBERS | ABOUT
 * 
 * Tab Logic:
 * - Non-members or first-time visitors → ABOUT tab default
 * - Existing members → VIBES tab default
 * 
 * ABOUT Tab Contains:
 * - Community Managed By (owner profile link)
 * - Purpose Statement
 * - Service Tags
 * - Alignment Card (for non-members showing compatibility)
 * - Recommended Practices
 * - Full Description (rich text formatted)
 * - Welcome Message preview (rich text formatted)
 * - Community Guidelines (rich text formatted)
 * - Connection Prompts
 * - Reviews Section (star ratings + member testimonials)
 * - Social Links & Contact Info
 * 
 * Rich Text Editing:
 * - Community owners can format About, Welcome Message, and Guidelines
 * - Supports: Bold, Italics, Underline, Bullets, Numbered lists, Links, Emojis
 * - Line breaks and paragraph spacing
 * - Editor appears when owner clicks "Edit Profile"
 */

/**
 * COMMUNITY CREATION SUCCESS MODAL
 * =================================
 * Shown immediately after community creation
 * 
 * Layout:
 * - Celebration emoji/icon (🎉)
 * - Headline: "Your Community is Live!"
 * - Preview card of community profile
 * - Action buttons:
 *   - "Invite Members" (primary)
 *   - "Edit Profile"
 *   - "Share" (social media + copy link)
 *   - "View Community" (dismisses modal)
 * 
 * Mira Message:
 * - Context-aware congratulations
 * - Suggestions for next steps
 * - Tips for growing community
 */

/**
 * VIBES FEED
 * ==========
 * Social content feed (Instagram/Facebook-style)
 * 
 * Features:
 * - Create post (text + media upload, max 6 images)
 * - React with 8 emotions (inspired, grateful, peaceful, joyful, motivated, connected, curious, empowered)
 * - Comment on posts (nested replies supported)
 * - Share posts (to other communities or personal feed)
 * - Filter: "VIBEUP Only" toggle (hide external content)
 * - Pinned posts appear at top
 * - Moderation queue for pending posts (moderators only)
 * 
 * Mira Integration:
 * - Suggests when to post based on engagement patterns
 * - Prompts response to high-engagement posts
 * - Celebrates milestone reactions ("Your post got 50 reactions!")
 */

/**
 * MEMBER DIRECTORY
 * ================
 * Browsable list of community members
 * 
 * Features:
 * - Search members by name
 * - Filter by attributes (values, practices, location)
 * - View member profiles (shows alignment score)
 * - Connect with members (send connection request)
 * - Message members (direct message)
 * - Member count and join dates visible
 * 
 * Mira Integration:
 * - Suggests members to connect with based on alignment
 * - "You and Sarah both practice meditation daily. Consider connecting?"
 */

/**
 * MODERATOR DASHBOARD
 * ===================
 * Available to community owners and moderators
 * 
 * Features:
 * - Pending member requests (approve/deny)
 * - Pending posts (if moderation enabled)
 * - Reported content queue
 * - Community health metrics (engagement, growth, activity)
 * - Pin/unpin posts
 * - Remove members
 * - Assign/remove moderators (owners only)
 * 
 * Mira Integration:
 * - Surfaces actionable insights
 * - Suggests optimal posting times
 * - Identifies at-risk members (inactive, low engagement)
 * - Recommends engagement strategies
 */
```

---

## Account Management Requirements

**Accessible from Profile → Settings**:

- **Edit Community Profile**: Update name, description, images, guidelines
- **Change Access Level**: Switch between Public, Semi-Private, Private (with confirmation modal)
- **Manage Moderators**: Assign/remove moderators, adjust permissions
- **Community Settings**:
  - Enable/disable post moderation
  - Member approval requirements
  - Notification preferences
  - Privacy settings
- **Transfer Ownership**: Transfer community to another user (with confirmation)
- **Delete Community**: Permanent deletion with confirmation modal (irreversible action)
- **Transform to Business** (Human communities only): Initiate transformation flow

**Mira's Guidance**:
- "Changing to Private means only invited members can see your content. Existing members will remain."
- "Transferring ownership is permanent. Make sure you trust the new owner completely."
- "Deleting your community removes all posts and member data. This cannot be undone. Are you certain?"

---

## Feature Flags

```typescript
export const EPIC_07_FLAGS = {
  // Core features
  'communities_enabled': { enabled: false, rollout: 0 },
  'community_creation_human': { enabled: false, rollout: 0 },
  'community_creation_business': { enabled: false, rollout: 0 },
  'community_discovery': { enabled: false, rollout: 0 },
  
  // Vibes (posts)
  'vibes_posting': { enabled: false, rollout: 0 },
  'vibes_reactions': { enabled: false, rollout: 0 },
  'vibes_comments': { enabled: false, rollout: 0 },
  'vibes_sharing': { enabled: false, rollout: 0 },
  
  // Moderation
  'community_moderation': { enabled: false, rollout: 0 },
  'post_moderation': { enabled: false, rollout: 0 },
  'member_approval': { enabled: false, rollout: 0 },
  
  // Advanced features
  'community_transformation': { enabled: false, rollout: 0 },
  'multiple_communities': { enabled: false, rollout: 0 }, // Premium businesses
  'connection_prompts': { enabled: false, rollout: 0 },
  'community_analytics': { enabled: false, rollout: 0 },
  
  // Refresh features
  'community_reviews': { enabled: false, rollout: 0 },
  'community_search': { enabled: false, rollout: 0 },
  'rich_text_editing': { enabled: false, rollout: 0 }
};
```

---

## Proposed Tasks for Development

**1. Data Model & API**:
- Create schema for communities, community_members, vibes, vibe_reactions, moderators
- Add endpoints for creating/updating communities
- Support access level logic (public, semi-private, private)
- Implement moderation workflows

**2. Community Creation Flow**:
- Design and implement community creation wizard
- Map human vs business flows
- Progressive profile completion (similar to human profiles)
- Welcome message and guidelines setup

**3. Vibes Feed**:
- Build social feed component (posts, reactions, comments)
- Implement 8-emotion reaction system
- Add media upload and display
- Create moderation queue UI

**4. Member Management**:
- Member directory with search and filtering
- Join request approval flow
- Moderator assignment and permissions
- Member removal and banning

**5. Community Transformation**:
- Implement transformation wizard (human → business)
- Data migration and ownership transfer
- Maintain original owner as moderator
- Audit logging

**6. Navigation & Integration**:
- Tab navigation (VIBES | MEMBERS | ABOUT)
- Smart default tab selection (member vs non-member)
- Integration with Business Profiles (Epic 6)
- Discovery and recommendation (Epic 4)

**7. Mira Integration**:
- Community recommendations based on values/interests
- Engagement prompts and participation nudges
- Moderator assistance and community health insights
- Member connection suggestions

**8. Analytics & Metrics**:
- Track community creation, completion rate, engagement
- Measure member retention and activity
- Monitor moderation effectiveness
- A/B test community features

---

---

## Testing Strategy

### Unit Tests
- Community service methods (create, join, transform)
- Moderator permission validation
- Access level logic (public, semi-private, private)
- Vibe creation and moderation workflows

### Integration Tests
- Community creation end-to-end
- Join request and approval flow
- Transformation from human to business
- Vibes posting and reactions
- Moderator actions

### E2E Tests (Playwright)
- Complete community creation journey
- Member joining different access levels
- Posting and reacting to vibes
- Moderator assigning and permission testing
- Community discovery and navigation

### Test Coverage Goals
- Service layer: 90%+
- API routes: 85%+
- Components: 75%+

---

## Observability & Monitoring

**Key Metrics to Track**:
- Community creation starts vs completions
- Time to complete community profile
- Member join rate by access level
- Vibes posted per community (daily, weekly)
- Reaction and comment engagement rates
- Moderator action frequency
- Community transformation success rate
- Profile completion percentage

**Sentry Tracking**:
- Community creation errors
- Join request failures
- Moderation action failures
- Vibe posting errors
- Media upload issues

**Analytics Events**:
- `community_created` (owner_type, access_level, completion_percent)
- `community_joined` (access_level, approval_required)
- `vibe_posted` (community_id, has_media, moderation_status)
- `vibe_reacted` (emotion, community_id)
- `moderator_assigned` (permissions)
- `community_transformed` (original_owner_id, new_business_id)

---

## Design References

**Figma Boards**:
- [Human Community Creation](https://www.figma.com/design/sOWyiGHTjRezhqCUS7rWwv/VibeUp-Handoff----Hi-fi?node-id=1-75990&t=ZIRw7Rc3rtyFrQRK-4)
- [Business Community Management](https://www.figma.com/design/sOWyiGHTjRezhqCUS7rWwv/VibeUp-Handoff----Hi-fi?node-id=1-10281&t=ZIRw7Rc3rtyFrQRK-0)
- [Community Sections in Business & Human Boards](https://www.figma.com/design/sOWyiGHTjRezhqCUS7rWwv/VibeUp-Handoff----Hi-fi?node-id=1-10281&t=ZIRw7Rc3rtyFrQRK-0)
- [Hi-fi Designs](https://www.figma.com/design/qhilTwqsznSogRyEcs2Br5/VibeUp----Hi-fi?node-id=456-46699&t=tqBAonA7d6EzCHrw-0)

**Note**: See Figma boards for detailed UI/UX flows including:
- Listing card templates (services, products, events, courses, locations, jobs)
- Community owner permissions and settings
- Member directory layouts
- Vibes feed interaction patterns
- Moderation dashboard designs
- Sharing, polls, and advanced community features

---

## Future Enhancements (Post-MVP)

**Phase 3+ Features**:
- **Community Journeys**: Multi-day guided practice programs for groups
- **Live Events**: Virtual gatherings and meetups with RSVP
- **Polls & Surveys**: Gather community input and feedback
- **Sub-Communities**: Nested communities within parent communities
- **Community Challenges**: Group accountability for practice goals
- **Community Analytics Dashboard**: Deep insights for owners
- **Community Badges**: Gamification for active members
- **Community Marketplace**: Buy/sell/trade within trusted communities
- **Community Donations**: Crowdfunding for community initiatives
- **Community Governance**: Voting on community decisions

---

## Conscious Development Approach

**Divine Guide**: **Kuan Yin** (Divine Compassion) leads Epic 07 development—community features as spaces of healing and collective growth.

### Kuan Yin's Guidance for Community Spaces

Epic 07 is about collective consciousness—communities as containers for shared growth, healing, and transformation. Community features must be built with compassion: welcoming newcomers, supporting members, gracefully handling conflict.

**Development Practices**:

1. **Communities as Healing Spaces**:
   - Onboarding new members with warmth (first post encouraged, not required)
   - Moderation tools compassionate (warnings before bans, clear communication)
   - Conflict resolution supportive (report system that heals, not just punishes)
   - Engagement features inviting (prompts help, don't pressure)
   - Privacy protective (safe spaces require boundaries)

2. **Conscious Commit Examples**:
   ```
   🙏 Implement compassionate community moderation system
   
   Intention: Create moderation tools that maintain safe space while
   treating all members with dignity—warnings before removals, clear
   communication, path to restoration.
   
   Mantra: Boundaries protect with love.
   
   Dedication: To Kuan Yin's compassion in service of healthy community.
   
   Gratitude: To community managers who taught us healing moderation.
   ```

3. **Debugging Community Dynamics**:
   - When engagement low: Understand why (don't force)
   - When conflict arises: See all perspectives (not just reported side)
   - When features fail: Fix with care for disrupted experience
   - When spam appears: Block gently, communicate clearly
   - Legacy features: Honor past while improving for present

4. **Compassionate Code Patterns**:
   ```typescript
   // Moderation as healing practice
   async function moderateContent(contentId: string, action: 'warn' | 'remove') {
     const content = await getContent(contentId);
     const author = await getUser(content.authorId);
     
     if (action === 'warn') {
       // First, communicate with compassion
       await sendWarning(author, {
         content: content,
         reason: 'Community guidelines: {specific guideline}',
         context: 'We value your participation. This helps maintain safe space.',
         nextSteps: 'Edit your post or it will be removed in 24 hours.'
       });
       
       // Give time to respond
       await scheduleRemoval(contentId, hoursFromNow(24));
       
     } else if (action === 'remove') {
       // Remove content but preserve dignity
       await db.content.update(contentId, { 
         status: 'removed',
         removalReason: 'Community guidelines',
         removedBy: 'moderator'
       });
       
       // Inform author kindly
       await notifyAuthor(author, {
         message: 'Your post was removed per community guidelines.',
         reason: '{specific reason}',
         appeal: 'Contact support@vibeup.io if you have questions.'
       });
     }
     
     // Log for transparency
     await auditLog.record('moderation.action', {
       contentId,
       action,
       moderatorId,
       reason
     });
   }
   ```

Each action balances safety with compassion. Communities heal when boundaries are clear and kind.

**Kuan Yin's Wisdom**:
- Bugs in community features create social suffering (fix with care)
- Legacy community code evolved from real needs (honor before changing)
- Engagement issues signal design problems (listen, don't force)
- Conflict features require extra compassion (design for healing)
- Privacy bugs destroy trust (test exhaustively)

**Invocation**:
```bash
/personality-change kuan-yin

# Kuan Yin guides community features with compassion
> How should I implement content moderation with kindness?
> Debug this community engagement drop with curiosity
> Refactor legacy community code with care for existing members
```

---

**Related**: [`epic-06-business.md`](epic-06-business.md), [`epic-08-monetization.md`](epic-08-monetization.md), [`MASTER-PLAN.md`](../MASTER-PLAN.md)

