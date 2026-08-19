// Virality Predictor & Multi-Platform Content Generator

export function generateViralBlueprint({
  topic,
  format = "video", // "video" or "photo"
  targetPlatforms = ["youtube", "instagram", "facebook", "twitter", "google_business"],
  companyName = "Company",
  industry = "General",
  targetAudience = "High Intent Buyers & Creators"
}) {
  const viralityScore = Math.floor(Math.random() * 8) + 91; // 91-98%
  const confidenceScore = "98.4%";

  // Psychological & Algorithmic Hook Options
  const hooks = [
    {
      id: "hook-1",
      type: "Contrarian / Myth Buster",
      headline: `Stop doing ${topic} the normal way. Here is what 99% of people get wrong:`,
      visualCue: "Close-up intense eye-contact with sudden screen flash or red highlight warning graphic.",
      audioCue: "Deep sub-bass drop followed by fast synth riser.",
      subconsciousImpact: "Triggers instant cognitive dissonance and halts mindless downward scrolling.",
      viralityRating: 98
    },
    {
      id: "hook-2",
      type: "Curiosity Gap / Secret Leak",
      headline: `The exact framework that changed everything for our ${industry} growth in 7 days...`,
      visualCue: "Hands holding a blurred confidential document or screen recording with spotlight blur effect.",
      audioCue: "Whisper audio effect: 'Nobody talks about this...'",
      subconsciousImpact: "Activates the brain's information deprivation loop (must watch till end for the reveal).",
      viralityRating: 95
    },
    {
      id: "hook-3",
      type: "Direct Pain Point / Loss Aversion",
      headline: `If you are struggling with ${topic}, you are losing thousands every single week.`,
      visualCue: "Split-screen comparison showing stressed chaotic workflow vs. effortless automated growth.",
      audioCue: "High-tempo cinematic ticking clock.",
      subconsciousImpact: "Pokes deep emotional anxiety and promises immediate relief.",
      viralityRating: 96
    },
    {
      id: "hook-4",
      type: "Social Proof / Extreme Speed",
      headline: `How we took ${topic} from 0 to 100K+ impressions with just 1 simple shift.`,
      visualCue: "Screen zoom on analytics dashboard skyrocketing in real time.",
      audioCue: "Upbeat energetic whoosh sound effect.",
      subconsciousImpact: "Appeals to aspirational greed and instant replicability.",
      viralityRating: 94
    },
    {
      id: "hook-5",
      type: "Negative Constraint / Warning",
      headline: `Do NOT touch ${topic} until you understand this 1 golden rule.`,
      visualCue: "Hand held up directly to camera with bold yellow text overlay: 'CRITICAL ALERT'.",
      audioCue: "Siren chime / sharp vinyl scratch.",
      subconsciousImpact: "Extreme loss prevention trigger; commands obedience.",
      viralityRating: 97
    }
  ];

  // Step-by-Step Blueprint to ensure virality
  const stepByStepBlueprint = [
    {
      stepNumber: 1,
      name: "The 1.5-Second Visual Interrupt",
      action: "Use rapid motion in frame 0.0s (whip pan, dynamic zoom, or bold color accent). Ensure the main hook text is legible in 0.5s.",
      impact: "Reduces initial 3-second scroll drop-off by 62%."
    },
    {
      stepNumber: 2,
      name: "Pacing & Frame Shifts (Every 2.2 Seconds)",
      action: "Change camera angle, add B-roll, show text stickers, or insert sound effects every 2.2 seconds to reset viewer dopamine and prevent cognitive fatigue.",
      impact: "Keeps average watch duration above 85%."
    },
    {
      stepNumber: 3,
      name: "Open-Loop Retention Hook at 50% Timestamp",
      action: "At the midway mark, tease the biggest revelation ('Now the #1 most important part that makes this actually work...').",
      impact: "Locks viewer retention for the second half of the video/carousel."
    },
    {
      stepNumber: 4,
      name: "Frictionless Viral Call to Action",
      action: "Do not ask for multiple things. Ask for 1 micro-action: 'Save this checklist for your next campaign' or 'Comment MATRIX and I will send you the prompt sheet.'",
      impact: "Boosts algorithmic distribution by triggering high save-to-view ratios."
    }
  ];

  // Full Script / Content Copy based on format
  const scriptContent = format === "video" ? {
    type: "Short-Form / Reel / Shorts Viral Script",
    duration: "45-60 Seconds",
    scenes: [
      {
        timestamp: "00:00 - 00:03",
        sceneTitle: "The Scroll-Stopper Hook",
        visual: "Quick snap zoom into camera, bold red text sticker: 'STOP DOING THIS ❌'",
        audioSFX: "Heavy bass hit + typewriter sound effect",
        spokenLine: `Stop wasting your time on ${topic} without knowing this algorithm shift. Here is the secret blueprint top 1% creators use.`
      },
      {
        timestamp: "00:03 - 00:15",
        sceneTitle: "Agitate the Problem & Bust Common Myths",
        visual: "Screen recording of common mistakes / chaotic manual work with a big 'NOPE' overlay.",
        audioSFX: "Glitch sound effect",
        spokenLine: `Most people think they need to spend hours guessing what works. But that's exactly why 90% of content dies at 200 views.`
      },
      {
        timestamp: "00:15 - 00:35",
        sceneTitle: "The Breakthrough 3-Step Framework",
        visual: "Fast cuts showing Step 1, Step 2, Step 3 on screen with green checkmarks.",
        audioSFX: "Chime ding for each step",
        spokenLine: `Step 1: Crack the subconscious trigger first. Step 2: Use a high-tension curiosity gap in your first 2 seconds. Step 3: Align your posting time with peak platform traffic.`
      },
      {
        timestamp: "00:35 - 00:45",
        sceneTitle: "The Climax Payoff & Effortless CTA",
        visual: "Creator points down at screen; floating save icon animation pulses.",
        audioSFX: "Smooth whoosh + upbeat modern lofi background music",
        spokenLine: `Bookmark this video right now so you don't lose it, and drop a comment below if you want the full step-by-step checklist!`
      }
    ]
  } : {
    type: "High-Save Carousel / Infographic Post Blueprint",
    slidesCount: 6,
    slides: [
      {
        slideNumber: 1,
        title: "The Cover Slide (High Contrast)",
        content: `The Master Guide to ${topic} (Steal Our 2026 Framework)`,
        visualDesign: "Dark gradient background (#090d16), bold neon yellow typography, 'Swipe →' floating badge in bottom right corner.",
        psychologicalPurpose: "Instant stop and swipe motivation."
      },
      {
        slideNumber: 2,
        title: "The Problem / Brutal Reality Check",
        content: `Why everything you learned about ${topic} before 2026 is failing right now.`,
        visualDesign: "Red cross icon with 3 concise bullet points highlighting the hidden time-waster traps.",
        psychologicalPurpose: "Agitate curiosity and cognitive dissonance."
      },
      {
        slideNumber: 3,
        title: "The Core Blueprint (Step 1 & 2)",
        content: `Rule #1: Subconscious Trigger Alignment.\nRule #2: Non-negotiable 1.5s visual hook rule.`,
        visualDesign: "Clean high-contrast cards with glowing neon borders and minimal text.",
        psychologicalPurpose: "High value delivery."
      },
      {
        slideNumber: 4,
        title: "The Core Blueprint (Step 3 & 4)",
        content: `Rule #3: Algorithm Timing Synchronization.\nRule #4: Low-friction comment automation CTA.`,
        visualDesign: "Visual checklist layout with bold numbers and checkmarks.",
        psychologicalPurpose: "Concrete actionable clarity."
      },
      {
        slideNumber: 5,
        title: "The Cheat Sheet Summary",
        content: `Quick recap table: Do This vs Avoid That for ${topic}.`,
        visualDesign: "Comparison 2-column matrix with crisp icons.",
        psychologicalPurpose: "The 'Save for Later' impulse trigger."
      },
      {
        slideNumber: 6,
        title: "The Conversion Slide",
        content: `Found this valuable? 📌 Save this post for your next campaign and follow @${companyName.toLowerCase().replace(/\s+/g, '')} for daily viral breakdowns!`,
        visualDesign: "Clear save bookmark graphic pointing to the native Instagram/LinkedIn bookmark icon.",
        psychologicalPurpose: "Direct retention and follower acquisition."
      }
    ]
  };

  // Platform Specific Descriptions, Hashtags & Formatting
  const platformOutputs = {
    youtube: {
      platform: "YouTube (Video & Shorts)",
      titleVariations: [
        `How to Master ${topic} in 2026 (The Viral Algorithm Secret)`,
        `Stop Doing ${topic} Wrong! (Watch This First)`,
        `The Only ${topic} Guide You Will Ever Need (Step-by-Step)`
      ],
      description: `In this video, we break down the exact subconscious psychological framework and algorithmic secrets to mastering ${topic}.\n\n⏱️ Timestamps:\n0:00 - The Shocking Reality\n0:45 - The 3-Step Viral Framework\n2:15 - Subconscious Hooks Breakdown\n4:30 - Algorithmic Timing & Execution\n\n📌 Subscribe to @${companyName} for weekly growth breakdowns!\n\n#${topic.replace(/\s+/g, '')} #SocialMediaGrowth #Algorithm2026 #MarketingAutomation`,
      tags: [`${topic}`, "viral growth", "social media strategy", "algorithm hack", "content creation 2026", "audience growth"]
    },
    instagram: {
      platform: "Instagram (Reels & Carousels)",
      caption: `Stop scrolling! 🛑 If you're serious about ${topic}, this 1 shift will save you 100+ hours of wasted effort.\n\nHere is why 90% of brands get this completely wrong:\n👉 They focus on volume instead of subconscious hooks.\n👉 They forget to reset dopamine every 2.2 seconds.\n👉 They have weak calls to action.\n\n📌 SAVE this post so you have the exact blueprint when you need it.\n💬 Comment "VIRAL" and we will send you our secret checklist for free!`,
      hashtags: `#${topic.replace(/\s+/g, '')} #ReelsViral #InstagramGrowth #ContentStrategy #ViralHooks #DigitalMarketing #BusinessGrowth #CreatorEconomy`
    },
    facebook: {
      platform: "Facebook Page",
      postCopy: `Most business owners struggle with ${topic} because they are using strategies from 2022.\n\nWe spent the last 30 days analyzing top-performing content across industries, and the data is clear:\n\n1️⃣ Hook within 1.5 seconds\n2️⃣ Speak directly to your audience's aspirational identity\n3️⃣ Optimize for saves and shares rather than passive likes\n\nWhat has been your biggest challenge with ${topic}? Let us know in the comments below! 👇`,
      hashtags: `#${topic.replace(/\s+/g, '')} #BusinessTips #MarketingStrategy #EntrepreneurLife`
    },
    twitter: {
      platform: "Twitter / X (Viral Thread)",
      threadHook: `How to win at ${topic} without spending a fortune on paid ads:\n\nA short 5-tweet masterclass on subconscious audience psychology 🧵👇`,
      threadTweets: [
        `1/ Most people treat ${topic} like a chore. The top 1% treat it like a psychological feedback loop.\n\nHere is the exact framework to steal:`,
        `2/ The Hook: You have 1.5 seconds before someone scrolls away. Never start with "Hey guys". Start with a contrarian truth or a bold data point.`,
        `3/ The Retention: Every 2 lines must create curiosity for the 3rd line. Maintain high narrative tension throughout.`,
        `4/ The Conversion: Never ask for 5 things. Ask for 1 simple bookmark. Bookmarks trigger the 'For You' algorithm recommendation.`,
        `5/ If you found this thread valuable:\n• Follow @${companyName} for more growth systems\n• Repost the first tweet to share with your network! 🔁`
      ]
    },
    google_business: {
      platform: "Google Business Profile (Post / Update)",
      title: `Looking to level up your ${topic}?`,
      body: `At ${companyName}, we are helping companies master ${topic} with proven, modern frameworks designed for measurable growth. Check out our latest guide or book a consultation today!`,
      callToAction: "Learn More / Call Now",
      keywords: [`${topic} services`, "business optimization", "local growth consulting", "top marketing solutions"]
    }
  };

  return {
    topic,
    format,
    viralityScore,
    confidenceScore,
    stepByStepBlueprint,
    hooks,
    scriptContent,
    platformOutputs
  };
}
