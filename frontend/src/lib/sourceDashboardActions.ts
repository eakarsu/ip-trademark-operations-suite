export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "ai-assistant",
    "label": "AI Assistant",
    "description": "Run source-derived AI assistant workflows and prompts.",
    "href": "/features/ai-tools",
    "sourceProjects": [
      "AIPatentResearchFiling",
      "AITrademarkBrandProtectionMonitor"
    ],
    "examples": [
      "backend/routes/ai",
      "backend/routes/domains",
      "backend/routes/gapNoAiForAutomatedCeaseAndDesistDraftingBeyondStub",
      "backend/routes/gapNoAiForCounterfeitImageAnalysisComputerVision",
      "backend/services/openrouter",
      "client/src/components/AIResultDisplay"
    ],
    "count": 2
  }
];
