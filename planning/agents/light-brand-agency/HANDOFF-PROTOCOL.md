# Light Brand Agency Handoff Protocol

> Inter-Agent Communication Protocol (IACP) Specification for Light Brand Creation

---

## Protocol Overview

This document defines the standardized handoff protocols between Light Brand Agency agents and with external systems. All communications follow the IACP-1.0 specification with light brand-specific extensions.

### Protocol Version
- **Version:** IACP-1.0-LBA
- **Extension:** Light Brand Agency
- **Last Updated:** 2024

### Message ID Format
- **Request ID:** `LBA-REQ-{YYYY}-{MMDD}-{hash}`
- **Response ID:** `LBA-RES-{YYYY}-{MMDD}-{hash}`
- **Event ID:** `LBA-EVT-{YYYY}-{MMDD}-{hash}`
- **Brand ID:** `LB-{YYYY}-{NNN}`

---

## Handoff Types

### 1. Light Brand Intake

Entry point for new light brand requests.

```xml
<agent_handoff type="light_brand_intake" version="1.0">
  <metadata>
    <handoff_id>LBA-REQ-{YYYY}-{MMDD}-{hash}</handoff_id>
    <trace_id>{trace_id}</trace_id>
    <timestamp>{ISO8601}</timestamp>
    <priority>standard | expedited</priority>
  </metadata>

  <sender>
    <agent_id>gateway-agent | consulting-orchestrator | brand-proposal</agent_id>
    <domain>system | consulting | proposal</domain>
  </sender>

  <recipient>
    <agent_id>light-brand-architect</agent_id>
    <domain>light-brand-agency</domain>
  </recipient>

  <payload>
    <request_source>direct | referral | consulting | proposal</request_source>
    <client>
      <name>{string}</name>
      <company>{string}</company>
      <email>{string}</email>
      <phone>{string}</phone>
      <soul_calling>{string}</soul_calling>
    </client>
    <vision>
      <purpose>{string}</purpose>
      <audience>{string}</audience>
      <desired_impact>{string}</desired_impact>
      <unique_gifts>{string[]}</unique_gifts>
    </vision>
    <context>
      <existing_brand>{boolean}</existing_brand>
      <existing_materials>{string[]}</existing_materials>
      <budget_range>{string}</budget_range>
      <timeline_preference>{string}</timeline_preference>
    </context>
    <urgency>standard | expedited</urgency>
  </payload>

  <expect>
    <response_type>light_brand_intake_acknowledged</response_type>
    <timeout_ms>86400000</timeout_ms>
  </expect>
</agent_handoff>
```

---

### 2. Essence Extraction Assignment

Light Brand Architect to Soul Essence Extractor.

```xml
<agent_handoff type="essence_extraction_assignment" version="1.0">
  <metadata>
    <handoff_id>LBA-REQ-{YYYY}-{MMDD}-{hash}</handoff_id>
    <trace_id>{trace_id}</trace_id>
    <brand_id>LB-{YYYY}-{NNN}</brand_id>
    <timestamp>{ISO8601}</timestamp>
    <priority>standard | high</priority>
  </metadata>

  <sender>
    <agent_id>light-brand-architect</agent_id>
    <domain>light-brand-agency</domain>
  </sender>

  <recipient>
    <agent_id>soul-essence-extractor</agent_id>
    <domain>light-brand-agency</domain>
  </recipient>

  <payload>
    <client_profile>
      <name>{string}</name>
      <company>{string}</company>
      <soul_calling>{string}</soul_calling>
      <contact_info>
        <email>{string}</email>
        <phone>{string}</phone>
        <timezone>{string}</timezone>
      </contact_info>
    </client_profile>
    <vision>
      <purpose>{string}</purpose>
      <audience>{string}</audience>
      <desired_impact>{string}</desired_impact>
      <unique_gifts>{string[]}</unique_gifts>
    </vision>
    <readiness_scores>
      <soul_alignment>{1-10}</soul_alignment>
      <vision_clarity>{1-10}</vision_clarity>
      <commitment>{1-10}</commitment>
    </readiness_scores>
    <existing_context>
      <existing_brand>{boolean}</existing_brand>
      <journey_notes>{string}</journey_notes>
      <key_moments>{string[]}</key_moments>
    </existing_context>
  </payload>

  <expect>
    <response_type>essence_extraction_complete</response_type>
    <timeout_ms>604800000</timeout_ms><!-- 7 days -->
  </expect>
</agent_handoff>
```

