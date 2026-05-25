export const sourceProjectTools = [
  {
    "id": "ai-patent-research-filing-source-workflow",
    "title": "AI Patent Research Filing Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIPatentResearchFiling.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIPatentResearchFiling to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Patent Research Filing source context",
    "outputLabel": "AI Patent Research Filing source analysis",
    "signals": [
      "server/src/services/openrouter",
      "server/src/routes/ai",
      "server/src/routes/claimsGenerator",
      "server/src/routes/customFeat01_AgenticPatentProsecution",
      "server/src/routes/customFeat05_ClaimInfringementChecker",
      "server/src/routes/gapFeat_claims_without_claim",
      "client/src/main",
      "client/src/pages/AIHistory"
    ]
  },
  {
    "id": "ai-patent-research-filing-ai-tools",
    "title": "AI Patent Research Filing AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIPatentResearchFiling.",
    "defaultPrompt": "Review AIPatentResearchFiling AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Patent Research Filing AI prompt or tool context",
    "outputLabel": "AI Patent Research Filing AI tool response",
    "signals": [
      "server/src/services/openrouter.js",
      "server/src/routes/ai.js",
      "server/src/routes/claimsGenerator.js",
      "server/src/routes/customFeat01_AgenticPatentProsecution.js",
      "server/src/routes/customFeat05_ClaimInfringementChecker.js",
      "server/src/routes/gapFeat_claims_without_claim.js",
      "client/src/main.jsx",
      "client/src/pages/AIHistory.jsx"
    ]
  },
  {
    "id": "ai-patent-research-filing-ai-14x2lo-exact-ai",
    "title": "AI Patent Research Filing: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/src/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIPatentResearchFiling. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Abstract",
      "Application Number",
      "Budget Usd",
      "Claim Text",
      "Claims",
      "Commercial Priority",
      "Comparable Deals",
      "Competitor Name"
    ]
  },
  {
    "id": "ai-patent-research-filing-claims-generator-1lav86-exact-ai",
    "title": "AI Patent Research Filing: Claims Generator",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/src/routes/claimsGenerator.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Claims Generator\" from AIPatentResearchFiling. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Claims Generator donor inputs",
    "outputLabel": "Claims Generator AI response",
    "signals": [
      "server/src/routes/claimsGenerator.js"
    ]
  },
  {
    "id": "ai-patent-research-filing-custom-feat01-agentic-patent-prosecution-ysvteb-exact-ai",
    "title": "AI Patent Research Filing: Custom Feat01 Agentic Patent Prosecution",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/src/routes/customFeat01_AgenticPatentProsecution.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Custom Feat01 Agentic Patent Prosecution\" from AIPatentResearchFiling. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Custom Feat01 Agentic Patent Prosecution donor inputs",
    "outputLabel": "Custom Feat01 Agentic Patent Prosecution AI response",
    "signals": [
      "server/src/routes/customFeat01_AgenticPatentProsecution.js"
    ]
  },
  {
    "id": "ai-patent-research-filing-custom-feat05-claim-infringement-checker-10okry-exact-ai",
    "title": "AI Patent Research Filing: Custom Feat05 Claim Infringement Checker",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/src/routes/customFeat05_ClaimInfringementChecker.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Custom Feat05 Claim Infringement Checker\" from AIPatentResearchFiling. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Custom Feat05 Claim Infringement Checker donor inputs",
    "outputLabel": "Custom Feat05 Claim Infringement Checker AI response",
    "signals": [
      "server/src/routes/customFeat05_ClaimInfringementChecker.js"
    ]
  },
  {
    "id": "ai-patent-research-filing-gap-feat-claims-without-claim-o4tzyo-exact-ai",
    "title": "AI Patent Research Filing: Gap Feat Claims Without Claim",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/src/routes/gapFeat_claims_without_claim.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Feat Claims Without Claim\" from AIPatentResearchFiling. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Feat Claims Without Claim donor inputs",
    "outputLabel": "Gap Feat Claims Without Claim AI response",
    "signals": [
      "server/src/routes/gapFeat_claims_without_claim.js"
    ]
  },
  {
    "id": "ai-patent-research-filing-ai-history-ru19v8-exact-ai",
    "title": "AI Patent Research Filing: AI History",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIHistory.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI History\" from AIPatentResearchFiling. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI History donor inputs",
    "outputLabel": "AI History AI response",
    "signals": [
      "client/src/pages/AIHistory.jsx"
    ]
  },
  {
    "id": "ai-patent-research-filing-ai-predictive-cbbjdd-exact-ai",
    "title": "AI Patent Research Filing: AI Predictive",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIPredictive.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Predictive\" from AIPatentResearchFiling. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Predictive donor inputs",
    "outputLabel": "AI Predictive AI response",
    "signals": [
      "Application Number",
      "Application Text",
      "Art Unit",
      "Budget Usd",
      "Claim Text",
      "Commercial Priority",
      "Comparable Deals",
      "Competitor Name"
    ]
  },
  {
    "id": "ai-patent-research-filing-cf-agentic-patent-prosecution-page-115jjr-exact-ai",
    "title": "AI Patent Research Filing: CF Agentic Patent Prosecution Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/CFAgenticPatentProsecutionPage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"CF Agentic Patent Prosecution Page\" from AIPatentResearchFiling. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "CF Agentic Patent Prosecution Page donor inputs",
    "outputLabel": "CF Agentic Patent Prosecution Page AI response",
    "signals": [
      "client/src/pages/CFAgenticPatentProsecutionPage.jsx"
    ]
  },
  {
    "id": "ai-patent-research-filing-cf-claim-infringement-checker-page-vfyi5z-exact-ai",
    "title": "AI Patent Research Filing: CF Claim Infringement Checker Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/CFClaimInfringementCheckerPage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"CF Claim Infringement Checker Page\" from AIPatentResearchFiling. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "CF Claim Infringement Checker Page donor inputs",
    "outputLabel": "CF Claim Infringement Checker Page AI response",
    "signals": [
      "client/src/pages/CFClaimInfringementCheckerPage.jsx"
    ]
  },
  {
    "id": "ai-patent-research-filing-gap-claims-without-claim-page-1n0y5p-exact-ai",
    "title": "AI Patent Research Filing: Gap Claims Without Claim Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapClaimsWithoutClaimPage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Claims Without Claim Page\" from AIPatentResearchFiling. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Claims Without Claim Page donor inputs",
    "outputLabel": "Gap Claims Without Claim Page AI response",
    "signals": [
      "client/src/pages/GapClaimsWithoutClaimPage.jsx"
    ]
  },
  {
    "id": "ai-trademark-brand-protection-monitor-source-workflow",
    "title": "AI Trademark Brand Protection Monitor Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AITrademarkBrandProtectionMonitor.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AITrademarkBrandProtectionMonitor to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Trademark Brand Protection Monitor source context",
    "outputLabel": "AI Trademark Brand Protection Monitor source analysis",
    "signals": [
      "backend/services/openrouter",
      "frontend/src/main",
      "frontend/src/pages/AIHub",
      "frontend/src/pages/AuditTrail",
      "frontend/src/pages/DomainMonitoring",
      "frontend/src/pages/DomainWatcher",
      "frontend/src/pages/GapNoAiForAutomatedCeaseAndDesist",
      "frontend/src/pages/GapNoAiForCounterfeitImageAnalysisComputer"
    ]
  },
  {
    "id": "ai-trademark-brand-protection-monitor-ai-tools",
    "title": "AI Trademark Brand Protection Monitor AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AITrademarkBrandProtectionMonitor.",
    "defaultPrompt": "Review AITrademarkBrandProtectionMonitor AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Trademark Brand Protection Monitor AI prompt or tool context",
    "outputLabel": "AI Trademark Brand Protection Monitor AI tool response",
    "signals": [
      "backend/services/openrouter.js",
      "frontend/src/main.jsx",
      "frontend/src/pages/AIHub.jsx",
      "frontend/src/pages/AuditTrail.jsx",
      "frontend/src/pages/DomainMonitoring.jsx",
      "frontend/src/pages/DomainWatcher.jsx",
      "frontend/src/pages/GapNoAiForAutomatedCeaseAndDesist.jsx",
      "frontend/src/pages/GapNoAiForCounterfeitImageAnalysisComputer.jsx"
    ]
  },
  {
    "id": "ai-trademark-brand-protection-monitor-ai-hub-1vob7d-exact-ai",
    "title": "AI Trademark Brand Protection Monitor: AI Hub",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIHub.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Hub\" from AITrademarkBrandProtectionMonitor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Hub donor inputs",
    "outputLabel": "AI Hub AI response",
    "signals": [
      "frontend/src/pages/AIHub.jsx"
    ]
  },
  {
    "id": "ai-trademark-brand-protection-monitor-audit-trail-1agcbw-exact-ai",
    "title": "AI Trademark Brand Protection Monitor: Audit Trail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AuditTrail.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Audit Trail\" from AITrademarkBrandProtectionMonitor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Audit Trail donor inputs",
    "outputLabel": "Audit Trail AI response",
    "signals": [
      "frontend/src/pages/AuditTrail.jsx"
    ]
  },
  {
    "id": "ai-trademark-brand-protection-monitor-gap-no-ai-for-automated-cease-and-desist-2ktzod-exact-ai",
    "title": "AI Trademark Brand Protection Monitor: Gap No AI For Automated Cease And Desist",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapNoAiForAutomatedCeaseAndDesist.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI For Automated Cease And Desist\" from AITrademarkBrandProtectionMonitor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI For Automated Cease And Desist donor inputs",
    "outputLabel": "Gap No AI For Automated Cease And Desist AI response",
    "signals": [
      "frontend/src/pages/GapNoAiForAutomatedCeaseAndDesist.jsx"
    ]
  },
  {
    "id": "ai-trademark-brand-protection-monitor-gap-no-ai-for-counterfeit-image-analysis-computer-1aif3p-exact-ai",
    "title": "AI Trademark Brand Protection Monitor: Gap No AI For Counterfeit Image Analysis Computer",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapNoAiForCounterfeitImageAnalysisComputer.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI For Counterfeit Image Analysis Computer\" from AITrademarkBrandProtectionMonitor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI For Counterfeit Image Analysis Computer donor inputs",
    "outputLabel": "Gap No AI For Counterfeit Image Analysis Computer AI response",
    "signals": [
      "frontend/src/pages/GapNoAiForCounterfeitImageAnalysisComputer.jsx"
    ]
  },
  {
    "id": "ai-trademark-brand-protection-monitor-ai-5cuwes-exact-ai",
    "title": "AI Trademark Brand Protection Monitor: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AITrademarkBrandProtectionMonitor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Brand Name",
      "Brand Standards",
      "Brand Name",
      "Candidate Markets",
      "Classes",
      "Context",
      "Current Markets",
      "Description"
    ]
  },
  {
    "id": "ai-trademark-brand-protection-monitor-gap-no-ai-for-automated-cease-and-desist-drafting-beyond-stub-1n9np3-exact-ai",
    "title": "AI Trademark Brand Protection Monitor: Gap No AI For Automated Cease And Desist Drafting Beyond Stub",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gapNoAiForAutomatedCeaseAndDesistDraftingBeyondStub.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI For Automated Cease And Desist Drafting Beyond Stub\" from AITrademarkBrandProtectionMonitor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI For Automated Cease And Desist Drafting Beyond Stub donor inputs",
    "outputLabel": "Gap No AI For Automated Cease And Desist Drafting Beyond Stub AI response",
    "signals": [
      "backend/routes/gapNoAiForAutomatedCeaseAndDesistDraftingBeyondStub.js"
    ]
  },
  {
    "id": "ai-trademark-brand-protection-monitor-gap-no-ai-for-counterfeit-image-analysis-computer-vision-bx0e84-exact-ai",
    "title": "AI Trademark Brand Protection Monitor: Gap No AI For Counterfeit Image Analysis Computer Vision",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gapNoAiForCounterfeitImageAnalysisComputerVision.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI For Counterfeit Image Analysis Computer Vision\" from AITrademarkBrandProtectionMonitor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI For Counterfeit Image Analysis Computer Vision donor inputs",
    "outputLabel": "Gap No AI For Counterfeit Image Analysis Computer Vision AI response",
    "signals": [
      "backend/routes/gapNoAiForCounterfeitImageAnalysisComputerVision.js"
    ]
  }
];
