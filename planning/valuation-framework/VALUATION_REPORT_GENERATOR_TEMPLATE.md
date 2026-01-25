# VALUATION REPORT GENERATOR TEMPLATE
## AI-Driven Business Valuation Report Framework

---

# INSTRUCTIONS FOR AI

You are generating a comprehensive business valuation report. Use the provided source documents (financial model, business plan, pitch deck, market research, etc.) to populate all sections below.

**Source Documents to Reference:**
- Financial Model/Projections spreadsheet
- Business Plan/Overview document
- Pitch Deck
- Market Research/TAM analysis
- Competitor Analysis
- Team bios/backgrounds
- Previous funding documentation (if applicable)

**Output Format:** Professional PDF-ready document (30-40 pages for FULL, 10-15 pages for BASIC)

**Tone:** Professional, objective, data-driven. Follow IPEV (International Private Equity Valuation) guidelines.

---

# FULL VALUATION REPORT

---

## COVER PAGE

```
VALUATION REPORT OF [COMPANY_NAME]

[COMPANY_TAGLINE]

[REPORT_DATE]

[VALUATION_FIRM_NAME]
[ADDRESS]
[PHONE]
[WEBSITE]
```

---

## TABLE OF CONTENTS

Generate based on final section structure.

---

## 1.0 COMPANY OVERVIEW

**AI Instructions:** Extract from business plan/pitch deck. Write 2-3 paragraphs covering:
- What the company does
- Target market/customer
- Unique value proposition
- Key differentiators from competitors
- Current stage and traction

```
[COMPANY_NAME] is a [BUSINESS_TYPE] designed specifically for [TARGET_MARKET]. It brings together [STAKEHOLDERS] who are interested in [VALUE_PROPOSITION]. Unlike [COMPETITORS], [COMPANY_NAME] focuses on [DIFFERENTIATION]. The platform/product offers unique features, such as [KEY_FEATURES]. Additionally, [COMPANY_NAME] integrates [SECONDARY_VALUE]. With projections showing [TRACTION_SUMMARY], [COMPANY_NAME] aims to be [VISION_STATEMENT].
```

### 1.1 Goals

**AI Instructions:** Extract founder information and company objectives.

```
The founders of [COMPANY_NAME], led by [FOUNDER_1_NAME] and [FOUNDER_2_NAME], aim to establish [COMPANY_NAME] as [MARKET_POSITION]. They seek to create [PRODUCT/SERVICE_DESCRIPTION] that [VALUE_DELIVERY].

Their goal is to [SHORT_TERM_GOAL], leveraging [STRATEGY]. They are focused on positioning [COMPANY_NAME] as [COMPETITIVE_POSITION].

In the long term, the founders intend to [LONG_TERM_VISION], with an emphasis on [STRATEGIC_PRIORITIES]. Their mission is to [MISSION_STATEMENT].
```

---

## 2.0 FORECASTS SUMMARY

**AI Instructions:** Extract from financial model. Create visualizations.

### 2.1 Future Profitability

**Data Required from Financial Model:**
| Metric | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 |
|--------|--------|--------|--------|--------|--------|
| Revenues | $[Y1_REV] | $[Y2_REV] | $[Y3_REV] | $[Y4_REV] | $[Y5_REV] |
| Cost | $[Y1_COST] | $[Y2_COST] | $[Y3_COST] | $[Y4_COST] | $[Y5_COST] |
| EBITDA | $[Y1_EBITDA] | $[Y2_EBITDA] | $[Y3_EBITDA] | $[Y4_EBITDA] | $[Y5_EBITDA] |

**Generate Chart:** Bar chart with Revenue (dark blue), Cost (light blue), EBITDA (line overlay)

### 2.2 Cash Forecast

**Data Required from Financial Model:**
| Metric | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 |
|--------|--------|--------|--------|--------|--------|
| Free Cash Flow | $[Y1_FCF] | $[Y2_FCF] | $[Y3_FCF] | $[Y4_FCF] | $[Y5_FCF] |
| Free Cash Flow to Equity | $[Y1_FCFE] | $[Y2_FCFE] | $[Y3_FCFE] | $[Y4_FCFE] | $[Y5_FCFE] |

**Generate Chart:** Bar chart (FCF) with line overlay (FCFE)

---

## 3.0 VALUATION

