import axios from "axios";
import { ViralBlueprint, PsychologyData, ProfileAuditData, TrendItem } from "../types";
import { generateViralBlueprint } from "./viralityEngine";
import { analyzeSubconsciousPsychology } from "./subconsciousEngine";
import { auditSocialProfile } from "./profileAuditService";
import { getTrendingTopics } from "./trendHunterService";
import { platformTimingData, getOptimalSchedule } from "./timingEngine";

const API_BASE = "/api";

export const api = {
  async generateContent(payload: {
    topic: string;
    format: "video" | "photo";
    targetPlatforms: string[];
    companyName?: string;
    industry?: string;
    targetAudience?: string;
    apiKey?: string;
  }): Promise<{ blueprint: ViralBlueprint; psychology: PsychologyData }> {
    try {
      const res = await axios.post(`${API_BASE}/generate-content`, payload, { timeout: 3000 });
      if (res.data && res.data.blueprint) {
        return res.data;
      }
    } catch (e) {
      // Standalone browser execution for GitHub Pages
    }

    // Direct Browser Execution Engine (Permanent GitHub Pages Support)
    const blueprint = generateViralBlueprint({
      topic: payload.topic,
      format: payload.format,
      companyName: payload.companyName || "AmpEdge Solutions",
      industry: payload.industry || "Tech, Software & Digital Solutions",
      targetAudience: payload.targetAudience
    });
    const psychology = analyzeSubconsciousPsychology(payload.topic, payload.format);
    return { blueprint, psychology };
  },

  async auditSubconscious(payload: {
    content: string;
    format?: "video" | "photo";
  }): Promise<{ result: PsychologyData }> {
    try {
      const res = await axios.post(`${API_BASE}/subconscious-audit`, payload, { timeout: 3000 });
      if (res.data && res.data.result) {
        return res.data;
      }
    } catch (e) {
      // Browser fallback
    }
    const result = analyzeSubconsciousPsychology(payload.content, payload.format || "video");
    return { result };
  },

  async analyzeProfile(payload: {
    platform: string;
    url: string;
    companyData?: any;
  }): Promise<{ audit: ProfileAuditData }> {
    try {
      const res = await axios.post(`${API_BASE}/analyze-profile`, payload, { timeout: 3000 });
      if (res.data && res.data.audit) {
        return res.data;
      }
    } catch (e) {
      // Browser fallback
    }
    const audit = auditSocialProfile(payload.platform, payload.url, payload.companyData);
    return { audit };
  },

  async getTrendingTopics(category?: string): Promise<{ trends: TrendItem[] }> {
    try {
      const res = await axios.get(`${API_BASE}/trending-topics`, {
        params: { category: category || "all" },
        timeout: 3000
      });
      if (res.data && res.data.trends) {
        return res.data;
      }
    } catch (e) {
      // Browser fallback
    }
    const trends = getTrendingTopics(category || "all");
    return { trends };
  },

  async getOptimalTimes(platform?: string, timezone?: string): Promise<any> {
    try {
      const res = await axios.get(`${API_BASE}/best-times`, {
        params: { platform: platform || "all", timezone: timezone || "Asia/Kolkata" },
        timeout: 3000
      });
      if (res.data) {
        return res.data;
      }
    } catch (e) {
      // Browser fallback
    }
    if (platform && platform !== "all") {
      return { success: true, schedule: getOptimalSchedule(platform, timezone) };
    }
    return { success: true, platforms: platformTimingData };
  }
};
