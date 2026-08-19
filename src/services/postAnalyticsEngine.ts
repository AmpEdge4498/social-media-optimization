import { PlatformType } from "../types";

export interface SinglePostAnalysis {
  id: string;
  title: string;
  platform: PlatformType;
  publishedDate: string;
  metrics: {
    impressions: number;
    views: number;
    clicks: number;
    ctr: number;
    likes: number;
    comments: number;
    shares: number;
    saves: number;
    retentionAvg: number;
    rankPosition: number;
  };
  retentionCurve: Array<{ second: number; percentage: number; event?: string }>;
  impressionGrowth: Array<{ day: string; impressions: number; engagement: number }>;
  healthScore: number;
  aiDiagnostics: {
    strengths: string[];
    weaknesses: string[];
    criticalDropMoments: Array<{ second: number; reason: string; fix: string }>;
    actionableOptimizations: Array<{ priority: "High" | "Medium"; action: string; expectedBoost: string }>;
    improvedRewrite: {
      newTitle: string;
      newHook: string;
      newCta: string;
    };
  };
}

export const sampleTrackedPosts: SinglePostAnalysis[] = [
  {
    id: "post-1",
    title: "Why 90% of Outdated Software Is Bleeding Your Revenue in 2026",
    platform: "instagram",
    publishedDate: "Yesterday at 7:30 PM",
    metrics: {
      impressions: 48500,
      views: 39200,
      clicks: 1420,
      ctr: 7.8,
      likes: 3240,
      comments: 480,
      shares: 1150,
      saves: 2890,
      retentionAvg: 78.4,
      rankPosition: 1
    },
    retentionCurve: [
      { second: 0, percentage: 100, event: "Video Starts" },
      { second: 2, percentage: 88, event: "Visual Hook" },
      { second: 4, percentage: 72, event: "Minor Drop: Voiceover Transition" },
      { second: 10, percentage: 68, event: "Agitation Phase" },
      { second: 20, percentage: 65, event: "Breakthrough Demo" },
      { second: 35, percentage: 62, event: "Open Loop" },
      { second: 45, percentage: 58, event: "CTA Comment Trigger" }
    ],
    impressionGrowth: [
      { day: "Hour 1", impressions: 4200, engagement: 540 },
      { day: "Hour 4", impressions: 12800, engagement: 1420 },
      { day: "Hour 12", impressions: 27400, engagement: 2980 },
      { day: "Hour 24", impressions: 48500, engagement: 5870 }
    ],
    healthScore: 92,
    aiDiagnostics: {
      strengths: [
        "Saves-to-views ratio is exceptional (7.3%), triggering Explore page distribution.",
        "First 2-second visual hook retained 88% of users.",
        "Comment trigger generated 480 organic interactions."
      ],
      weaknesses: [
        "16% viewer drop at second 4 during the voiceover transition.",
        "Thumbnail text could use higher color contrast against dark mode feeds."
      ],
      criticalDropMoments: [
        {
          second: 4,
          reason: "Static screen for 1.8s without visual camera movement.",
          fix: "Insert a fast snap-zoom or sound effect to reset dopamine."
        }
      ],
      actionableOptimizations: [
        {
          priority: "High",
          action: "Pin a top comment asking: 'What software does your team currently use?' to boost discussion rank.",
          expectedBoost: "+35% more comments in next 12 hours"
        },
        {
          priority: "Medium",
          action: "Share this Reel to your Instagram Stories with an interactive opinion poll sticker.",
          expectedBoost: "+15% more story profile visits"
        }
      ],
      improvedRewrite: {
        newTitle: "The $50,000 Software Mistake 90% of Companies Make in 2026",
        newHook: "Stop scrolling if your company uses software! 🛑 Here is why 90% of systems bleed money...",
        newCta: "Comment 'SCALE' and AmpEdge will DM you our free 2026 digital audit."
      }
    }
  },
  {
    id: "post-2",
    title: "How to Automate 10 Hours of Daily Work with AI Systems (Full Blueprint)",
    platform: "youtube",
    publishedDate: "3 Days ago",
    metrics: {
      impressions: 82400,
      views: 54100,
      clicks: 4890,
      ctr: 9.1,
      likes: 4200,
      comments: 610,
      shares: 940,
      saves: 3100,
      retentionAvg: 74.2,
      rankPosition: 2
    },
    retentionCurve: [
      { second: 0, percentage: 100, event: "Title Intro" },
      { second: 3, percentage: 84, event: "Hook" },
      { second: 15, percentage: 76, event: "Workflow breakdown" },
      { second: 30, percentage: 70, event: "Demo 1" },
      { second: 60, percentage: 65, event: "Demo 2" }
    ],
    impressionGrowth: [
      { day: "Day 1", impressions: 18000, engagement: 1800 },
      { day: "Day 2", impressions: 46000, engagement: 4100 },
      { day: "Day 3", impressions: 82400, engagement: 7900 }
    ],
    healthScore: 89,
    aiDiagnostics: {
      strengths: [
        "CTR of 9.1% is in the top 5% of YouTube Tech category.",
        "Timestamps in description helped the video rank for 4 search queries."
      ],
      weaknesses: [
        "End-screen card was clicked by only 2.1% of viewers.",
        "Missing card link at 3:45 timestamp to redirect traffic."
      ],
      criticalDropMoments: [
        {
          second: 15,
          reason: "Too much theoretical talk before showing the live demo.",
          fix: "Show the screen demo outcome in the first 5 seconds."
        }
      ],
      actionableOptimizations: [
        {
          priority: "High",
          action: "Update YouTube thumbnail with yellow border to increase CTR from 9.1% to 11.5%.",
          expectedBoost: "+20,000 additional views from browse features"
        }
      ],
      improvedRewrite: {
        newTitle: "How AI Replaced 10 Hours of My Work (Step-by-Step System)",
        newHook: "Never do manual data entry again. Here is the exact AI pipeline we run at AmpEdge...",
        newCta: "Check the pinned comment for the free architecture diagram!"
      }
    }
  }
];