**AI Instructions:** This section presents the final weighted valuation. Complete all method calculations in Sections 6-9 first, then populate this summary.

```
The valuation presented below is derived from the weighted average of multiple methods. Utilizing various methods is considered the best practice in a company valuation, as it allows for a more comprehensive and reliable assessment by examining the business from multiple perspectives. These methods adhere to the International Private Equity Valuation (IPEV) Guidelines, and each will be detailed further in the subsequent sections of the report.
```

### Valuation Summary Display

**Post-money Valuation:** $[WEIGHTED_VALUATION]

**Bounds:**
- Low Bound: $[LOW_BOUND]
- High Bound: $[HIGH_BOUND]

**9 Valuation Methods Results:**
| Method | Valuation | Weight |
|--------|-----------|--------|
| Scorecard | $[SCORECARD_VAL] | 20% |
| Checklist | $[CHECKLIST_VAL] | 20% |
| Cost Approach | $[COST_VAL] | 5% |
| Tiered Revenue VC | $[TIERED_VC_VAL] | 10% |
| Simple VC (Revenue) | $[REV_VC_VAL] | 7% |
| Simple VC (EBITDA) | $[EBITDA_VC_VAL] | 5% |
| Simple VC (Net Income) | $[NI_VC_VAL] | 3% |
| DCF with LTG | $[DCF_GROWTH_VAL] | 20% |
| DCF with Multiples | $[DCF_MULT_VAL] | 10% |

**Generate Chart:** Bar chart comparing all 9 method valuations with weight percentages below

---

## 4.0 CURRENT FUNDING ROUND

**AI Instructions:** Calculate equity percentages based on valuation and capital needed.

**Inputs:**
- Capital Needed: $[CAPITAL_NEEDED]
- Post-Money Valuation: $[POST_MONEY]
- Pre-Money Valuation: $[PRE_MONEY] = Post-Money - Capital Needed

**Calculations:**
```
Equity % (Median) = Capital Needed / Post-Money Valuation × 100
                  = $[CAPITAL_NEEDED] / $[POST_MONEY] × 100
                  = [EQUITY_PCT]%

Equity % (Low Bound) = Capital Needed / High Post-Money × 100
                     = [LOW_EQUITY_PCT]%

Equity % (High Bound) = Capital Needed / Low Post-Money × 100
                      = [HIGH_EQUITY_PCT]%
```

**Text:**
```
Below is the required capital amount and the corresponding equity percentage based on the valuation provided on the previous page, intended as a starting point for negotiations. The equity percentage linked to the investment is determined by the ratio of the investment to the post-money valuation. With a fixed investment amount, a lower pre-money valuation results in a higher equity stake, and conversely, a higher pre-money valuation results in a lower equity stake.
```

**Generate Visual:** Gauge charts showing equity percentage range

---

## 5.0 USE OF FUNDS

**AI Instructions:** Extract from financial model expense projections. Show 5-year cumulative spending breakdown.

**Text:**
```
Here is a breakdown of projected cumulated spending over the next 5 years.
```

### Financial Budgeting

**Data Required:**
| Category | 5-Year Amount | % of Total |
|----------|---------------|------------|
| SG&A Expenses | $[SGA_TOTAL] | [SGA_PCT]% |
| Cost of Goods Sold | $[COGS_TOTAL] | [COGS_PCT]% |
| Software Expenses | $[SOFTWARE_TOTAL] | [SOFTWARE_PCT]% |
| Interest Expense | $[INT_TOTAL] | [INT_PCT]% |

**Generate Charts:**
1. Donut chart: Expense category breakdown
2. Stacked bar chart: Year-by-year allocation (Office, Marketing, Salary)

---

## 6.0 PREDICTIVE ANALYSIS

**AI Instructions:** This section requires competitor data and statistical analysis. If competitor financial data is available, perform regression analysis. If not, use industry benchmarks and growth projections.

### 6.1 Competition Analysis

**AI Instructions:** Identify 3-5 comparable companies. Compare by features, user base, revenue model.

