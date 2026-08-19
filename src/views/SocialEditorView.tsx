import React, { useState } from "react";
import { 
  Sliders, 
  Sparkles, 
  Copy, 
  Check, 
  Eye, 
  Smartphone, 
  Monitor, 
  Share2, 
  Wand2, 
  Zap, 
  Youtube, 
  Instagram, 
  Facebook, 
  Twitter, 
  MapPin,
  RefreshCw
} from "lucide-react";
import { CompanyProfile, PlatformType } from "../types";

interface SocialEditorProps {
  company: CompanyProfile;
}

export const SocialEditorView: React.FC<SocialEditorProps> = ({ company }) => {
  const [platform, setPlatform] = useState<PlatformType>("instagram");
  const [title, setTitle] = useState<string>("Why 90% of Businesses Bleed Revenue on Outdated Software");
  const [content, setContent] = useState<string>(
    "Stop wasting hours guessing what works! 🛑\n\nMost companies think upgrading software is expensive. But staying on outdated systems costs 5x more every single month in wasted labor.\n\nAt AmpEdge Solutions, we automate your workflows with next-gen AI systems.\n\n📌 SAVE this post to fix your tech stack.\n💬 Comment 'GROW' below and we'll send you our 2026 digital blueprint!"
  );
  const [copied, setCopied] = useState<boolean>(false);

  // Dynamic AI suggestions calculation based on user input
  const words = content.split(/\s+/).filter(Boolean).length;
  const hasHook = /stop|secret|never|how to|why|mistake|2026|alert|warning/i.test(content) || /stop|secret|never|why/i.test(title);
  const hasCta = /comment|save|link|dm|follow|share|call/i.test(content);
  const hasEmoji = /[\u{1F300}-\u{1F9FF}]/u.test(content);
  
  const viralityScore = Math.min(99, (hasHook ? 35 : 15) + (hasCta ? 35 : 10) + (hasEmoji ? 15 : 5) + (words > 25 ? 14 : 8));

  const handleAutoEnhance = () => {
    setTitle(`The $50,000 Mistake 90% of Businesses Make in 2026 (${company.name})`);
    setContent(
      `Stop scrolling if you run a digital business! 🛑\n\nHere is the brutal truth: Outdated software is costing you thousands every single week in lost efficiency.\n\n3 Non-Negotiable Upgrades for 2026:\n1️⃣ Automate repetitive data pipelines\n2️⃣ Deploy AI customer interaction agents\n3️⃣ Integrate cross-platform synchronization\n\n📌 SAVE this post right now so you don't lose the blueprint.\n💬 Drop a comment "GROW" below and our team will DM you the free strategy guide!\n\n🔗 ampedge.info`
    );
  };

  const copyFullContent = () => {
    navigator.clipboard.writeText(`${title}\n\n${content}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const platformIcons = {
    youtube: Youtube,
    instagram: Instagram,
    facebook: Facebook,
    twitter: Twitter,
    google_business: MapPin,
  };

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-2">
          <Sliders className="w-3.5 h-3.5" />
          <span>Central Command & Live Multi-Platform Editor</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          Social Media Control Hub & Live Mockup Studio
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Edit, optimize, and preview your post copy for YouTube, Instagram, Facebook, Twitter, and Google Business Profile with real-time AI virality scoring and instant auto-enhancements.
        </p>
      </div>

      {/* Platform Switcher */}
      <div className="flex items-center flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800">
        {(["youtube", "instagram", "facebook", "twitter", "google_business"] as PlatformType[]).map((p) => {
          const Icon = platformIcons[p];
          const labels: { [key: string]: string } = {
            youtube: "YouTube Studio",
            instagram: "Instagram Feed/Reel",
            facebook: "Facebook Page",
            twitter: "Twitter / X Post",
            google_business: "Google Business Update"
          };
          return (
            <button
              key={p}
              onClick={() => setPlatform(p)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center space-x-2 ${
                platform === p
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{labels[p]}</span>
            </button>
          );
        })}
      </div>

      {/* Editor & Live Preview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Live Editor (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-5 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Live Post Copy Editor:
              </span>
              <button
                onClick={handleAutoEnhance}
                className="flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold shadow-md shadow-purple-600/20 transition"
              >
                <Wand2 className="w-3.5 h-3.5" />
                <span>1-Click AI Auto-Enhance</span>
              </button>
            </div>

            {/* Title Input */}
            <div>
              <label className="block text-[11px] font-bold uppercase text-slate-400 mb-1.5">
                Headline / Main Title Hook:
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-semibold focus:outline-none focus:border-indigo-500 transition"
              />
            </div>

            {/* Content Textarea */}
            <div>
              <label className="block text-[11px] font-bold uppercase text-slate-400 mb-1.5">
                Caption, Description & Storytelling Lines:
              </label>
              <textarea
                rows={8}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-slate-950 border border-slate-800 text-white text-xs leading-relaxed focus:outline-none focus:border-indigo-500 transition resize-none font-sans"
              />
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-400 font-mono">
                {words} words • {content.length} characters
              </span>

              <button
                onClick={copyFullContent}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 flex items-center space-x-2 transition"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Copied to Clipboard!" : "Copy Full Post"}</span>
              </button>
            </div>
          </div>

          {/* Real-time AI Copilot Advice */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-purple-400">
                <Zap className="w-4 h-4" />
                <span>Live AI Optimization Copilot:</span>
              </div>
              <div className="flex items-center space-x-1 text-xs font-bold text-emerald-400">
                <span>Predicted Virality: {viralityScore}%</span>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className={`p-2.5 rounded-xl border flex items-center space-x-2 ${
                hasHook ? "bg-emerald-950/30 border-emerald-800/40 text-emerald-300" : "bg-amber-950/30 border-amber-800/40 text-amber-300"
              }`}>
                <span>{hasHook ? "✓ Pattern interrupt hook detected" : "⚠️ Tip: Add a power hook like 'STOP 🛑' or 'The Secret Mistake' in line 1."}</span>
              </div>

              <div className={`p-2.5 rounded-xl border flex items-center space-x-2 ${
                hasCta ? "bg-emerald-950/30 border-emerald-800/40 text-emerald-300" : "bg-amber-950/30 border-amber-800/40 text-amber-300"
              }`}>
                <span>{hasCta ? "✓ Friction-free Call to Action detected" : "⚠️ Tip: Add 'Comment GROW' or 'Save this post' to trigger algorithm multipliers."}</span>
              </div>

              <div className={`p-2.5 rounded-xl border flex items-center space-x-2 ${
                hasEmoji ? "bg-emerald-950/30 border-emerald-800/40 text-emerald-300" : "bg-slate-950 border-slate-800 text-slate-400"
              }`}>
                <span>{hasEmoji ? "✓ High visual contrast formatting active" : "💡 Add structured emojis (📌, ⚡, 🚀) for higher mobile readability."}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Mockup Preview (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-2">
            <Smartphone className="w-4 h-4 text-indigo-400" />
            <span>Live Native App Preview ({platform.toUpperCase()}):</span>
          </div>

          {/* Mockup Card */}
          <div className="p-5 rounded-3xl bg-[#090d16] border-2 border-slate-800 shadow-2xl space-y-4 relative overflow-hidden">
            {/* Header info of brand */}
            <div className="flex items-center space-x-3 border-b border-slate-800 pb-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[1.5px] flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center font-bold text-xs text-white">
                  AE
                </div>
              </div>
              <div>
                <div className="font-bold text-xs text-white flex items-center space-x-1">
                  <span>{company.name}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
                  {platform === "instagram" ? "@ampedge.info" : platform === "twitter" ? "@edge_amp" : "Official Profile"}
                </div>
              </div>
            </div>

            {/* Media Mock Placeholder */}
            <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 flex flex-col items-center justify-center p-4 text-center border border-slate-800 relative">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-2">
                <Eye className="w-5 h-5 text-cyan-300" />
              </div>
              <div className="text-xs font-extrabold text-white max-w-xs leading-snug">
                "{title}"
              </div>
              <span className="text-[9px] text-slate-400 mt-1 uppercase font-bold tracking-wider">
                AmpEdge Solutions • 2026 Engine
              </span>
            </div>

            {/* Post text */}
            <div className="text-xs text-slate-200 whitespace-pre-line leading-relaxed max-h-60 overflow-y-auto font-sans p-1">
              {content}
            </div>

            {/* Simulated Action Metrics */}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>❤️ 2.8K Likes</span>
              <span>💬 340 Comments</span>
              <span>🔁 890 Shares</span>
              <span>📌 1.4K Saves</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
