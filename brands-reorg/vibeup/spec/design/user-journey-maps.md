# User Journey Maps - Complete Flow Diagrams

**Version**: 1.0.0  
**Last Updated**: December 16, 2025

---

## Overview

Complete user journeys with Mermaid diagrams showing all critical paths, decision points, and conversions.

**Brand Voice Integration**: All touchpoints in these journeys use [brand voice guidelines](../brand/03-brand-voice-messaging.md). Mira's dialogue follows [personality guide](../brand/04-mira-personality-guide.md). Copy examples updated to match brand standards.

**Key Brand Principles in User Journeys**:
- Onboarding: Welcoming, not overwhelming ("Your Energy Is Your Edge")
- Practice logging: Encouraging, not demanding ("Ready to set the tone for your day?")
- Celebrations: Authentic, not generic ("This is where transformation begins")
- Suggestions: Invitations, not instructions ("Would you like to..." not "You should...")
- Error states: Supportive, not technical ("Let's try that again" not "Error 500")

---

## First-Time User Journey

```mermaid
flowchart TD
    start[App Download/Visit] --> landing[Landing Page]
    landing --> signup[Signup Button]
    signup --> authmethod{Choose Auth Method}
    
    authmethod -->|Magic Link| emailinput[Enter Email]
    authmethod -->|Google| oauth[Google OAuth]
    authmethod -->|SMS| phoneinput[Enter Phone]
    
    emailinput --> verify[Verify Email Code]
    oauth --> authed[Authenticated]
    phoneinput --> verifysms[Verify SMS Code]
    
    verify --> authed
    verifysms --> authed
    
    authed --> onboarding[Mira Welcomes]
    onboarding --> nameloc[Enter Name & Location]
    nameloc --> intention[Select Intention]
    
    intention --> micropractice{Intention Choice}
    micropractice -->|Reflect| breathwork[60s Breathwork]
    micropractice -->|Connect| discoveryintro[Discovery Intro]
    micropractice -->|Impact| votingintro[Voting Intro]
    
    breathwork --> celebrate[Celebration: First Frequency Shift!]
    discoveryintro --> celebrate
    votingintro --> celebrate
    
    celebrate --> nextaction{Mira Suggests}
    nextaction -->|Profile| profileflow[Profile Creation 13 Slides]
    nextaction -->|Practice| practicesetup[Add Daily Practice]
    
    profileflow --> profilecomplete[Profile Complete Badge]
    practicesetup --> practiceactive[Practice Active]
    
    profilecomplete --> activeuser[Active User]
    practiceactive --> activeuser
    
    activeuser --> dailyloop[Daily Engagement Loop]
```

---

## Daily Engagement Loop

```mermaid
flowchart TD
    appopen[Open App] --> miracheck{Mira Analyzes State}
    
    miracheck -->|No Practice Today| suggestpractice[Suggest: Log Your Practice]
    miracheck -->|Low Profile Completion| suggestprofile[Suggest: Complete Profile]
    miracheck -->|No Connections| suggestdiscovery[Suggest: Find Connections]
    miracheck -->|Active User| todaycard[VIBEUP Today Card]
    
    suggestpractice --> useraction[User Takes Action]
    suggestprofile --> useraction
    suggestdiscovery --> useraction
    todaycard --> useraction
    
    useraction --> engagement{Action Type}
    engagement -->|Log Practice| practicelog[Practice Logged]
    engagement -->|View Profile| profileview[Profile Viewed]
    engagement -->|Discover| discoverypage[Discovery Feed]
    engagement -->|Message| messaging[Open Messages]
    
    practicelog --> streak[Streak Updated]
    streak --> celebrate[Gentle Celebration]
    celebrate --> miranext[Mira Suggests Next]
    
    miranext --> continueloop{Continue?}
    continueloop -->|Yes| engagement
    continueloop -->|No| appsession[End Session]
```

---

## Critical Conversion Funnels

### Signup to Active User

```
Landing Page View
  ↓ (40% conversion)
Signup Start
  ↓ (70% conversion)
Email/Phone Verified
  ↓ (80% conversion)
Onboarding Complete
  ↓ (60% conversion)
First Practice Logged
  ↓
Active User (D7 return >25%)
```

### Free to Premium

```
Free User
  ↓
Uses Premium Feature (blocked)
  ↓ (20% click upgrade)
Views Membership Page
  ↓ (40% start trial)
Starts 7-Day Free Trial
  ↓ (40% convert)
Becomes Regenerative Member
```

---

**Related**: [`epic-01-mira.md`](../epics/epic-01-mira.md), [`epic-02-humans.md`](../epics/epic-02-humans.md), [`epic-03-practices.md`](../epics/epic-03-practices.md), [`epic-04-discovery.md`](../epics/epic-04-discovery.md)

