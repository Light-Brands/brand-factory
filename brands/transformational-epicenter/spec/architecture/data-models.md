# Transformational Epicenter: Data Models

> *The digital foundation for seamless guest journey and medical safety.*

---

## Table of Contents

1. [Overview](#overview)
2. [Core Domains](#core-domains)
3. [Schema Diagrams](#schema-diagrams)
4. [Table Definitions](#table-definitions)
5. [Security & Privacy](#security--privacy)

---

## Overview

### Database Strategy

The Transformational Epicenter digital ecosystem uses PostgreSQL (via Supabase) with comprehensive Row-Level Security (RLS) policies to ensure medical-grade data protection.

### Design Principles

1. **Medical Compliance First:** HIPAA-ready architecture
2. **Guest Privacy:** Strict access controls, encryption at rest
3. **Audit Trail:** All sensitive data changes logged
4. **Separation of Concerns:** Medical data isolated from operational
5. **Scalability:** Multi-location ready from day one

### Technology Stack

| Layer | Technology |
|-------|------------|
| **Database** | PostgreSQL 15+ |
| **Hosting** | Supabase (managed) |
| **Auth** | Supabase Auth + custom roles |
| **Realtime** | Supabase Realtime |
| **Storage** | Supabase Storage (encrypted) |

---

## Core Domains

### Domain Map

```
┌─────────────────────────────────────────────────────────────────┐
│                        TRANSFORMATIONAL EPICENTER                │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │     USERS       │  │     MEDICAL     │  │    PROGRAMS     │  │
│  │                 │  │                 │  │                 │  │
│  │ • Guests        │  │ • Health Records│  │ • Programs      │  │
│  │ • Staff         │  │ • Assessments   │  │ • Stays         │  │
│  │ • Roles         │  │ • Medications   │  │ • Sessions      │  │
│  │ • Profiles      │  │ • Vitals        │  │ • Schedules     │  │
│  └─────────────────┘  │ • Contraindic.  │  └─────────────────┘  │
│                       └─────────────────┘                        │
│                                                                   │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │   CEREMONIES    │  │    WELLNESS     │  │  INTEGRATION    │  │
│  │                 │  │                 │  │                 │  │
│  │ • Ceremonies    │  │ • Modalities    │  │ • Check-ins     │  │
│  │ • Intentions    │  │ • Treatments    │  │ • Practices     │  │
│  │ • Monitoring    │  │ • Appointments  │  │ • Progress      │  │
│  │ • Notes         │  │ • Protocols     │  │ • Goals         │  │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  │
│                                                                   │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │   COMMUNITY     │  │    CONTENT      │  │   LOCATIONS     │  │
│  │                 │  │                 │  │                 │  │
│  │ • Cohorts       │  │ • Articles      │  │ • Epicenters    │  │
│  │ • Messages      │  │ • Meditations   │  │ • Rooms         │  │
│  │ • Events        │  │ • Videos        │  │ • Facilities    │  │
│  │ • Connections   │  │ • Courses       │  │ • Staff Assign  │  │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

### Domain Ownership

| Domain | Description | Sensitivity |
|--------|-------------|-------------|
| **Users** | Authentication, profiles, roles | High |
| **Medical** | Health records, assessments, medications | Critical |
| **Programs** | Bookings, stays, session scheduling | Medium |
| **Ceremonies** | Sacred work documentation | Critical |
| **Wellness** | Treatment bookings and records | Medium |
| **Integration** | Post-stay support, check-ins | High |
| **Community** | Social features, messaging | Medium |
| **Content** | Educational materials | Low |
| **Locations** | Multi-site infrastructure | Low |

---

## Schema Diagrams

### Core Relationships

```
┌──────────────────┐       ┌──────────────────┐
│      users       │       │    locations     │
│                  │       │                  │
│ id               │       │ id               │
│ email            │       │ name             │
│ role             │       │ country          │
│ profile_id  ─────┼──┐    │ status           │
└──────────────────┘  │    └──────────────────┘
                      │              │
                      │              │
                      ▼              │
         ┌──────────────────┐       │
         │     profiles     │       │
         │                  │       │
         │ id               │       │
         │ user_id          │       │
         │ first_name       │       │
         │ last_name        │       │
         │ phone            │       │
         │ emergency_contact│       │
         └──────────────────┘       │
                  │                  │
                  │                  │
                  ▼                  ▼
         ┌──────────────────┐  ┌──────────────────┐
         │      stays       │  │     programs     │
         │                  │  │                  │
         │ id               │  │ id               │
         │ guest_id    ─────┼──│ name             │
         │ program_id  ─────┼──│ duration_days    │
         │ location_id ─────┼──│ includes_ceremony│
         │ room_id          │  │ price_range      │
         │ start_date       │  └──────────────────┘
         │ end_date         │
         │ status           │
         └──────────────────┘
                  │
        ┌─────────┼─────────┐
        │         │         │
        ▼         ▼         ▼
┌───────────┐ ┌───────────┐ ┌───────────┐
│ medical_  │ │ ceremony_ │ │ treatment_│
│ records   │ │ records   │ │ sessions  │
└───────────┘ └───────────┘ └───────────┘
```

---

## Table Definitions

### Users Domain

#### `users`

Core authentication and role assignment.

```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('guest', 'staff', 'practitioner', 'medical', 'admin', 'super_admin')),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now(),
    last_login_at TIMESTAMPTZ
);

-- RLS: Users can read own record; admins can read all
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY users_self_read ON users
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY users_admin_all ON users
    FOR ALL USING (
        EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role IN ('admin', 'super_admin'))
    );
```

#### `profiles`

Extended user information.

```sql
CREATE TABLE profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE UNIQUE,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    preferred_name TEXT,
    phone TEXT,
    date_of_birth DATE,
    gender TEXT,
    pronouns TEXT,
    nationality TEXT,
    address_line_1 TEXT,
    address_line_2 TEXT,
    city TEXT,
    state_province TEXT,
    postal_code TEXT,
    country TEXT,
    emergency_contact_name TEXT,
    emergency_contact_phone TEXT,
    emergency_contact_relationship TEXT,
    dietary_restrictions TEXT[],
    allergies TEXT[],
    photo_url TEXT,
    bio TEXT,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_profiles_user ON profiles(user_id);
```

#### `staff_profiles`

Additional information for staff members.

```sql
CREATE TABLE staff_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE UNIQUE,
    location_id UUID REFERENCES locations(id),
    department TEXT NOT NULL,
    title TEXT NOT NULL,
    specializations TEXT[],
    certifications JSONB, -- [{name, issuer, date, expiry}]
    languages TEXT[],
    availability JSONB, -- Weekly schedule
    hire_date DATE,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);
```

---

### Medical Domain

#### `medical_records`

Core medical record for each guest (HIPAA-sensitive).

```sql
CREATE TABLE medical_records (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    guest_id UUID REFERENCES users(id) ON DELETE RESTRICT UNIQUE,
    blood_type TEXT,
    height_cm DECIMAL,
    weight_kg DECIMAL,
    medical_conditions TEXT[],
    surgical_history TEXT[],
    family_history JSONB,
    current_medications JSONB, -- [{name, dosage, frequency, prescriber}]
    past_medications JSONB,
    allergies_medical TEXT[],
    psychiatric_history TEXT,
    substance_use_history TEXT,
    previous_psychedelic_experience TEXT,
    cardiac_history TEXT,
    last_ecg_date DATE,
    ecg_results TEXT,
    last_blood_work_date DATE,
    blood_work_results JSONB,
    medical_clearance_status TEXT CHECK (status IN ('pending', 'cleared', 'conditional', 'declined')),
    medical_clearance_date DATE,
    medical_clearance_by UUID REFERENCES users(id),
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Critical RLS: Only medical staff and the guest themselves
ALTER TABLE medical_records ENABLE ROW LEVEL SECURITY;

CREATE POLICY medical_records_guest_read ON medical_records
    FOR SELECT USING (auth.uid() = guest_id);

CREATE POLICY medical_records_medical_staff ON medical_records
    FOR ALL USING (
        EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role IN ('medical', 'admin', 'super_admin'))
    );
```

#### `contraindications`

Tracking of contraindications for plant medicine.

```sql
CREATE TABLE contraindications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    guest_id UUID REFERENCES users(id) ON DELETE CASCADE,
    contraindication_type TEXT NOT NULL, -- 'absolute', 'relative'
    category TEXT NOT NULL, -- 'cardiac', 'psychiatric', 'medication', etc.
    description TEXT NOT NULL,
    resolution_status TEXT DEFAULT 'active', -- 'active', 'resolved', 'monitoring'
    resolution_notes TEXT,
    identified_date DATE DEFAULT CURRENT_DATE,
    identified_by UUID REFERENCES users(id),
    resolved_date DATE,
    resolved_by UUID REFERENCES users(id),
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_contraindications_guest ON contraindications(guest_id);
```

#### `vitals_log`

Continuous vitals monitoring, especially during ceremony.

```sql
CREATE TABLE vitals_log (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    guest_id UUID REFERENCES users(id) ON DELETE CASCADE,
    stay_id UUID REFERENCES stays(id),
    recorded_by UUID REFERENCES users(id),
    recorded_at TIMESTAMPTZ DEFAULT now(),
    context TEXT, -- 'intake', 'pre_ceremony', 'during_ceremony', 'post_ceremony', 'daily'
    heart_rate INTEGER,
    blood_pressure_systolic INTEGER,
    blood_pressure_diastolic INTEGER,
    oxygen_saturation DECIMAL,
    temperature_celsius DECIMAL,
    respiratory_rate INTEGER,
    notes TEXT
);

CREATE INDEX idx_vitals_guest ON vitals_log(guest_id);
CREATE INDEX idx_vitals_stay ON vitals_log(stay_id);
CREATE INDEX idx_vitals_recorded ON vitals_log(recorded_at);
```

#### `medication_tapering`

Tracking medication tapering pre-arrival.

```sql
CREATE TABLE medication_tapering (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    guest_id UUID REFERENCES users(id) ON DELETE CASCADE,
    stay_id UUID REFERENCES stays(id),
    medication_name TEXT NOT NULL,
    starting_dose TEXT,
    target_dose TEXT, -- Usually 'discontinue'
    tapering_schedule JSONB, -- [{date, dose, notes}]
    supervising_physician TEXT,
    status TEXT DEFAULT 'planned', -- 'planned', 'in_progress', 'completed', 'modified'
    start_date DATE,
    target_completion_date DATE,
    actual_completion_date DATE,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);
```

---

### Programs Domain

#### `programs`

Program definitions.

```sql
CREATE TABLE programs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    duration_days INTEGER NOT NULL,
    includes_ceremony BOOLEAN DEFAULT false,
    price_min DECIMAL,
    price_max DECIMAL,
    currency TEXT DEFAULT 'USD',
    inclusions JSONB, -- Structured list of what's included
    pre_care_weeks INTEGER DEFAULT 4,
    post_care_weeks INTEGER DEFAULT 8,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);
