# Business Valuation Methodology Template
## Integrated Multi-Method Valuation Framework

---

# OVERVIEW

This template provides a comprehensive, multi-method valuation framework following International Private Equity Valuation (IPEV) Guidelines. The methodology combines quantitative and qualitative approaches to produce a weighted-average valuation with confidence bounds.

---

# PART 1: FULL VALUATION REPORT TEMPLATE

## Document Structure (Target: 30-40 pages)

---

## SECTION 1: COMPANY OVERVIEW (2-3 pages)

### 1.0 Company Overview
**Purpose:** Establish context and narrative for the valuation

**Required Data Collection:**
- [ ] Company name, legal structure, founding date
- [ ] Mission statement / tagline
- [ ] Business model description (2-3 paragraphs)
- [ ] Core product/service offerings
- [ ] Target market and customer segments
- [ ] Unique value proposition
- [ ] Current operational status (pre-revenue, revenue-generating, profitable)

### 1.1 Goals
**Required Data Collection:**
- [ ] Founder names and backgrounds
- [ ] Short-term objectives (1-2 years)
- [ ] Long-term vision (5+ years)
- [ ] Key milestones achieved
- [ ] Planned milestones

**Template Text:**
```
[COMPANY_NAME] is a [BUSINESS_TYPE] designed specifically for [TARGET_MARKET].
It brings together [STAKEHOLDERS] who are interested in [VALUE_PROPOSITION].
Unlike [COMPETITORS], [COMPANY_NAME] focuses on [DIFFERENTIATION].
```

---

## SECTION 2: FORECASTS SUMMARY (2 pages)

### 2.1 Future Profitability
**Required Data:**
- [ ] 5-year Revenue projections (annual)
- [ ] 5-year Cost projections (annual)
- [ ] 5-year EBITDA projections (annual)

**Visualization Required:**
- Bar chart: Revenue vs Cost vs EBITDA (5-year timeline)

**Data Table Template:**
| Metric | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 |
|--------|--------|--------|--------|--------|--------|
| Revenue | $ | $ | $ | $ | $ |
| Cost | $ | $ | $ | $ | $ |
| EBITDA | $ | $ | $ | $ | $ |

### 2.2 Cash Forecast
**Required Data:**
- [ ] Free Cash Flow projections (5 years)
- [ ] Free Cash Flow to Equity projections (5 years)

**Visualization Required:**
- Line + Bar chart: FCF and FCFE over time

---

## SECTION 3: VALUATION SUMMARY (1-2 pages)

### 3.0 Valuation
**Output Display:**
- Post-money valuation (primary figure)
- Low bound / High bound range
- Pre-money valuation
- Capital needed
- Equity percentage range

**Visual Required:**
- Bar chart showing all 9 valuation method results
- Method weights displayed below chart

**Valuation Methods to Include:**
1. Scorecard Method (20%)
2. Checklist Method (20%)
3. Cost Approach (5%)
4. Tiered Revenue VC Method (10%)
5. Simple VC - Revenue (7%)
6. Simple VC - EBITDA (5%)
7. Simple VC - Net Income (3%)
8. DCF with Long-Term Growth (20%)
9. DCF with Multiples (10%)

**Calculation:**
```
Final Valuation = Σ (Method_Value × Method_Weight)
```

---

## SECTION 4: CURRENT FUNDING ROUND (1 page)

### 4.0 Current Funding Round
**Required Inputs:**
- [ ] Capital needed (investment amount)
- [ ] Calculated post-money valuation
- [ ] Pre-money valuation (post-money - capital needed)

**Calculations:**
```
Equity % = Capital Needed / Post-Money Valuation × 100

Low Equity % = Capital Needed / High Post-Money × 100
High Equity % = Capital Needed / Low Post-Money × 100
```

**Visual Required:**
- Gauge charts showing equity percentage range
- Clear display of pre/post money valuations

---

## SECTION 5: USE OF FUNDS (1-2 pages)

