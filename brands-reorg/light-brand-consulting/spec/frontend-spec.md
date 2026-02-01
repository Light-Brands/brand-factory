# Light Brand Consulting Frontend Specification

> **Transform your business into an AI super intelligence**

## Executive Summary

This specification outlines the phased development of a comprehensive frontend platform for Light Brand Consulting that will evolve from an inbound-focused marketing presence to a fully automated self-service portal. Built on the Onyx Design System (design-system-v2), the platform will progressively integrate with Brand Proposal Agents and Legal Agents to automate consulting workflows.

---

## Strategic Vision

### The Evolution Path

```
Phase 1                    Phase 2                    Phase 3
┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│   ILLUMINATE    │       │    AUTOMATE     │       │   SELF-SERVE    │
│                 │       │                 │       │                 │
│ Inbound Focus   │  →    │ Agent-Powered   │  →    │ Client Portal   │
│ Lead Capture    │       │ Proposals       │       │ Full Autonomy   │
│ Brand Story     │       │ Legal Docs      │       │ Dashboard       │
└─────────────────┘       └─────────────────┘       └─────────────────┘
     Q1 2026                   Q2 2026                   Q3 2026
```

### Core Objectives

1. **Phase 1**: Establish digital presence, capture inbound leads, tell the Light Brand story
2. **Phase 2**: Integrate agents to automate proposal generation and legal document creation
3. **Phase 3**: Enable client self-service with dashboards, booking, and deliverable access

---

## Design Foundation

### Onyx Design System Integration

The frontend will be built exclusively on the Onyx Design System:

```typescript
// Token-first approach
import { colors, typography, spacing, shadows } from '@design-system-v2/tokens';

// Component composition
import {
  Button, Card, Input, Modal,
  Avatar, Tag, Skeleton,
  PageContainer, ErrorContainer
} from '@design-system-v2/components';
```

### Brand Adaptation

Light Brand Consulting uses a **unique Illumination Palette** that differentiates from other brands while maintaining compatibility with the Onyx Design System. Our colors embody the concept of "light emerging from depth" — warm, luminous accents against sophisticated dark backgrounds.

See: `/spec/brand/01-visual-identity.md` for complete color specifications.

#### Primary Palette — Radiance Scale (Accent Colors)

| Token | Hex | Usage | Meaning |
|-------|-----|-------|---------|
| `radiance-gold` | `#E8B84A` | Primary CTAs, illumination moments | Breakthrough insights, clarity |
| `radiance-amber` | `#D4944C` | Hover states, active interactions | Sustained illumination |
| `radiance-warm` | `#C67D4E` | Tertiary accents, gradients | Human warmth, connection |

#### Secondary Palette — Clarity Scale

| Token | Hex | Usage | Meaning |
|-------|-----|-------|---------|
| `clarity-cream` | `#FDF6E3` | Premium highlights, special text | Pure clarity, revelation |
| `clarity-soft` | `#F5E6C8` | Subtle highlights | Soft illumination |
| `clarity-muted` | `#D9C9A5` | Borders, secondary elements | Gentle guidance |

#### Intelligence Palette — Wisdom Scale (AI Features)

| Token | Hex | Usage | Meaning |
|-------|-----|-------|---------|
| `wisdom-violet` | `#8B7EC8` | AI elements, intelligence indicators | Deep insight, AI wisdom |
| `wisdom-soft` | `#A599D4` | Secondary AI accents | Supported intelligence |

#### Background Palette — Depth Scale

| Token | Hex | Usage | Contrast |
|-------|-----|-------|----------|
| `depth-base` | `#0F0E0D` | Page backgrounds | 18.5:1 (AAA) |
| `depth-elevated` | `#151413` | Cards, modals | 16.8:1 (AAA) |
| `depth-surface` | `#1C1A18` | Hover states | 14.6:1 (AAA) |
| `depth-border` | `#2A2724` | Borders, dividers | 10.2:1 (AAA) |

#### Text Palette — Warm Moonlight

| Token | Hex | Usage | Contrast |
|-------|-----|-------|----------|
| `text-primary` | `#F8F5F0` | Headings, primary content | 18.2:1 (AAA) |
| `text-secondary` | `#E5E0D8` | Body text, descriptions | 15.1:1 (AAA) |
| `text-muted` | `#A8A299` | Captions, metadata | 7.8:1 (AA) |

#### Design System Token Mapping

| Onyx Token | Light Brand Token |
|------------|-------------------|
| `aqua-light` | `radiance-gold` |
| `aqua-medium` | `radiance-amber` |
| `teal-light` | `wisdom-violet` |
| `gold-accent` | `clarity-cream` |
| `abyss-base` | `depth-base` |
| `abyss-mystic` | `depth-elevated` |
| `abyss-light` | `depth-surface` |
| `abyss-lighter` | `depth-border` |
| `moonlight` | `text-primary` |
| `moonlight-soft` | `text-secondary` |
| `moonlight-muted` | `text-muted` |

### Typography Hierarchy

```css
/* Hero statements - The Light Brand promise */
.hero-statement {
  @apply text-4xl md:text-6xl font-black tracking-tight text-text-primary;
}

.hero-statement .highlight {
  @apply text-radiance-gold;
}

/* Section headers - Service introductions */
.section-header {
  @apply text-3xl font-bold tracking-tight text-text-primary;
}

/* Body content - Explanatory text */
.body-content {
  @apply text-base font-normal text-text-secondary leading-relaxed;
}

/* Emphasis - Key insights, illumination moments */
.emphasis {
  @apply text-lg font-semibold text-radiance-gold;
}

/* AI/Wisdom elements */
.wisdom-text {
  @apply text-wisdom-violet;
}
```