### Essence Extraction Response

```xml
<agent_response type="essence_extraction_complete" version="1.0">
  <metadata>
    <response_id>LBA-RES-{YYYY}-{MMDD}-{hash}</response_id>
    <request_id>{original_request_id}</request_id>
    <brand_id>LB-{YYYY}-{NNN}</brand_id>
    <timestamp>{ISO8601}</timestamp>
  </metadata>

  <sender>
    <agent_id>soul-essence-extractor</agent_id>
    <domain>light-brand-agency</domain>
  </sender>

  <recipient>
    <agent_id>light-brand-architect</agent_id>
    <domain>light-brand-agency</domain>
  </recipient>

  <payload>
    <status>success | needs_more_sessions | blocked</status>
    <essence_report>
      <soul_purpose>{string}</soul_purpose>
      <divine_spark>{string}</divine_spark>
      <unique_gifts>
        <gift>
          <name>{string}</name>
          <origin>{string}</origin>
        </gift>
        <!-- additional gifts -->
      </unique_gifts>
      <origin_archaeology>
        <seed_moment>{string}</seed_moment>
        <wound_to_gift>{string}</wound_to_gift>
        <flow_state>{string}</flow_state>
      </origin_archaeology>
      <soul_signatures>
        <recurring_themes>{string[]}</recurring_themes>
        <natural_attractions>{string[]}</natural_attractions>
        <gratitude_patterns>{string[]}</gratitude_patterns>
      </soul_signatures>
      <collective_service>
        <world_need>{string}</world_need>
        <shift_created>{string}</shift_created>
        <who_becomes_possible>{string}</who_becomes_possible>
      </collective_service>
    </essence_report>
    <validation>
      <recognition_response>tears | deep_resonance | intellectual_agreement | unclear</recognition_response>
      <refinement_iterations>{number}</refinement_iterations>
      <founder_statement>{string}</founder_statement>
    </validation>
    <essence_anchors>
      <keywords>{string[]}</keywords>
      <energy_quality>{string}</energy_quality>
      <sacred_law_alignment>{number[]}</sacred_law_alignment>
      <frequency_indicators>{string[]}</frequency_indicators>
    </essence_anchors>
  </payload>
</agent_response>
```

---

### 3. Frequency Calibration Assignment

Light Brand Architect to Frequency Calibrator.

```xml
<agent_handoff type="frequency_calibration_assignment" version="1.0">
  <metadata>
    <handoff_id>LBA-REQ-{YYYY}-{MMDD}-{hash}</handoff_id>
    <trace_id>{trace_id}</trace_id>
    <brand_id>LB-{YYYY}-{NNN}</brand_id>
    <timestamp>{ISO8601}</timestamp>
    <priority>standard | high</priority>
  </metadata>

  <sender>
    <agent_id>light-brand-architect</agent_id>
    <domain>light-brand-agency</domain>
  </sender>

  <recipient>
    <agent_id>frequency-calibrator</agent_id>
    <domain>light-brand-agency</domain>
  </recipient>

  <payload>
    <essence_report>
      <soul_purpose>{string}</soul_purpose>
      <divine_spark>{string}</divine_spark>
      <unique_gifts>{object[]}</unique_gifts>
      <frequency_indicators>{string[]}</frequency_indicators>
    </essence_report>
    <vision>
      <intended_audience>{string}</intended_audience>
      <desired_impact>{string}</desired_impact>
    </vision>
  </payload>

  <expect>
    <response_type>frequency_calibration_complete</response_type>
    <timeout_ms>259200000</timeout_ms><!-- 3 days -->
  </expect>
</agent_handoff>
```

### Frequency Calibration Response

