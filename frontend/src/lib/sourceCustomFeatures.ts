import type { FeatureContext, FeatureDefinition, PageDefinition } from '@/lib/unifiedApp';
import type { FeatureEntitySet } from '@/lib/featureEntities';
import type { FeatureSurface } from '@/lib/featureSurfaces';

export const sourceCustomFeatureCatalog: FeatureDefinition[] = [
  {
    "title": "AI Patent Research Filing Source Feature",
    "href": "/features/source-ai-patent-research-filing",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIPatentResearchFiling: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "14 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI Trademark Brand Protection Monitor Source Feature",
    "href": "/features/source-ai-trademark-brand-protection-monitor",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AITrademarkBrandProtectionMonitor: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "14 AI, prompt, tool, or workflow files captured"
    ]
  }
];

export const sourceCustomFeatureFamilies: Array<{ name: string; features: string[] }> = [
  {
    "name": "Source Project Features",
    "features": [
      "AI Patent Research Filing Source Feature",
      "AI Trademark Brand Protection Monitor Source Feature"
    ]
  }
];

export const sourceCustomPageRegistry: Record<string, PageDefinition> = {
  "source-ai-patent-research-filing": {
    "title": "AI Patent Research Filing Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AIPatentResearchFiling, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIPatentResearchFiling: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "14 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "14",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-trademark-brand-protection-monitor": {
    "title": "AI Trademark Brand Protection Monitor Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AITrademarkBrandProtectionMonitor, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AITrademarkBrandProtectionMonitor: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "14 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "14",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  }
};

export const sourceCustomFeatureContexts: Record<string, FeatureContext> = {
  "AI Patent Research Filing Source Feature": {
    "sourceOwners": [
      "AIPatentResearchFiling"
    ],
    "operatingQueues": [
      "Openrouter",
      "AI",
      "Claims Generator",
      "Custom Feat01 Agentic Patent Prosecution"
    ],
    "outputs": [
      "AI Patent Research Filing merged workflow register",
      "AI Patent Research Filing API and route coverage map",
      "AI Patent Research Filing AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI Trademark Brand Protection Monitor Source Feature": {
    "sourceOwners": [
      "AITrademarkBrandProtectionMonitor"
    ],
    "operatingQueues": [
      "Openrouter",
      "Main",
      "AI Hub",
      "Audit Trail"
    ],
    "outputs": [
      "AI Trademark Brand Protection Monitor merged workflow register",
      "AI Trademark Brand Protection Monitor API and route coverage map",
      "AI Trademark Brand Protection Monitor AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  }
};

export const sourceCustomFeatureSurfaceBySlug: Record<string, FeatureSurface> = {
  "source-ai-patent-research-filing": {
    "workItems": [
      {
        "id": "source-ai-patent-research-filing-work-1",
        "item": "Openrouter",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/src/services/openrouter.js"
      },
      {
        "id": "source-ai-patent-research-filing-work-2",
        "item": "AI",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/src/routes/ai.js"
      },
      {
        "id": "source-ai-patent-research-filing-work-3",
        "item": "Claims Generator",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/src/routes/claimsGenerator.js"
      },
      {
        "id": "source-ai-patent-research-filing-work-4",
        "item": "Custom Feat01 Agentic Patent Prosecution",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/src/routes/customFeat01_AgenticPatentProsecution.js"
      },
      {
        "id": "source-ai-patent-research-filing-work-5",
        "item": "Custom Feat05 Claim Infringement Checker",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/src/routes/customFeat05_ClaimInfringementChecker.js"
      },
      {
        "id": "source-ai-patent-research-filing-work-6",
        "item": "Gap Feat Claims Without Claim",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/src/routes/gapFeat_claims_without_claim.js"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-patent-research-filing-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-patent-research-filing-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-patent-research-filing-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-patent-research-filing-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-patent-research-filing-log-1",
        "message": "Deep-merge feature generated from AIPatentResearchFiling",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-patent-research-filing-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-trademark-brand-protection-monitor": {
    "workItems": [
      {
        "id": "source-ai-trademark-brand-protection-monitor-work-1",
        "item": "Openrouter",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for backend/services/openrouter.js"
      },
      {
        "id": "source-ai-trademark-brand-protection-monitor-work-2",
        "item": "Main",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/main.jsx"
      },
      {
        "id": "source-ai-trademark-brand-protection-monitor-work-3",
        "item": "AI Hub",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIHub.jsx"
      },
      {
        "id": "source-ai-trademark-brand-protection-monitor-work-4",
        "item": "Audit Trail",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AuditTrail.jsx"
      },
      {
        "id": "source-ai-trademark-brand-protection-monitor-work-5",
        "item": "Domain Monitoring",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/DomainMonitoring.jsx"
      },
      {
        "id": "source-ai-trademark-brand-protection-monitor-work-6",
        "item": "Domain Watcher",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/DomainWatcher.jsx"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-trademark-brand-protection-monitor-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-trademark-brand-protection-monitor-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-trademark-brand-protection-monitor-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-trademark-brand-protection-monitor-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-trademark-brand-protection-monitor-log-1",
        "message": "Deep-merge feature generated from AITrademarkBrandProtectionMonitor",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-trademark-brand-protection-monitor-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  }
};

export const sourceCustomFeatureEntitiesBySlug: Record<string, FeatureEntitySet> = {
  "source-ai-patent-research-filing": {
    "title": "AI Patent Research Filing Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-patent-research-filing-entity-1",
        "name": "Openrouter",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-patent-research-filing-entity-2",
        "name": "AI",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-patent-research-filing-entity-3",
        "name": "Claims Generator",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-patent-research-filing-entity-4",
        "name": "Custom Feat01 Agentic Patent Prosecution",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-patent-research-filing-entity-5",
        "name": "Custom Feat05 Claim Infringement Checker",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-trademark-brand-protection-monitor": {
    "title": "AI Trademark Brand Protection Monitor Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-trademark-brand-protection-monitor-entity-1",
        "name": "Openrouter",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-trademark-brand-protection-monitor-entity-2",
        "name": "Main",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-trademark-brand-protection-monitor-entity-3",
        "name": "AI Hub",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-trademark-brand-protection-monitor-entity-4",
        "name": "Audit Trail",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-trademark-brand-protection-monitor-entity-5",
        "name": "Domain Monitoring",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  }
};

export const sourceCustomFeatureLinksByProject: Record<string, string> = {
  "AIPatentResearchFiling": "/features/source-ai-patent-research-filing",
  "AITrademarkBrandProtectionMonitor": "/features/source-ai-trademark-brand-protection-monitor"
};
