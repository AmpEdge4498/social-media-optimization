import React, { useState } from "react";
import { TrendingUp, Sparkles, ArrowRight, Zap, Filter, Flame } from "lucide-react";
import { TrendItem, ContentFormat } from "../types";

interface TrendHunterProps {
  trends: TrendItem[];
  onSelectTrend: (trend: TrendItem) => void;
  setActiveTab: (tab: string) => void;
}

export const TrendHunterView: React.FC<TrendHunterProps> = ({ trends, onSelectTrend, setActiveTab }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All High Velocity" },
    { id: "Tech & AI", name: "Tech & AI" },
    { id: "Business", name: "Business & Agency" },
    { id: "Local Business", name: "Local & Services" },
    { id: "E-Commerce", name: "E-Commerce / D2C" },
  ];

  const filteredTrends = selectedCategory === "all"
    ? trends
    : trends.filter(t => t.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-2">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Autonomous Trend Hunter</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          Real-Time Viral Topic Feed & Ideation
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Discovered by our autonomous crawler based on search acceleration, engagement spikes, and high-saving content formulas.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
              selectedCategory === cat.id
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Trends Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTrends.map((trend) => (
          <div
            key={trend.id}
            className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/40 transition-all duration-200 flex flex-col justify-between group shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                  {trend.category}
                </span>
                <span className="flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20">
                  <Flame className="w-3.5 h-3.5" />
                  <span>{trend.growthVelocity}</span>
                </span>
              </div>

              <h3 className="font-bold text-white text-base leading-snug group-hover:text-indigo-300 transition-colors mb-2">
                {trend.title}
              </h3>

              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-4">
                <span className="text-[10px] uppercase tracking-wider font-bold text-indigo-400 block mb-1">
                  Ready-to-Use Hook Idea:
                </span>
                <p className="text-xs text-slate-300 italic">
                  "{trend.hookIdea}"
                </p>
              </div>

              <div className="space-y-1.5 text-xs text-slate-400 mb-4">
                <div>
                  <span className="font-semibold text-purple-300">🧠 Subconscious Trigger: </span>
                  <span>{trend.subconsciousTrigger}</span>
                </div>
                <div>
                  <span className="font-semibold text-cyan-300">🎯 Recommended Format: </span>
                  <span className="capitalize">{trend.recommendedFormat}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-400">
                {trend.viralityPotential}% Viral Potential
              </span>

              <button
                onClick={() => {
                  onSelectTrend(trend);
                  setActiveTab("content_studio");
                }}
                className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-bold shadow-md shadow-indigo-600/20 transition"
              >
                <span>Launch in Studio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
