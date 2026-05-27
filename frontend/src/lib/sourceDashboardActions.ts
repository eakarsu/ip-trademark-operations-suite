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
    "id": "trademark-brand-protection",
    "label": "Trademark Brand Protection",
    "description": "Open Trademark Brand Protection workflows elevated from AITrademarkBrandProtectionMonitor.",
    "href": "/trademark-watchlist",
    "sourceProjects": [
      "AITrademarkBrandProtectionMonitor"
    ],
    "examples": [
      "Trademark Watchlist",
      "Brand Infringement Review",
      "Opposition Deadlines"
    ],
    "count": 1
  },
  {
    "id": "patent-research-filing",
    "label": "Patent Research Filing",
    "description": "Open Patent Research Filing workflows elevated from AIPatentResearchFiling.",
    "href": "/prior-art-search",
    "sourceProjects": [
      "AIPatentResearchFiling"
    ],
    "examples": [
      "Prior Art Search",
      "Claims Chart",
      "Patent Filing Packet"
    ],
    "count": 1
  },
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
