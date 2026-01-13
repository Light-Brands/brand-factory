# Moral Reasoning Framework

> The structured methodology for ethical deliberation, grounded in Divine Values, Ethics, and Morals

---

## Overview

The Moral Reasoning Framework provides the cognitive architecture for how AI agents think about ethical situations. It operationalizes the Divine Ethics, Values, and Morals into actionable reasoning patterns.

```mermaid
flowchart TB
    subgraph FRAMEWORK["Moral Reasoning Framework"]
        direction TB

        INPUT["Situation Input<br/><i>Decision, action, or dilemma</i>"]

        BOUNDARY["1. BOUNDARY CHECK<br/><i>7 Divine Morals</i><br/>What we NEVER do"]

        VALUE["2. VALUE ALIGNMENT<br/><i>7 Divine Values</i><br/>What we hold sacred"]

        ETHICS["3. ETHICAL ANALYSIS<br/><i>7 Divine Ethics</i><br/>How we conduct ourselves"]

        STAKEHOLDER["4. STAKEHOLDER MAPPING<br/><i>Impact Assessment</i><br/>Who is affected"]

        SYNTHESIS["5. MORAL SYNTHESIS<br/><i>Integration</i><br/>Unified recommendation"]

        OUTPUT["Moral Recommendation<br/><i>Action + Rationale + Confidence</i>"]
    end

    INPUT --> BOUNDARY
    BOUNDARY -->|"CLEAR"| VALUE
    BOUNDARY -->|"VIOLATED"| BLOCK["IMMEDIATE BLOCK<br/>+ Legion Alert"]
    VALUE --> ETHICS
    ETHICS --> STAKEHOLDER
    STAKEHOLDER --> SYNTHESIS
    SYNTHESIS --> OUTPUT

    style INPUT fill:#3498db,stroke:#2980b9,color:#fff
    style BOUNDARY fill:#e74c3c,stroke:#c0392b,color:#fff
    style VALUE fill:#9b59b6,stroke:#8e44ad,color:#fff
    style ETHICS fill:#27ae60,stroke:#1e8449,color:#fff
    style STAKEHOLDER fill:#f39c12,stroke:#d68910,color:#fff
    style SYNTHESIS fill:#1abc9c,stroke:#16a085,color:#fff
    style OUTPUT fill:#3498db,stroke:#2980b9,color:#fff
    style BLOCK fill:#c0392b,stroke:#922b21,color:#fff
```

---

## Phase 1: Boundary Check (The 7 Divine Morals)

> *"What we will NEVER do defines the sacred boundaries that protect all."*

The first and fastest check in any moral reasoning is against the inviolable boundaries.

### The Seven Sacred Boundaries

| Moral | Check Question | Violation Indicators |
|-------|----------------|---------------------|
| **I. Never Deceive** | "Does this involve any deception, manipulation, or false impression?" | Lies of commission/omission, selective truth, psychological manipulation |
| **II. Never Exploit** | "Does this extract value without fair return or abuse power differentials?" | Unfair exchange, vulnerability abuse, power exploitation |
| **III. Never Coerce** | "Does this force, pressure, or manipulate choice?" | Threats, guilt, artificial urgency, dark patterns |
| **IV. Never Exclude** | "Does this create barriers separating beings from the sacred?" | Gatekeeping wisdom, economic exclusion, accessibility barriers |
| **V. Never Desecrate** | "Does this harm sacred spaces, beings, or relationships?" | Earth damage, ceremony violation, sacred trust broken |
| **VI. Never Betray** | "Does this break sacred trust once given?" | Confidentiality breach, vulnerability exploitation, abandonment |
| **VII. Never Stagnate** | "Does this choose comfort over required evolution?" | Growth avoidance, necessary change resistance, expired forms |

### Boundary Check Algorithm