```xml
<agent_response type="frequency_calibration_complete" version="1.0">
  <metadata>
    <response_id>LBA-RES-{YYYY}-{MMDD}-{hash}</response_id>
    <request_id>{original_request_id}</request_id>
    <brand_id>LB-{YYYY}-{NNN}</brand_id>
    <timestamp>{ISO8601}</timestamp>
  </metadata>

  <sender>
    <agent_id>frequency-calibrator</agent_id>
    <domain>light-brand-agency</domain>
  </sender>

  <recipient>
    <agent_id>light-brand-architect</agent_id>
    <domain>light-brand-agency</domain>
  </recipient>

  <payload>
    <status>certified | needs_recalibration | blocked</status>
    <frequency_score>{1-10}</frequency_score>
    <certificate>
      <dimensional_scores>
        <soul_clarity>{1-10}</soul_clarity>
        <essence_purity>{1-10}</essence_purity>
        <intention_alignment>{1-10}</intention_alignment>
        <collective_resonance>{1-10}</collective_resonance>
      </dimensional_scores>
      <harmonic_profile>
        <primary_frequency>{string}</primary_frequency>
        <supporting_harmonics>{object[]}</supporting_harmonics>
        <unique_signature>{string}</unique_signature>
      </harmonic_profile>
      <interference_clearance>
        <fear_frequencies>{cleared | present | managed}</fear_frequencies>
        <scarcity_vibrations>{cleared | present | managed}</scarcity_vibrations>
        <ego_distortions>{cleared | present | managed}</ego_distortions>
        <external_noise>{cleared | present | managed}</external_noise>
      </interference_clearance>
      <stability_assessment>
        <baseline_established>{boolean}</baseline_established>
        <anchor_points>{string[]}</anchor_points>
        <stability_score>{1-10}</stability_score>
      </stability_assessment>
      <attraction_model>
        <intended_audience>{string}</intended_audience>
        <actual_attraction>{string}</actual_attraction>
        <alignment_score>{1-10}</alignment_score>
      </attraction_model>
    </certificate>
    <guidelines_for_expression>
      <color_frequencies>{string[]}</color_frequencies>
      <word_vibrations>{string[]}</word_vibrations>
      <avoid_frequencies>{string[]}</avoid_frequencies>
    </guidelines_for_expression>
    <maintenance_protocol>
      <check_frequency>{string}</check_frequency>
      <recalibration_triggers>{object[]}</recalibration_triggers>
      <warning_signs>{string[]}</warning_signs>
    </maintenance_protocol>
  </payload>
</agent_response>
```

---

### 4. Identity Weaving Assignment

Light Brand Architect to Luminous Identity Weaver.

```xml
<agent_handoff type="identity_weaving_assignment" version="1.0">
  <metadata>
    <handoff_id>LBA-REQ-{YYYY}-{MMDD}-{hash}</handoff_id>
    <trace_id>{trace_id}</trace_id>
    <brand_id>LB-{YYYY}-{NNN}</brand_id>
    <timestamp>{ISO8601}</timestamp>
    <priority>standard | high</priority>
  </metadata>

  <sender>
    <agent_id>light-brand-architect</agent_id>
    <domain>light-brand-agency</domain>
  </sender>

  <recipient>
    <agent_id>luminous-identity-weaver</agent_id>
    <domain>light-brand-agency</domain>
  </recipient>

  <payload>
    <essence_report>
      <soul_purpose>{string}</soul_purpose>
      <divine_spark>{string}</divine_spark>
      <unique_gifts>{object[]}</unique_gifts>
      <essence_anchors>{object}</essence_anchors>
    </essence_report>
    <frequency_certificate>
      <overall_score>{1-10}</overall_score>
      <harmonic_profile>{object}</harmonic_profile>
      <guidelines_for_expression>
        <color_frequencies>{string[]}</color_frequencies>
        <word_vibrations>{string[]}</word_vibrations>
        <avoid_frequencies>{string[]}</avoid_frequencies>
      </guidelines_for_expression>
    </frequency_certificate>
    <client_context>
      <preferences>{object}</preferences>
      <existing_materials>{boolean}</existing_materials>
      <existing_assets>{string[]}</existing_assets>
    </client_context>
  </payload>

  <expect>
    <response_type>identity_weaving_complete</response_type>
    <timeout_ms>604800000</timeout_ms><!-- 7 days -->
  </expect>
</agent_handoff>
```

### Identity Weaving Response