```
[COMPANY_NAME], much like [COMPETITOR_1], emphasizes [SHARED_TRAIT], but it strategically targets a niche market centered on [DIFFERENTIATION], contrasting [COMPETITOR_1]'s broader [COMPETITOR_SCOPE]. While [COMPETITOR_2] connects [COMPETITOR_2_USERS] for [COMPETITOR_2_PURPOSE], [COMPANY_NAME] reflects this by [COMPANY_APPROACH], forecasting substantial financial growth through [REVENUE_STRATEGY]. Drawing inspiration from [COMPETITOR_3]'s success with [COMPETITOR_3_METRIC], [COMPANY_NAME] plans to leverage [STRATEGY], aiming for significant growth through [GROWTH_CHANNELS].
```

### 6.2 Predicting Competition Forecast

**Methodology:** Exponential Growth Formula

```
Future Value = Present Value × (1 + r)^n

Where:
- Present Value = Current metric
- r = Growth rate per period (decimal)
- n = Number of periods
```

**Example Calculation:**
```
For [COMPETITOR]'s members in [FUTURE_QUARTER]:
Present Value ([CURRENT_QUARTER]): [VALUE] million
Growth Rate: [RATE]% per quarter
n: [PERIODS] quarters ahead

Future Value = [VALUE] × (1 + [RATE])^[PERIODS] = [RESULT] million
```

### 6.3 Revenue Analysis

**AI Instructions:** If competitor financials available, run multiple linear regression.

**Formula:**
```
[COMPANY] Combined Variables = α + β₁×[COMP1]_combined + β₂×[COMP2]_Combined + β₃×[COMP3]_Combined + ε
```

**Statistical Validation Required:**
- T-stats > |2| for significance
- P-values < 0.05

**Generate Chart:** Line chart - Actual vs Predicted Revenue over time (quarterly)

### 6.4 Correlation Matrix

**Methodology:** Pearson Correlation Coefficient

```
r_xy = Σ(xᵢ - x̄)(yᵢ - ȳ) / √[Σ(xᵢ - x̄)² × Σ(yᵢ - ȳ)²]
```

**Interpretation:**
- Values close to 1.0 = strong positive correlation (move together)
- 0.95+ indicates high similarity to competitor trends

**Generate Chart:** Heat map correlation matrix

### 6.5 Machine Learning Approach

**AI Instructions:** Describe ML methodology for refining projections.

```
In this study, we aimed to refine [COMPANY_NAME]'s projected [METRIC] growth using historical growth patterns from [NUMBER] established [INDUSTRY] platforms: [COMP1], [COMP2], [COMP3], and [COMP4]. This involved developing a machine learning tool that captured the connection between time (in years and quarters) and [METRIC] growth on these platforms. The model was then used to adjust the initial forecasts provided for [COMPANY_NAME] to make more reliable predictions about future growth.

The machine learning model utilized historical data from the earlier quarters of [COMPETITORS]. For its simplicity and interpretability, a linear regression model with features such as year and quarter for each observation point was selected. Scaled data were used to train this model and normalize differences between various platforms.

The final results show that the refined projections are slightly more aggressive in their growth trajectory compared to the initial estimates, particularly in the later quarters. However, these adjustments were capped to ensure that the growth predictions did not exceed 125% of the original estimates, thus preventing any overly optimistic projections that might not be sustainable.
```

**Generate Chart:** Line chart - Refined projections over time (quarterly through Year 5)

---

## 7.0 QUALITATIVE METHODS

### 7.1 Scorecard Method (Weight: 20%)

**AI Instructions:** Determine industry average valuation for company stage/sector/region. Score each factor.

**Introduction:**
```
The Payne/Kauffman Valuation Method is a strategic approach designed to assess the value of early-stage startups by comparing them to regional industry averages. The Scorecard Method is a widely recognized approach for evaluating the valuation of early-stage startups by benchmarking them against the average valuation of similar companies in the same region and sector. By assigning weights to key factors that are critical to a startup's success, this method provides a structured way to assess a startup's potential value, making it particularly effective when traditional financial metrics may not yet be fully developed.
```

**Inputs Required:**
- Industry Average Valuation: $[INDUSTRY_AVG] (Source: PitchBook, Crunchbase, AngelList)
- Stage: [STAGE]
- Sector: [SECTOR]
- Region: [REGION]

