// Autonomous Trend Discovery Engine for Social Media Virality
export const trendingCategories = [
  {
    id: "tech_ai",
    name: "Tech & AI Automation",
    icon: "Cpu",
    trends: [
      {
        id: "trend-1",
        title: "How AI Agents are replacing 5-person marketing teams",
        category: "Tech & AI",
        growthVelocity: "+380%",
        viralityPotential: 96,
        sentiment: "Curiosity & Urgency",
        targetPlatforms: ["instagram", "youtube", "twitter", "facebook"],
        recommendedFormat: "video",
        hookIdea: "Stop hiring agencies. Here is how 1 AI agent runs our entire social media pipeline...",
        subconsciousTrigger: "FOMO + Massive Cost Reduction Desire",
        hashtags: ["#AIAgents", "#MarketingAutomation", "#TechTrends2026", "#GrowthHacking"]
      },
      {
        id: "trend-2",
        title: "The 3 Secret Prompts That Got Us 1M Impressions in 7 Days",
        category: "Tech & AI",
        growthVelocity: "+290%",
        viralityPotential: 94,
        sentiment: "High Value / Save Trigger",
        targetPlatforms: ["twitter", "instagram", "youtube"],
        recommendedFormat: "photo",
        hookIdea: "Save this before it gets saturated. 3 prompt frameworks top creators gatekeep...",
        subconsciousTrigger: "Greed & Exclusivity (Knowledge Arbitrage)",
        hashtags: ["#PromptEngineering", "#ContentStrategy", "#ViralGrowth", "#ChatGPT"]
      }
    ]
  },
  {
    id: "business_agency",
    name: "Business, Agency & Services",
    icon: "Briefcase",
    trends: [
      {
        id: "trend-3",
        title: "Why 90% of Social Media Agencies Will Die This Year (And How to Survive)",
        category: "Business",
        growthVelocity: "+410%",
        viralityPotential: 97,
        sentiment: "Controversy & Survival",
        targetPlatforms: ["youtube", "facebook", "twitter", "instagram"],
        recommendedFormat: "video",
        hookIdea: "Most agency owners are lying to you. Here is the brutal truth about client retention in 2026...",
        subconsciousTrigger: "Cognitive Dissonance & Reality Check",
        hashtags: ["#AgencyGrowth", "#BusinessStrategy", "#Entrepreneurship", "#ViralTruth"]
      },
      {
        id: "trend-4",
        title: "Google Business Profile Secret: Rank #1 in Local 3-Pack in 14 Days",
        category: "Local Business",
        growthVelocity: "+220%",
        viralityPotential: 91,
        sentiment: "Actionable High ROI",
        targetPlatforms: ["google_business", "youtube", "facebook"],
        recommendedFormat: "photo",
        hookIdea: "If you own a local business, you are losing 70% of phone calls because of this 1 GBP setting...",
        subconsciousTrigger: "Fear of Loss (Pain Point Amplification)",
        hashtags: ["#GoogleBusinessProfile", "#LocalSEO", "#SmallBizTips", "#CustomerGrowth"]
      }
    ]
  },
  {
    id: "ecommerce_d2c",
    name: "E-Commerce & D2C Brands",
    icon: "ShoppingBag",
    trends: [
      {
        id: "trend-5",
        title: "Packaging Unboxing That Doubles Repeat Customers Without Ads",
        category: "E-Commerce",
        growthVelocity: "+310%",
        viralityPotential: 93,
        sentiment: "Aesthetic & Dopamine",
        targetPlatforms: ["instagram", "youtube", "facebook"],
        recommendedFormat: "video",
        hookIdea: "We changed just ONE sentence on our packaging insert and got 400+ organic user videos...",
        subconsciousTrigger: "Curiosity Loop & Instant Replicability",
        hashtags: ["#D2CGrowth", "#UnboxingExperience", "#BrandBuilding", "#EcommerceHacks"]
      }
    ]
  }
];

export function getTrendingTopics(category = null) {
  if (!category || category === "all") {
    return trendingCategories.flatMap(c => c.trends);
  }
  const found = trendingCategories.find(c => c.id === category);
  return found ? found.trends : trendingCategories.flatMap(c => c.trends);
}