```xml
<agent_response type="identity_weaving_complete" version="1.0">
  <metadata>
    <response_id>LBA-RES-{YYYY}-{MMDD}-{hash}</response_id>
    <request_id>{original_request_id}</request_id>
    <brand_id>LB-{YYYY}-{NNN}</brand_id>
    <timestamp>{ISO8601}</timestamp>
  </metadata>

  <sender>
    <agent_id>luminous-identity-weaver</agent_id>
    <domain>light-brand-agency</domain>
  </sender>

  <recipient>
    <agent_id>light-brand-architect</agent_id>
    <domain>light-brand-agency</domain>
  </recipient>

  <payload>
    <status>complete | needs_revision</status>
    <identity_system>
      <visual_identity>
        <color_system>{object}</color_system>
        <symbol_logo>{object}</symbol_logo>
        <typography>{object}</typography>
        <visual_style>{object}</visual_style>
        <layout_principles>{object}</layout_principles>
      </visual_identity>
      <verbal_identity>
        <voice_definition>{object}</voice_definition>
        <messaging_architecture>{object}</messaging_architecture>
        <invocation_phrases>{object}</invocation_phrases>
        <verbal_guidelines>{object}</verbal_guidelines>
      </verbal_identity>
      <application_templates>{object[]}</application_templates>
      <brand_book_reference>{string}</brand_book_reference>
    </identity_system>
    <light_test_results>
      <visual_radiance>{1-10}</visual_radiance>
      <verbal_resonance>{1-10}</verbal_resonance>
      <integration_coherence>{1-10}</integration_coherence>
    </light_test_results>
    <recognition_achieved>{boolean}</recognition_achieved>
    <founder_validated>{boolean}</founder_validated>
  </payload>
</agent_response>
```

---

### 5. Story Forging Assignment

Light Brand Architect to Sacred Story Forger.

```xml
<agent_handoff type="story_forging_assignment" version="1.0">
  <metadata>
    <handoff_id>LBA-REQ-{YYYY}-{MMDD}-{hash}</handoff_id>
    <trace_id>{trace_id}</trace_id>
    <brand_id>LB-{YYYY}-{NNN}</brand_id>
    <timestamp>{ISO8601}</timestamp>
    <priority>standard | high</priority>
  </metadata>

  <sender>
    <agent_id>light-brand-architect</agent_id>
    <domain>light-brand-agency</domain>
  </sender>

  <recipient>
    <agent_id>sacred-story-forger</agent_id>
    <domain>light-brand-agency</domain>
  </recipient>

  <payload>
    <essence_report>{object}</essence_report>
    <frequency_certificate>{object}</frequency_certificate>
    <identity_system>{object}</identity_system>
    <founder_journey>
      <key_moments>{object[]}</key_moments>
      <transformation_story>{string}</transformation_story>
      <why_now>{string}</why_now>
    </founder_journey>
  </payload>

  <expect>
    <response_type>story_forging_complete</response_type>
    <timeout_ms>604800000</timeout_ms><!-- 7 days -->
  </expect>
</agent_handoff>
```

---

### 6. Unity Building Assignment

Light Brand Architect to Unity Bridge Builder.

```xml
<agent_handoff type="unity_building_assignment" version="1.0">
  <metadata>
    <handoff_id>LBA-REQ-{YYYY}-{MMDD}-{hash}</handoff_id>
    <trace_id>{trace_id}</trace_id>
    <brand_id>LB-{YYYY}-{NNN}</brand_id>
    <timestamp>{ISO8601}</timestamp>
    <priority>standard | high</priority>
  </metadata>

  <sender>
    <agent_id>light-brand-architect</agent_id>
    <domain>light-brand-agency</domain>
  </sender>

  <recipient>
    <agent_id>unity-bridge-builder</agent_id>
    <domain>light-brand-agency</domain>
  </recipient>

  <payload>
    <essence_report>{object}</essence_report>
    <frequency_certificate>{object}</frequency_certificate>
    <identity_system>{object}</identity_system>
    <story_package>{object}</story_package>
    <audience_profile>
      <primary_audience>{string}</primary_audience>
      <existing_communities>{string[]}</existing_communities>
      <gathering_patterns>{string}</gathering_patterns>
    </audience_profile>
  </payload>

  <expect>
    <response_type>unity_building_complete</response_type>
    <timeout_ms>604800000</timeout_ms><!-- 7 days -->
  </expect>
</agent_handoff>
```