---

## Phase 1: Illuminate — Inbound-Focused Frontend

### Overview

The initial launch focuses on establishing Light Brand Consulting's digital presence, capturing leads, and converting visitors into booked Illumination Sessions.

### Target Metrics (30 Days Post-Launch)

| Metric | Target |
|--------|--------|
| Website visitors | 1,000+ |
| Lead captures | 50+ |
| Illumination Sessions booked | 10+ |
| Newsletter signups | 100+ |
| Average time on site | 3+ minutes |

### Page Architecture

```
lightbrandconsulting.com/
├── /                      # Hero + Value proposition
├── /services              # Service overview
│   ├── /illumination      # Illumination Session detail
│   ├── /blueprint         # AI Acceleration Blueprint detail
│   └── /story             # Breath of Life Story detail
├── /about                 # Philosophy + Team
├── /book                  # Booking flow
├── /insights              # Blog/thought leadership
└── /contact               # Contact form
```

### Component Specifications

#### 1. Homepage (`/`)

**Hero Section**
```tsx
<section className="min-h-screen bg-depth-base relative overflow-hidden flex flex-col justify-center px-8 md:px-16">
  {/* Illumination glow effect */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]
                  bg-radial-gradient from-radiance-gold/8 to-transparent blur-3xl pointer-events-none" />

  <div className="relative z-10 max-w-4xl">
    <Tag variant="premium" className="mb-6 bg-radiance-gold/15 text-radiance-gold border-radiance-gold/30">
      AI Consulting
    </Tag>

    <h1 className="hero-statement mb-8">
      Let us help you see your
      <span className="text-radiance-gold"> fullest capacity</span>
    </h1>

    <p className="text-xl text-text-secondary mb-12 max-w-2xl leading-relaxed">
      Transform your business into an AI super intelligence.
      Light consulting creates capacity, not dependency.
    </p>

    <div className="flex gap-4">
      <Button variant="primary" size="lg" className="bg-gradient-to-br from-radiance-gold to-radiance-amber text-depth-base shadow-lg shadow-radiance-gold/25 hover:shadow-xl">
        Book Illumination Session
      </Button>
      <Button variant="secondary" size="lg" className="border-clarity-muted text-clarity-cream hover:bg-clarity-cream/8">
        Explore Services
      </Button>
    </div>
  </div>
</section>
```

**The Capacity Gap Visualization**
```tsx
<Card elevation="subtle" className="p-12 bg-depth-elevated border-depth-border">
  <h2 className="text-2xl font-bold text-text-primary mb-8">
    The Capacity Gap
  </h2>

  <CapacityGapDiagram
    stages={[
      { label: "Where You Are", icon: "current", color: "text-muted" },
      { label: "The Gap", icon: "bridge", color: "radiance-gold", glow: true },
      { label: "Fullest Capacity", icon: "star", color: "clarity-cream" }
    ]}
    bridgeGradient="from-text-muted via-radiance-gold to-clarity-cream"
  />

  <p className="text-text-secondary mt-8">
    2024-2026 is the strategic moment. Like 1995 for the web,
    like 2008 for mobile. The question isn't if—it's how fast.
  </p>
</Card>
```

**Service Preview Cards**
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <ServicePreviewCard
    title="Illumination Session"
    price="$500"
    duration="90 minutes"
    description="A single focused conversation revealing 3 AI opportunities"
    cta="Learn More"
    href="/services/illumination"
    icon={<LightbulbIcon />}
  />

  <ServicePreviewCard
    title="AI Acceleration Blueprint"
    price="$3,000 – $7,500"
    duration="5–7 days"
    description="Complete strategic architecture for AI transformation"
    cta="Learn More"
    href="/services/blueprint"
    icon={<BlueprintIcon />}
    featured={true}
  />

  <ServicePreviewCard
    title="Breath of Life Story"
    price="$2,500 – $12,000"
    duration="2–6 weeks"
    description="Deep narrative work transforming expertise into authority"
    cta="Learn More"
    href="/services/story"
    icon={<BookIcon />}
  />
</div>
```

**Testimonial Carousel**
```tsx
<TestimonialCarousel
  testimonials={[
    {
      quote: "In 90 minutes, I saw possibilities I'd been blind to for years.",
      author: "Sarah Chen",
      role: "CEO, TechStart Inc",
      avatar: "/testimonials/sarah.jpg"
    },
    // Additional testimonials...
  ]}
  autoAdvance={8000}
/>
```

**Lead Capture - Newsletter**
```tsx
<Card className="bg-gradient-to-r from-depth-elevated to-depth-base p-8 border border-depth-border relative overflow-hidden">
  {/* Subtle illumination accent */}
  <div className="absolute top-0 right-0 w-32 h-32 bg-radiance-gold/5 blur-3xl" />

  <h3 className="text-xl font-bold text-text-primary mb-4 relative z-10">
    Weekly Illuminations
  </h3>
  <p className="text-text-secondary mb-6 relative z-10">
    AI insights for business leaders. No jargon, just clarity.
  </p>

  <form className="flex gap-4 relative z-10">
    <Input
      type="email"
      placeholder="your@email.com"
      className="flex-1 bg-depth-surface border-depth-border text-text-primary
                 placeholder:text-text-muted focus:border-radiance-gold focus:ring-radiance-gold/20"
    />
    <Button variant="secondary" className="bg-radiance-gold text-depth-base hover:bg-radiance-amber">
      Subscribe
    </Button>
  </form>