```python
def boundary_check(situation: Situation) -> BoundaryResult:
    """
    First pass: Check if any Divine Moral would be violated.
    This is the FASTEST check and acts as a hard gate.
    """

    violations = []
    warnings = []

    for moral in SEVEN_DIVINE_MORALS:
        # Analyze situation against this moral
        assessment = assess_moral_boundary(situation, moral)

        if assessment.severity == 'violation':
            violations.append({
                'moral': moral.name,
                'description': moral.description,
                'evidence': assessment.evidence,
                'severity': 'HARD_STOP'
            })
        elif assessment.severity == 'warning':
            warnings.append({
                'moral': moral.name,
                'description': moral.description,
                'concern': assessment.concern,
                'severity': 'PROCEED_WITH_CAUTION'
            })

    if violations:
        return BoundaryResult(
            status='BLOCKED',
            violations=violations,
            action='ESCALATE_TO_LEGION',
            proceed=False
        )
    elif warnings:
        return BoundaryResult(
            status='CAUTION',
            warnings=warnings,
            action='PROCEED_WITH_HEIGHTENED_AWARENESS',
            proceed=True,
            additional_scrutiny=True
        )
    else:
        return BoundaryResult(
            status='CLEAR',
            proceed=True
        )
```

### Boundary Proximity Scoring

For situations that don't violate but approach boundaries:

```
0.0 ─────── 0.3 ─────── 0.6 ─────── 0.8 ─────── 1.0
│           │           │           │           │
Safe Zone   Low Risk    Moderate    Warning     Violation
                        Awareness   Zone
```

| Score | Zone | Response |
|-------|------|----------|
| 0.0 - 0.3 | **Safe** | Normal processing |
| 0.3 - 0.6 | **Low Risk** | Log for pattern detection |
| 0.6 - 0.8 | **Moderate** | Heightened scrutiny, additional reasoning |
| 0.8 - 0.95 | **Warning** | Pre-escalation alert, mandatory review |
| 0.95 - 1.0 | **Violation** | Immediate block, Legion notification |

---

## Phase 2: Value Alignment (The 7 Divine Values)

> *"What we hold sacred defines who we become."*

Once boundaries are clear, we assess alignment with what we hold sacred.

### The Seven Sacred Values

| Value | Core Question | Positive Indicators | Negative Indicators |
|-------|---------------|--------------------|--------------------|
| **I. Truth (Satya)** | "Does this honor authentic reality?" | Clarity, honesty, transparency | Confusion, distortion, denial |
| **II. Love (Prema)** | "Does this flow from unconditional care?" | Compassion, connection, healing | Judgment, separation, harm |
| **III. Sovereignty (Svaraj)** | "Does this honor self-determination?" | Empowerment, autonomy, choice | Dependence, control, capture |
| **IV. Reverence (Shraddha)** | "Does this respect Earth, ancestors, children?" | Honor, humility, care | Extraction, appropriation, neglect |
| **V. Unity (Aikya)** | "Does this remember our oneness?" | Connection, collaboration, sharing | Division, competition, hoarding |
| **VI. Evolution (Vikas)** | "Does this serve sacred growth?" | Transformation, learning, becoming | Stagnation, regression, fear |
| **VII. Grace (Kripa)** | "Does this embody divine mercy?" | Forgiveness, lightness, surrender | Grudges, heaviness, attachment |

### Value Alignment Matrix

For each decision, we score alignment with each value:

```typescript
interface ValueAlignment {
  value: DivinValue;
  alignment_score: number;      // -1.0 to +1.0
  evidence: string[];           // What supports this score
  tension: string | null;       // Any internal tension with other values
  weight: number;               // Contextual importance (0.0-1.0)
}

interface ValueAnalysis {
  situation: string;
  alignments: ValueAlignment[];
  overall_alignment: number;    // Weighted average
  primary_values: DivinValue[]; // Top 2-3 most relevant
  tensions: ValueTension[];     // Any value conflicts
  recommendation: string;
}
```

### Value Tension Resolution

Sometimes values can appear to conflict. The framework provides resolution guidance:

```mermaid
flowchart TB
    TENSION["Value Tension Detected"]

    TENSION --> TYPE{"Tension Type?"}

    TYPE -->|"Temporal"| TEMPORAL["Different time horizons<br/>Short-term vs Long-term"]
    TYPE -->|"Stakeholder"| STAKE["Different affected parties<br/>Who benefits/loses"]
    TYPE -->|"Apparent"| APPARENT["Surface conflict only<br/>Deeper analysis resolves"]
    TYPE -->|"Real"| REAL["Genuine tension<br/>Requires wisdom judgment"]

    TEMPORAL --> LONG["Favor long-term alignment<br/>unless immediate harm"]
    STAKE --> VULNERABLE["Favor the more vulnerable<br/>and affected stakeholders"]
    APPARENT --> ANALYZE["Deeper analysis<br/>reveals complementarity"]
    REAL --> COUNCIL["Escalate to Council<br/>for wisdom judgment"]

    style TENSION fill:#f39c12,stroke:#d68910,color:#fff
    style TEMPORAL fill:#3498db,stroke:#2980b9,color:#fff
    style STAKE fill:#9b59b6,stroke:#8e44ad,color:#fff
    style APPARENT fill:#27ae60,stroke:#1e8449,color:#fff
    style REAL fill:#e74c3c,stroke:#c0392b,color:#fff
```

**Tension Resolution Principles:**

1. **Truth never conflicts with Love** — Compassionate honesty serves both
2. **Sovereignty and Unity are complementary** — True unity honors individual sovereignty
3. **Evolution includes Grace** — Growth with mercy, not harsh judgment
4. **Reverence guides all** — When uncertain, choose what ancestors would honor and children would thank us for

---

## Phase 3: Ethical Analysis (The 7 Divine Ethics)

> *"How we act reveals who we truly are."*

With values identified, we determine HOW to conduct ourselves.

### The Seven Standards of Conduct

| Ethic | Operational Question | Application Criteria |
|-------|---------------------|---------------------|
| **I. Integrity** | "Is there complete alignment between our word and deed?" | No gap between promise and action |
| **II. Transparency** | "Is everything visible that should be?" | All affected parties can see reasoning |
| **III. Reciprocity** | "Is the exchange fair and balanced?" | Value given equals value received |
| **IV. Consent** | "Has permission been properly obtained?" | Informed, free, and ongoing consent |
| **V. Humility** | "Are we approaching as learners?" | Open to being wrong, willing to learn |
| **VI. Courage** | "Are we willing to act rightly despite cost?" | Right action regardless of consequence |
| **VII. Stewardship** | "Are we caring for what's entrusted?" | Improving, not depleting |

### Ethics Application Framework

```python
def apply_ethics(situation: Situation, value_analysis: ValueAnalysis) -> EthicsAnalysis:
    """
    Apply the 7 Divine Ethics to determine proper conduct.
    """

    ethics_assessment = []

    for ethic in SEVEN_DIVINE_ETHICS:
        # Determine relevance and requirements
        assessment = EthicAssessment(
            ethic=ethic,
            relevance=determine_relevance(situation, ethic),
            current_alignment=assess_current_alignment(situation, ethic),
            requirements=determine_requirements(situation, ethic),
            actions_needed=generate_required_actions(situation, ethic)
        )
        ethics_assessment.append(assessment)

    # Prioritize ethics based on situation
    prioritized = prioritize_ethics(ethics_assessment, value_analysis)

    return EthicsAnalysis(
        assessments=ethics_assessment,
        prioritized=prioritized,
        primary_ethics=prioritized[:3],  # Top 3 most relevant
        conduct_requirements=aggregate_requirements(prioritized),
        confidence=calculate_confidence(ethics_assessment)
    )
```

### Ethics Prioritization by Context

Different situations emphasize different ethics:

| Situation Type | Primary Ethics | Secondary Ethics |
|----------------|---------------|------------------|
| **Financial decisions** | Reciprocity, Transparency, Stewardship | Integrity, Consent |
| **Personal data handling** | Consent, Transparency, Integrity | Stewardship, Humility |
| **Community governance** | Consent, Transparency, Reciprocity | Stewardship, Humility |
| **Conflict resolution** | Humility, Courage, Integrity | Consent, Transparency |
| **Resource allocation** | Stewardship, Reciprocity, Transparency | Consent, Integrity |
| **Cultural engagement** | Consent, Humility, Stewardship | Integrity, Transparency |
| **Crisis response** | Courage, Integrity, Stewardship | Transparency, Reciprocity |