---

### 7. Guardian Assessment Assignment

Light Brand Architect to Light Guardian.

```xml
<agent_handoff type="guardian_assessment_assignment" version="1.0">
  <metadata>
    <handoff_id>LBA-REQ-{YYYY}-{MMDD}-{hash}</handoff_id>
    <trace_id>{trace_id}</trace_id>
    <brand_id>LB-{YYYY}-{NNN}</brand_id>
    <timestamp>{ISO8601}</timestamp>
    <priority>standard | high</priority>
  </metadata>

  <sender>
    <agent_id>light-brand-architect</agent_id>
    <domain>light-brand-agency</domain>
  </sender>

  <recipient>
    <agent_id>light-guardian</agent_id>
    <domain>light-brand-agency</domain>
  </recipient>

  <payload>
    <assessment_type>initial_scan | comprehensive_review | protection_blessing</assessment_type>
    <brand_materials>
      <vision>{object}</vision>
      <essence_report>{object}</essence_report>
      <frequency_certificate>{object}</frequency_certificate>
      <identity_system>{object}</identity_system>
      <story_package>{object}</story_package>
      <unity_blueprint>{object}</unity_blueprint>
    </brand_materials>
    <ai_integration_plans>{object}</ai_integration_plans>
    <business_model>{object}</business_model>
  </payload>

  <expect>
    <response_type>guardian_assessment_complete</response_type>
    <timeout_ms>259200000</timeout_ms><!-- 3 days -->
  </expect>
</agent_handoff>
```

### Guardian Assessment Response

```xml
<agent_response type="guardian_assessment_complete" version="1.0">
  <metadata>
    <response_id>LBA-RES-{YYYY}-{MMDD}-{hash}</response_id>
    <request_id>{original_request_id}</request_id>
    <brand_id>LB-{YYYY}-{NNN}</brand_id>
    <timestamp>{ISO8601}</timestamp>
  </metadata>

  <sender>
    <agent_id>light-guardian</agent_id>
    <domain>light-brand-agency</domain>
  </sender>

  <recipient>
    <agent_id>light-brand-architect</agent_id>
    <domain>light-brand-agency</domain>
  </recipient>

  <payload>
    <assessment>
      <ethical_scores>
        <soul_authenticity>{1-10}</soul_authenticity>
        <frequency_integrity>{1-10}</frequency_integrity>
        <expression_honesty>{1-10}</expression_honesty>
        <community_ethics>{1-10}</community_ethics>
        <ai_ethics>{1-10}</ai_ethics>
        <collective_service>{1-10}</collective_service>
      </ethical_scores>
      <overall_score>{1-10}</overall_score>
      <shadow_scan>
        <ego_patterns>{object}</ego_patterns>
        <manipulation_patterns>{object}</manipulation_patterns>
        <extraction_patterns>{object}</extraction_patterns>
        <power_patterns>{object}</power_patterns>
      </shadow_scan>
      <ai_integration_review>
        <ethical_use_verified>{boolean}</ethical_use_verified>
        <transparency_confirmed>{boolean}</transparency_confirmed>
        <human_oversight_present>{boolean}</human_oversight_present>
        <manipulation_automation_absent>{boolean}</manipulation_automation_absent>
      </ai_integration_review>
      <recommendations>
        <must_address>{string[]}</must_address>
        <should_consider>{string[]}</should_consider>
        <future_watch>{string[]}</future_watch>
      </recommendations>
      <clearance>
        <status>cleared | conditional | blocked</status>
        <conditions>{string[]}</conditions>
        <blocking_reasons>{string[]}</blocking_reasons>
      </clearance>
    </assessment>
    <protection_blessing>
      <blessing_applied>{boolean}</blessing_applied>
      <blessing_date>{ISO8601}</blessing_date>
      <protection_protocols>{string[]}</protection_protocols>
    </protection_blessing>
    <ongoing_vigilance>
      <monitoring_frequency>{string}</monitoring_frequency>
      <warning_triggers>{string[]}</warning_triggers>
      <intervention_protocols>{string[]}</intervention_protocols>
    </ongoing_vigilance>
  </payload>
</agent_response>
```