</Card>
```

#### 2. Service Pages (`/services/*`)

**Service Detail Template**
```tsx
interface ServicePageProps {
  service: {
    name: string;
    tagline: string;
    investment: string;
    duration: string;
    deliverables: string[];
    process: ProcessStep[];
    idealFor: string[];
    notFor: string[];
    faq: FAQItem[];
  }
}

const ServicePage: React.FC<ServicePageProps> = ({ service }) => (
  <PageContainer>
    {/* Hero */}
    <ServiceHero
      name={service.name}
      tagline={service.tagline}
      investment={service.investment}
      duration={service.duration}
    />

    {/* What You Get */}
    <DeliverablesList deliverables={service.deliverables} />

    {/* The Process */}
    <ProcessTimeline steps={service.process} />

    {/* Is This For You? */}
    <IdealClientSection
      idealFor={service.idealFor}
      notFor={service.notFor}
    />

    {/* FAQ Accordion */}
    <FAQAccordion items={service.faq} />

    {/* CTA */}
    <BookingCTA service={service.name} />
  </PageContainer>
);
```

**Illumination Session Specifics**
```typescript
const illuminationSession = {
  name: "Illumination Session",
  tagline: "See your AI potential in 90 minutes",
  investment: "$500",
  duration: "90 minutes",
  deliverables: [
    "3 specific AI opportunities mapped to your business",
    "Super Intelligence Profile™ assessment",
    "Priority-ranked action items",
    "30-day momentum plan",
    "Recording of the session"
  ],
  process: [
    { step: 1, title: "Book", description: "Select your time slot" },
    { step: 2, title: "Prepare", description: "Complete brief intake form" },
    { step: 3, title: "Connect", description: "90-minute video session" },
    { step: 4, title: "Receive", description: "Summary + recordings within 24h" }
  ],
  idealFor: [
    "Founders wondering 'what should AI mean for my business?'",
    "Leaders hearing about AI but unsure where to start",
    "Businesses with specific pain points that AI might solve",
    "Anyone ready to stop wondering and start moving"
  ],
  notFor: [
    "Businesses seeking someone to 'do AI for them'",
    "Organizations wanting to 'wait and see'",
    "Those looking for generic AI advice"
  ]
};
```

#### 3. Booking Flow (`/book`)

**Multi-Step Booking Form**
```tsx
const BookingFlow: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<BookingFormData>({});

  return (
    <PageContainer>
      <BookingProgress currentStep={step} totalSteps={4} />

      {step === 1 && (
        <ServiceSelection
          onSelect={(service) => {
            setFormData({ ...formData, service });
            setStep(2);
          }}
        />
      )}

      {step === 2 && (
        <ContactInformation
          onSubmit={(contact) => {
            setFormData({ ...formData, ...contact });
            setStep(3);
          }}
        />
      )}

      {step === 3 && (
        <IntakeQuestions
          service={formData.service}
          onSubmit={(intake) => {
            setFormData({ ...formData, intake });
            setStep(4);
          }}
        />
      )}

      {step === 4 && (
        <CalendarScheduling
          service={formData.service}
          onBook={(slot) => handleBooking({ ...formData, slot })}
        />
      )}
    </PageContainer>
  );
};
```

**Intake Questions by Service**
```typescript
const intakeQuestions = {
  illumination: [
    {
      id: "business_description",
      question: "In 2-3 sentences, what does your business do?",
      type: "textarea",
      required: true
    },
    {
      id: "ai_experience",
      question: "How would you describe your current AI experience?",
      type: "select",
      options: [
        "Complete beginner",
        "Dabbled with ChatGPT",
        "Using AI tools regularly",
        "Integrated AI into operations"
      ]
    },
    {
      id: "biggest_challenge",
      question: "What's the #1 challenge you hope AI might help solve?",
      type: "textarea",
      required: true
    },
    {
      id: "desired_outcome",
      question: "What would a successful session look like for you?",
      type: "textarea"
    }
  ],
  // Additional question sets for blueprint and story...
};
```

#### 4. About Page (`/about`)

**Philosophy Section**
```tsx
<section className="py-24 bg-depth-base">
  <h2 className="text-3xl font-bold text-text-primary mb-12">
    The Light Touch Principle
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <PhilosophyCard
      title="Reveal, Don't Impose"
      description="Your business already contains its own genius. AI reveals it—we don't invent it."
      icon={<RevealIcon className="text-radiance-gold" />}
      accentColor="radiance-gold"
    />

    <PhilosophyCard
      title="Speed Beats Perfection"
      description="A 70% solution today beats a 100% solution in six months."
      icon={<SpeedIcon className="text-radiance-amber" />}
      accentColor="radiance-amber"
    />

    <PhilosophyCard
      title="Clarity Is The Multiplier"
      description="One clear decision, properly executed, outperforms a dozen confused ones."
      icon={<ClarityIcon className="text-clarity-cream" />}
      accentColor="clarity-cream"
    />
  </div>
</section>
```

**Team Section**
```tsx
<section className="py-24 bg-depth-elevated">
  <h2 className="text-3xl font-bold text-text-primary mb-12">
    Your Guides
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    <TeamMemberCard
      name="[Consultant Name]"
      role="Principal Consultant"
      bio="Background and expertise..."
      avatar="/team/consultant.jpg"
      socials={{ linkedin: "...", twitter: "..." }}
      className="bg-depth-base border-depth-border"
    />
  </div>