### 5.0 Use of Funds
**Required Data:**
- [ ] Expense categories (SG&A, COGS, Software, Interest, etc.)
- [ ] 5-year budget allocation
- [ ] Breakdown by function (Office, Marketing, Salary)

**Visualizations Required:**
- Donut chart: Expense category breakdown (%)
- Stacked bar chart: Annual allocation by function

**Standard Categories:**
| Category | % of Total | 5-Year Amount |
|----------|-----------|---------------|
| SG&A Expenses | % | $ |
| Cost of Goods Sold | % | $ |
| Software Expenses | % | $ |
| Interest Expense | % | $ |

---

## SECTION 6: PREDICTIVE ANALYSIS (6-8 pages)

### 6.1 Competition Analysis
**Required Data:**
- [ ] Identify 3-5 comparable companies/competitors
- [ ] Competitor metrics: users, revenue, market cap
- [ ] Competitive positioning narrative

**Template Analysis:**
```
[COMPANY] much like [COMPETITOR_1], emphasizes [SIMILARITY],
but it strategically targets [DIFFERENTIATION].
```

### 6.2 Predicting Competition Forecast
**Methodology:** Exponential Growth Formula
```
Future Value = Present Value × (1 + r)^n

Where:
- r = growth rate (decimal)
- n = number of periods
```

**Required Data:**
- [ ] Competitor historical growth rates
- [ ] Market growth projections

### 6.3 Revenue Analysis
**Methodology:** Multiple Linear Regression
```
Company_Variables = α + β₁×Competitor1 + β₂×Competitor2 + β₃×Competitor3 + ε
```

**Statistical Validation:**
- T-statistics > |2| for significance
- P-values < 0.05

**Visual Required:**
- Line chart: Actual vs Predicted revenue over time

### 6.4 Correlation Matrix
**Methodology:** Pearson Correlation Coefficient
```
r_xy = Σ(xᵢ - x̄)(yᵢ - ȳ) / √[Σ(xᵢ - x̄)² × Σ(yᵢ - ȳ)²]
```

**Interpretation:**
- Values close to 1.0 = strong positive correlation
- Values close to -1.0 = strong negative correlation
- Values near 0 = weak/no correlation

**Visual Required:**
- Heat map correlation matrix

### 6.5 Machine Learning Approach
**Purpose:** Refine projections using historical patterns from comparable companies

**Methodology:**
1. Collect historical data from established platforms
2. Train linear regression model on year/quarter features
3. Calculate growth adjustment factor
4. Apply adjustments (capped at 125% of original estimates)

**Visual Required:**
- Line chart: Refined membership/revenue projections

---

## SECTION 7: QUALITATIVE METHODS (5-6 pages)

### 7.1 Scorecard Method (20% weight)
**Base:** Regional industry average valuation for similar stage companies

**Evaluation Factors:**
| Factor | Weight | Score Range |
|--------|--------|-------------|
| Strength of Team | 30% | 0.0 - 2.0 |
| Size of Opportunity | 25% | 0.0 - 2.0 |
| Competitive Environment | 10% | 0.0 - 2.0 |
| Strength & Protection of Product | 15% | 0.0 - 2.0 |
| Strategic Relationships | 10% | 0.0 - 2.0 |
| Funding Required | 10% | 0.0 - 2.0 |

**Calculation:**
```
Total Factor = Σ (Factor_Score × Factor_Weight)
Scorecard Valuation = Industry_Average × Total_Factor
```

**Visual Required:**
- Spider/Radar chart comparing to industry average
- Bar chart showing factor scores

### 7.2 Checklist Method (20% weight)
**Base:** Maximum possible valuation for stage/sector

**Evaluation Criteria:**
| Criterion | Max Weight | Sub-factors to Score |
|-----------|------------|---------------------|
| Quality of Core Team | 30% | Age, experience, commitment, track record |
| Quality of Idea | 25% | Market fit, innovation, timing |
| Product Roll-out & IP | 20% | MVP status, patents, defensibility |
| Strategic Relationships | 15% | Partners, advisors, customers |
| Operational Stage | 10% | Revenue, traction, milestones |

