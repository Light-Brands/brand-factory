# Chrono-Commune Feature Specification

> Detailed breakdown of platform features and implementation requirements

---

## Feature Categories

```
┌─────────────────────────────────────────────────────────────────────┐
│                     CHRONO-COMMUNE FEATURE MAP                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │
│  │   CALENDAR   │  │    EVENT     │  │   MEMBER     │              │
│  │  MANAGEMENT  │  │  MANAGEMENT  │  │  MANAGEMENT  │              │
│  └──────────────┘  └──────────────┘  └──────────────┘              │
│                                                                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │
│  │    ALBUM     │  │    MEMO      │  │   ACTIVITY   │              │
│  │   SHARING    │  │   SYSTEM     │  │     FEED     │              │
│  └──────────────┘  └──────────────┘  └──────────────┘              │
│                                                                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │
│  │ INTEGRATIONS │  │   PREMIUM    │  │   PUBLIC     │              │
│  │              │  │   FEATURES   │  │  CALENDARS   │              │
│  └──────────────┘  └──────────────┘  └──────────────┘              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 1. Calendar Management

### 1.1 Calendar Creation
| Feature | Priority | Description |
|---------|----------|-------------|
| Calendar Name | P0 | Required field for calendar identification |
| Cover Image | P1 | Visual customization for calendar identity |
| Calendar Type | P1 | Private, Shared, or Public designation |
| Default View | P2 | Set preferred view (monthly/weekly) |

### 1.2 Calendar Views
| View Type | Implementation | Notes |
|-----------|---------------|-------|
| Monthly Grid | Traditional calendar grid | Default view |
| Weekly Timeline | Vertical hourly layout | 7-day span |
| Day View | Single day focus | Future enhancement |
| Agenda View | List format | Future enhancement |

### 1.3 Calendar Settings
- **Name & Identity**: Editable name and cover image
- **Labels**: 10 customizable color labels for events
- **Holidays**: Import/display public holidays
- **Photo Location**: Toggle GPS data in album photos
- **Deletion**: Soft delete with recovery period

---

## 2. Event Management

### 2.1 Event Properties

```
┌─────────────────────────────────────────────┐
│              EVENT DATA MODEL               │
├─────────────────────────────────────────────┤
│                                             │
│  REQUIRED FIELDS                            │
│  ├── Title (string)                         │
│  ├── Start Date/Time (datetime)             │
│  └── End Date/Time (datetime)               │
│                                             │
│  OPTIONAL FIELDS                            │
│  ├── All-Day Toggle (boolean)               │
│  ├── Label/Color (enum: 10 options)         │
│  ├── Participants (user[])                  │
│  ├── Location (string + coordinates)        │
│  ├── URL (string)                           │
│  ├── Notes (rich text)                      │
│  ├── File Attachments (file[])              │
│  ├── To-Do Items (checklist[])              │
│  ├── Recurrence Rule (rrule)                │
│  ├── Reminder (reminder[])                  │
│  ├── Time Zone (timezone)                   │
│  └── Priority (enum) [PREMIUM]              │
│                                             │
└─────────────────────────────────────────────┘
```

### 2.2 Recurrence Patterns
- Daily
- Weekly (with day selection)
- Bi-weekly
- Monthly (date or weekday)
- Yearly
- Custom interval
- End conditions: Never, After X occurrences, By date

### 2.3 Reminder Options
- At time of event
- 5, 10, 15, 30, 60 minutes before
- 1 day, 2 days, 1 week before
- Custom time

---

## 3. Member Management

### 3.1 Role Hierarchy
```
Admin/Creator
    │
    ├── Full calendar control
    ├── Member management
    ├── Settings access
    └── Delete capability

Member
    │
    ├── Event creation
    ├── Event editing (own + shared)
    ├── Memo creation
    ├── Album uploads
    └── View all calendar content
