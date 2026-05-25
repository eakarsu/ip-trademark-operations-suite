export type SourceAIToolField = {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  source: string;
};

export const sourceAIToolFieldsByToolId: Record<string, SourceAIToolField[]> = {
  "ai-patent-research-filing-ai-14x2lo-exact-ai": [
    {
      "name": "abstract",
      "label": "Abstract",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "application_number",
      "label": "Application Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "budget_usd",
      "label": "Budget Usd",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "claim_text",
      "label": "Claim Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "claims",
      "label": "Claims",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "commercial_priority",
      "label": "Commercial Priority",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "comparable_deals",
      "label": "Comparable Deals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "competitor_name",
      "label": "Competitor Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "competitor_signals",
      "label": "Competitor Signals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "exclusive",
      "label": "Exclusive",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "geography",
      "label": "Geography",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "inventor_name",
      "label": "Inventor Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "known_assignments",
      "label": "Known Assignments",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "known_filings",
      "label": "Known Filings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "market_segment",
      "label": "Market Segment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "max_results",
      "label": "Max Results",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "organization",
      "label": "Organization",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "our_patent_claims",
      "label": "Our Patent Claims",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "our_position",
      "label": "Our Position",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "patent_class",
      "label": "Patent Class",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "patent_id",
      "label": "Patent Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "patent_number",
      "label": "Patent Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "prior_art_summary",
      "label": "Prior Art Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "priority_date",
      "label": "Priority Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "recent_filings",
      "label": "Recent Filings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "recent_products",
      "label": "Recent Products",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "target_industries",
      "label": "Target Industries",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "target_markets",
      "label": "Target Markets",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "target_product_description",
      "label": "Target Product Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "technology_area",
      "label": "Technology Area",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "technology_domain",
      "label": "Technology Domain",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "technology_field",
      "label": "Technology Field",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "technology_focus",
      "label": "Technology Focus",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "technology_summary",
      "label": "Technology Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "time_range_years",
      "label": "Time Range Years",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "time_window_months",
      "label": "Time Window Months",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    }
  ],
  "ai-patent-research-filing-claims-generator-1lav86-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Claims Generator source input context",
      "options": [],
      "required": false,
      "source": "server/src/routes/claimsGenerator.js"
    }
  ],
  "ai-patent-research-filing-custom-feat01-agentic-patent-prosecution-ysvteb-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Custom Feat01 Agentic Patent Prosecution source input context",
      "options": [],
      "required": false,
      "source": "server/src/routes/customFeat01_AgenticPatentProsecution.js"
    }
  ],
  "ai-patent-research-filing-custom-feat05-claim-infringement-checker-10okry-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Custom Feat05 Claim Infringement Checker source input context",
      "options": [],
      "required": false,
      "source": "server/src/routes/customFeat05_ClaimInfringementChecker.js"
    }
  ],
  "ai-patent-research-filing-gap-feat-claims-without-claim-o4tzyo-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Feat Claims Without Claim source input context",
      "options": [],
      "required": false,
      "source": "server/src/routes/gapFeat_claims_without_claim.js"
    }
  ],
  "ai-patent-research-filing-ai-history-ru19v8-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI History source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIHistory.jsx"
    }
  ],
  "ai-patent-research-filing-ai-predictive-cbbjdd-exact-ai": [
    {
      "name": "application_number",
      "label": "Application Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "application_text",
      "label": "Application Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "art_unit",
      "label": "Art Unit",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "budget_usd",
      "label": "Budget Usd",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "claim_text",
      "label": "Claim Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "commercial_priority",
      "label": "Commercial Priority",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "comparable_deals",
      "label": "Comparable Deals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "competitor_name",
      "label": "Competitor Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "competitor_signals",
      "label": "Competitor Signals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "examiner_history",
      "label": "Examiner History",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "exclusive",
      "label": "Exclusive",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "field_of_art",
      "label": "Field Of Art",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "geography",
      "label": "Geography",
      "type": "text",
      "defaultValue": "global",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "inventor_name",
      "label": "Inventor Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "known_assignments",
      "label": "Known Assignments",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "known_filings",
      "label": "Known Filings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "market_segment",
      "label": "Market Segment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "market_summary",
      "label": "Market Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "max_results",
      "label": "Max Results",
      "type": "number",
      "defaultValue": "10",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "organization",
      "label": "Organization",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "our_position",
      "label": "Our Position",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "own_patent",
      "label": "Own Patent",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "patent_number",
      "label": "Patent Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "prior_art_summary",
      "label": "Prior Art Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "priority_date",
      "label": "Priority Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "recent_filings",
      "label": "Recent Filings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "recent_products",
      "label": "Recent Products",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "similar_filings",
      "label": "Similar Filings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "suspected_product",
      "label": "Suspected Product",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "target_industries",
      "label": "Target Industries",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "target_markets",
      "label": "Target Markets",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "technology_domain",
      "label": "Technology Domain",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "technology_field",
      "label": "Technology Field",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "technology_focus",
      "label": "Technology Focus",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "technology_summary",
      "label": "Technology Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "time_range_years",
      "label": "Time Range Years",
      "type": "number",
      "defaultValue": "10",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "time_window_months",
      "label": "Time Window Months",
      "type": "text",
      "defaultValue": "12",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    }
  ],
  "ai-patent-research-filing-cf-agentic-patent-prosecution-page-115jjr-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the CF Agentic Patent Prosecution Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/CFAgenticPatentProsecutionPage.jsx"
    }
  ],
  "ai-patent-research-filing-cf-claim-infringement-checker-page-vfyi5z-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the CF Claim Infringement Checker Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/CFClaimInfringementCheckerPage.jsx"
    }
  ],
  "ai-patent-research-filing-gap-claims-without-claim-page-1n0y5p-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Claims Without Claim Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapClaimsWithoutClaimPage.jsx"
    }
  ],
  "ai-patent-research-filing-source-workflow": [
    {
      "name": "abstract",
      "label": "Abstract",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "application_number",
      "label": "Application Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "budget_usd",
      "label": "Budget Usd",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "claim_text",
      "label": "Claim Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "claims",
      "label": "Claims",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "commercial_priority",
      "label": "Commercial Priority",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "comparable_deals",
      "label": "Comparable Deals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "competitor_name",
      "label": "Competitor Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "competitor_signals",
      "label": "Competitor Signals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "exclusive",
      "label": "Exclusive",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "geography",
      "label": "Geography",
      "type": "text",
      "defaultValue": "global",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "inventor_name",
      "label": "Inventor Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "known_assignments",
      "label": "Known Assignments",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "known_filings",
      "label": "Known Filings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "market_segment",
      "label": "Market Segment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "max_results",
      "label": "Max Results",
      "type": "number",
      "defaultValue": "10",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "organization",
      "label": "Organization",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "our_patent_claims",
      "label": "Our Patent Claims",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "our_position",
      "label": "Our Position",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "patent_class",
      "label": "Patent Class",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "patent_id",
      "label": "Patent Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "patent_number",
      "label": "Patent Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "prior_art_summary",
      "label": "Prior Art Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "priority_date",
      "label": "Priority Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "recent_filings",
      "label": "Recent Filings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "recent_products",
      "label": "Recent Products",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "target_industries",
      "label": "Target Industries",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "target_markets",
      "label": "Target Markets",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "target_product_description",
      "label": "Target Product Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "technology_area",
      "label": "Technology Area",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "technology_domain",
      "label": "Technology Domain",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "technology_field",
      "label": "Technology Field",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "technology_focus",
      "label": "Technology Focus",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "technology_summary",
      "label": "Technology Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "time_range_years",
      "label": "Time Range Years",
      "type": "number",
      "defaultValue": "10",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "time_window_months",
      "label": "Time Window Months",
      "type": "text",
      "defaultValue": "12",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Claims Generator source input context",
      "options": [],
      "required": false,
      "source": "server/src/routes/claimsGenerator.js"
    },
    {
      "name": "application_text",
      "label": "Application Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "art_unit",
      "label": "Art Unit",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "examiner_history",
      "label": "Examiner History",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "field_of_art",
      "label": "Field Of Art",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "market_summary",
      "label": "Market Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "own_patent",
      "label": "Own Patent",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "similar_filings",
      "label": "Similar Filings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "suspected_product",
      "label": "Suspected Product",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    }
  ],
  "ai-patent-research-filing-ai-tools": [
    {
      "name": "abstract",
      "label": "Abstract",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "application_number",
      "label": "Application Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "budget_usd",
      "label": "Budget Usd",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "claim_text",
      "label": "Claim Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "claims",
      "label": "Claims",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "commercial_priority",
      "label": "Commercial Priority",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "comparable_deals",
      "label": "Comparable Deals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "competitor_name",
      "label": "Competitor Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "competitor_signals",
      "label": "Competitor Signals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "exclusive",
      "label": "Exclusive",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "geography",
      "label": "Geography",
      "type": "text",
      "defaultValue": "global",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "inventor_name",
      "label": "Inventor Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "known_assignments",
      "label": "Known Assignments",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "known_filings",
      "label": "Known Filings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "market_segment",
      "label": "Market Segment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "max_results",
      "label": "Max Results",
      "type": "number",
      "defaultValue": "10",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "organization",
      "label": "Organization",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "our_patent_claims",
      "label": "Our Patent Claims",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "our_position",
      "label": "Our Position",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "patent_class",
      "label": "Patent Class",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "patent_id",
      "label": "Patent Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "patent_number",
      "label": "Patent Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "prior_art_summary",
      "label": "Prior Art Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "priority_date",
      "label": "Priority Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "recent_filings",
      "label": "Recent Filings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "recent_products",
      "label": "Recent Products",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "target_industries",
      "label": "Target Industries",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "target_markets",
      "label": "Target Markets",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "target_product_description",
      "label": "Target Product Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "technology_area",
      "label": "Technology Area",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "technology_domain",
      "label": "Technology Domain",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "technology_field",
      "label": "Technology Field",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "technology_focus",
      "label": "Technology Focus",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "technology_summary",
      "label": "Technology Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "time_range_years",
      "label": "Time Range Years",
      "type": "number",
      "defaultValue": "10",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "time_window_months",
      "label": "Time Window Months",
      "type": "text",
      "defaultValue": "12",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/src/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Claims Generator source input context",
      "options": [],
      "required": false,
      "source": "server/src/routes/claimsGenerator.js"
    },
    {
      "name": "application_text",
      "label": "Application Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "art_unit",
      "label": "Art Unit",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "examiner_history",
      "label": "Examiner History",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "field_of_art",
      "label": "Field Of Art",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "market_summary",
      "label": "Market Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "own_patent",
      "label": "Own Patent",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "similar_filings",
      "label": "Similar Filings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    },
    {
      "name": "suspected_product",
      "label": "Suspected Product",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.jsx"
    }
  ],
  "ai-trademark-brand-protection-monitor-ai-hub-1vob7d-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Hub source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIHub.jsx"
    }
  ],
  "ai-trademark-brand-protection-monitor-audit-trail-1agcbw-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Audit Trail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AuditTrail.jsx"
    }
  ],
  "ai-trademark-brand-protection-monitor-gap-no-ai-for-automated-cease-and-desist-2ktzod-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI For Automated Cease And Desist source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoAiForAutomatedCeaseAndDesist.jsx"
    }
  ],
  "ai-trademark-brand-protection-monitor-gap-no-ai-for-counterfeit-image-analysis-computer-1aif3p-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI For Counterfeit Image Analysis Computer source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoAiForCounterfeitImageAnalysisComputer.jsx"
    }
  ],
  "ai-trademark-brand-protection-monitor-ai-5cuwes-exact-ai": [
    {
      "name": "brand_name",
      "label": "Brand Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "brand_standards",
      "label": "Brand Standards",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "brandName",
      "label": "Brand Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "candidate_markets",
      "label": "Candidate Markets",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "classes",
      "label": "Classes",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "current_markets",
      "label": "Current Markets",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "expansion_criteria",
      "label": "Expansion Criteria",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "image_description",
      "label": "Image Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "image_url",
      "label": "Image Url",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "industry",
      "label": "Industry",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "infringement_type",
      "label": "Infringement Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "infringer_name",
      "label": "Infringer Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "infringer_url",
      "label": "Infringer Url",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "jurisdictions",
      "label": "Jurisdictions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "locations",
      "label": "Locations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "marketplace",
      "label": "Marketplace",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "platform",
      "label": "Platform",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sample_results",
      "label": "Sample Results",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "scanType",
      "label": "Scan Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sender_company",
      "label": "Sender Company",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "severity",
      "label": "Severity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "similar_marks",
      "label": "Similar Marks",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "trademark_id",
      "label": "Trademark Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "trademark_name",
      "label": "Trademark Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "violationType",
      "label": "Violation Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-trademark-brand-protection-monitor-gap-no-ai-for-automated-cease-and-desist-drafting-beyond-stub-1n9np3-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI For Automated Cease And Desist Drafting Beyond Stub source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gapNoAiForAutomatedCeaseAndDesistDraftingBeyondStub.js"
    }
  ],
  "ai-trademark-brand-protection-monitor-gap-no-ai-for-counterfeit-image-analysis-computer-vision-bx0e84-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI For Counterfeit Image Analysis Computer Vision source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gapNoAiForCounterfeitImageAnalysisComputerVision.js"
    }
  ],
  "ai-trademark-brand-protection-monitor-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Hub source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIHub.jsx"
    },
    {
      "name": "brand_name",
      "label": "Brand Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "brand_standards",
      "label": "Brand Standards",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "brandName",
      "label": "Brand Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "candidate_markets",
      "label": "Candidate Markets",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "classes",
      "label": "Classes",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "current_markets",
      "label": "Current Markets",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "expansion_criteria",
      "label": "Expansion Criteria",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "image_description",
      "label": "Image Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "image_url",
      "label": "Image Url",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "industry",
      "label": "Industry",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "infringement_type",
      "label": "Infringement Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "infringer_name",
      "label": "Infringer Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "infringer_url",
      "label": "Infringer Url",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "jurisdictions",
      "label": "Jurisdictions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "locations",
      "label": "Locations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "marketplace",
      "label": "Marketplace",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "platform",
      "label": "Platform",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sample_results",
      "label": "Sample Results",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "scanType",
      "label": "Scan Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sender_company",
      "label": "Sender Company",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "severity",
      "label": "Severity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "similar_marks",
      "label": "Similar Marks",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "trademark_id",
      "label": "Trademark Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "trademark_name",
      "label": "Trademark Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "violationType",
      "label": "Violation Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-trademark-brand-protection-monitor-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Hub source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIHub.jsx"
    },
    {
      "name": "brand_name",
      "label": "Brand Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "brand_standards",
      "label": "Brand Standards",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "brandName",
      "label": "Brand Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "candidate_markets",
      "label": "Candidate Markets",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "classes",
      "label": "Classes",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "current_markets",
      "label": "Current Markets",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "expansion_criteria",
      "label": "Expansion Criteria",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "image_description",
      "label": "Image Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "image_url",
      "label": "Image Url",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "industry",
      "label": "Industry",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "infringement_type",
      "label": "Infringement Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "infringer_name",
      "label": "Infringer Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "infringer_url",
      "label": "Infringer Url",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "jurisdictions",
      "label": "Jurisdictions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "locations",
      "label": "Locations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "marketplace",
      "label": "Marketplace",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "platform",
      "label": "Platform",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sample_results",
      "label": "Sample Results",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "scanType",
      "label": "Scan Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sender_company",
      "label": "Sender Company",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "severity",
      "label": "Severity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "similar_marks",
      "label": "Similar Marks",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "trademark_id",
      "label": "Trademark Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "trademark_name",
      "label": "Trademark Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "violationType",
      "label": "Violation Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ]
};
