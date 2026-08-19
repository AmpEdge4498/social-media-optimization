import React, { useState } from "react";
import { 
  Sparkles, 
  Search, 
  Award, 
  Copy, 
  Check, 
  TrendingUp, 
  Tag, 
  Hash, 
  FileText, 
  Lightbulb, 
  Zap,
  Layers,
  ArrowRight
} from "lucide-react";
import { generateSeoTitlePackage, PlatformSeoPackage } from "../services/seoTitleEngine";
import { CompanyProfile, PlatformType } from "../types";

interface TitleRankerProps {
  company: CompanyProfile;
}

export const TitleRankerView: React.FC<TitleRankerProps> = ({ company }) => {
  const [topic, setTopic] = useState<string>("AI Software & Business Automation 2026");
  const [activePlatform, setActivePlatform] = useState<PlatformType>("youtube");
  const [packages, setPackages] = useState<{ [key in PlatformType]: PlatformSeoPackage }>(() => 
    generateSeoTitlePackage("AI Software & Business Automation 2026", company.name)
  );
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;
    const generated = generateSeoTitlePackage(topic, company.name);
    setPackages(generated);
  };

  const copyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const currentPkg = packages[activePlatform] || packages.youtube;

  const platformTabs: { key: PlatformType; label: string }[] = [
    { key: "youtube", label: "YouTube Video & Shorts" },
    { key: "instagram", label: "Instagram Reels & Carousels" },
    { key: "facebook", label: "Facebook Watch & Posts" },
    { key: "twitter", label: "Twitter / X Threads" },
    { key: "google_business", label: "Google Business Profile" },
  ];

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-2">
          <Award className="w-3.5 h-3.5" />
          <span>Platform-by-Platform Title Ranker & SEO Engine</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          Title Ranking, SEO Descriptions, Keywords & Tags
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Enter any topic to get ranked titles (#1 to #4 with CTR & SEO scores), keyword-rich descriptions, exact search tags, and algorithmic optimization tips for each platform.
        </p>
      </div>

      {/* Topic Search Input */}
      <form onSubmit={handleGenerate} className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
          Enter Topic, Niche or Main Keyword:
        </label>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g. AI Automation for Growing Businesses..."
            className="flex-1 px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-sm font-bold shadow-lg shadow-emerald-600/30 flex items-center justify-center space-x-2 transition shrink-0"
          >
            <Sparkles className="w-4 h-4" />
            <span>Generate Ranked SEO Package</span>
          </button>
        </div>
      </form>

      {/* Platform Selector Tabs */}
      <div className="flex items-center flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800">
        {platformTabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActivePlatform(tab.key)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center space-x-2 ${
              activePlatform === tab.key
                ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
            }`}
          >
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Results Content */}
      <div className="space-y-6 animate-fadeIn">
        {/* Ranked Titles List */}
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-emerald-400" />
              <h3 className="font-bold text-white text-base">
                Ranked Titles for {currentPkg.platformName}
              </h3>
            </div>
            <span className="text-xs text-slate-400">Sorted by Predicted CTR & Algorithm Velocity</span>
          </div>

          <div className="grid grid-cols-1 gap-3.5">
            {currentPkg.rankedTitles.map((item) => (
              <div
                key={item.rank}
                className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 group"
              >
                <div className="flex items-start space-x-3.5 flex-1">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-extrabold flex items-center justify-center text-sm shrink-0 mt-0.5">
                    #{item.rank}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-2 mt-2 text-xs">
                      <span className="px-2 py-0.5 rounded-md bg-emerald-950/60 text-emerald-300 font-semibold border border-emerald-800/40">
                        ⚡ CTR: {item.ctrScore}%
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-indigo-950/60 text-indigo-300 font-semibold border border-indigo-800/40">
                        🔍 SEO Score: {item.seoScore}%
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 text-[11px]">
                        Volume: {item.searchVolume}
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 text-[11px]">
                        Intent: {item.intent}
                      </span>
                      <span className="text-[11px] text-slate-400 italic">
                        💡 {item.psychologicalHook}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => copyText(item.title, `title-${item.rank}`)}
                  className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold flex items-center justify-center space-x-1.5 shrink-0 transition"
                >
                  {copiedKey === `title-${item.rank}` ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === `title-${item.rank}` ? "Copied!" : "Copy Title"}</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Description & Keywords Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* SEO Description */}
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2 text-white font-bold text-sm">
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>SEO-Optimized Description / Post Copy</span>
                </div>
                <button
                  onClick={() => copyText(currentPkg.seoDescription, "desc")}
                  className="flex items-center space-x-1 px-3 py-1 rounded-lg bg-indigo-600/80 hover:bg-indigo-600 text-white text-xs font-semibold transition"
                >
                  {copiedKey === "desc" ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === "desc" ? "Copied!" : "Copy Description"}</span>
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 whitespace-pre-line leading-relaxed max-h-72 overflow-y-auto font-sans">
                {currentPkg.seoDescription}
              </div>
            </div>

            {/* Optimization Tips */}
            <div className="p-3.5 rounded-2xl bg-indigo-950/20 border border-indigo-900/40 space-y-1.5 mt-4">
              <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-400 flex items-center space-x-1">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>Algorithm Ranking Secrets:</span>
              </div>
              <ul className="space-y-1 text-xs text-slate-300">
                {currentPkg.searchOptimizationTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start space-x-1.5">
                    <span className="text-indigo-400 font-bold">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Keywords & Tags Breakdown */}
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-5 shadow-xl">
            {/* Primary & Long-Tail Keywords */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2 text-white font-bold text-sm">
                  <Search className="w-4 h-4 text-emerald-400" />
                  <span>High-Intent SEO Keywords</span>
                </div>
                <button
                  onClick={() => copyText([...currentPkg.keywords.primary, ...currentPkg.keywords.longTail].join(", "), "keywords")}
                  className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center space-x-1 font-semibold"
                >
                  {copiedKey === "keywords" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>Copy All</span>
                </button>
              </div>

              <div className="space-y-2">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Primary Keywords:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentPkg.keywords.primary.map((kw, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-emerald-950/50 text-emerald-300 text-xs font-semibold border border-emerald-800/40">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Long-Tail Search Queries (High Ranking Chance):</span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentPkg.keywords.longTail.map((kw, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-950 text-slate-300 text-xs border border-slate-800">
                        🔍 {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tags & Hashtags */}
            <div className="pt-4 border-t border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2 text-white font-bold text-sm">
                  <Hash className="w-4 h-4 text-purple-400" />
                  <span>Ranked Tags & Broad Hashtags</span>
                </div>
                <button
                  onClick={() => copyText(currentPkg.hashtags.join(" "), "hashtags")}
                  className="text-xs text-purple-400 hover:text-purple-300 flex items-center space-x-1 font-semibold"
                >
                  {copiedKey === "hashtags" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>Copy Hashtags</span>
                </button>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-purple-300 font-mono leading-relaxed">
                {currentPkg.hashtags.join(" ")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