**Factor Scoring:**
| Factor | Weight | Score (0.0-2.0) | Weighted Score |
|--------|--------|-----------------|----------------|
| Strength of the Team | 30% | [TEAM_SCORE] | [TEAM_WEIGHTED] |
| Size of the Opportunity | 25% | [OPP_SCORE] | [OPP_WEIGHTED] |
| Competitive Environment | 10% | [COMP_SCORE] | [COMP_WEIGHTED] |
| Strength & Protection of Product | 15% | [PROD_SCORE] | [PROD_WEIGHTED] |
| Strategic Relationships with Partners | 10% | [REL_SCORE] | [REL_WEIGHTED] |
| Funding Required | 10% | [FUND_SCORE] | [FUND_WEIGHTED] |
| **TOTAL** | 100% | | **[TOTAL_FACTOR]** |

**Scoring Guide for AI:**
- 0.0-0.5: Significantly below average (major concerns)
- 0.5-0.9: Below average (some weaknesses)
- 1.0: Average for stage/sector
- 1.1-1.5: Above average (notable strengths)
- 1.5-2.0: Significantly above average (exceptional)

**Calculation:**
```
SCORECARD VALUATION = Industry Average × Total Factor
                    = $[INDUSTRY_AVG] × [TOTAL_FACTOR]
                    = $[SCORECARD_VALUATION]
```

**Generate Charts:**
1. Bar chart: Factor scores vs Average (1.0 baseline)
2. Spider/Radar chart: All factors compared to industry average

---

### 7.2 Checklist Method (Weight: 20%)

**AI Instructions:** Determine maximum valuation for stage/sector. Score each criterion.

**Introduction:**
```
The Checklist Method, developed by Dave Berkus, a prominent angel investor from California, is a structured approach to valuing startups by assessing intangible building blocks that contribute to the overall valuation. This method is particularly useful for early-stage companies, as it breaks down the maximum possible valuation into five key criteria, each weighted according to its significance. The startup's qualitative traits are then evaluated against these criteria, and portions of the maximum valuation are awarded based on how closely the startup aligns with the ideal characteristics.
```

**Inputs Required:**
- Maximum Possible Valuation: $[MAX_VAL] (Source: YC standards, PitchBook sector data)

**Criteria Allocation:**
| Criterion | Weight | Max Value | Score (0-1) | Contribution |
|-----------|--------|-----------|-------------|--------------|
| Quality of Core Team | 30% | $[TEAM_MAX] | [TEAM_SCORE] | $[TEAM_CONTRIB] |
| Quality of Idea | 25% | $[IDEA_MAX] | [IDEA_SCORE] | $[IDEA_CONTRIB] |
| Product Roll-out & IP Protection | 20% | $[PROD_MAX] | [PROD_SCORE] | $[PROD_CONTRIB] |
| Strategic Relationships | 15% | $[REL_MAX] | [REL_SCORE] | $[REL_CONTRIB] |
| Operational Stage | 10% | $[OPS_MAX] | [OPS_SCORE] | $[OPS_CONTRIB] |
| **TOTAL** | 100% | $[MAX_VAL] | | **$[CHECKLIST_VAL]** |

**Sub-factor Scoring Guidance for AI:**

*Quality of Core Team:* Consider founder age (25-45 optimal), previous entrepreneurial success, time commitment, industry experience, technical expertise.

*Quality of Idea:* Consider market timing, problem severity, solution uniqueness, scalability potential.

*Product Roll-out & IP:* Consider MVP status, patents/IP, technical moat, user validation.

*Strategic Relationships:* Consider advisory board, industry partnerships, early customers, investor network.

*Operational Stage:* Consider revenue generation, user/customer traction, team building progress, market presence.

**Calculation:**
```
CHECKLIST VALUATION = Σ (Max_Value × Criterion_Weight × Criterion_Score)
                    = $[CHECKLIST_VALUATION]
```

**Generate Chart:** Bar chart - Criteria valuations (dark) vs Max valuations (light)

---

### 7.3 Cost Approach (Weight: 5%)

**AI Instructions:** Calculate replacement cost of all company assets.

**Introduction:**
```
The Cost Approach, often used for valuing startups, estimates the company's value based on the cost of reproducing or replacing its assets. This method begins by identifying and valuing all tangible and intangible assets, such as technology, intellectual property, and equipment. The replacement cost of these assets is then adjusted for depreciation and obsolescence to reflect their current value. Additionally, economic obsolescence, such as market conditions or competition, is considered to further adjust the valuation. The final valuation represents the sum of these adjusted costs, providing an estimate of what it would take to recreate the startup from scratch.
```