**Calculation:**
```
Criterion_Value = Criterion_Score × Max_Valuation × Criterion_Weight
Checklist Valuation = Σ Criterion_Values
```

**Visual Required:**
- Bar chart: Criteria valuations vs max valuations

### 7.3 Cost Approach (5% weight)
**Purpose:** Estimate value based on asset replacement costs

**Asset Categories:**
| Asset | Replacement Cost |
|-------|-----------------|
| MVP/Platform Development | $ |
| Existing Community/Users | $ |
| Partnerships/Sponsorships | $ |
| Historical Revenue | $ |
| IP/Brand Value | $ |
| Other Assets | $ |

**Calculation:**
```
Cost Approach Valuation = Σ (Asset_Replacement_Costs)
```

**Visual Required:**
- Donut chart showing asset distribution

---

## SECTION 8: VC METHOD (6-8 pages)

### 8.1 Simple VC Method
**Required Inputs:**
- [ ] Last year projections: Revenue, EBITDA, Net Income
- [ ] Industry multiple (typically 3x-10x depending on sector)
- [ ] Required Rate of Return (ROI) - typically 25-40% for startups
- [ ] Investment horizon (years to exit)

**Formula:**
```
Exit Value = Last_Year_Metric × Multiple
Post-Money Valuation = Exit_Value / (1 + ROI)^n
Pre-Money Valuation = Post-Money - Capital_Needed
VC Equity % = Capital_Needed / Post-Money × 100
```

**Calculate for Three Metrics:**
1. **Revenue VC Valuation** (7% weight)
2. **EBITDA VC Valuation** (5% weight)
3. **Net Income VC Valuation** (3% weight)

### 8.2 Tiered Revenue VC Method (10% weight)
**Purpose:** Apply different multiples to different revenue streams

**Revenue Tiers:**
| Revenue Type | Multiple | Rationale |
|--------------|----------|-----------|
| Recurring Revenue (SaaS/subscriptions) | 8x-12x | Predictable, high retention |
| Non-Recurring/Additional Revenue | 3x-5x | Less predictable |

**Calculation:**
```
Exit Value = (Recurring_Revenue × High_Multiple) + (Additional_Revenue × Low_Multiple)
Post-Money = Exit_Value / (1 + ROI)^n
```

**Visual Required:**
- Bar chart: Revenue growth by tier over time

---

## SECTION 9: DCF METHOD (4-5 pages)

### 9.1 DCF with Growth (20% weight)
**Required Inputs:**
- [ ] Free Cash Flow to Equity projections (5 years)
- [ ] Discount Rate (WACC or required return) - typically 25-35% for startups
- [ ] Terminal Growth Rate - typically 2-5%

**Calculation:**
```
Terminal Value = FCF_Year5 × (1 + Terminal_Growth) / (Discount_Rate - Terminal_Growth)

PV of Terminal Value = Terminal_Value / (1 + Discount_Rate)^5

PV of Cash Flows = Σ [FCF_t / (1 + Discount_Rate)^t]

DCF Valuation = PV_of_Cash_Flows + PV_of_Terminal_Value
```

**Visuals Required:**
- Bar chart: EBITDA over time
- Bar chart: Free Cash Flow to Equity over time

### 9.2 DCF with Multiples (10% weight)
**Required Inputs:**
- [ ] Final year EBITDA
- [ ] Industry EBITDA multiple (typically 4x-8x)
- [ ] Discount rate

**Calculation:**
```
EBITDA Terminal Value = Final_Year_EBITDA × EBITDA_Multiple

PV of Terminal Value = EBITDA_TV / (1 + Discount_Rate)^5

DCF Multiple Valuation = PV_of_Cash_Flows + PV_of_Terminal_Value
```

**Visual Required:**
- Combined line + bar chart: FCFE and EBITDA over time

---

## SECTION 10: FINANCIAL PROJECTION (2 pages)

### 10.0 Financial Projection