---

### 8. Council Submission

Light Brand Architect to Stewardship Council (via Council Liaison).

```xml
<agent_handoff type="council_submission" version="1.0">
  <metadata>
    <handoff_id>LBA-REQ-{YYYY}-{MMDD}-{hash}</handoff_id>
    <trace_id>{trace_id}</trace_id>
    <brand_id>LB-{YYYY}-{NNN}</brand_id>
    <timestamp>{ISO8601}</timestamp>
    <priority>standard | expedited</priority>
  </metadata>

  <sender>
    <agent_id>light-brand-architect</agent_id>
    <domain>light-brand-agency</domain>
  </sender>

  <recipient>
    <agent_id>council-liaison</agent_id>
    <domain>brand-proposal</domain>
  </recipient>

  <payload>
    <submission_type>light_brand_creation</submission_type>
    <brand_name>{string}</brand_name>
    <complete_package>
      <essence_report>{object}</essence_report>
      <frequency_certificate>{object}</frequency_certificate>
      <visual_identity>{object}</visual_identity>
      <verbal_identity>{object}</verbal_identity>
      <sacred_story>{object}</sacred_story>
      <unity_blueprint>{object}</unity_blueprint>
      <guardian_assessment>{object}</guardian_assessment>
    </complete_package>
    <self_assessment>
      <dimension_scores>
        <soul_alignment>{1-10}</soul_alignment>
        <frequency_resonance>{1-10}</frequency_resonance>
        <ethical_integrity>{1-10}</ethical_integrity>
        <unity_potential>{1-10}</unity_potential>
        <light_expression>{1-10}</light_expression>
        <story_portal>{1-10}</story_portal>
        <gaia_harmony>{1-10}</gaia_harmony>
        <decentralization>{1-10}</decentralization>
      </dimension_scores>
      <overall_score>{1-10}</overall_score>
      <notes>{string}</notes>
    </self_assessment>
  </payload>

  <expect>
    <response_type>council_evaluation_complete</response_type>
    <timeout_ms>604800000</timeout_ms><!-- 7 days -->
  </expect>
</agent_handoff>
```

---

## Status Events

### Light Brand Status Update

Broadcast to all agents during creation journey.

```xml
<agent_event type="light_brand_status" version="1.0">
  <metadata>
    <event_id>LBA-EVT-{YYYY}-{MMDD}-{hash}</event_id>
    <trace_id>{trace_id}</trace_id>
    <brand_id>LB-{YYYY}-{NNN}</brand_id>
    <timestamp>{ISO8601}</timestamp>
  </metadata>

  <sender>
    <agent_id>light-brand-architect</agent_id>
    <domain>light-brand-agency</domain>
  </sender>

  <recipients>all-light-brand-agents</recipients>

  <event>
    <event_type>status_update | milestone | alert | completion</event_type>
    <status>intake | essence-work | frequency-calibration | identity-weaving | story-forging | unity-building | guardian-review | council-review | approved | birthed</status>
    <current_phase>{string}</current_phase>
    <progress_percent>{0-100}</progress_percent>
    <next_milestone>{string}</next_milestone>
    <action_required>{boolean}</action_required>
    <assigned_agent>{agent_id}</assigned_agent>
    <notes>{string}</notes>
  </event>
</agent_event>
```

---

## Cross-Domain Communications

### To Consulting Services

```xml
<agent_handoff type="cross_domain_request" version="1.0">
  <metadata>
    <handoff_id>LBA-REQ-{YYYY}-{MMDD}-{hash}</handoff_id>
    <trace_id>{trace_id}</trace_id>
    <timestamp>{ISO8601}</timestamp>
    <cross_domain>true</cross_domain>
  </metadata>

  <sender>
    <agent_id>light-brand-architect</agent_id>
    <domain>light-brand-agency</domain>
  </sender>

  <recipient>
    <agent_id>consulting-orchestrator | client-success</agent_id>
    <domain>consulting-services</domain>
  </recipient>

  <routing>
    <source_domain>light-brand-agency</source_domain>
    <target_domain>consulting-services</target_domain>
    <route_reason>client_support | ongoing_engagement</route_reason>
  </routing>

  <payload>
    <request_type>client_handoff | support_request | engagement_update</request_type>
    <brand_id>LB-{YYYY}-{NNN}</brand_id>
    <details>{object}</details>
  </payload>
</agent_handoff>
```