**Reasoning & Limitation:**
```
This method is particularly well-suited for startups with a clear set of assets that can be valued independently. The inclusion of elements such as an existing community and historical revenue provides a tangible basis for the valuation, reflecting the company's past investments and achievements. However, the Cost Approach may not fully capture the growth potential of the startup, as it primarily focuses on the present value of existing assets rather than future earnings or market positioning.
```

**Asset Valuation:**
| Asset Category | Replacement Cost | % of Total |
|----------------|-----------------|------------|
| MVP/Platform Development | $[MVP_COST] | [MVP_PCT]% |
| Existing Community/Users | $[COMMUNITY_COST] | [COMM_PCT]% |
| Partnerships/Sponsorships | $[PARTNER_COST] | [PARTNER_PCT]% |
| Historical Revenue | $[HIST_REV] | [REV_PCT]% |
| IP/Brand Value | $[IP_COST] | [IP_PCT]% |
| Other Assets | $[OTHER_COST] | [OTHER_PCT]% |
| **TOTAL** | **$[COST_VALUATION]** | 100% |

**Generate Chart:** Donut chart - Asset distribution by percentage

---

## 8.0 VC METHOD

**Introduction:**
```
The Venture Capital (VC) method is a widely-used approach among financial practitioners for valuing private companies, particularly startups. This method provides a valuation that ensures investors can achieve a predetermined return upon exit. The VC method is favored for its ability to align the potential exit value of a company with the risk profile and return expectations of venture capital investors, making it a key tool in the assessment of early-stage companies.

Once the exit value is determined, it is discounted back to the present value using a required rate of return (ROI). This discount rate is crucial, as it accounts for the time value of money and the high level of risk associated with early-stage investments. The required ROI is typically higher for early-stage companies, which are riskier and less predictable, and lower for more mature companies with established revenue streams.
```

### 8.1 Simple VC Method

**AI Instructions:** Calculate VC valuations using Revenue, EBITDA, and Net Income.

**Inputs Required:**
- Exit Year: Year [EXIT_YEAR] (typically 5)
- Required ROI: [ROI]% (typically 25-40% depending on stage)
- Multiple: [MULTIPLE]x (industry standard)
- Capital Needed: $[CAPITAL_NEEDED]

**From Financial Model - Final Year Projections:**
- Last Year Revenue: $[FINAL_REV]
- Last Year EBITDA: $[FINAL_EBITDA]
- Last Year Net Income: $[FINAL_NI]

**Revenue VC Valuation (Weight: 7%):**
```
Exit Value = $[FINAL_REV] × [MULTIPLE]x = $[REV_EXIT_VAL]
Post-Money = $[REV_EXIT_VAL] / (1 + [ROI])^[YEARS] = $[REV_POST_MONEY]
Pre-Money = $[REV_POST_MONEY] - $[CAPITAL_NEEDED] = $[REV_PRE_MONEY]
VC Equity % = [REV_EQUITY_PCT]%

REVENUE VC VALUATION: $[REV_VC_VALUATION]
```

**EBITDA VC Valuation (Weight: 5%):**
```
Exit Value = $[FINAL_EBITDA] × [MULTIPLE]x = $[EBITDA_EXIT_VAL]
Post-Money = $[EBITDA_EXIT_VAL] / (1 + [ROI])^[YEARS] = $[EBITDA_POST_MONEY]
Pre-Money = $[EBITDA_PRE_MONEY]
VC Equity % = [EBITDA_EQUITY_PCT]%

EBITDA VC VALUATION: $[EBITDA_VC_VALUATION]
```

**Net Income VC Valuation (Weight: 3%):**
```
Exit Value = $[FINAL_NI] × [MULTIPLE]x = $[NI_EXIT_VAL]
Post-Money = $[NI_POST_MONEY]
Pre-Money = $[NI_PRE_MONEY]
VC Equity % = [NI_EQUITY_PCT]%

NET INCOME VC VALUATION: $[NI_VC_VALUATION]
```

---

### 8.2 Tiered Revenue VC Method (Weight: 10%)

**AI Instructions:** Apply different multiples to different revenue streams.

**Introduction:**
```
The Tiered Revenue VC Method is a more nuanced approach to valuing startups, particularly useful in industries where revenue streams have varying levels of predictability, growth potential, and risk. This method involves applying different valuation multiples to distinct revenue streams based on their characteristics. The result is a more precise estimation of a startup's potential exit value, which is then discounted to present value using a required rate of return (ROI) that reflects the investment's risk profile.
```

