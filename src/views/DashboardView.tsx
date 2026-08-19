import React from "react";
import { 
  Sparkles, 
  TrendingUp, 
  BrainCircuit, 
  UserCheck, 
  CalendarClock, 
  ArrowUpRight, 
  Zap, 
  Video, 
  Layers, 
  Share2, 
  Flame 
} from "lucide-react";
import { CompanyProfile, TrendItem } from "../types";

interface DashboardProps {
  company: CompanyProfile;
  setActiveTab: (tab: string) => void;
  trends: TrendItem[];
  onSelectTrend: (trend: TrendItem) => void;
}

export const DashboardView: React.FC<DashboardProps> = ({ company, setActiveTab, trends, onSelectTrend }) => {
  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Hero Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-indigo-950/80 via-slate-900 to-purple-950/60 border border-indigo-500/20 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Autonomous Virality & Subconscious AI Engine</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Crack the Algorithm. Hook the <span className="gradient-text">Subconscious Mind.</span>
          </h1>

          <p className="text-sm text-slate-300 leading-relaxed">
            Welcome, <strong className="text-white">{company.name}</strong>. ViralMind analyzes your social profiles across 5 platforms, predicts viral potential, generates high-retention hooks, and crafts psychological scripts that captivate your target audience.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => setActiveTab("content_studio")}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-sm font-bold shadow-lg shadow-indigo-600/30 transition transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>Create Viral Content</span>
            </button>

            <button
              onClick={() => setActiveTab("profile_auditor")}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm font-semibold transition"
            >
              <UserCheck className="w-4 h-4 text-indigo-400" />
              <span>Audit Social Profiles (5 URLs)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-semibold uppercase tracking-wider">Virality Potential</span>
            <Flame className="w-5 h-5 text-amber-400" />
          </div>
          <div className="text-2xl font-extrabold text-white">96.8%</div>
          <p className="text-xs text-emerald-400 flex items-center space-x-1">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>High Retention Momentum</span>
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-semibold uppercase tracking-wider">Platforms Optimized</span>
            <Share2 className="w-5 h-5 text-cyan-400" />
          </div>
          <div className="text-2xl font-extrabold text-white">5 Networks</div>
          <p className="text-xs text-slate-400">YouTube, IG, FB, X, Google Profile</p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-semibold uppercase tracking-wider">Subconscious Hooks</span>
            <BrainCircuit className="w-5 h-5 text-purple-400" />
          </div>
          <div className="text-2xl font-extrabold text-white">5 Frameworks</div>
          <p className="text-xs text-purple-300">Dopamine, Curiosity, Fear, Status</p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-semibold uppercase tracking-wider">Peak Timing Precision</span>
            <CalendarClock className="w-5 h-5 text-indigo-400" />
          </div>
          <div className="text-2xl font-extrabold text-white">100% Synced</div>
          <p className="text-xs text-indigo-300">Dynamic Traffic Peak Heatmaps</p>
        </div>
      </div>

      {/* Featured Fast Trending Topics */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-indigo-400" />
              <span>Autonomous High-Velocity Topics (Ready to Scale)</span>
            </h2>
            <p className="text-xs text-slate-400">Curated viral themes with instant subconscious angles</p>
          </div>
          <button
            onClick={() => setActiveTab("trend_hunter")}
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center space-x-1"
          >
            <span>View All Trends</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trends.slice(0, 3).map((trend) => (
            <div
              key={trend.id}
              className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {trend.category}
                  </span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {trend.growthVelocity}
                  </span>
                </div>

                <h3 className="font-bold text-white text-sm leading-snug group-hover:text-indigo-300 transition-colors mb-2">
                  {trend.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-2 mb-4">
                  "{trend.hookIdea}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-1.5 text-xs text-purple-300">
                  <BrainCircuit className="w-3.5 h-3.5" />
                  <span className="truncate max-w-[130px]">{trend.subconsciousTrigger}</span>
                </div>

                <button
                  onClick={() => {
                    onSelectTrend(trend);
                    setActiveTab("content_studio");
                  }}
                  className="px-3 py-1.5 rounded-lg bg-indigo-600/80 hover:bg-indigo-600 text-white text-xs font-semibold transition"
                >
                  Generate Blueprint
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
