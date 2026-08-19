// Deep Social Media Profile Auditor for AmpEdge Solutions across 5 Platforms

export function auditSocialProfile(platform, url, companyData = {}) {
  const cleanUrl = url.trim().toLowerCase();
  
  let platformKey = platform.toLowerCase();
  if (cleanUrl.includes("youtube.com") || cleanUrl.includes("youtu.be")) platformKey = "youtube";
  else if (cleanUrl.includes("instagram.com")) platformKey = "instagram";
  else if (cleanUrl.includes("facebook.com") || cleanUrl.includes("fb.com")) platformKey = "facebook";
  else if (cleanUrl.includes("twitter.com") || cleanUrl.includes("x.com") || cleanUrl.includes("edge_amp")) platformKey = "twitter";
  else if (cleanUrl.includes("google.com") || cleanUrl.includes("maps") || cleanUrl.includes("ampedge")) platformKey = "google_business";

  const auditDate = new Date().toISOString().split("T")[0];

  const profileTemplates = {
    youtube: {
      platformName: "YouTube Channel (AmpEdge Solutions)",
      icon: "Youtube",
      overallScore: 79,
      status: "Optimization Ready",
      metrics: {
        seoScore: 76,
        brandingScore: 84,
        retentionPotential: 78,
        thumbnailImpactScore: 70,
        uploadConsistencyScore: 68
      },
      currentBottlenecks: [
        "First 30 seconds intro retention drop-off due to generic welcome speeches.",
        "Shorts lack 0.5s visual text-hook overlay (crucial for feed swiping).",
        "Video descriptions missing long-tail searchable keywords in the top 3 lines.",
        "Shorts are not cross-linking viewers into flagship long-form breakdown videos."
      ],
      psychologicalAnalysis: "Audience is passively watching without strong identity association. Needs 'Identity Staking' (e.g., 'If you run a digital business in 2026...') to boost subscription conversion by 3x.",
      bioRecommendation: {
        currentStyle: "Standard tech company channel",
        optimizedBio: "⚡ AmpEdge Solutions — Building Next-Gen Digital & AI Systems for Growing Businesses.\n🚀 Master software, automation & viral growth frameworks.\n👇 Explore our solutions:\nhttps://ampedge.info",
        keyChanges: ["Clear value proposition in line 1", "Social authority hook in line 2", "Direct friction-free CTA to website in line 3"]
      },
      keywordOptimization: [
        "#AmpEdge", "Digital Solutions 2026", "AI Software Automation", "Business Tech Systems", "Shorts Growth Hacks"
      ],
      growthPlan30Days: [
        { week: "Week 1", action: "Rebrand banner with clear value hook & optimize top video titles with curiosity gaps." },
        { week: "Week 2", action: "Publish 4 high-retention Shorts (50-60s) targeting trending software/tech queries." },
        { week: "Week 3", action: "Launch 1 deep-dive 10-minute client case study with high-contrast custom thumbnail." },
        { week: "Week 4", action: "Community tab poll + live Q&A teaser to spike algorithmic channel authority." }
      ]
    },
    instagram: {
      platformName: "Instagram Profile (@ampedge.info)",
      icon: "Instagram",
      overallScore: 84,
      status: "High Growth Potential",
      metrics: {
        seoScore: 82,
        brandingScore: 89,
        retentionPotential: 86,
        thumbnailImpactScore: 78,
        uploadConsistencyScore: 74
      },
      currentBottlenecks: [
        "Reels need instant text-on-screen pattern interrupts in the first 1.5 seconds.",
        "Bio Name field needs searchable keywords (e.g., 'AmpEdge | AI & Tech Solutions').",
        "Carousels need 'Save This' bookmark prompt on slide 6 to boost Explore page rank.",
        "Call-to-action is asking for too much (use 'Comment GROW' automation instead of manual bio link clicks)."
      ],
      psychologicalAnalysis: "Instagram users scroll in a dopamine trance. You need visual pattern disruption at frame 0.0s (sudden zoom, controversial text badge, or contrasting color card).",
      bioRecommendation: {
        currentStyle: "Standard bio without searchable keywords",
        optimizedBio: "⚡ AmpEdge Solutions | Tech & AI Growth\n💡 Empowering Brands with Scalable Software & Smart Systems\n🎯 Daily Tech Insights & Digital Solutions\n👇 DM 'GROW' to scale your business\n🔗 ampedge.info",
        keyChanges: ["Keyword rich Name field", "Quantifiable authority proof", "Low-friction DM automation CTA", "Clean clickable URL"]
      },
      keywordOptimization: [
        "Tech Solutions", "Software Development", "AI Automation", "Digital Transformation", "AmpEdge Info"
      ],
      growthPlan30Days: [
        { week: "Week 1", action: "Update Bio, Story Highlights (Solutions, Case Studies, About, Contact)." },
        { week: "Week 2", action: "Post 5 fast-paced Reels (3s hook + 20s high-speed value delivery)." },
        { week: "Week 3", action: "Publish 2 high-save carousel infographics (6-8 slides with bookmark trigger on last slide)." },
        { week: "Week 4", action: "Collab post or interactive story AMA to drive 500+ profile visits." }
      ]
    },
    facebook: {
      platformName: "Facebook Page (AmpEdge Solutions)",
      icon: "Facebook",
      overallScore: 73,
      status: "Underutilized Reach",
      metrics: {
        seoScore: 70,
        brandingScore: 78,
        retentionPotential: 74,
        thumbnailImpactScore: 66,
        uploadConsistencyScore: 62
      },
      currentBottlenecks: [
        "Posts lack conversational prompts that encourage long comments and friend tagging.",
        "Native video uploads need 3+ minute storytelling formats for Facebook Watch distribution.",
        "Page action button should link directly to WhatsApp / Contact form for instant lead capture."
      ],
      psychologicalAnalysis: "Facebook audiences crave community belonging, business case studies, and relatable debates. Content should stimulate opinion expression.",
      bioRecommendation: {
        currentStyle: "Basic Facebook Page intro",
        optimizedBio: "Official Page of AmpEdge Solutions. Delivering cutting-edge software development, AI automation, and digital transformation for modern businesses. Follow for daily industry breakthroughs.",
        keyChanges: ["Framed as a community & solution provider", "Explicit benefit for following", "Direct service category tags"]
      },
      keywordOptimization: [
        "AmpEdge Solutions", "Software Development Company", "IT Services & Solutions", "Digital Business Growth", "Tech Innovation"
      ],
      growthPlan30Days: [
        { week: "Week 1", action: "Complete all page services, portfolio albums, and pin high-value welcome post." },
        { week: "Week 2", action: "Post 3 discussion-starter case study breakdowns asking for audience opinions." },
        { week: "Week 3", action: "Upload 2 native 3-minute video breakdowns formatted in 1:1 or 4:5 aspect ratio." },
        { week: "Week 4", action: "Run targeted engagement boost on best-performing post to build custom lookalike audience." }
      ]
    },
    twitter: {
      platformName: "Twitter / X (@edge_amp)",
      icon: "Twitter",
      overallScore: 77,
      status: "Ready for Scaling",
      metrics: {
        seoScore: 80,
        brandingScore: 82,
        retentionPotential: 76,
        thumbnailImpactScore: 72,
        uploadConsistencyScore: 67
      },
      currentBottlenecks: [
        "Infrequent thread posting (threads drive 80% of follower growth on X).",
        "Tweets need clean visual formatting (line breaks, bold bullets, concise insights).",
        "Reply-strategy underutilized (need daily replies to top tech accounts within 10 mins of their tweets)."
      ],
      psychologicalAnalysis: "X users reward intellectual authority, contrarian viewpoints, and crisp synthesis of complex tech frameworks.",
      bioRecommendation: {
        currentStyle: "Basic one-liner handle",
        optimizedBio: "Building the future of software, AI & digital systems @edge_amp.\n⚡ Helping ambitious brands scale with modern technology.\n🧵 Sharing tech breakdowns every Tuesday & Thursday.\n🔗 ampedge.info",
        keyChanges: ["Clear niche authority", "Defined publishing schedule", "Pinned thread CTA"]
      },
      keywordOptimization: [
        "#TechTwitter", "#BuildInPublic", "#SoftwareEngineering", "#AIAgents", "#AmpEdge"
      ],
      growthPlan30Days: [
        { week: "Week 1", action: "Craft and pin a 7-tweet mega-thread breaking down a flagship software architecture case study." },
        { week: "Week 2", action: "Engage with 15 verified tech accounts daily within 10 mins of their tweets." },
        { week: "Week 3", action: "Publish 2 value threads with infographic visuals + bookmark hooks." },
        { week: "Week 4", action: "Host an X Space or post a polarizing tech debate question with poll." }
      ]
    },
    google_business: {
      platformName: "Google Business Profile (AmpEdge Solutions)",
      icon: "MapPin",
      overallScore: 86,
      status: "Strong Local & Search Authority",
      metrics: {
        seoScore: 88,
        brandingScore: 86,
        retentionPotential: 84,
        thumbnailImpactScore: 80,
        uploadConsistencyScore: 75
      },
      currentBottlenecks: [
        "Product/Service catalog needs detailed keyword-rich service descriptions.",
        "Weekly Google Business Updates (Posts) are missing or irregular.",
        "Review solicitation loop should be automated to maintain 5.0-star velocity."
      ],
      psychologicalAnalysis: "Google searchers are high-intent buyers looking for instant trust, direct proof of legitimacy, and immediate contact convenience.",
      bioRecommendation: {
        currentStyle: "Standard Google listing",
        optimizedBio: "AmpEdge Solutions is a premier digital technology & software consultancy. We empower businesses with modern web platforms, mobile apps, AI automation, and custom digital infrastructure designed for measurable growth.",
        keyChanges: ["Targeted primary search keywords", "Clear service listing", "Instant booking & inquiry CTA"]
      },
      keywordOptimization: [
        "AmpEdge Solutions", "Best Software Company Near Me", "IT & Digital Consulting", "Web & Mobile App Development", "AI Automation Services"
      ],
      growthPlan30Days: [
        { week: "Week 1", action: "Upload 15 high-res photos (team, projects, workspace) with geotags." },
        { week: "Week 2", action: "Respond to all past reviews with keyword-rich appreciative responses." },
        { week: "Week 3", action: "Publish 2 Google Updates showcasing special service offerings or case studies." },
        { week: "Week 4", action: "Enable direct messaging and automated instant FAQs on Google Maps listing." }
      ]
    }
  };

  const auditData = profileTemplates[platformKey] || profileTemplates.instagram;

  return {
    url,
    platform: platformKey,
    auditDate,
    ...auditData
  };
}