</section>
```

#### 5. Insights/Blog (`/insights`)

**Blog Index**
```tsx
<PageContainer className="bg-depth-base">
  <h1 className="text-4xl font-bold text-text-primary mb-12">
    Insights
  </h1>

  {/* Featured Post */}
  <FeaturedInsightCard post={featuredPost} />

  {/* Category Filter */}
  <InsightCategoryTabs
    categories={["All", "AI Strategy", "Implementation", "Stories", "Updates"]}
    activeCategory={activeCategory}
    onSelect={setActiveCategory}
  />

  {/* Post Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {filteredPosts.map(post => (
      <InsightCard key={post.id} post={post} />
    ))}
  </div>

  {/* Load More */}
  <LoadMoreButton onClick={loadMore} hasMore={hasMorePosts} />
</PageContainer>
```

### Data Models

```typescript
// Lead capture
interface Lead {
  id: string;
  email: string;
  name?: string;
  company?: string;
  source: 'newsletter' | 'booking' | 'contact' | 'content';
  created_at: Date;
  tags: string[];
  status: 'new' | 'contacted' | 'qualified' | 'converted';
}

// Booking
interface Booking {
  id: string;
  lead_id: string;
  service: 'illumination' | 'blueprint' | 'story';
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  scheduled_at: Date;
  intake_responses: Record<string, string>;
  created_at: Date;
  notes?: string;
}

// Insight/Blog Post
interface InsightPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // Markdown
  category: string;
  tags: string[];
  author_id: string;
  featured_image?: string;
  published_at?: Date;
  status: 'draft' | 'published';
}

// Newsletter Subscriber
interface Subscriber {
  id: string;
  email: string;
  subscribed_at: Date;
  preferences: string[];
  status: 'active' | 'unsubscribed';
}
```

### API Endpoints (Phase 1)

```typescript
// Lead Management
POST   /api/leads                 // Create lead
GET    /api/leads                 // List leads (admin)
PATCH  /api/leads/:id             // Update lead status

// Booking
POST   /api/bookings              // Create booking
GET    /api/bookings              // List bookings (admin)
GET    /api/bookings/:id          // Get booking details
PATCH  /api/bookings/:id          // Update booking

// Newsletter
POST   /api/newsletter/subscribe  // Subscribe to newsletter
DELETE /api/newsletter/unsubscribe // Unsubscribe

// Blog/Insights
GET    /api/insights              // List published posts
GET    /api/insights/:slug        // Get post by slug
POST   /api/insights              // Create post (admin)
PATCH  /api/insights/:id          // Update post (admin)

// Contact
POST   /api/contact               // Submit contact form

// Calendar (integration)
GET    /api/calendar/availability // Get available slots
POST   /api/calendar/book         // Book a slot
```

### Tech Stack (Phase 1)

```yaml
Frontend:
  Framework: React 19 + TypeScript
  Styling: Tailwind CSS (Onyx tokens)
  Build: Vite 6
  Components: design-system-v2

Backend:
  Database: Supabase (PostgreSQL)
  Auth: Supabase Auth
  Storage: Supabase Storage
  Edge Functions: Supabase Edge Functions

Integrations:
  Calendar: Cal.com or Calendly API
  Email: Resend or SendGrid
  Analytics: Plausible or PostHog
  Forms: Native implementation
```

---

## Phase 2: Automate — Agent-Powered Proposals & Legal

### Overview

Phase 2 introduces AI agent integration to automate proposal generation, client qualification, and legal document creation. This phase transforms the manual consulting workflow into an agent-assisted process.

### Agent Integration Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                    Light Brand Consulting Frontend                   │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐          │
│  │   Booking    │    │   Proposal   │    │    Legal     │          │
│  │    Flow      │ →  │   Builder    │ →  │   Center     │          │
│  └──────────────┘    └──────────────┘    └──────────────┘          │
│         │                   │                   │                    │
└─────────┼───────────────────┼───────────────────┼────────────────────┘
          │                   │                   │
          ▼                   ▼                   ▼
┌─────────────────────────────────────────────────────────────────────┐
│                        Agent Integration Layer                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐  │
│  │ Intake Guardian  │  │ Proposal         │  │ Legal            │  │
│  │ (Qualification)  │  │ Orchestrator     │  │ Orchestrator     │  │
│  └────────┬─────────┘  └────────┬─────────┘  └────────┬─────────┘  │
│           │                     │                     │             │
│           ▼                     ▼                     ▼             │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐  │
│  │ Council Liaison  │  │ Feedback         │  │ Contract         │  │
│  │ (8/10 Scoring)   │  │ Architect        │  │ Guardian         │  │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘  │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### New Features

#### 1. Intelligent Client Qualification

Integration with **Intake Guardian** agent for automated qualification scoring.

```tsx
// Client Qualification Dashboard
const QualificationReview: React.FC<{ leadId: string }> = ({ leadId }) => {
  const { qualification, loading } = useQualification(leadId);

  return (
    <Card elevation="subtle" className="p-6">
      <h3 className="text-xl font-bold text-text-primary mb-4">
        Qualification Assessment
      </h3>

      <QualificationScore
        score={qualification.score}
        threshold={8}
      />

      <QualificationDimensions
        dimensions={qualification.dimensions}
      />

      {qualification.score >= 8 ? (
        <QualifiedActions lead={lead} />
      ) : (
        <ImprovementGuidance gaps={qualification.gaps} />
      )}
    </Card>
  );
};
```

**Qualification Dimensions** (mapped from Stewardship Council):
1. Business Clarity
2. AI Readiness
3. Resource Availability
4. Timeline Alignment
5. Value Fit

#### 2. AI-Powered Proposal Builder

Integration with **Proposal Orchestrator** and **Feedback Architect** for automated proposal generation.

```tsx
// Proposal Builder Interface
const ProposalBuilder: React.FC<{ bookingId: string }> = ({ bookingId }) => {
  const [proposal, setProposal] = useState<Proposal | null>(null);
  const [generating, setGenerating] = useState(false);

  const generateProposal = async () => {
    setGenerating(true);

    // Call Proposal Orchestrator
    const draft = await agentApi.generateProposal({
      booking_id: bookingId,
      service: booking.service,
      intake_responses: booking.intake_responses,
      client_context: lead
    });

    setProposal(draft);
    setGenerating(false);
  };

  return (
    <PageContainer>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-text-primary">
          Proposal for {lead.company}
        </h2>

        <Button
          variant="primary"
          onClick={generateProposal}
          isLoading={generating}
        >
          {proposal ? 'Regenerate' : 'Generate Proposal'}
        </Button>
      </div>

      {proposal && (
        <>
          <ProposalPreview proposal={proposal} />

          <ProposalEditor
            proposal={proposal}
            onChange={setProposal}
          />

          <div className="flex gap-4 mt-8">
            <Button variant="primary" onClick={sendProposal}>
              Send to Client
            </Button>
            <Button variant="ghost" onClick={saveDraft}>
              Save Draft
            </Button>
          </div>
        </>
      )}
    </PageContainer>
  );
};
```

**Proposal Structure**
```typescript
interface ConsultingProposal {
  id: string;
  booking_id: string;
  version: number;
  status: 'draft' | 'sent' | 'accepted' | 'declined';