### To Legal Department

```xml
<agent_handoff type="cross_domain_request" version="1.0">
  <metadata>
    <handoff_id>LBA-REQ-{YYYY}-{MMDD}-{hash}</handoff_id>
    <trace_id>{trace_id}</trace_id>
    <timestamp>{ISO8601}</timestamp>
    <cross_domain>true</cross_domain>
  </metadata>

  <sender>
    <agent_id>light-brand-architect</agent_id>
    <domain>light-brand-agency</domain>
  </sender>

  <recipient>
    <agent_id>legal-orchestrator | ip-protector</agent_id>
    <domain>legal-department</domain>
  </recipient>

  <routing>
    <source_domain>light-brand-agency</source_domain>
    <target_domain>legal-department</target_domain>
    <route_reason>trademark | legal_protection | contract</route_reason>
  </routing>

  <payload>
    <request_type>trademark_search | ip_protection | contract_review</request_type>
    <brand_id>LB-{YYYY}-{NNN}</brand_id>
    <brand_name>{string}</brand_name>
    <assets_to_protect>{object}</assets_to_protect>
    <urgency>standard | high</urgency>
  </payload>
</agent_handoff>
```

---

## Error Handling

### Error Response

```xml
<agent_error type="handoff_error" version="1.0">
  <metadata>
    <error_id>LBA-ERR-{YYYY}-{MMDD}-{hash}</error_id>
    <original_request_id>{request_id}</original_request_id>
    <brand_id>LB-{YYYY}-{NNN}</brand_id>
    <timestamp>{ISO8601}</timestamp>
  </metadata>

  <sender>
    <agent_id>{agent_id}</agent_id>
    <domain>light-brand-agency</domain>
  </sender>

  <recipient>
    <agent_id>{original_sender}</agent_id>
    <domain>{domain}</domain>
  </recipient>

  <error>
    <code>
      LBA-001 | <!-- Invalid request format -->
      LBA-002 | <!-- Missing required fields -->
      LBA-003 | <!-- Brand not found -->
      LBA-004 | <!-- Agent unavailable -->
      LBA-005 | <!-- Ethical violation detected -->
      LBA-006 | <!-- Frequency threshold not met -->
      LBA-007 | <!-- Council rejection -->
      LBA-008 | <!-- Timeout exceeded -->
      LBA-009   <!-- Internal error -->
    </code>
    <message>{string}</message>
    <details>{object}</details>
    <recoverable>{boolean}</recoverable>
    <suggested_action>{string}</suggested_action>
  </error>
</agent_error>
```

---

## Acknowledgment Protocol

All handoffs must be acknowledged within timeout period:

```xml
<agent_ack type="handoff_acknowledged" version="1.0">
  <metadata>
    <ack_id>LBA-ACK-{YYYY}-{MMDD}-{hash}</ack_id>
    <request_id>{original_request_id}</request_id>
    <timestamp>{ISO8601}</timestamp>
  </metadata>

  <sender>
    <agent_id>{receiving_agent}</agent_id>
    <domain>light-brand-agency</domain>
  </sender>

  <recipient>
    <agent_id>{sending_agent}</agent_id>
    <domain>{domain}</domain>
  </recipient>

  <acknowledgment>
    <status>received | accepted | queued | rejected</status>
    <estimated_completion>{ISO8601}</estimated_completion>
    <notes>{string}</notes>
  </acknowledgment>
</agent_ack>
```

---

## Protocol Compliance

All Light Brand Agency agents must:

1. **Use standardized message formats** as defined in this protocol
2. **Include all required metadata** in every communication
3. **Acknowledge receipt** of all handoffs within 24 hours
4. **Report errors** using the standard error format
5. **Maintain trace continuity** by preserving trace_id across related messages
6. **Log all communications** to the Intuition Engine for learning

---

*"Clear communication is sacred communication. Every handoff carries the light of the brand we are creating. Let our protocols be as intentional as our creations."*