**Profitability Projection (P&L):**
| Line Item | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 |
|-----------|--------|--------|--------|--------|--------|
| Revenue | | | | | |
| Cost of Goods Sold | | | | | |
| SG&A Expenses | | | | | |
| **EBITDA** | | | | | |
| Software Expenses (D&A) | | | | | |
| **EBIT** | | | | | |
| Interest Expense | | | | | |
| **EBT** | | | | | |
| Tax Expense | | | | | |
| **Net Income** | | | | | |

**Cash Flow Projection:**
| Line Item | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 |
|-----------|--------|--------|--------|--------|--------|
| Net Income | | | | | |
| D&A | | | | | |
| Change in Outstanding Debt | | | | | |
| **Free Cash Flow to Equity** | | | | | |
| Equity Fundraising | | | | | |
| **Free Cash Flow** | | | | | |

---

## SECTION 11: CONCLUSION (1 page)

### 11.0 Conclusion
**Required Elements:**
- [ ] Summary of market position and growth potential
- [ ] Final valuation recommendation with rationale
- [ ] Capital raise amount and equity dilution
- [ ] Strategic use of funds
- [ ] Growth rate projections with timeline

**Template:**
```
Based on a detailed analysis of [COMPANY]'s market position, growth potential,
and financial forecasts, it is evident that the company is well-positioned to
[VALUE_PROPOSITION].

Valuation for Fundraising:
[COMPANY] is currently aiming to raise $[AMOUNT] in this funding round...
The raise is based on a post-money valuation of $[VALUATION]...

Growth Rate:
[COMPANY]'s growth trajectory is projected at [RATE]% per [PERIOD]...
```

---

## SECTION 12: APPENDIX (5-8 pages)

### Required Appendix Items:
1. **Financial Projection - Revenue Growth** (Detailed quarterly breakdown)
2. **Financial Projection - % in Total Revenue** (Revenue stream breakdown)
3. **Financial Projection - Expenses** (Detailed expense breakdown)
4. **KOL/Marketing Cost Analysis** (Industry benchmarks)
5. **ARR Multiple Range** (Industry comparisons)
6. **Sensitivity Analysis: Revenue to COGS**
7. **Sensitivity Analysis: Revenue to Operational Cost**
8. **Ideal WACC based on Interest Coverage Ratio**
9. **Predictive Analysis Revenue** (Quarterly projections)
10. **Predictive Analysis Members/Users** (Growth projections)

---

# PART 2: BASIC VALUATION REPORT TEMPLATE

## Document Structure (Target: 10-15 pages)

---

## BASIC SECTION 1: EXECUTIVE SUMMARY (1 page)
- Company overview (1 paragraph)
- Valuation summary
- Capital needed / Equity offered
- Key metrics snapshot

## BASIC SECTION 2: COMPANY OVERVIEW (1-2 pages)
- Business description
- Mission and goals
- Current stage and traction

## BASIC SECTION 3: FINANCIAL PROJECTIONS (2-3 pages)
- 5-year P&L summary
- Revenue and EBITDA charts
- Key assumptions

## BASIC SECTION 4: VALUATION ANALYSIS (3-4 pages)

### Methods Included (Simplified):
1. **Scorecard Method** (30% weight)
   - Factor-based comparison to industry average

2. **Checklist Method** (30% weight)
   - Criteria-based scoring against maximum valuation

3. **VC Method - Revenue** (20% weight)
   - Simple exit multiple on projected revenue

4. **DCF with Growth** (20% weight)
   - Discounted cash flow with terminal value

**Total: 4 methods instead of 9**

## BASIC SECTION 5: FUNDING ROUND (1 page)
- Capital needed
- Pre/Post money valuation
- Equity percentage
- Use of funds summary

## BASIC SECTION 6: CONCLUSION (1 page)
- Valuation recommendation
- Growth outlook
- Investment thesis

## BASIC APPENDIX (2-3 pages)
- Detailed financial projections
- Key assumptions
- Sensitivity analysis (1 table)

---

# PART 3: DATA COLLECTION CHECKLIST

## Required Inputs for Both Versions

### Company Information
- [ ] Legal entity name
- [ ] Founding date
- [ ] Founders and key team members
- [ ] Business description (500 words)
- [ ] Mission statement
- [ ] Product/service offerings
- [ ] Target market definition
- [ ] Competitive advantages