  // Generated content
  executive_summary: string;
  client_situation: string;
  proposed_approach: string;
  deliverables: ProposalDeliverable[];
  timeline: ProposalPhase[];
  investment: ProposalPricing;

  // Metadata
  generated_by: 'human' | 'agent' | 'hybrid';
  agent_confidence: number;
  created_at: Date;
  sent_at?: Date;
}

interface ProposalDeliverable {
  title: string;
  description: string;
  format: string;
}

interface ProposalPhase {
  phase: number;
  title: string;
  duration: string;
  activities: string[];
}

interface ProposalPricing {
  service: string;
  base_price: number;
  adjustments?: PriceAdjustment[];
  total: number;
  payment_terms: string;
}
```

#### 3. Legal Document Generation

Integration with **Legal Orchestrator** and **Contract Guardian** for automated agreement generation.

```tsx
// Legal Center
const LegalCenter: React.FC<{ proposalId: string }> = ({ proposalId }) => {
  const { proposal } = useProposal(proposalId);
  const { contracts, generateContract } = useContracts(proposalId);

  return (
    <PageContainer>
      <h2 className="text-2xl font-bold text-text-primary mb-8">
        Legal Documents
      </h2>

      {/* Contract Generation */}
      <Card className="p-6 mb-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">
          Generate Agreement
        </h3>

        <ContractTypeSelector
          onSelect={(type) => generateContract(type)}
        />
      </Card>

      {/* Generated Contracts */}
      <div className="space-y-4">
        {contracts.map(contract => (
          <ContractCard
            key={contract.id}
            contract={contract}
            onEdit={() => openContractEditor(contract)}
            onSend={() => sendForSignature(contract)}
          />
        ))}
      </div>
    </PageContainer>
  );
};
```

**Contract Types for Consulting**
```typescript
type ConsultingContractType =
  | 'illumination_session_agreement'
  | 'blueprint_services_agreement'
  | 'story_services_agreement'
  | 'master_consulting_agreement'
  | 'nda_mutual'
  | 'nda_client';

interface ConsultingContract {
  id: string;
  proposal_id: string;
  type: ConsultingContractType;
  status: 'draft' | 'sent' | 'signed' | 'expired';

  // Legal content
  parties: ContractParty[];
  terms: ContractTerms;
  clauses: ContractClause[];

  // Signatures
  signatures: ContractSignature[];

  // Metadata
  generated_by: 'human' | 'legal-agent';
  legal_review_status: 'pending' | 'approved' | 'flagged';
  created_at: Date;
  expires_at?: Date;
}
```

#### 4. Admin Dashboard Enhancements

```tsx
// Agent Activity Monitor
const AgentMonitor: React.FC = () => {
  const { activities } = useAgentActivity();

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-moonlight mb-4">
        Agent Activity
      </h3>

      <div className="space-y-4">
        {activities.map(activity => (
          <AgentActivityItem
            key={activity.id}
            agent={activity.agent}
            action={activity.action}
            status={activity.status}
            timestamp={activity.timestamp}
          />
        ))}
      </div>
    </Card>
  );
};

// Pipeline Dashboard
const PipelineDashboard: React.FC = () => {
  const { pipeline } = usePipeline();

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      <PipelineStage
        title="New Leads"
        count={pipeline.new_leads}
        icon={<InboxIcon />}
      />
      <PipelineStage
        title="Qualified"
        count={pipeline.qualified}
        icon={<CheckIcon />}
      />
      <PipelineStage
        title="Proposal Sent"
        count={pipeline.proposal_sent}
        icon={<DocumentIcon />}
      />
      <PipelineStage
        title="In Contract"
        count={pipeline.in_contract}
        icon={<ContractIcon />}
      />
      <PipelineStage
        title="Active Clients"
        count={pipeline.active}
        icon={<StarIcon />}
      />
    </div>
  );
};
```

### Agent Integration API

```typescript
// Agent API Layer
interface AgentAPI {
  // Qualification
  qualifyLead(leadId: string): Promise<QualificationResult>;
  getQualificationGaps(leadId: string): Promise<QualificationGap[]>;

  // Proposals
  generateProposal(context: ProposalContext): Promise<Proposal>;
  refineProposal(proposalId: string, feedback: string): Promise<Proposal>;

