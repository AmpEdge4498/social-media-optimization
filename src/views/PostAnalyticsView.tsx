import React, { useState } from "react";
import { 
  BarChart3, 
  TrendingUp, 
  Eye, 
  Share2, 
  Bookmark, 
  MessageSquare, 
  Flame, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowUpRight,
  Sliders,
  RotateCw,
  Zap,
  Check,
  Copy
} from "lucide-react";
import { sampleTrackedPosts, analyzeCustomPost, SinglePostAnalysis } from "../services/postAnalyticsEngine";
import { CompanyProfile, PlatformType } from "../types";

interface PostAnalyticsProps {
  company: CompanyProfile;
}

export const PostAnalyticsView: React.FC<PostAnalyticsProps> = ({ company }) => {
  const [selectedPost, setSelectedPost] = useState<SinglePostAnalysis>(sampleTrackedPosts[0]);
  const [customDraft, setCustomDraft] = useState<string>("");
  const [analyzingDraft, setAnalyzingDraft] = useState<boolean>(false);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const handleSimulateCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customDraft.trim()) return;
    setAnalyzingDraft(true);
    setTimeout(() => {
      const analyzed = analyzeCustomPost(customDraft, "instagram");
      setSelectedPost(analyzed);
      setAnalyzingDraft(false);
    }, 600);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-2">
          <BarChart3 className="w-3.5 h-3.5" />
          <span>Single-Post Graph & AI Diagnostic Studio</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          Post Performance Graphs & AI Optimization Fixes
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Measure single-post retention drop-off curves, analyze impression velocity, and let AI pinpoint exact editorial flaws and 1-click improvements.
        </p>
      </div>

      {/* Post Selector & Custom Post Tester */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Preset Selector */}
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl lg:col-span-1">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Select Tracked Post:
          </div>
          <div className="space-y-2.5">
            {sampleTrackedPosts.map((post) => (
              <button
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className={`w-full text-left p-3.5 rounded-2xl border transition flex flex-col justify-between ${
                  selectedPost.id === post.id
                    ? "bg-indigo-600/20 border-indigo-500 text-white shadow-lg shadow-indigo-600/10"
                    : "bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400 capitalize">
                    {post.platform}
                  </span>
                  <span className="text-[10px] text-slate-400">{post.publishedDate}</span>
                </div>
                <div className="text-xs font-bold line-clamp-2">{post.title}</div>
                <div className="flex items-center space-x-3 mt-2 text-[11px] text-slate-400">
                  <span>👀 {post.metrics.views.toLocaleString()} Views</span>
                  <span className="text-emerald-400 font-semibold">⚡ {post.metrics.retentionAvg}% Ret.</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Custom Post Simulation Input */}
        <form onSubmit={handleSimulateCustom} className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-3 shadow-xl lg:col-span-2 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Or Simulate Performance for a New Post / Hook Draft:
            </div>
            <textarea
              rows={3}
              value={customDraft}
              onChange={(e) => setCustomDraft(e.target.value)}
              placeholder="Paste your post copy, video script, or draft idea to simulate its retention graph..."
              className="w-full px-4 py-3 rounded-2xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-indigo-500 transition resize-none"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={analyzingDraft || !customDraft.trim()}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:opacity-50 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 flex items-center space-x-2 transition"
            >
              {analyzingDraft ? <RotateCw className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5" />}
              <span>Simulate Graph & AI Diagnostics</span>
            </button>
          </div>
        </form>
      </div>

      {/* Selected Post Performance Overview */}
      <div className="space-y-6 animate-fadeIn">
        {/* Core Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
            <div className="text-[10px] uppercase font-bold text-slate-400">Total Impressions</div>
            <div className="text-xl font-extrabold text-white mt-1">
              {selectedPost.metrics.impressions.toLocaleString()}
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
            <div className="text-[10px] uppercase font-bold text-slate-400">Total Views</div>
            <div className="text-xl font-extrabold text-cyan-400 mt-1">
              {selectedPost.metrics.views.toLocaleString()}
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
            <div className="text-[10px] uppercase font-bold text-slate-400">CTR (Click-Through)</div>
            <div className="text-xl font-extrabold text-emerald-400 mt-1">
              {selectedPost.metrics.ctr}%
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
            <div className="text-[10px] uppercase font-bold text-slate-400">Avg Retention</div>
            <div className="text-xl font-extrabold text-indigo-300 mt-1">
              {selectedPost.metrics.retentionAvg}%
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
            <div className="text-[10px] uppercase font-bold text-slate-400">Saves / Bookmarks</div>
            <div className="text-xl font-extrabold text-purple-400 mt-1">
              {selectedPost.metrics.saves.toLocaleString()}
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
            <div className="text-[10px] uppercase font-bold text-slate-400">Algorithm Rank</div>
            <div className="text-xl font-extrabold text-amber-400 mt-1">
              #{selectedPost.metrics.rankPosition} Trending
            </div>
          </div>
        </div>

        {/* Interactive Graphs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Retention Drop-Off Curve Graph */}
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-white text-base flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-indigo-400" />
                  <span>Audience Retention Drop-Off Curve (0s - 45s)</span>
                </h3>
                <p className="text-xs text-slate-400">Identifies exact second when viewers scrolled away</p>
              </div>
            </div>

            {/* Visual SVG Retention Curve */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-4">
              <div className="h-44 w-full flex items-end justify-between gap-2 px-2 pt-4">
                {selectedPost.retentionCurve.map((point, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group relative">
                    {/* Tooltip on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 px-2 py-1 rounded bg-indigo-950 text-indigo-200 text-[10px] font-bold border border-indigo-800 pointer-events-none whitespace-nowrap z-20 shadow-lg">
                      {point.percentage}% at {point.second}s ({point.event})
                    </div>
                    
                    <div
                      className={`w-full rounded-t-lg transition-all duration-500 ${
                        point.percentage >= 80 ? "bg-gradient-to-t from-emerald-600 to-cyan-400" :
                        point.percentage >= 60 ? "bg-gradient-to-t from-indigo-600 to-purple-500" :
                        "bg-gradient-to-t from-amber-600 to-red-500"
                      }`}
                      style={{ height: `${point.percentage}%` }}
                    ></div>
                    <span className="text-[10px] text-slate-400 mt-1 font-mono">{point.second}s</span>
                  </div>
                ))}
              </div>

              {/* Timeline events note */}
              <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                {selectedPost.retentionCurve.slice(1, 5).map((p, i) => (
                  <div key={i} className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                    <span className="text-slate-300 font-semibold">{p.second}s:</span>
                    <span className="truncate">{p.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Impression Velocity & Spike Trajectory */}
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
            <div>
              <h3 className="font-bold text-white text-base flex items-center space-x-2">
                <Flame className="w-5 h-5 text-amber-400" />
                <span>Impression Velocity & Engagement Spikes</span>
              </h3>
              <p className="text-xs text-slate-400">Initial 24-hour distribution multiplier</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-3">
              {selectedPost.impressionGrowth.map((step, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-300">{step.day}</span>
                    <span className="text-indigo-300 font-mono">
                      {step.impressions.toLocaleString()} views • {step.engagement} shares/comments
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-amber-500 via-purple-500 to-indigo-500 transition-all duration-500"
                      style={{ width: `${(step.impressions / selectedPost.metrics.impressions) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Diagnostics & Actionable Editorial Overhaul */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/20 to-slate-900 border border-slate-800 space-y-6 shadow-xl">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">
                AI Diagnostic Report: How to Make This Post 10x Better
              </h3>
              <p className="text-xs text-slate-400">Identified editorial flaws, drop moments, and direct solutions</p>
            </div>
          </div>

          {/* Actionable Optimizations List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedPost.aiDiagnostics.actionableOptimizations.map((opt, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      Priority: {opt.priority}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-400">{opt.expectedBoost}</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed font-medium">
                    {opt.action}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* AI Rewritten Upgrade */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-indigo-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span>AI Rewritten High-Converting Hook & CTA (Ready to Post):</span>
              </div>
              <button
                onClick={() => copyToClipboard(`${selectedPost.aiDiagnostics.improvedRewrite.newTitle}\n\n${selectedPost.aiDiagnostics.improvedRewrite.newHook}\n\n${selectedPost.aiDiagnostics.improvedRewrite.newCta}`, "ai-post-rewrite")}
                className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition"
              >
                {copiedSection === "ai-post-rewrite" ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSection === "ai-post-rewrite" ? "Copied!" : "Copy Rewritten Post"}</span>
              </button>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold">
                <span className="text-cyan-400 block text-[10px] uppercase">Upgraded Title:</span>
                "{selectedPost.aiDiagnostics.improvedRewrite.newTitle}"
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200">
                <span className="text-purple-400 block text-[10px] uppercase">Scroll-Stopper Hook:</span>
                "{selectedPost.aiDiagnostics.improvedRewrite.newHook}"
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-emerald-300 font-semibold">
                <span className="text-emerald-400 block text-[10px] uppercase">Subconscious CTA:</span>
                "{selectedPost.aiDiagnostics.improvedRewrite.newCta}"
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
