import axios from "axios";
import { ViralBlueprint, PsychologyData, ProfileAuditData, TrendItem } from "../types";

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
    const res = await axios.post(`${API_BASE}/generate-content`, payload);
    return res.data;
  },

  async auditSubconscious(payload: {
    content: string;
    format?: "video" | "photo";
  }): Promise<{ result: PsychologyData }> {
    const res = await axios.post(`${API_BASE}/subconscious-audit`, payload);
    return res.data;
  },

  async analyzeProfile(payload: {
    platform: string;
    url: string;
    companyData?: any;
  }): Promise<{ audit: ProfileAuditData }> {
    const res = await axios.post(`${API_BASE}/analyze-profile`, payload);
    return res.data;
  },

  async getTrendingTopics(category?: string): Promise<{ trends: TrendItem[] }> {
    const res = await axios.get(`${API_BASE}/trending-topics`, {
      params: { category: category || "all" }
    });
    return res.data;
  },

  async getOptimalTimes(platform?: string, timezone?: string): Promise<any> {
    const res = await axios.get(`${API_BASE}/best-times`, {
      params: { platform: platform || "all", timezone: timezone || "Asia/Kolkata" }
    });
    return res.data;
  }
};