  // Legal
  generateContract(
    proposalId: string,
    type: ConsultingContractType
  ): Promise<ConsultingContract>;

  reviewContract(contractId: string): Promise<ContractReview>;
}

// Handoff Protocol (XML-based)
interface AgentHandoff {
  handoff_id: string;
  from_agent: string;
  to_agent: string;
  payload: Record<string, unknown>;
  created_at: Date;
}
```

### New API Endpoints (Phase 2)

```typescript
// Qualification
POST   /api/agents/qualify/:leadId         // Trigger qualification
GET    /api/agents/qualification/:leadId   // Get qualification result

// Proposals
POST   /api/agents/proposals/generate      // Generate proposal
PATCH  /api/agents/proposals/:id/refine    // Refine with feedback
GET    /api/agents/proposals/:id           // Get proposal

// Legal
POST   /api/agents/contracts/generate      // Generate contract
GET    /api/agents/contracts/:proposalId   // Get contracts for proposal
POST   /api/agents/contracts/:id/review    // Request legal review

// Agent Activity
GET    /api/agents/activity                // Get agent activity log
```

---

## Phase 3: Self-Serve — Client Portal & Full Autonomy

### Overview

Phase 3 transforms the platform into a full self-service portal where clients can manage their engagements, access deliverables, track progress, and initiate new services independently.

### Client Portal Architecture

```
Client Portal (/portal)
├── /portal/dashboard          # Overview & quick actions
├── /portal/engagements        # Active & past engagements
│   └── /portal/engagements/:id
├── /portal/deliverables       # Access deliverables
│   └── /portal/deliverables/:id
├── /portal/calendar           # Upcoming sessions
├── /portal/documents          # Contracts, invoices
├── /portal/messages           # Communication center
├── /portal/billing            # Payment & invoices
├── /portal/settings           # Account settings
└── /portal/new                # Start new engagement
```

### Client Portal Components

#### 1. Client Dashboard

```tsx
const ClientDashboard: React.FC = () => {
  const { client, engagements, deliverables, upcomingSessions } = useClientData();

  return (
    <PortalLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <WelcomeHeader
          name={client.name}
          company={client.company}
        />

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard
            label="Active Engagements"
            value={engagements.active.length}
            icon={<BriefcaseIcon />}
          />
          <StatCard
            label="Deliverables Ready"
            value={deliverables.ready.length}
            icon={<DocumentIcon />}
          />
          <StatCard
            label="Upcoming Sessions"
            value={upcomingSessions.length}
            icon={<CalendarIcon />}
          />
          <StatCard
            label="Total Investment"
            value={formatCurrency(client.total_investment)}
            icon={<ChartIcon />}
          />
        </div>

        {/* Next Session */}
        {upcomingSessions[0] && (
          <UpcomingSessionCard session={upcomingSessions[0]} />
        )}

        {/* Active Engagements */}
        <EngagementList engagements={engagements.active} />

        {/* Recent Deliverables */}
        <RecentDeliverables deliverables={deliverables.recent} />

        {/* Start New Engagement CTA */}
        <NewEngagementCTA />
      </div>
    </PortalLayout>
  );
};
```

#### 2. Engagement Detail View

```tsx
const EngagementDetail: React.FC<{ id: string }> = ({ id }) => {
  const { engagement, deliverables, sessions, documents } = useEngagement(id);

  return (
    <PortalLayout>
      <EngagementHeader engagement={engagement} />

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="deliverables">Deliverables</TabsTrigger>
          <TabsTrigger value="sessions">Sessions</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <EngagementOverview engagement={engagement} />
          <ProgressTimeline engagement={engagement} />
        </TabsContent>

        <TabsContent value="deliverables">
          <DeliverableGallery
            deliverables={deliverables}
            onDownload={handleDownload}
          />
        </TabsContent>

        <TabsContent value="sessions">
          <SessionHistory sessions={sessions} />
          {engagement.status === 'active' && (
            <ScheduleSessionButton engagementId={id} />
          )}
        </TabsContent>

        <TabsContent value="documents">
          <DocumentList
            documents={documents}
            onDownload={handleDownload}
            onSign={handleSign}
          />
        </TabsContent>

        <TabsContent value="messages">
          <MessageThread engagementId={id} />
        </TabsContent>
      </Tabs>
    </PortalLayout>
  );
};
```

#### 3. Deliverable Access

```tsx
const DeliverableViewer: React.FC<{ id: string }> = ({ id }) => {
  const { deliverable, loading } = useDeliverable(id);

  return (
    <PortalLayout>
      <DeliverableHeader
        title={deliverable.title}
        type={deliverable.type}
        engagement={deliverable.engagement}
        createdAt={deliverable.created_at}
      />

      {/* Viewer based on type */}
      {deliverable.type === 'document' && (
        <DocumentViewer document={deliverable} />
      )}

      {deliverable.type === 'video' && (
        <VideoPlayer video={deliverable} />
      )}

      {deliverable.type === 'blueprint' && (
        <BlueprintViewer blueprint={deliverable} />
      )}

      {deliverable.type === 'recording' && (
        <RecordingPlayer recording={deliverable} />
      )}

      {/* Download Options */}
      <DownloadOptions
        formats={deliverable.available_formats}
        onDownload={handleDownload}
      />

      {/* Related Deliverables */}
      <RelatedDeliverables
        engagementId={deliverable.engagement_id}
        excludeId={deliverable.id}
      />
    </PortalLayout>
  );
};
```

#### 4. Self-Service Booking

```tsx
const NewEngagement: React.FC = () => {
  const { client } = useAuth();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <PortalLayout>
      <h1 className="text-3xl font-bold text-text-primary mb-8">
        Start a New Engagement
      </h1>

      {/* Service Recommendations (AI-powered) */}
      <RecommendedServices
        clientHistory={client.engagements}
        onSelect={setSelectedService}
      />

      {/* All Services */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <ServiceSelectionCard
          service="illumination"
          selected={selectedService === 'illumination'}
          onSelect={() => setSelectedService('illumination')}
          clientPrice={client.pricing?.illumination}
        />

        <ServiceSelectionCard
          service="blueprint"
          selected={selectedService === 'blueprint'}
          onSelect={() => setSelectedService('blueprint')}
          clientPrice={client.pricing?.blueprint}
        />

        <ServiceSelectionCard
          service="story"
          selected={selectedService === 'story'}
          onSelect={() => setSelectedService('story')}
          clientPrice={client.pricing?.story}
        />
      </div>

      {selectedService && (
        <SelfServiceBookingFlow
          service={selectedService}
          client={client}
          onComplete={handleBookingComplete}
        />
      )}
    </PortalLayout>
  );
};
```

#### 5. Communication Center

```tsx
const MessagesCenter: React.FC = () => {
  const { threads, createThread } = useMessages();
  const [activeThread, setActiveThread] = useState<string | null>(null);

  return (
    <PortalLayout>
      <div className="flex h-[calc(100vh-200px)]">
        {/* Thread List */}
        <div className="w-80 border-r border-depth-border">
          <div className="p-4 border-b border-depth-border">
            <Button
              variant="primary"
              className="w-full"
              onClick={() => createThread()}
            >
              New Message
            </Button>
          </div>

          <MessageThreadList
            threads={threads}
            activeThread={activeThread}
            onSelect={setActiveThread}
          />
        </div>

        {/* Thread View */}
        <div className="flex-1">
          {activeThread ? (
            <MessageThreadView
              threadId={activeThread}
            />
          ) : (
            <EmptyState
              title="Select a conversation"
              description="Choose a thread from the list or start a new message"
            />
          )}
        </div>
      </div>
    </PortalLayout>
  );
};
```

### Client Data Models

```typescript
// Client Account
interface ClientAccount {
  id: string;
  user_id: string; // Auth user
  company: string;
  name: string;
  email: string;
  phone?: string;