**Revenue Classification:**
| Revenue Type | Final Year Amount | Multiple | Exit Value |
|--------------|-------------------|----------|------------|
| Recurring Revenue | $[RECURRING_REV] | [HIGH_MULT]x | $[RECURRING_EXIT] |
| Additional/Non-Recurring | $[ADDITIONAL_REV] | [LOW_MULT]x | $[ADDITIONAL_EXIT] |
| **TOTAL** | | | **$[TOTAL_EXIT_VAL]** |

**Calculation:**
```
Combined Exit Value = $[TOTAL_EXIT_VAL]
Post-Money = $[TOTAL_EXIT_VAL] / (1 + [ROI])^[YEARS] = $[TIERED_POST_MONEY]
Pre-Money = $[TIERED_PRE_MONEY]
VC Equity % = [TIERED_EQUITY_PCT]%

TIERED REVENUE VC VALUATION: $[TIERED_VC_VALUATION]
```

**Generate Chart:** Bar chart - Revenue growth by type over 5 years

---

## 9.0 DCF METHOD

### 9.1 DCF with Growth (Weight: 20%)

**AI Instructions:** Calculate DCF using terminal growth rate method.

**Introduction:**
```
The Discounted Cash Flow (DCF) method with growth is one of the most respected and widely used approaches for valuing companies, favored by academics and financial analysts alike. This method calculates a company's valuation as the present value of all future free cash flows to equity, taking into account the risks associated with the startup's industry, size, development stage, and profitability. By incorporating projected growth into the cash flows, this method provides a forward-looking estimate of a company's value, making it particularly useful for startups with significant growth potential.
```

**Assumptions:**
- Discount Rate: [DISCOUNT_RATE]% (based on stage, industry, risk profile)
- Terminal Growth Rate: [TERMINAL_GROWTH]% (typically 2-5%)

**EBITDA Projections:**
| Year | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 |
|------|--------|--------|--------|--------|--------|
| EBITDA | $[Y1_EBITDA] | $[Y2_EBITDA] | $[Y3_EBITDA] | $[Y4_EBITDA] | $[Y5_EBITDA] |

**Free Cash Flow to Equity Projections:**
| Year | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 |
|------|--------|--------|--------|--------|--------|
| FCFE | $[Y1_FCFE] | $[Y2_FCFE] | $[Y3_FCFE] | $[Y4_FCFE] | $[Y5_FCFE] |

**Calculation:**
```
Terminal Value = FCFE_Y5 × (1 + g) / (r - g)
               = $[Y5_FCFE] × (1 + [TERMINAL_GROWTH]) / ([DISCOUNT_RATE] - [TERMINAL_GROWTH])
               = $[TERMINAL_VALUE]

PV of Terminal Value = $[TERMINAL_VALUE] / (1 + [DISCOUNT_RATE])^5
                     = $[PV_TERMINAL]

PV of Cash Flows = Σ [FCFE_t / (1 + r)^t]
                 = $[PV_CASH_FLOWS]

DCF GROWTH POST-VALUATION = $[PV_CASH_FLOWS] + $[PV_TERMINAL]
                          = $[DCF_GROWTH_VALUATION]
```

**Generate Charts:**
1. Bar chart: EBITDA by year
2. Bar chart: Free Cash Flow to Equity by year

---

### 9.2 DCF with Multiples (RV) (Weight: 10%)

**AI Instructions:** Calculate DCF using EBITDA multiple for terminal value.

**Introduction:**
```
The Discounted Cash Flow (DCF) with Multiples method is a valuation approach that combines the traditional DCF model with the application of an industry-based multiple to calculate the Terminal Value (TV). This method is particularly useful when valuing startups or companies in industries where exit multiples are a well-established standard. By using an industry-based EBITDA multiple to estimate the Terminal Value, this approach provides a realistic and market-aligned valuation that considers both the company's future cash flows and its potential exit value.
```

**Inputs:**
- Final Year EBITDA: $[Y5_EBITDA]
- EBITDA Multiple: [EBITDA_MULT]x (industry benchmark)
- Discount Rate: [DISCOUNT_RATE]%

