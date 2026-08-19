import { TrendItem } from "../types";

export const trendingCategories = [
  {
    id: "electrical_residential",
    name: "House Wiring & Safety (हिंदी / বাংলা / EN)",
    trends: [
      {
        id: "trend-1",
        title: "3 House Wiring Mistakes That Cause 90% of Electrical Fires & Short Circuits",
        category: "Electrical Safety",
        growthVelocity: "+440%",
        viralityPotential: 98,
        sentiment: "Safety Hazard & Loss Prevention",
        targetPlatforms: ["instagram", "youtube", "facebook"] as any,
        recommendedFormat: "video" as any,
        hookIdea: "घर की वायरिंग करवाते समय ये 3 गलतियां कभी मत करना! (Check your MCB & Earthing)",
        subconsciousTrigger: "Fear of Hazard + Home Protection Instinct",
        hashtags: ["#HouseWiring", "#AmpEdgeSolutions", "#ElectricalSafety", "#ShortCircuit", "#ElectricianTips"]
      },
      {
        id: "trend-2",
        title: "How to Choose Original ISI Electrical Cables vs Cheap Copper Wire (Save ₹50,000)",
        category: "Material Supply",
        growthVelocity: "+320%",
        viralityPotential: 95,
        sentiment: "Money Savings & Quality Awareness",
        targetPlatforms: ["youtube", "instagram", "facebook"] as any,
        recommendedFormat: "video" as any,
        hookIdea: "দোকানদার আপনাকে সস্তা তার দিচ্ছে না তো? আসল বনাম নকল তার চেনার উপায়...",
        subconsciousTrigger: "Greed + Fraud Aversion (Material Purity)",
        hashtags: ["#ElectricalMaterials", "#AmpEdge", "#CopperWire", "#KolkataElectrician", "#WiringGuide"]
      }
    ]
  },
  {
    id: "electrical_amc",
    name: "Apartment Society AMC & Industrial Panels",
    trends: [
      {
        id: "trend-3",
        title: "Why High-Rise Apartments & Housing Societies Need an Annual Electrical AMC in 2026",
        category: "Society AMC",
        growthVelocity: "+390%",
        viralityPotential: 96,
        sentiment: "B2B Peace of Mind & Compliance",
        targetPlatforms: ["facebook", "youtube", "google_business"] as any,
        recommendedFormat: "video" as any,
        hookIdea: "If your housing society doesn't have an electrical AMC, here is why maintenance bills double...",
        subconsciousTrigger: "Financial Responsibility & Resident Safety",
        hashtags: ["#ApartmentAMC", "#SocietyMaintenance", "#AmpEdgeSolutions", "#ElectricalAMC", "#KolkataRealEstate"]
      },
      {
        id: "trend-4",
        title: "Industrial Substation & LT/HT Panel Maintenance Checklist (Zero Factory Downtime)",
        category: "Industrial Power",
        growthVelocity: "+270%",
        viralityPotential: 94,
        sentiment: "B2B Reliability & Zero Downtime",
        targetPlatforms: ["youtube", "twitter", "google_business"] as any,
        recommendedFormat: "photo" as any,
        hookIdea: "Factory owners: How to prevent sudden electrical breakdowns during peak production...",
        subconsciousTrigger: "Business Risk Elimination",
        hashtags: ["#IndustrialElectrical", "#SubstationMaintenance", "#AmpEdge", "#PanelTesting", "#ElectricalEngineering"]
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