  // Relationship
  status: 'prospect' | 'active' | 'alumni';
  lifetime_value: number;
  total_engagements: number;

  // Preferences
  pricing_tier?: 'standard' | 'preferred' | 'enterprise';
  communication_preference: 'email' | 'portal' | 'both';

  created_at: Date;
  last_engagement_at?: Date;
}

// Engagement (Client View)
interface ClientEngagement {
  id: string;
  client_id: string;
  service: 'illumination' | 'blueprint' | 'story';
  status: 'pending' | 'active' | 'completed' | 'cancelled';

  // Timeline
  started_at?: Date;
  completed_at?: Date;

  // Progress
  current_phase: number;
  total_phases: number;
  progress_percentage: number;

  // Deliverables
  deliverable_count: number;
  deliverables_ready: number;

  // Sessions
  total_sessions: number;
  completed_sessions: number;
  next_session?: Date;
}

// Client Deliverable
interface ClientDeliverable {
  id: string;
  engagement_id: string;
  title: string;
  description: string;
  type: 'document' | 'video' | 'recording' | 'blueprint' | 'other';
  status: 'pending' | 'ready' | 'viewed' | 'downloaded';

  // Access
  file_url: string;
  available_formats: string[];
  preview_url?: string;

  // Metadata
  created_at: Date;
  viewed_at?: Date;
  downloaded_at?: Date;
}

// Client Message Thread
interface MessageThread {
  id: string;
  client_id: string;
  engagement_id?: string;
  subject: string;
  status: 'open' | 'closed';
  last_message_at: Date;
  unread_count: number;
}

interface Message {
  id: string;
  thread_id: string;
  sender_type: 'client' | 'consultant' | 'system';
  sender_id: string;
  content: string;
  attachments: Attachment[];
  created_at: Date;
  read_at?: Date;
}
```

### Client Portal API Endpoints

```typescript
// Client Account
GET    /api/portal/me                       // Get client account
PATCH  /api/portal/me                       // Update account
GET    /api/portal/me/stats                 // Get client statistics

// Engagements
GET    /api/portal/engagements              // List client engagements
GET    /api/portal/engagements/:id          // Get engagement detail
POST   /api/portal/engagements              // Start new engagement (self-service)

// Deliverables
GET    /api/portal/deliverables             // List all deliverables
GET    /api/portal/deliverables/:id         // Get deliverable
POST   /api/portal/deliverables/:id/view    // Mark as viewed
GET    /api/portal/deliverables/:id/download // Download deliverable

// Sessions
GET    /api/portal/sessions                 // List sessions
GET    /api/portal/sessions/availability    // Get availability
POST   /api/portal/sessions/book            // Book session

// Documents
GET    /api/portal/documents                // List documents
GET    /api/portal/documents/:id            // Get document
POST   /api/portal/documents/:id/sign       // Sign document

// Messages
GET    /api/portal/messages                 // List threads
GET    /api/portal/messages/:threadId       // Get thread
POST   /api/portal/messages                 // Create thread
POST   /api/portal/messages/:threadId       // Reply to thread

// Billing
GET    /api/portal/billing/invoices         // List invoices
GET    /api/portal/billing/invoices/:id     // Get invoice
POST   /api/portal/billing/pay/:id          // Pay invoice

