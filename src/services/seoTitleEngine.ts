import { PlatformType } from "../types";

export interface RankedTitle {
  rank: number;
  title: string;
  ctrScore: number;
  seoScore: number;
  searchVolume: "Ultra-High" | "High" | "Medium";
  competition: "Low" | "Moderate" | "Competitive";
  intent: "Informational" | "Commercial" | "Transactional" | "Viral Curiosity";
  psychologicalHook: string;
  recommendedLength: string;
}

export interface PlatformSeoPackage {
  platform: PlatformType;
  platformName: string;
  rankedTitles: RankedTitle[];
  seoDescription: string;
  keywords: {
    primary: string[];
    secondary: string[];
    longTail: string[];
  };
  tags: string[];
  hashtags: string[];
  searchOptimizationTips: string[];
}

export function generateSeoTitlePackage(topic: string, companyName: string = "AmpEdge Solutions"): { [key in PlatformType]: PlatformSeoPackage } {
  const cleanTopic = topic.trim() || "AI Software & Business Automation 2026";
  const slug = cleanTopic.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  
  const platforms: PlatformType[] = ["youtube", "instagram", "facebook", "twitter", "google_business"];
  
  const results: any = {};

  // 1. YouTube SEO & Ranked Titles
  results.youtube = {
    platform: "youtube",
    platformName: "YouTube (Videos & Shorts SEO)",
    rankedTitles: [
      {
        rank: 1,
        title: `How to Master ${cleanTopic} in 2026 (The Step-by-Step Guide)`,
        ctrScore: 98,
        seoScore: 99,
        searchVolume: "Ultra-High",
        competition: "Low",
        intent: "Informational",
        psychologicalHook: "Complete mastery + 2026 recency bias trigger",
        recommendedLength: "58 chars (Optimal for YouTube feed truncate)"
      },
      {
        rank: 2,
        title: `Stop Doing ${cleanTopic} WRONG! (Watch This Before Starting)`,
        ctrScore: 96,
        seoScore: 94,
        searchVolume: "High",
        competition: "Low",
        intent: "Viral Curiosity",
        psychologicalHook: "Fear of missing out & mistake aversion",
        recommendedLength: "62 chars"
      },
      {
        rank: 3,
        title: `The Secret ${cleanTopic} Framework Nobody is Talking About (${companyName})`,
        ctrScore: 95,
        seoScore: 92,
        searchVolume: "High",
        competition: "Moderate",
        intent: "Commercial",
        psychologicalHook: "Exclusive insider knowledge / Knowledge arbitrage",
        recommendedLength: "68 chars"
      },
      {
        rank: 4,
        title: `3 ${cleanTopic} Strategies That Actually Work (Tested & Proven)`,
        ctrScore: 93,
        seoScore: 90,
        searchVolume: "High",
        competition: "Moderate",
        intent: "Informational",
        psychologicalHook: "Clarity + Social proof",
        recommendedLength: "59 chars"
      }
    ],
    seoDescription: `Discover the ultimate 2026 blueprint for ${cleanTopic}. In this video, ${companyName} reveals proven frameworks to scale your digital reach, automate workflows, and dominate search results.\n\n📌 Timestamps:\n0:00 - The ${cleanTopic} Problem\n1:15 - Core Algorithm Secrets\n3:40 - 3-Step Execution Blueprint\n6:20 - Real Case Study & Results\n8:50 - Free Resource & Next Steps\n\n🔗 Resources Mentioned:\n👉 Explore ${companyName}: https://ampedge.info\n👉 Join our weekly tech newsletter for scalable business systems.\n\n#${cleanTopic.replace(/[^a-zA-Z0-9]/g, '')} #AmpEdge #TechGrowth #SEO2026 #BusinessAutomation #YouTubeGrowth`,
    keywords: {
      primary: [`${cleanTopic}`, `${cleanTopic} tutorial 2026`, `best ${cleanTopic} guide`],
      secondary: [`${companyName}`, "digital transformation", "business automation systems", "how to scale with tech"],
      longTail: [`how to implement ${cleanTopic} for small business`, `step by step ${cleanTopic} strategy 2026`, `${cleanTopic} case study breakdown`]
    },
    tags: [
      `${cleanTopic}`, `${cleanTopic} 2026`, `${cleanTopic} guide`, `${cleanTopic} tutorial`,
      "AmpEdge Solutions", "digital automation", "tech growth", "software development",
      "viral marketing hacks", "business systems", "AI workflows"
    ],
    hashtags: [`#${cleanTopic.replace(/[^a-zA-Z0-9]/g, '')}`, "#TechSolutions", "#AmpEdge", "#BusinessGrowth", "#AI2026"],
    searchOptimizationTips: [
      "Include the exact primary keyword in the first 25 words of your description.",
      "Add timestamps with keywords to qualify for Google Key Moments in video search.",
      "Use high-contrast 3-word thumbnails with complementary neon border styling."
    ]
  };

  // 2. Instagram SEO & Ranked Titles
  results.instagram = {
    platform: "instagram",
    platformName: "Instagram (Reels & Carousels SEO)",
    rankedTitles: [
      {
        rank: 1,
        title: `The 1.5s ${cleanTopic} Hack That Changed Everything ⚡`,
        ctrScore: 99,
        seoScore: 96,
        searchVolume: "Ultra-High",
        competition: "Low",
        intent: "Viral Curiosity",
        psychologicalHook: "Speed of execution + high curiosity payoff",
        recommendedLength: "45 chars"
      },
      {
        rank: 2,
        title: `99% of people fail at ${cleanTopic}. Here's the fix 👇`,
        ctrScore: 97,
        seoScore: 94,
        searchVolume: "High",
        competition: "Moderate",
        intent: "Viral Curiosity",
        psychologicalHook: "Superiority bias + problem agitation",
        recommendedLength: "48 chars"
      },
      {
        rank: 3,
        title: `Steal our 2026 ${cleanTopic} Blueprint (Save for Later 📌)`,
        ctrScore: 95,
        seoScore: 93,
        searchVolume: "High",
        competition: "Low",
        intent: "Commercial",
        psychologicalHook: "Bookmark impulse + high-utility trigger",
        recommendedLength: "52 chars"
      }
    ],
    seoDescription: `Stop scrolling if you want to master ${cleanTopic}! 🛑\n\nMost brands waste months guessing the algorithm. Here is the exact system ${companyName} uses to generate consistent organic engagement:\n\n1️⃣ Hook audience in first 1.5 seconds\n2️⃣ Reset dopamine every 2.2 seconds with pattern cuts\n3️⃣ End with a frictionless single CTA\n\n📌 SAVE this post to execute later.\n💬 Comment "GROW" and our team will DM you the complete framework for free!\n\n🔗 https://ampedge.info`,
    keywords: {
      primary: [`${cleanTopic} tips`, `viral ${cleanTopic}`, `${cleanTopic} strategy`],
      secondary: ["Instagram growth 2026", "Reels algorithm", "content strategy hacks"],
      longTail: [`best reels framework for ${cleanTopic}`, `how to grow instagram with ${cleanTopic}`]
    },
    tags: [`#${cleanTopic.replace(/[^a-zA-Z0-9]/g, '')}`, "#ReelsViral", "#InstagramSEO", "#AmpEdgeInfo", "#TechMarketing"],
    hashtags: [
      `#${cleanTopic.replace(/[^a-zA-Z0-9]/g, '')}`, "#ReelsGrowth", "#ContentMarketing",
      "#AmpEdge", "#DigitalStrategy", "#GrowthHacking", "#TechSolutions2026", "#CreatorEconomy"
    ],
    searchOptimizationTips: [
      "Put your main target keyword in the Instagram Name field and in the first 3 words of caption.",
      "Add 3-5 hyper-relevant topic tags in the Instagram Reels share settings.",
      "Prompt the word 'Save' or 'DM' in your on-screen visual overlay to boost algorithm distribution."
    ]
  };

  // 3. Facebook SEO & Ranked Titles
  results.facebook = {
    platform: "facebook",
    platformName: "Facebook (Posts & Watch SEO)",
    rankedTitles: [
      {
        rank: 1,
        title: `Why Most Businesses Struggle with ${cleanTopic} (And the Simple Solution)`,
        ctrScore: 96,
        seoScore: 95,
        searchVolume: "High",
        competition: "Low",
        intent: "Informational",
        psychologicalHook: "Empathy + pain-relief guarantee",
        recommendedLength: "65 chars"
      },
      {
        rank: 2,
        title: `The Truth About ${cleanTopic} in 2026: What Actually Works`,
        ctrScore: 94,
        seoScore: 92,
        searchVolume: "High",
        competition: "Moderate",
        intent: "Commercial",
        psychologicalHook: "Transparency & authority",
        recommendedLength: "55 chars"
      }
    ],
    seoDescription: `Are you making this common mistake with ${cleanTopic}?\n\nAt ${companyName}, we've helped dozens of modern companies scale their systems. The biggest difference between top performers and struggling brands is their consistency and technology stack.\n\n👇 Read the full breakdown below and let us know your thoughts:\n\nWhat is your biggest roadblock with ${cleanTopic}? Drop a comment below!\n\n🔗 Visit ${companyName}: https://ampedge.info`,
    keywords: {
      primary: [`${cleanTopic} business tips`, `how to improve ${cleanTopic}`],
      secondary: ["small business tech", "digital workflow solutions", "AmpEdge Solutions"],
      longTail: [`affordable ${cleanTopic} systems for companies`, `why ${cleanTopic} is crucial for 2026 revenue`]
    },
    tags: [`#${cleanTopic.replace(/[^a-zA-Z0-9]/g, '')}`, "#BusinessGrowth", "#AmpEdgeSolutions", "#TechConsulting"],
    hashtags: [`#${cleanTopic.replace(/[^a-zA-Z0-9]/g, '')}`, "#SmallBusinessTips", "#TechCommunity", "#AmpEdge"],
    searchOptimizationTips: [
      "Facebook algorithm favors posts that generate 3+ word comments between friends.",
      "Upload videos natively in 1:1 or 4:5 format with embedded captions.",
      "Share in relevant Facebook Groups 15 minutes after publishing for initial boost."
    ]
  };

  // 4. Twitter / X SEO & Ranked Titles
  results.twitter = {
    platform: "twitter",
    platformName: "Twitter / X (Viral Threads & SEO)",
    rankedTitles: [
      {
        rank: 1,
        title: `How to master ${cleanTopic} without wasting 100+ hours (A masterclass) 🧵👇`,
        ctrScore: 99,
        seoScore: 97,
        searchVolume: "Ultra-High",
        competition: "Low",
        intent: "Viral Curiosity",
        psychologicalHook: "Extreme time savings + definitive masterclass promise",
        recommendedLength: "68 chars"
      },
      {
        rank: 2,
        title: `The 2026 ${cleanTopic} Playbook that top 1% tech founders gatekeep: 🧵`,
        ctrScore: 97,
        seoScore: 95,
        searchVolume: "High",
        competition: "Low",
        intent: "Commercial",
        psychologicalHook: "Exclusivity + status elevation",
        recommendedLength: "65 chars"
      }
    ],
    seoDescription: `1/ Most people treat ${cleanTopic} like a chore. The top 1% treat it like a psychological flywheel.\n\nHere is the step-by-step 2026 system we use at @edge_amp 🧵👇\n\n2/ The First Rule: Optimize for bookmarks. When someone bookmarks your tweet, X multiplies your 'For You' reach by 4.2x.\n\n3/ The Execution: Focus on high-signal synthesis rather than noise.\n\n4/ If you found this valuable, follow @edge_amp and check https://ampedge.info for next-gen digital systems! 🚀`,
    keywords: {
      primary: [`${cleanTopic}`, `${cleanTopic} thread`, "tech systems 2026"],
      secondary: ["#TechTwitter", "#BuildInPublic", "growth systems"],
      longTail: [`how top creators master ${cleanTopic}`, `software frameworks for ${cleanTopic}`]
    },
    tags: ["#AmpEdge", "#TechTwitter", "#SoftwareGrowth", "#AIAgents"],
    hashtags: ["#TechTwitter", "#BuildInPublic", "#MarketingTwitter", "#AmpEdge", "#AI2026"],
    searchOptimizationTips: [
      "Include numbers, bold bullet points, and an explicit thread hook (🧵👇).",
      "Engage and reply to 5 big accounts in your niche right after tweeting.",
      "Pin your best performing thread to your profile header to capture 10x more follows."
    ]
  };

  // 5. Google Business Profile SEO
  results.google_business = {
    platform: "google_business",
    platformName: "Google Business Profile (Local 3-Pack SEO)",
    rankedTitles: [
      {
        rank: 1,
        title: `Looking for the Best ${cleanTopic} & Digital Solutions? (${companyName})`,
        ctrScore: 97,
        seoScore: 99,
        searchVolume: "High",
        competition: "Low",
        intent: "Transactional",
        psychologicalHook: "Local high-intent buyer satisfaction",
        recommendedLength: "60 chars"
      },
      {
        rank: 2,
        title: `Scale Your Business with Next-Gen ${cleanTopic} by ${companyName}`,
        ctrScore: 95,
        seoScore: 96,
        searchVolume: "High",
        competition: "Low",
        intent: "Commercial",
        psychologicalHook: "Direct B2B transformation offer",
        recommendedLength: "58 chars"
      }
    ],
    seoDescription: `At ${companyName}, we specialize in delivering cutting-edge software development, AI automation, and digital growth services tailored to elevate your business.\n\n💡 Why Partner with Us:\n✓ Proven track record in ${cleanTopic}\n✓ Custom tech infrastructure & automation\n✓ Dedicated 24/7 client support\n\n📞 Contact us today for a free consultation:\n🔗 Website: https://ampedge.info\n📍 Location: AmpEdge Solutions HQ`,
    keywords: {
      primary: [`${cleanTopic} services near me`, `best ${cleanTopic} company`, `${companyName}`],
      secondary: ["software consultancy", "IT digital systems", "business automation agency"],
      longTail: [`top rated digital solutions agency for ${cleanTopic}`, `hire experts for ${cleanTopic} implementation`]
    },
    tags: ["AmpEdge Solutions", "Software Development", "Local Tech Agency", "Business Consulting"],
    hashtags: ["#AmpEdgeSolutions", "#LocalSEO", "#SoftwareConsulting", "#BusinessTech"],
    searchOptimizationTips: [
      "Add high-resolution photos of your team and office with geotags every 7 days.",
      "Respond to all customer reviews with primary keywords included in your reply.",
      "Publish weekly Google Updates with direct 'Call Now' or 'Learn More' CTA buttons."
    ]
  };

  return results;
}