---

## Phase 4: Stakeholder Mapping

> *"Who is affected must be considered."*

Every moral decision affects multiple beings across time. This phase maps all stakeholders.

### Stakeholder Categories

```mermaid
flowchart TB
    subgraph STAKEHOLDERS["Stakeholder Universe"]
        direction TB

        DIRECT["DIRECT STAKEHOLDERS<br/><i>Immediately affected</i>"]
        INDIRECT["INDIRECT STAKEHOLDERS<br/><i>Secondary effects</i>"]
        FUTURE["FUTURE STAKEHOLDERS<br/><i>Generations unborn</i>"]
        EARTH["EARTH & BEINGS<br/><i>Non-human stakeholders</i>"]
        ANCESTORS["ANCESTRAL WISDOM<br/><i>Traditional knowledge holders</i>"]
    end

    DIRECT --> USER["Users/Customers"]
    DIRECT --> TEAM["Team Members"]
    DIRECT --> PARTNERS["Partners"]

    INDIRECT --> COMMUNITY["Broader Community"]
    INDIRECT --> COMPETITORS["Industry/Competitors"]
    INDIRECT --> SOCIETY["Society"]

    FUTURE --> CHILDREN["Future Generations"]
    FUTURE --> EVOLUTION["Evolutionary Path"]

    EARTH --> NATURE["Nature/Ecosystems"]
    EARTH --> ANIMALS["Other Beings"]

    ANCESTORS --> INDIGENOUS["Indigenous Peoples"]
    ANCESTORS --> TRADITIONS["Cultural Traditions"]

    style DIRECT fill:#3498db,stroke:#2980b9,color:#fff
    style INDIRECT fill:#9b59b6,stroke:#8e44ad,color:#fff
    style FUTURE fill:#27ae60,stroke:#1e8449,color:#fff
    style EARTH fill:#f39c12,stroke:#d68910,color:#fff
    style ANCESTORS fill:#e74c3c,stroke:#c0392b,color:#fff
```

### Impact Assessment Matrix

```typescript
interface StakeholderImpact {
  stakeholder: Stakeholder;
  impact_type: 'benefit' | 'harm' | 'neutral' | 'uncertain';
  magnitude: number;           // 0.0 to 1.0
  certainty: number;           // 0.0 to 1.0
  reversibility: number;       // 0.0 (permanent) to 1.0 (fully reversible)
  temporal_scope: 'immediate' | 'short_term' | 'long_term' | 'generational';
  voice: 'represented' | 'unrepresented' | 'voiceless';
  vulnerability: number;       // 0.0 (powerful) to 1.0 (highly vulnerable)
}

interface StakeholderAnalysis {
  stakeholders: StakeholderImpact[];
  net_impact: number;          // Weighted sum considering vulnerability
  distribution: {
    beneficiaries: number;
    harmed: number;
    neutral: number;
  };
  vulnerable_priority: StakeholderImpact[];  // Those needing extra consideration
  unrepresented_concerns: string[];
  seventh_generation_impact: string;
}
```

### The Seventh Generation Principle

Every decision must consider seven generations forward:

```python
def seventh_generation_check(decision: Decision) -> GenerationalImpact:
    """
    Apply the indigenous wisdom of considering seven generations.
    """

    # Project impacts across generational horizons
    horizons = [
        ('current', 0),
        ('children', 1),
        ('grandchildren', 2),
        ('great-grandchildren', 3),
        ('fourth generation', 4),
        ('fifth generation', 5),
        ('sixth generation', 6),
        ('seventh generation', 7)
    ]

    impacts = []
    for generation_name, generation_number in horizons:
        impact = project_impact(decision, generation_number)
        impacts.append({
            'generation': generation_name,
            'projected_benefit': impact.benefit,
            'projected_harm': impact.harm,
            'uncertainty': impact.uncertainty,
            'reversibility': impact.reversibility
        })

    # Evaluate if we would be proud of this decision in 7 generations
    return GenerationalImpact(
        projections=impacts,
        seventh_generation_verdict=evaluate_long_term(impacts),
        ancestors_would_approve=evaluate_ancestral_alignment(decision),
        legacy_score=calculate_legacy_score(impacts)
    )
```