**Calculation:**
```
EBITDA Terminal Value = $[Y5_EBITDA] × [EBITDA_MULT]x
                      = $[EBITDA_TERMINAL]

PV of Terminal Value = $[EBITDA_TERMINAL] / (1 + [DISCOUNT_RATE])^5
                     = $[PV_EBITDA_TERMINAL]

DCF MULTIPLE POST-VALUATION = $[PV_CASH_FLOWS] + $[PV_EBITDA_TERMINAL]
                            = $[DCF_MULT_VALUATION]
```

**Generate Chart:** Combined bar (FCFE) and line (EBITDA) chart over 5 years

---

## 10.0 FINANCIAL PROJECTION

### Profitability Projection

**AI Instructions:** Extract complete P&L from financial model.

| Line Item | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 |
|-----------|--------|--------|--------|--------|--------|
| REVENUE | $[Y1_REV] | $[Y2_REV] | $[Y3_REV] | $[Y4_REV] | $[Y5_REV] |
| COST OF GOODS SOLD | $[Y1_COGS] | $[Y2_COGS] | $[Y3_COGS] | $[Y4_COGS] | $[Y5_COGS] |
| SG&A EXPENSES | $[Y1_SGA] | $[Y2_SGA] | $[Y3_SGA] | $[Y4_SGA] | $[Y5_SGA] |
| **EBITDA** | $[Y1_EBITDA] | $[Y2_EBITDA] | $[Y3_EBITDA] | $[Y4_EBITDA] | $[Y5_EBITDA] |
| SOFTWARE EXPENSES (D&A) | $[Y1_DA] | $[Y2_DA] | $[Y3_DA] | $[Y4_DA] | $[Y5_DA] |
| **EBIT** | $[Y1_EBIT] | $[Y2_EBIT] | $[Y3_EBIT] | $[Y4_EBIT] | $[Y5_EBIT] |
| INTEREST EXPENSE | $[Y1_INT] | $[Y2_INT] | $[Y3_INT] | $[Y4_INT] | $[Y5_INT] |
| **EBT** | $[Y1_EBT] | $[Y2_EBT] | $[Y3_EBT] | $[Y4_EBT] | $[Y5_EBT] |
| TAX EXPENSE | $[Y1_TAX] | $[Y2_TAX] | $[Y3_TAX] | $[Y4_TAX] | $[Y5_TAX] |
| **NET INCOME** | $[Y1_NI] | $[Y2_NI] | $[Y3_NI] | $[Y4_NI] | $[Y5_NI] |

### Cash Flow Projection

| Line Item | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 |
|-----------|--------|--------|--------|--------|--------|
| NET INCOME | $[Y1_NI] | $[Y2_NI] | $[Y3_NI] | $[Y4_NI] | $[Y5_NI] |
| D&A | $[Y1_DA] | $[Y2_DA] | $[Y3_DA] | $[Y4_DA] | $[Y5_DA] |
| CHANGE IN OUTSTANDING DEBT | $[Y1_DEBT] | $[Y2_DEBT] | $[Y3_DEBT] | $[Y4_DEBT] | $[Y5_DEBT] |
| **FREE CASH FLOW TO EQUITY** | $[Y1_FCFE] | $[Y2_FCFE] | $[Y3_FCFE] | $[Y4_FCFE] | $[Y5_FCFE] |
| EQUITY FUNDRAISING | $[Y1_EQUITY] | $[Y2_EQUITY] | $[Y3_EQUITY] | $[Y4_EQUITY] | $[Y5_EQUITY] |
| **FREE CASH FLOW** | $[Y1_FCF] | $[Y2_FCF] | $[Y3_FCF] | $[Y4_FCF] | $[Y5_FCF] |

---

## 11.0 CONCLUSION

**AI Instructions:** Summarize findings and provide investment thesis.