### Financial Data
- [ ] Historical revenue (if any)
- [ ] Historical expenses (if any)
- [ ] Current assets inventory
- [ ] 5-year revenue projections (quarterly preferred)
- [ ] 5-year expense projections by category
- [ ] Capital structure (debt, equity)
- [ ] Previous funding rounds

### Market Data
- [ ] Total Addressable Market (TAM)
- [ ] Serviceable Addressable Market (SAM)
- [ ] Serviceable Obtainable Market (SOM)
- [ ] Industry average valuation for stage
- [ ] Comparable company multiples
- [ ] Industry growth rates

### Funding Requirements
- [ ] Capital amount needed
- [ ] Use of funds breakdown
- [ ] Expected milestone achievements
- [ ] Planned future rounds

---

# PART 4: VALUATION CALCULATION FORMULAS

## Quick Reference

### Scorecard Method
```
Valuation = Industry_Avg × Σ(Factor_Weight × Factor_Score)
```

### Checklist Method
```
Valuation = Σ(Max_Valuation × Criterion_Weight × Criterion_Score)
```

### Cost Approach
```
Valuation = Σ(Replacement_Cost_of_Assets)
```

### Simple VC Method
```
Post_Money = (Final_Year_Metric × Multiple) / (1 + ROI)^years
Pre_Money = Post_Money - Investment
Equity_% = Investment / Post_Money
```

### Tiered Revenue VC
```
Exit_Value = (Recurring_Rev × High_Multiple) + (Additional_Rev × Low_Multiple)
Post_Money = Exit_Value / (1 + ROI)^years
```

### DCF with Growth
```
Terminal_Value = FCF_final × (1 + g) / (r - g)
Valuation = Σ[FCF_t / (1+r)^t] + [TV / (1+r)^n]
```

### DCF with Multiples
```
Terminal_Value = EBITDA_final × EBITDA_Multiple
Valuation = Σ[FCF_t / (1+r)^t] + [TV / (1+r)^n]
```

### Weighted Average
```
Final_Valuation = Σ(Method_Valuation × Method_Weight)
```

---

# PART 5: INDUSTRY BENCHMARKS

## Typical Multiples by Stage

| Stage | Revenue Multiple | EBITDA Multiple |
|-------|-----------------|-----------------|
| Pre-seed | N/A | N/A |
| Seed | 5x-15x ARR | N/A |
| Series A | 8x-20x ARR | 10x-20x |
| Series B+ | 6x-15x ARR | 8x-15x |

## Typical Discount Rates

| Stage | Required ROI |
|-------|-------------|
| Pre-seed | 40-60% |
| Seed | 35-50% |
| Series A | 30-40% |
| Series B | 25-35% |
| Later Stage | 20-30% |

## Method Weights by Stage

### Pre-Revenue Companies
| Method | FULL Weight | BASIC Weight |
|--------|-------------|--------------|
| Scorecard | 30% | 35% |
| Checklist | 30% | 35% |
| Cost Approach | 15% | - |
| VC Methods | 15% | 20% |
| DCF Methods | 10% | 10% |

### Revenue-Generating Companies
| Method | FULL Weight | BASIC Weight |
|--------|-------------|--------------|
| Scorecard | 20% | 30% |
| Checklist | 20% | 30% |
| Cost Approach | 5% | - |
| VC Methods | 25% | 20% |
| DCF Methods | 30% | 20% |

---

# PART 6: DELIVERABLES CHECKLIST

## FULL Report Deliverables
- [ ] PDF Report (30-40 pages)
- [ ] Executive Summary (1-pager)
- [ ] Financial Model (Excel/Sheets)
- [ ] Valuation Summary Slide
- [ ] Data Room Documentation

## BASIC Report Deliverables
- [ ] PDF Report (10-15 pages)
- [ ] Financial Model (Simplified)
- [ ] Valuation Summary

---

*Template Version 1.0 | Integrated Multi-Method Valuation Framework*