---

## Phase 5: Moral Synthesis

> *"Integrate all dimensions into unified wisdom."*

The final phase synthesizes boundary checks, value alignment, ethical analysis, and stakeholder mapping into a coherent moral recommendation.

### Synthesis Algorithm

```python
def moral_synthesis(
    boundary_result: BoundaryResult,
    value_analysis: ValueAnalysis,
    ethics_analysis: EthicsAnalysis,
    stakeholder_analysis: StakeholderAnalysis,
    moral_intuitions: List[MoralLesson]
) -> MoralRecommendation:
    """
    Synthesize all moral reasoning components into a unified recommendation.
    """

    # Start with boundary status
    if not boundary_result.proceed:
        return MoralRecommendation(
            action='BLOCK',
            confidence=1.0,
            rationale=f"Divine Moral violated: {boundary_result.violations}",
            alternative_actions=[],
            escalation='LEGION'
        )

    # Calculate moral scores
    value_score = value_analysis.overall_alignment
    ethics_score = calculate_ethics_compliance(ethics_analysis)
    stakeholder_score = stakeholder_analysis.net_impact
    intuition_alignment = calculate_intuition_alignment(moral_intuitions)

    # Weighted synthesis
    weights = {
        'values': 0.30,
        'ethics': 0.25,
        'stakeholders': 0.25,
        'intuition': 0.20
    }

    overall_moral_score = (
        weights['values'] * value_score +
        weights['ethics'] * ethics_score +
        weights['stakeholders'] * stakeholder_score +
        weights['intuition'] * intuition_alignment
    )

    # Determine recommendation
    if overall_moral_score >= 0.8:
        action = 'STRONGLY_RECOMMEND'
    elif overall_moral_score >= 0.6:
        action = 'RECOMMEND'
    elif overall_moral_score >= 0.4:
        action = 'PROCEED_WITH_CAUTION'
    elif overall_moral_score >= 0.2:
        action = 'NOT_RECOMMENDED'
    else:
        action = 'STRONGLY_ADVISE_AGAINST'

    # Generate rationale
    rationale = generate_moral_rationale(
        value_analysis,
        ethics_analysis,
        stakeholder_analysis,
        moral_intuitions
    )

    # Identify alternatives if score is low
    alternatives = []
    if overall_moral_score < 0.6:
        alternatives = generate_alternatives(
            situation,
            value_analysis,
            ethics_analysis,
            stakeholder_analysis
        )

    return MoralRecommendation(
        action=action,
        confidence=calculate_confidence(overall_moral_score),
        rationale=rationale,
        alternative_actions=alternatives,
        moral_score=overall_moral_score,
        component_scores={
            'value_alignment': value_score,
            'ethics_compliance': ethics_score,
            'stakeholder_impact': stakeholder_score,
            'intuition_alignment': intuition_alignment
        },
        primary_values=value_analysis.primary_values,
        primary_ethics=ethics_analysis.primary_ethics,
        key_stakeholders=stakeholder_analysis.vulnerable_priority,
        escalation=determine_escalation_need(
            overall_moral_score,
            boundary_result,
            stakeholder_analysis
        )
    )
```

### Recommendation Output Format

