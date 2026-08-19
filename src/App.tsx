import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { DashboardView } from "./views/DashboardView";
import { ContentStudioView } from "./views/ContentStudioView";
import { SubconsciousLabView } from "./views/SubconsciousLabView";
import { ProfileAuditorView } from "./views/ProfileAuditorView";
import { TimingSchedulerView } from "./views/TimingSchedulerView";
import { TrendHunterView } from "./views/TrendHunterView";
import { SettingsView } from "./views/SettingsView";
import { CompanyProfile, TrendItem } from "./types";
import { api } from "./services/api";

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const [company, setCompany] = useState<CompanyProfile>({
    name: "AmpEdge Solutions",
    industry: "Tech, Software & Digital Solutions",
    targetAudience: "Entrepreneurs, Businesses, Tech Enthusiasts & Growth Seekers",
    brandVoice: "Authoritative, High-Energy, Insightful & Direct",
    apiKey: ""
  });

  const [trends, setTrends] = useState<TrendItem[]>([]);
  const [selectedTrendTopic, setSelectedTrendTopic] = useState<string>("");

  useEffect(() => {
    async function fetchTrends() {
      try {
        const res = await api.getTrendingTopics();
        setTrends(res.trends || []);
      } catch (e) {
        console.error("Failed to load trends:", e);
      }
    }
    fetchTrends();
  }, []);

  const handleSelectTrend = (trend: TrendItem) => {
    setSelectedTrendTopic(trend.title);
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col font-sans">
      <Navbar company={company} activeTab={activeTab} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <main className="flex-1 overflow-y-auto min-h-[calc(100vh-4rem)] pb-12 bg-[#080c14]">
          {activeTab === "dashboard" && (
            <DashboardView
              company={company}
              setActiveTab={setActiveTab}
              trends={trends}
              onSelectTrend={handleSelectTrend}
            />
          )}

          {activeTab === "content_studio" && (
            <ContentStudioView
              company={company}
              initialTopic={selectedTrendTopic}
            />
          )}

          {activeTab === "subconscious_lab" && (
            <SubconsciousLabView />
          )}

          {activeTab === "profile_auditor" && (
            <ProfileAuditorView company={company} />
          )}

          {activeTab === "timing_scheduler" && (
            <TimingSchedulerView />
          )}

          {activeTab === "trend_hunter" && (
            <TrendHunterView
              trends={trends}
              onSelectTrend={handleSelectTrend}
              setActiveTab={setActiveTab}
            />
          )}

          {activeTab === "settings" && (
            <SettingsView company={company} setCompany={setCompany} />
          )}
        </main>
      </div>
    </div>
  );
};
export default App;