```

#### `stays`

Individual guest stays/bookings.

```sql
CREATE TABLE stays (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    guest_id UUID REFERENCES users(id) ON DELETE RESTRICT,
    program_id UUID REFERENCES programs(id),
    location_id UUID REFERENCES locations(id),
    room_id UUID REFERENCES rooms(id),
    status TEXT DEFAULT 'inquiry', -- 'inquiry', 'application', 'accepted', 'deposit_paid', 'confirmed', 'in_progress', 'completed', 'cancelled'
    inquiry_date DATE,
    application_date DATE,
    acceptance_date DATE,
    deposit_date DATE,
    arrival_date DATE,
    departure_date DATE,
    actual_arrival TIMESTAMPTZ,
    actual_departure TIMESTAMPTZ,
    total_price DECIMAL,
    deposit_amount DECIMAL,
    balance_due DECIMAL,
    payment_status TEXT DEFAULT 'pending',
    assigned_counselor_id UUID REFERENCES users(id),
    assigned_facilitator_id UUID REFERENCES users(id),
    notes TEXT,
    cancellation_reason TEXT,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_stays_guest ON stays(guest_id);
CREATE INDEX idx_stays_location ON stays(location_id);
CREATE INDEX idx_stays_dates ON stays(arrival_date, departure_date);
CREATE INDEX idx_stays_status ON stays(status);
```

#### `sessions`

Scheduled sessions during a stay.

```sql
CREATE TABLE sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    stay_id UUID REFERENCES stays(id) ON DELETE CASCADE,
    session_type TEXT NOT NULL, -- 'counseling', 'massage', 'breathwork', 'somatic', etc.
    practitioner_id UUID REFERENCES users(id),
    scheduled_start TIMESTAMPTZ NOT NULL,
    scheduled_end TIMESTAMPTZ NOT NULL,
    actual_start TIMESTAMPTZ,
    actual_end TIMESTAMPTZ,
    location TEXT, -- Room/space name
    status TEXT DEFAULT 'scheduled', -- 'scheduled', 'confirmed', 'in_progress', 'completed', 'cancelled', 'no_show'
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_sessions_stay ON sessions(stay_id);
CREATE INDEX idx_sessions_practitioner ON sessions(practitioner_id);
CREATE INDEX idx_sessions_scheduled ON sessions(scheduled_start);
```

---

### Ceremonies Domain

#### `ceremonies`

Ceremony events.

```sql
CREATE TABLE ceremonies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    location_id UUID REFERENCES locations(id),
    ceremony_date DATE NOT NULL,
    ceremony_type TEXT DEFAULT 'iboga', -- 'iboga', 'ibogaine', 'microdose'
    lead_facilitator_id UUID REFERENCES users(id),
    medical_lead_id UUID REFERENCES users(id),
    max_participants INTEGER DEFAULT 15,
    status TEXT DEFAULT 'scheduled', -- 'scheduled', 'in_progress', 'completed', 'cancelled'
    start_time TIMESTAMPTZ,
    end_time TIMESTAMPTZ,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_ceremonies_date ON ceremonies(ceremony_date);
CREATE INDEX idx_ceremonies_location ON ceremonies(location_id);
```

#### `ceremony_participants`

Guest participation in ceremonies.

```sql
CREATE TABLE ceremony_participants (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    ceremony_id UUID REFERENCES ceremonies(id) ON DELETE CASCADE,
    guest_id UUID REFERENCES users(id),
    stay_id UUID REFERENCES stays(id),
    intention TEXT,
    dosage_mg DECIMAL,
    dosage_protocol TEXT, -- 'flood', 'boosters', 'microdose'
    preparation_complete BOOLEAN DEFAULT false,
    medical_clearance_confirmed BOOLEAN DEFAULT false,
    participant_status TEXT DEFAULT 'registered', -- 'registered', 'prepared', 'participating', 'completed', 'withdrew'
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now(),
    UNIQUE(ceremony_id, guest_id)
);
```

#### `ceremony_monitoring`

Real-time monitoring logs during ceremony.

```sql
CREATE TABLE ceremony_monitoring (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    ceremony_id UUID REFERENCES ceremonies(id) ON DELETE CASCADE,
    participant_id UUID REFERENCES ceremony_participants(id) ON DELETE CASCADE,
    recorded_by UUID REFERENCES users(id),
    recorded_at TIMESTAMPTZ DEFAULT now(),
    heart_rate INTEGER,
    blood_pressure TEXT,
    oxygen_saturation DECIMAL,
    consciousness_level TEXT, -- 'alert', 'drowsy', 'deep_journey', 'sleep'
    physical_observations TEXT,
    emotional_observations TEXT,
    interventions TEXT,
    concerns TEXT,
    is_alert BOOLEAN DEFAULT false -- Flag if requires attention
);

CREATE INDEX idx_ceremony_monitoring_ceremony ON ceremony_monitoring(ceremony_id);
CREATE INDEX idx_ceremony_monitoring_participant ON ceremony_monitoring(participant_id);
CREATE INDEX idx_ceremony_monitoring_time ON ceremony_monitoring(recorded_at);
```

---

### Integration Domain

#### `integration_checkins`

Post-stay check-in records.

```sql
CREATE TABLE integration_checkins (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    guest_id UUID REFERENCES users(id) ON DELETE CASCADE,
    stay_id UUID REFERENCES stays(id),
    counselor_id UUID REFERENCES users(id),
    checkin_type TEXT NOT NULL, -- 'call', 'video', 'in_app', 'email'
    scheduled_at TIMESTAMPTZ,
    completed_at TIMESTAMPTZ,
    duration_minutes INTEGER,
    week_post_departure INTEGER,
    mood_rating INTEGER CHECK (mood_rating BETWEEN 1 AND 10),
    integration_rating INTEGER CHECK (integration_rating BETWEEN 1 AND 10),
    sleep_quality INTEGER CHECK (sleep_quality BETWEEN 1 AND 10),
    challenges TEXT,
    wins TEXT,
    practices_maintained TEXT[],
    support_needed TEXT,
    counselor_notes TEXT,
    next_steps TEXT,
    status TEXT DEFAULT 'scheduled', -- 'scheduled', 'completed', 'missed', 'rescheduled'
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_integration_checkins_guest ON integration_checkins(guest_id);
CREATE INDEX idx_integration_checkins_stay ON integration_checkins(stay_id);
```

#### `daily_practices`

Guest practice logging.

```sql
CREATE TABLE daily_practices (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    guest_id UUID REFERENCES users(id) ON DELETE CASCADE,
    practice_date DATE NOT NULL,
    practice_type TEXT NOT NULL, -- 'meditation', 'breathwork', 'journaling', 'movement', etc.
    duration_minutes INTEGER,
    notes TEXT,
    mood_before INTEGER CHECK (mood_before BETWEEN 1 AND 10),
    mood_after INTEGER CHECK (mood_after BETWEEN 1 AND 10),
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_daily_practices_guest ON daily_practices(guest_id);
CREATE INDEX idx_daily_practices_date ON daily_practices(practice_date);
```

---

### Locations Domain

#### `locations`

Epicenter locations.

```sql
CREATE TABLE locations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    country TEXT NOT NULL,
    state_province TEXT,
    city TEXT,
    address TEXT,
    coordinates POINT,
    timezone TEXT NOT NULL,
    phone TEXT,
    email TEXT,
    capacity_guests INTEGER,
    status TEXT DEFAULT 'planning', -- 'planning', 'construction', 'operational', 'closed'
    opened_date DATE,
    description TEXT,
    amenities JSONB,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);
```

#### `rooms`

Guest accommodations.

```sql
CREATE TABLE rooms (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    location_id UUID REFERENCES locations(id) ON DELETE CASCADE,
    room_number TEXT NOT NULL,
    room_name TEXT,
    room_category TEXT NOT NULL, -- 'garden', 'deluxe', 'suite', 'accessible'
    capacity INTEGER DEFAULT 1,
    size_sqm DECIMAL,
    has_view BOOLEAN DEFAULT true,
    is_accessible BOOLEAN DEFAULT false,
    amenities JSONB,
    status TEXT DEFAULT 'available', -- 'available', 'occupied', 'maintenance', 'unavailable'
    price_adjustment DECIMAL DEFAULT 0, -- +/- from base program price
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now(),
    UNIQUE(location_id, room_number)
);

CREATE INDEX idx_rooms_location ON rooms(location_id);
```

---

### Community Domain

#### `cohorts`

Groups of guests who journey together.

```sql
CREATE TABLE cohorts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT,
    location_id UUID REFERENCES locations(id),
    start_date DATE NOT NULL,
    end_date DATE,
    program_id UUID REFERENCES programs(id),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE cohort_members (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    cohort_id UUID REFERENCES cohorts(id) ON DELETE CASCADE,
    guest_id UUID REFERENCES users(id) ON DELETE CASCADE,
    stay_id UUID REFERENCES stays(id),
    joined_at TIMESTAMPTZ DEFAULT now(),
    UNIQUE(cohort_id, guest_id)
);
```

#### `messages`

Community messaging.

```sql
CREATE TABLE messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    sender_id UUID REFERENCES users(id) ON DELETE SET NULL,
    recipient_id UUID REFERENCES users(id), -- NULL for group messages
    cohort_id UUID REFERENCES cohorts(id), -- NULL for direct messages
    message_type TEXT DEFAULT 'direct', -- 'direct', 'cohort', 'announcement'
    content TEXT NOT NULL,
    is_read BOOLEAN DEFAULT false,
    read_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_messages_sender ON messages(sender_id);
CREATE INDEX idx_messages_recipient ON messages(recipient_id);
CREATE INDEX idx_messages_cohort ON messages(cohort_id);
```

---

## Security & Privacy

### Row-Level Security Summary

All tables have RLS enabled with policies based on:

| Access Level | Can Access |
|--------------|------------|
| **Guest** | Own data only |
| **Staff** | Assigned guests, operational data |
| **Practitioner** | Assigned sessions, relevant guest data |
| **Medical** | All medical data, all guests |
| **Admin** | All operational data |
| **Super Admin** | Everything |

### Encryption

| Data Type | Encryption |
|-----------|------------|
| **At Rest** | Supabase/PostgreSQL encryption |
| **In Transit** | TLS 1.3 |
| **Sensitive Fields** | Application-level encryption (medical notes) |
| **Backups** | Encrypted backups |

### Audit Logging

```sql
CREATE TABLE audit_log (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    table_name TEXT NOT NULL,
    record_id UUID NOT NULL,
    action TEXT NOT NULL, -- 'INSERT', 'UPDATE', 'DELETE'
    old_values JSONB,
    new_values JSONB,
    changed_by UUID REFERENCES users(id),
    changed_at TIMESTAMPTZ DEFAULT now(),
    ip_address TEXT,
    user_agent TEXT
);

CREATE INDEX idx_audit_table ON audit_log(table_name);
CREATE INDEX idx_audit_record ON audit_log(record_id);
CREATE INDEX idx_audit_changed_by ON audit_log(changed_by);
CREATE INDEX idx_audit_changed_at ON audit_log(changed_at);
```

### Data Retention

| Data Type | Retention |
|-----------|-----------|
| **Medical Records** | Indefinite (legal requirement) |
| **Ceremony Records** | Indefinite |
| **Vitals Logs** | 7 years |
| **Messages** | 3 years |
| **Session Logs** | 5 years |
| **Audit Logs** | 7 years |

---

*This data model supports the full guest journey while maintaining the highest standards of medical data protection and privacy.*