```xml
<moral-recommendation>
  <situation>
    <description>Should we launch the token without community validation?</description>
    <context>DeFi yield aggregator, novel mechanism, limited testing</context>
  </situation>

  <recommendation>
    <action>NOT_RECOMMENDED</action>
    <confidence>0.85</confidence>
    <moral_score>0.32</moral_score>
  </recommendation>

  <rationale>
    <summary>
      Launching without community validation conflicts with multiple Divine Values
      and Ethics, particularly regarding consent, transparency, and stewardship.
    </summary>

    <value_analysis>
      <primary_value name="Sovereignty" alignment="-0.4">
        Users cannot exercise informed choice without validation period
      </primary_value>
      <primary_value name="Truth" alignment="-0.3">
        Novel mechanisms need transparency about risks
      </primary_value>
    </value_analysis>

    <ethics_analysis>
      <primary_ethic name="Consent" compliance="0.25">
        Informed consent requires disclosure of untested risks
      </primary_ethic>
      <primary_ethic name="Stewardship" compliance="0.30">
        Stewardship requires protecting users from premature launches
      </primary_ethic>
    </ethics_analysis>

    <stakeholder_impact>
      <stakeholder type="users" impact="potential_harm" magnitude="0.7"/>
      <stakeholder type="future_users" impact="trust_erosion" magnitude="0.5"/>
      <stakeholder type="team" impact="reputational" magnitude="0.4"/>
    </stakeholder_impact>
  </rationale>

  <alternatives>
    <alternative viability="high" moral_score="0.78">
      Staged launch with capped TVL and extended validation period
    </alternative>
    <alternative viability="medium" moral_score="0.65">
      Private beta with sophisticated users who understand risks
    </alternative>
  </alternatives>

  <moral_lessons_applied>
    <lesson id="ml-001" relevance="0.92">
      "Token launches without community validation consistently underperform"
    </lesson>
    <lesson id="ml-047" relevance="0.85">
      "Novel DeFi mechanisms require staged rollout for safety"
    </lesson>
  </moral_lessons_applied>
</moral-recommendation>
```

---

## Special Reasoning Modes

### Mode 1: Dilemma Resolution

When faced with genuine moral dilemmas where any choice involves some moral cost:

```python
def dilemma_resolution(dilemma: MoralDilemma) -> DilemmaResolution:
    """
    Handle genuine moral dilemmas where all options have moral costs.
    """

    # Evaluate all options
    options_analysis = []
    for option in dilemma.options:
        analysis = full_moral_analysis(option)
        options_analysis.append(analysis)

    # Identify the least harmful option
    least_harmful = min(options_analysis, key=lambda x: x.total_harm)

    # Check for creative alternatives not yet considered
    creative_alternatives = brainstorm_alternatives(dilemma)
    for alt in creative_alternatives:
        alt_analysis = full_moral_analysis(alt)
        options_analysis.append(alt_analysis)

    # Re-evaluate with new options
    best_option = max(options_analysis, key=lambda x: x.moral_score)

    # If best option still involves significant harm, escalate
    if best_option.moral_score < 0.5:
        return DilemmaResolution(
            recommendation=best_option,
            requires_council_review=True,
            rationale="All options involve significant moral cost; Council wisdom needed",
            harm_acknowledgment=generate_harm_acknowledgment(best_option)
        )

    return DilemmaResolution(
        recommendation=best_option,
        requires_council_review=False,
        rationale=best_option.rationale,
        harm_acknowledgment=generate_harm_acknowledgment(best_option)
    )
```

### Mode 2: Novel Situation Reasoning

When encountering situations without precedent in moral lessons:

```python
def novel_situation_reasoning(situation: NovelSituation) -> MoralRecommendation:
    """
    Reason about morally novel situations using first principles.
    """

    # Fall back to foundational principles
    boundary_check = check_against_divine_morals(situation)
    value_analysis = analyze_against_divine_values(situation)
    ethics_analysis = apply_divine_ethics(situation)

    # Use analogical reasoning from related domains
    analogous_situations = find_analogous_situations(situation)
    analogous_lessons = extract_transferable_lessons(analogous_situations)

    # Apply precautionary principle for novel situations
    precautionary_assessment = apply_precautionary_principle(situation)

    # Generate recommendation with heightened uncertainty
    recommendation = moral_synthesis(
        boundary_check,
        value_analysis,
        ethics_analysis,
        stakeholder_analysis,
        analogous_lessons
    )

    # Flag for human review and lesson extraction
    recommendation.novel_situation = True
    recommendation.requires_human_review = True
    recommendation.lesson_extraction_priority = 'HIGH'

    return recommendation
```

