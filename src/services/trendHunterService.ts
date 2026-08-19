import { TrendItem } from "../types";

export const trendingCategories = [
  {
    id: "tech_ai",
    name: "Tech & AI Automation",
    trends: [
      {
        id: "trend-1",
        title: "How AmpEdge AI Agents are replacing 5-person marketing teams",
        category: "Tech & AI",
        growthVelocity: "+380%",
        viralityPotential: 96,
        sentiment: "Curiosity & Urgency",
        targetPlatforms: ["instagram", "youtube", "twitter", "facebook"] as any,
        recommendedFormat: "video" as any,
        hookIdea: "Stop hiring agencies. Here is how 1 AI system runs our entire digital pipeline...",
        subconsciousTrigger: "FOMO + Massive Cost Reduction Desire",
        hashtags: ["#AmpEdge", "#AIAgents", "#MarketingAutomation", "#TechTrends2026", "#GrowthHacking"]
      },
      {
        id: "trend-2",
        title: "The 3 Secret Systems That Got AmpEdge Clients 1M Impressions in 7 Days",
        category: "Tech & AI",
        growthVelocity: "+290%",
        viralityPotential: 94,
        sentiment: "High Value / Save Trigger",
        targetPlatforms: ["twitter", "instagram", "youtube"] as any,
        recommendedFormat: "photo" as any,
        hookIdea: "Save this before it gets saturated. 3 software frameworks top brands gatekeep...",
        subconsciousTrigger: "Greed & Exclusivity (Knowledge Arbitrage)",
        hashtags: ["#AmpEdgeSolutions", "#TechStrategy", "#ViralGrowth", "#SoftwareSystems"]
      }
    ]
  },
  {
    id: "business_agency",
    name: "Business, Agency & Services",
    trends: [
      {
        id: "trend-3",
        title: "Why 90% of Outdated Software Will Kill Companies This Year",
        category: "Business",
        growthVelocity: "+410%",
        viralityPotential: 97,
        sentiment: "Controversy & Survival",
        targetPlatforms: ["youtube", "facebook", "twitter", "instagram"] as any,
        recommendedFormat: "video" as any,
        hookIdea: "Most software vendors are lying to you. Here is the brutal truth about scalable tech...",
        subconsciousTrigger: "Cognitive Dissonance & Reality Check",
        hashtags: ["#AmpEdgeTech", "#BusinessStrategy", "#Entrepreneurship", "#ViralTruth"]
      },
      {
        id: "trend-4",
        title: "Google Business Profile Secret: Rank #1 in Local 3-Pack in 14 Days",
        category: "Local Business",
        growthVelocity: "+220%",
        viralityPotential: 91,
        sentiment: "Actionable High ROI",
        targetPlatforms: ["google_business", "youtube", "facebook"] as any,
        recommendedFormat: "photo" as any,
        hookIdea: "If you own a local business, you are losing 70% of phone calls because of this 1 GBP setting...",
        subconsciousTrigger: "Fear of Loss (Pain Point Amplification)",
        hashtags: ["#GoogleBusinessProfile", "#LocalSEO", "#SmallBizTips", "#AmpEdgeSolutions"]
      }
    ]
  },
  {
    id: "ecommerce_d2c",
    name: "E-Commerce & D2C Brands",
    trends: [
      {
        id: "trend-5",
        title: "The Frictionless Checkout System That Doubles Conversion Without Ads",
        category: "E-Commerce",
        growthVelocity: "+310%",
        viralityPotential: 93,
        sentiment: "Aesthetic & Dopamine",
        targetPlatforms: ["instagram", "youtube", "facebook"] as any,
        recommendedFormat: "video" as any,
        hookIdea: "We changed just ONE workflow in the digital stack and conversion skyrocketed...",
        subconsciousTrigger: "Curiosity Loop & Instant Replicability",
        hashtags: ["#AmpEdge", "#D2CGrowth", "#TechBuilding", "#SoftwareEngineering"]
      }
    ]
  }
];

export function getTrendingTopics(category: string = "all"): TrendItem[] {
  if (!category || category === "all") {
    return trendingCategories.flatMap(c => c.trends);
  }
  const found = trendingCategories.find(c => c.id === category);
  return found ? found.trends : trendingCategories.flatMap(c => c.trends);
}