export function analyzeCustomPost(text: string, platform: PlatformType = "instagram"): SinglePostAnalysis {
  const words = text.split(/\s+/).length;
  const hasHook = /stop|secret|never|how to|why|mistake|2026/i.test(text);
  const hasCta = /comment|save|link|dm|follow|share/i.test(text);
  const score = (hasHook ? 45 : 25) + (hasCta ? 40 : 20) + (words > 20 ? 10 : 5);

  return {
    id: `post-${Date.now()}`,
    title: text.slice(0, 60) + (text.length > 60 ? "..." : ""),
    platform,
    publishedDate: "Just now (Draft / Simulation)",
    metrics: {
      impressions: 24500,
      views: 18200,
      clicks: 890,
      ctr: hasHook ? 8.4 : 4.2,
      likes: 1450,
      comments: hasCta ? 320 : 60,
      shares: 410,
      saves: 1120,
      retentionAvg: hasHook ? 76.5 : 58.2,
      rankPosition: hasHook && hasCta ? 1 : 4
    },
    retentionCurve: [
      { second: 0, percentage: 100, event: "Start" },
      { second: 2, percentage: hasHook ? 86 : 64, event: "Hook Hooking" },
      { second: 10, percentage: hasHook ? 72 : 48, event: "Agitation" },
      { second: 30, percentage: 65, event: "Core Value" },
      { second: 45, percentage: hasCta ? 58 : 34, event: "CTA" }
    ],
    impressionGrowth: [
      { day: "Hour 1", impressions: 1500, engagement: 180 },
      { day: "Hour 4", impressions: 6800, engagement: 720 },
      { day: "Hour 12", impressions: 14200, engagement: 1580 },
      { day: "Hour 24", impressions: 24500, engagement: 2980 }
    ],
    healthScore: score,
    aiDiagnostics: {
      strengths: [
        hasHook ? "Strong curiosity-driven hook in first 2 seconds." : "Clear subject focus.",
        hasCta ? "Direct engagement CTA triggers algorithm comment multiplier." : "Clean readable structure."
      ],
      weaknesses: [
        !hasHook ? "Missing psychological pattern interrupt in line 1." : "Could increase keyword density.",
        !hasCta ? "No friction-free comment or save trigger detected." : "Could improve visual cue rhythm."
      ],
      criticalDropMoments: [
        {
          second: 3,
          reason: "Text lacks strong emotional contrast.",
          fix: "Add high-arousal word like 'WARNING', 'SECRET', or 'BRUTAL TRUTH'."
        }
      ],
      actionableOptimizations: [
        {
          priority: "High",
          action: "Place the main keyword within the first 15 characters of the title/caption.",
          expectedBoost: "+45% more algorithmic SEO discovery"
        },
        {
          priority: "Medium",
          action: "Change CTA to ask for a specific keyword in comments (e.g. 'Comment GROW').",
          expectedBoost: "+3x comment velocity within first 45 minutes"
        }
      ],
      improvedRewrite: {
        newTitle: `Master ${text.slice(0, 30)} (The 2026 Viral Playbook)`,
        newHook: `Stop making this mistake with ${text.slice(0, 20)}! Here is the proven fix:`,
        newCta: "📌 Save this post now & comment 'GROW' for the full AmpEdge system."
      }
    }
  };
}