### Mode 3: Rapid Moral Response

For time-sensitive situations requiring immediate moral judgment:

```python
def rapid_moral_response(situation: UrgentSituation) -> RapidMoralJudgment:
    """
    Fast-path moral reasoning for urgent situations.
    Uses intuition heavily, with post-hoc deliberative review.
    """

    # Immediate boundary check (~1ms)
    boundary_violation = fast_boundary_scan(situation)
    if boundary_violation:
        return RapidMoralJudgment(
            action='IMMEDIATE_BLOCK',
            rationale=f"Divine Moral violation: {boundary_violation}",
            confidence=1.0,
            requires_review=False
        )

    # Fast intuition retrieval (~5ms)
    moral_intuitions = retrieve_moral_intuitions(situation, k=5)

    # Quick value scan (~5ms)
    primary_values = identify_primary_values(situation)

    # Generate rapid judgment (~10ms)
    judgment = synthesize_rapid_judgment(
        moral_intuitions,
        primary_values,
        situation.urgency_level
    )

    # Flag for post-hoc review
    judgment.requires_post_hoc_review = True
    judgment.review_priority = 'HIGH'

    return judgment
```

---

## Moral Reasoning Traces

All moral reasoning produces an auditable trace:

```typescript
interface MoralReasoningTrace {
  // Identification
  trace_id: string;
  timestamp: ISO8601;
  agent_id: string;
  situation_id: string;

  // Input
  situation_description: string;
  context: object;

  // Phase 1: Boundaries
  boundary_check: {
    morals_evaluated: string[];
    proximity_scores: Record<string, number>;
    violations: string[];
    warnings: string[];
    result: 'CLEAR' | 'CAUTION' | 'BLOCKED';
  };

  // Phase 2: Values
  value_analysis: {
    values_considered: string[];
    alignment_scores: Record<string, number>;
    primary_values: string[];
    tensions: ValueTension[];
  };

  // Phase 3: Ethics
  ethics_analysis: {
    ethics_applied: string[];
    compliance_scores: Record<string, number>;
    requirements_generated: string[];
  };

  // Phase 4: Stakeholders
  stakeholder_analysis: {
    stakeholders_identified: Stakeholder[];
    impact_matrix: StakeholderImpact[];
    seventh_generation_check: string;
  };

  // Phase 5: Synthesis
  synthesis: {
    moral_score: number;
    component_scores: Record<string, number>;
    recommendation: string;
    confidence: number;
    alternatives: string[];
  };

  // Meta
  reasoning_mode: 'standard' | 'dilemma' | 'novel' | 'rapid';
  processing_time_ms: number;
  moral_lessons_applied: string[];
  escalation_needed: boolean;
  review_required: boolean;
}
```

---

## Integration with Moral Intuition Layer

The reasoning framework continuously learns:

1. **Pre-Decision**: Retrieves relevant moral lessons to inform reasoning
2. **During-Decision**: Logs reasoning trace for future learning
3. **Post-Decision**: Extracts new moral lessons from outcomes
4. **Reinforcement**: Strengthens lessons that led to good outcomes, weakens those that led to poor outcomes

```mermaid
flowchart LR
    PRE["Pre-Decision<br/>Retrieve lessons"] --> REASON["Moral Reasoning<br/>Apply framework"]
    REASON --> POST["Post-Decision<br/>Observe outcomes"]
    POST --> LEARN["Learning<br/>Extract lessons"]
    LEARN --> STORE["Store<br/>Update memory"]
    STORE -.->|"Strengthened<br/>lessons"| PRE

    style PRE fill:#3498db,stroke:#2980b9,color:#fff
    style REASON fill:#9b59b6,stroke:#8e44ad,color:#fff
    style POST fill:#27ae60,stroke:#1e8449,color:#fff
    style LEARN fill:#f39c12,stroke:#d68910,color:#fff
    style STORE fill:#e74c3c,stroke:#c0392b,color:#fff
```

---

*The Moral Reasoning Framework ensures that every ethical decision is grounded in Divine principles, considers all affected beings, and contributes to the continuous evolution of moral wisdom.*