```
Based on a detailed analysis of [COMPANY_NAME]'s market position, growth potential, and financial forecasts, it is evident that the company is well-positioned to leverage the growing demand for [MARKET/INDUSTRY]. [COMPANY_NAME]'s unique focus on [DIFFERENTIATION] differentiates it from [COMPETITORS], providing a clear value proposition.

**Valuation for Fundraising:**

[COMPANY_NAME] is currently aiming to raise $[CAPITAL_NEEDED] in this funding round. This amount is strategically chosen to support the company's immediate goals, including [USE_OF_FUNDS]. The raise is designed to provide the necessary capital to reach critical milestones while minimizing dilution.

The raise is based on a post-money valuation of $[POST_MONEY_VAL], reflecting the company's current market position and growth potential. With this valuation, the $[CAPITAL_NEEDED] raise would result in an equity dilution of approximately [EQUITY_PCT]%.

This funding round is crucial for [COMPANY_NAME]'s growth strategy, enabling the company to [GROWTH_STRATEGY]. The capital will help [COMPANY_NAME] [SPECIFIC_USES], laying the groundwork for future growth and potential subsequent rounds of funding.

**Growth Rate:**

[COMPANY_NAME]'s growth trajectory is projected to be [GROWTH_CHARACTERIZATION] at [GROWTH_RATE]% per [PERIOD] in [YEAR_1] to [RATE_2]% in [YEAR_2] and [RATE_3]% in [YEAR_3], driven by its focused approach to [MARKET]. The company anticipates consistent [METRIC] expansion through [STRATEGIES]. By leveraging data-driven insights and predictive modeling, [COMPANY_NAME] is expected to see a significant increase in both engagement and revenue, ultimately solidifying its position as a leader in [INDUSTRY_SPACE].
```

---

## 12.0 APPENDIX

**AI Instructions:** Include detailed supporting materials.

### 12.1 Financial Projection - Revenue Growth
Quarterly revenue breakdown by stream (20 quarters)

### 12.2 Financial Projection - % in Total Revenue
Revenue stream percentage breakdown over time

### 12.3 Financial Projection - Expenses
Detailed quarterly expense breakdown

### 12.4 KOL/Marketing Cost Analysis
Industry benchmarks for customer acquisition costs

### 12.5 ARR Multiple Range
| ARR Range | ARR Multiple Range |
|-----------|-------------------|
| Less than $1 million | 1x to 3x |
| $1 million to $10 million | 2x to 4x |
| More than $10 million | 6x to 10x |

### 12.6 Sensitivity Analysis: Revenue to COGS
Matrix showing EBITDA at various Revenue/COGS combinations

### 12.7 Sensitivity Analysis: Revenue to Operational Cost
Matrix showing EBITDA at various Revenue/OpEx combinations

### 12.8 Ideal WACC Based on Interest Coverage Ratio
Table showing appropriate discount rates based on debt capacity

### 12.9 Predictive Analysis Revenue
Quarterly actual vs predicted revenue comparison

### 12.10 Predictive Analysis Members/Users
Quarterly user/member growth projections

---

# BASIC VERSION

For BASIC version, include only:
- Section 1.0 (abbreviated)
- Section 2.0
- Section 3.0 (4 methods only: Scorecard 30%, Checklist 30%, VC Revenue 20%, DCF Growth 20%)
- Section 4.0
- Section 5.0 (summary only)
- Section 10.0
- Section 11.0
- Abbreviated Appendix

---

# VALUATION WEIGHTS SUMMARY

## FULL Version (9 Methods)
| Method | Weight |
|--------|--------|
| Scorecard | 20% |
| Checklist | 20% |
| DCF with Growth | 20% |
| Tiered Revenue VC | 10% |
| DCF with Multiples | 10% |
| Simple VC (Revenue) | 7% |
| Cost Approach | 5% |
| Simple VC (EBITDA) | 5% |
| Simple VC (Net Income) | 3% |

## BASIC Version (4 Methods)
| Method | Weight |
|--------|--------|
| Scorecard | 30% |
| Checklist | 30% |
| Simple VC (Revenue) | 20% |
| DCF with Growth | 20% |

---

# INDUSTRY BENCHMARKS FOR AI REFERENCE

## Stage-Based Required Returns
| Stage | Typical ROI |
|-------|-------------|
| Pre-seed | 50-60% |
| Seed | 40-50% |
| Series A | 30-40% |
| Series B+ | 25-30% |

## Industry Average Valuations (Pre-Seed/Seed)
| Sector | Median Valuation |
|--------|-----------------|
| SaaS/Software | $5M |
| Fintech | $7M |
| Health Tech | $8M |
| Consumer | $3M |
| Marketplace | $5M |

## EBITDA Multiples
| Industry | Median Multiple |
|----------|-----------------|
| Software/SaaS | 15x |
| Consumer Tech | 10x |
| Fintech | 12x |
| Healthcare | 10x |
| E-commerce | 6x |

---

*Template Version 1.0 | Multi-Method Integrated Valuation Framework*