```

### 3.2 Invitation Methods
- Share link (public or private)
- Direct invitation (by email/username)
- QR code generation

### 3.3 Member Visibility
- Profile display (avatar, name)
- Last active timestamp
- Participation status on events

---

## 4. Communication Features

### 4.1 Memo System
| Feature | Description |
|---------|-------------|
| Quick Input | Press Enter to submit |
| Shared Scope | Visible to all calendar members |
| Sidebar Access | Always accessible from main view |
| Formatting | Basic text (future: rich text) |

### 4.2 Activity Feed
- **Event Activity**: Creation, edits, deletions
- **Album Activity**: Photo uploads, comments
- **Member Activity**: Joins, leaves, role changes
- **Filterable**: By activity type and date range

### 4.3 Event Comments
- Threaded discussions per event
- @mention support
- Real-time updates

---

## 5. Album Feature

### 5.1 Photo Management
```
Album Structure:
└── Calendar
    └── Album (1:1 with calendar)
        ├── Photos
        │   ├── Upload date
        │   ├── Location (optional)
        │   └── Uploader info
        └── Activity tracking
```

### 5.2 Photo Features
- Bulk upload support
- Location metadata toggle
- Full-screen viewing
- Download capability
- Activity tracking

---

## 6. Notification System

### 6.1 Notification Types
| Type | Trigger | Default |
|------|---------|---------|
| Event Created | New event in calendar | ON |
| Event Modified | Changes to existing event | ON |
| Event Reminder | Scheduled reminder time | ON |
| Member Joined | New member added | ON |
| Memo Posted | New memo in calendar | ON |
| Photo Uploaded | New album content | OFF |

### 6.2 Notification Preferences
- Per-calendar settings
- "Participating events only" filter
- Daily digest option
- Complete disable option
- Push, email, and in-app channels

---

## 7. Integration Features

### 7.1 External Calendar Import
| Source | Method | Features |
|--------|--------|----------|
| Google Calendar | OAuth + API | Two-way sync |
| Apple Calendar | iCal URL | Import only |
| Outlook | iCal URL | Import only |
| Generic iCal | URL subscription | Import only |

### 7.2 Export Capabilities (To Build)
- iCal export
- PDF generation
- Print formatting
- Data export (JSON/CSV)

---

## 8. Premium Features

### 8.1 Feature Comparison

| Feature | Free | Premium |
|---------|------|---------|
| Calendars | Limited | Unlimited |
| Members per calendar | Limited | Unlimited |
| File attachments | - | Yes |
| Event priority | - | Yes |
| Weekly vertical view | - | Yes |
| Ad-free experience | - | Yes |
| Extended history | 3 months | Unlimited |

### 8.2 Pricing Model
- Monthly subscription
- Annual subscription (discount)
- Family/team plans (future)

---

## 9. Public Calendars

### 9.1 Public Calendar Features
- Public URL/widget
- No login required to view
- Embed code generation
- SEO-friendly pages
- Social sharing

### 9.2 Use Cases
- Event venues
- Organizations
- Sports teams
- Community groups
- Educational institutions

---

## 10. Technical Requirements

### 10.1 Platform Support
| Platform | Minimum Version | Notes |
|----------|-----------------|-------|
| iOS | 17.0+ | Native app |
| Android | 10+ | Native app |
| Web | Modern browsers | PWA capable |

### 10.2 Performance Targets
- Initial load: < 2 seconds
- Calendar switch: < 500ms
- Event creation: < 1 second
- Sync latency: < 5 seconds
- Offline support: Core features

### 10.3 Security Requirements
- End-to-end encryption (optional)
- HTTPS everywhere
- OAuth 2.0 for integrations
- GDPR compliance
- Data residency options

---

## Implementation Priority

### Phase 1: Core (MVP)
- [ ] Calendar creation and management
- [ ] Basic event CRUD
- [ ] Member invitation and roles
- [ ] Monthly/weekly views
- [ ] Push notifications

### Phase 2: Collaboration
- [ ] Memo system
- [ ] Activity feed
- [ ] Event comments
- [ ] External calendar import

### Phase 3: Media
- [ ] Album feature
- [ ] File attachments
- [ ] Photo sharing

### Phase 4: Premium
- [ ] Premium subscription
- [ ] Advanced features
- [ ] Public calendars
- [ ] Export functionality

---

## Competitive Differentiators (To Define)

1. **Soul-Aligned Scheduling** - Incorporate intentionality and purpose into time management
2. **Community-First Design** - Prioritize group harmony over individual productivity
3. **Mindful Notifications** - Respect attention and reduce interruption anxiety
4. **Privacy-Forward** - Strong defaults for data protection and sharing control
5. **Beautiful Simplicity** - Elegant interface that inspires consistent use