// Recommendations (AI-powered)
GET    /api/portal/recommendations          // Get service recommendations
```

### Self-Service Automation

**AI-Powered Features:**

```typescript
// Service Recommendations Engine
interface ServiceRecommendation {
  service: 'illumination' | 'blueprint' | 'story';
  confidence: number;
  reasoning: string;
  suggested_focus?: string;
}

// Client Journey Tracking
interface ClientJourney {
  client_id: string;
  current_stage: 'awareness' | 'consideration' | 'active' | 'expansion' | 'advocacy';
  next_suggested_action: string;
  upsell_opportunities: UpsellOpportunity[];
}

// Automated Engagement Creation
interface SelfServiceEngagement {
  // Client provides
  service: string;
  objectives: string[];
  preferred_schedule: SchedulePreference;

  // System generates
  proposal: ConsultingProposal;
  contract: ConsultingContract;
  calendar_holds: CalendarHold[];

  // Requires approval
  requires_consultant_review: boolean;
  auto_approved: boolean;
}
```

---

## Implementation Roadmap

### Phase 1: Illuminate (8-10 weeks)

```
Week 1-2: Foundation
├── Project setup (Vite, React, TypeScript)
├── Design system integration
├── Supabase setup
└── Basic routing

Week 3-4: Core Pages
├── Homepage implementation
├── Service pages
├── About page
└── Contact page

Week 5-6: Booking System
├── Booking flow
├── Calendar integration
├── Intake forms
└── Email notifications

Week 7-8: Content & Admin
├── Blog/Insights system
├── Newsletter integration
├── Admin dashboard (basic)
└── Lead management

Week 9-10: Polish & Launch
├── Performance optimization
├── SEO implementation
├── Analytics integration
└── Launch preparation
```

### Phase 2: Automate (10-12 weeks)

```
Week 1-3: Agent Integration Layer
├── Agent API development
├── Handoff protocol implementation
├── Error handling & fallbacks
└── Testing framework

Week 4-6: Qualification & Proposals
├── Intake Guardian integration
├── Qualification dashboard
├── Proposal Builder UI
├── Proposal generation API

Week 7-9: Legal Integration
├── Contract Guardian integration
├── Legal document generation
├── Signature workflow
└── Document management

Week 10-12: Admin Enhancements
├── Pipeline dashboard
├── Agent activity monitor
├── Reporting & analytics
└── Performance optimization
```

### Phase 3: Self-Serve (12-14 weeks)

```
Week 1-3: Client Authentication
├── Client registration flow
├── Account management
├── Security implementation
└── Role-based access

Week 4-6: Portal Foundation
├── Client dashboard
├── Engagement views
├── Basic deliverable access
└── Session scheduling

Week 7-9: Communication & Documents
├── Message center
├── Document viewer
├── Contract signing
└── Notification system

Week 10-12: Self-Service Booking
├── Service recommendations
├── Self-service booking flow
├── Automated proposal generation
├── Payment integration

Week 13-14: Polish & Optimization
├── Performance optimization
├── Mobile responsiveness
├── User testing & feedback
└── Launch preparation
```

---

## Success Metrics

### Phase 1 Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Website visitors | 1,000+/month | Analytics |
| Lead conversion rate | 5%+ | Leads / Visitors |
| Booking conversion | 20%+ | Bookings / Leads |
| Time on site | 3+ minutes | Analytics |
| Page load time | <2 seconds | Performance |

### Phase 2 Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Proposal generation time | <5 minutes | System logs |
| Proposal acceptance rate | 60%+ | Accepted / Sent |
| Contract generation time | <10 minutes | System logs |
| Agent accuracy | 95%+ | Manual review |
| Time saved | 5+ hours/week | Time tracking |

### Phase 3 Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Portal adoption | 80%+ clients | Active users |
| Self-service bookings | 50%+ | Self / Total |
| Client satisfaction | 4.5+/5 | NPS surveys |
| Support ticket reduction | 40%+ | Ticket volume |
| Client retention | 70%+ | Repeat engagements |

---

## Technical Requirements

### Performance Targets

```yaml
Core Web Vitals:
  LCP: < 2.5s
  FID: < 100ms
  CLS: < 0.1

Page Load:
  First Contentful Paint: < 1.5s
  Time to Interactive: < 3.5s

API Response:
  Standard endpoints: < 200ms
  Agent endpoints: < 5s (with loading states)
```

### Security Requirements

```yaml
Authentication:
  - Supabase Auth (email, magic link)
  - Session management with refresh tokens
  - Rate limiting on auth endpoints

Data Protection:
  - All data encrypted at rest
  - TLS 1.3 for all connections
  - PII handling compliant with GDPR/CCPA

API Security:
  - JWT validation on all endpoints
  - Input sanitization
  - CORS policy enforcement
```

### Accessibility Requirements

```yaml
WCAG 2.1 AA Compliance:
  - Color contrast ratios (inherited from Onyx)
  - Keyboard navigation
  - Screen reader support
  - Focus management
  - Alternative text for images
```

---

## Appendix

### A. Component Library Reference

See `design-system-v2/` for complete component documentation:
- `/components/` - 70+ React components
- `/tokens/` - Design tokens
- `/spec/design/component-catalog.md` - Usage guidelines

### B. Agent Integration Reference

See `/planning/agents/` for agent specifications:
- `/brand-proposal/` - Proposal agents
- `/legal-department/` - Legal agents
- `/consulting-services/` - Consulting workflow

### C. Brand Voice Reference

See `/brands/light-brand-consulting/spec/master-plan.md` for:
- Voice and tone guidelines
- Service descriptions
- Pricing strategy
- Quality gates

---

*Specification Version: 1.0*
*Created: January 6, 2026*
*Last Updated: January 6, 2026*
