import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { generateViralBlueprint } from "./services/viralityEngine.js";
import { analyzeSubconsciousPsychology } from "./services/subconsciousEngine.js";
import { auditSocialProfile } from "./services/profileAuditService.js";
import { getTrendingTopics } from "./services/trendHunterService.js";
import { getOptimalSchedule, platformTimingData } from "./services/timingEngine.js";
import { callGeminiApi } from "./services/geminiService.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health Check
app.get("/api/health", (req, res) => {
  res.json({
    status: "online",
    system: "ViralMind AI Agent Engine",
    timestamp: new Date().toISOString(),
    platformsSupported: ["youtube", "instagram", "facebook", "twitter", "google_business"]
  });
});

// 1. Generate Full Viral Blueprint (Hooks, Psychology, Script, Platforms, Blueprint)
app.post("/api/generate-content", async (req, res) => {
  try {
    const { topic, format, targetPlatforms, companyName, industry, targetAudience, apiKey } = req.body;

    if (!topic) {
      return res.status(400).json({ error: "Topic is required" });
    }

    // Run virality and subconscious engines
    const blueprint = generateViralBlueprint({
      topic,
      format: format || "video",
      targetPlatforms: targetPlatforms || ["youtube", "instagram", "facebook", "twitter", "google_business"],
      companyName: companyName || "My Brand",
      industry: industry || "Tech & Growth",
      targetAudience: targetAudience || "High-Intent Audience"
    });

    const psychology = analyzeSubconsciousPsychology(topic, format);

    // If API key is provided, check if we can augment with custom Gemini suggestions
    if (apiKey) {
      const prompt = `Act as the world's #1 viral growth marketer and neuro-copywriting master. Analyze this topic: "${topic}" for ${companyName} (${industry}). Provide 2 ultra-viral viral hook ideas with high psychological tension.`;
      const geminiInsight = await callGeminiApi({ prompt, apiKey });
      if (geminiInsight) {
        blueprint.geminiLiveInsight = geminiInsight;
      }
    }

    res.json({
      success: true,
      blueprint,
      psychology
    });
  } catch (error) {
    console.error("Error generating content:", error);
    res.status(500).json({ error: "Failed to generate viral content blueprint" });
  }
});

// 2. Subconscious Mind & Narrative Lab Audit
app.post("/api/subconscious-audit", (req, res) => {
  try {
    const { content, format } = req.body;
    if (!content) {
      return res.status(400).json({ error: "Content or hook text is required" });
    }
    const result = analyzeSubconsciousPsychology(content, format || "video");
    res.json({ success: true, result });
  } catch (error) {
    console.error("Error auditing subconscious:", error);
    res.status(500).json({ error: "Failed to audit psychology" });
  }
});

// 3. Profile URL Auditor (YouTube, Instagram, Facebook, Twitter, Google Business Profile)
app.post("/api/analyze-profile", (req, res) => {
  try {
    const { platform, url, companyData } = req.body;
    if (!url) {
      return res.status(400).json({ error: "Profile URL is required" });
    }
    const audit = auditSocialProfile(platform || "auto", url, companyData);
    res.json({ success: true, audit });
  } catch (error) {
    console.error("Error analyzing profile:", error);
    res.status(500).json({ error: "Failed to audit profile" });
  }
});

// 4. Autonomous Trend Hunter Feed
app.get("/api/trending-topics", (req, res) => {
  try {
    const { category } = req.query;
    const trends = getTrendingTopics(category);
    res.json({ success: true, count: trends.length, trends });
  } catch (error) {
    console.error("Error fetching trends:", error);
    res.status(500).json({ error: "Failed to fetch trending topics" });
  }
});

// 5. Optimal Posting Schedules & Heatmaps
app.get("/api/best-times", (req, res) => {
  try {
    const { platform, timezone } = req.query;
    if (platform && platform !== "all") {
      const schedule = getOptimalSchedule(platform, timezone);
      return res.json({ success: true, schedule });
    }
    res.json({ success: true, platforms: platformTimingData });
  } catch (error) {
    console.error("Error fetching timing:", error);
    res.status(500).json({ error: "Failed to fetch timing schedules" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 ViralMind AI Server running on http://localhost:${PORT}`);
});
