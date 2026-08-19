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
  Globe,
  Flame,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { analyzeElectricalTitle, SupportedLanguage, TitleEvolution } from "../services/electricalSeoEngine";
import { generateSeoTitlePackage, PlatformSeoPackage } from "../services/seoTitleEngine";
import { CompanyProfile, PlatformType } from "../types";

interface TitleRankerProps {
  company: CompanyProfile;
}

export const TitleRankerView: React.FC<TitleRankerProps> = ({ company }) => {
  const [topic, setTopic] = useState<string>("How to find electrician for house wiring and AMC");
  const [selectedLang, setSelectedLang] = useState<SupportedLanguage>("hi");
  const [activePlatform, setActivePlatform] = useState<PlatformType>("youtube");
  const [analysis, setAnalysis] = useState(() => 
    analyzeElectricalTitle("How to find electrician for house wiring and AMC", "hi", company.name)
  );
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;
    const res = analyzeElectricalTitle(topic, selectedLang, company.name);
    setAnalysis(res);
  };

  const handleLangChange = (lang: SupportedLanguage) => {
    setSelectedLang(lang);
    const res = analyzeElectricalTitle(topic, lang, company.name);
    setAnalysis(res);
  };

  const copyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const languages = [
    { key: "hi" as SupportedLanguage, label: "हिंदी (Hindi / Hinglish)", flag: "🇮🇳" },
    { key: "bn" as SupportedLanguage, label: "বাংলা (Bengali / Kolkata)", flag: "🇧🇩" },
    { key: "en" as SupportedLanguage, label: "English (Corporate / Global)", flag: "🌐" },
  ];

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-2">
          <Award className="w-3.5 h-3.5" />
          <span>Electrical AMC & Services SEO Title Optimizer</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          Title Ranker, Google vs Meta Tracker & Multi-Language SEO
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Enter any electrical service keyword or title to track how it performs on Google Search vs Meta Reels, see multi-level title evolutions, and get localized SEO descriptions in Hindi, Bengali, and English.
        </p>
      </div>

      {/* Language Switcher Bar */}
      <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-300">
          <Globe className="w-4 h-4 text-emerald-400" />
          <span>Select Target Language:</span>
        </div>
        <div className="flex items-center flex-wrap gap-2">
          {languages.map((lang) => (
            <button
              key={lang.key}
              onClick={() => handleLangChange(lang.key)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-2 ${
                selectedLang === lang.key
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-600/30"
                  : "bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200"
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Topic Search Input */}
      <form onSubmit={handleGenerate} className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
          Enter Electrical Topic or Raw Title to Optimize:
        </label>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g. How to find electrician, House wiring cost, Apartment electrical AMC..."
            className="flex-1 px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-sm font-bold shadow-lg shadow-emerald-600/30 flex items-center justify-center space-x-2 transition shrink-0"
          >
            <Sparkles className="w-4 h-4" />
            <span>Analyze & Evolve Title</span>
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="flex flex-wrap gap-2 pt-2 text-[11px] text-slate-400">
          <span className="font-semibold text-slate-300">Popular Electrical Themes:</span>
          {["House Wiring Mistakes", "Apartment Electrical AMC", "Short Circuit Prevention", "Industrial Panel Maintenance", "Electrical Materials Quality"].map((pill) => (
            <button
              key={pill}
              type="button"
              onClick={() => {
                setTopic(pill);
                setAnalysis(analyzeElectricalTitle(pill, selectedLang, company.name));
              }}
              className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 hover:border-emerald-500/40 text-slate-300 hover:text-white transition"
            >
              + {pill}
            </button>
          ))}
        </div>
      </form>

      {/* Google vs Meta Algorithm Comparison Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Google Search Performance */}
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
              <Search className="w-4 h-4" />
              <span>Google Search & Local 3-Pack Algorithm</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-bold border border-emerald-800/40">
              High Intent
            </span>
          </div>

          <div className="space-y-2.5 text-xs">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <span className="text-slate-400">Monthly Local Demand:</span>
              <span className="font-bold text-white">{analysis.googlePerformance.monthlySearches}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <span className="text-slate-400">SEO Competition Level:</span>
              <span className="font-bold text-emerald-400">{analysis.googlePerformance.competition}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <span className="text-slate-400">Local Map Clicks Intent:</span>
              <span className="font-bold text-cyan-400">{analysis.googlePerformance.localMapIntent}</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Top Google Ranking Keywords:</span>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {analysis.googlePerformance.topRankingKeywords.map((kw, i) => (
                  <span key={i} className="px-2 py-0.5 rounded-md bg-emerald-950/40 text-emerald-300 text-[11px] border border-emerald-800/30">
                    ✓ {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Meta / Instagram Reels Performance */}
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center space-x-2 text-purple-400 font-bold text-sm">
              <Flame className="w-4 h-4" />
              <span>Meta / Instagram / Facebook Explore Algorithm</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-purple-950 text-purple-300 font-bold border border-purple-800/40">
              Viral Speed
            </span>
          </div>

          <div className="space-y-2.5 text-xs">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <span className="text-slate-400">Reel Viral Velocity:</span>
              <span className="font-bold text-amber-400">{analysis.metaPerformance.reelViralVelocity}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <span className="text-slate-400">Target Audience Demo:</span>
              <span className="font-bold text-slate-200">{analysis.metaPerformance.targetAgeGroup}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Best Visual Hook Format:</span>
              <span className="text-purple-300 font-semibold">{analysis.metaPerformance.bestVisualHook}</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Top High-Save Hashtags:</span>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {analysis.metaPerformance.topHashtags.map((ht, i) => (
                  <span key={i} className="px-2 py-0.5 rounded-md bg-purple-950/40 text-purple-300 text-[11px] border border-purple-800/30">
                    {ht}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4-Tier Title Evolution / Upgrade Matrix */}
      <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
          <div>
            <h3 className="font-bold text-white text-base flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <span>Real-Time Title Evolution: How to Make "{topic}" 10x Better</span>
            </h3>
            <p className="text-xs text-slate-400">From basic search to high-CTR Google & Meta conversion titles</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {analysis.titleEvolution.map((evo) => (
            <div
              key={evo.level}
              className={`p-4 rounded-2xl border transition flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 ${
                evo.level === 4 ? "bg-gradient-to-r from-emerald-950/40 via-slate-950 to-teal-950/40 border-emerald-500/50 shadow-lg shadow-emerald-500/10" :
                evo.level === 3 ? "bg-purple-950/20 border-purple-800/40" :
                evo.level === 2 ? "bg-indigo-950/20 border-indigo-800/40" :
                "bg-slate-950/60 border-slate-800 opacity-80"
              }`}
            >
              <div className="flex items-start space-x-3.5 flex-1">
                <div className={`w-8 h-8 rounded-xl font-extrabold flex items-center justify-center text-sm shrink-0 mt-0.5 ${
                  evo.level === 4 ? "bg-emerald-500 text-slate-950 font-black" :
                  evo.level === 3 ? "bg-purple-500/20 text-purple-300 border border-purple-500/30" :
                  evo.level === 2 ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30" :
                  "bg-slate-800 text-slate-400"
                }`}>
                  L{evo.level}
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-xs font-bold text-indigo-300">{evo.label}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-semibold">
                      {evo.intent}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-white">
                    "{evo.title}"
                  </h4>

                  <div className="flex flex-wrap items-center gap-2 mt-2 text-xs">
                    <span className="px-2 py-0.5 rounded-md bg-emerald-950/60 text-emerald-300 font-semibold border border-emerald-800/40">
                      ⚡ CTR: {evo.ctrScore}%
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-indigo-950/60 text-indigo-300 font-semibold border border-indigo-800/40">
                      🔍 Google Score: {evo.googleScore}%
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-purple-950/60 text-purple-300 font-semibold border border-purple-800/40">
                      📱 Meta Score: {evo.metaScore}%
                    </span>
                    <span className="text-[11px] text-slate-400 italic">
                      💡 {evo.psychologicalTrigger}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => copyText(evo.title, `evo-${evo.level}`)}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center justify-center space-x-1.5 shrink-0 transition"
              >
                {copiedKey === `evo-${evo.level}` ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === `evo-${evo.level}` ? "Copied!" : "Use This Title"}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Multi-Language SEO Description & Video Hook */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Localized SEO Description */}
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2 text-white font-bold text-sm">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Localized Electrical SEO Description ({selectedLang.toUpperCase()})</span>
              </div>
              <button
                onClick={() => copyText(analysis.fullSeoDescription, "desc-local")}
                className="flex items-center space-x-1 px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition"
              >
                {copiedKey === "desc-local" ? <Check className="w-3.5 h-3.5 text-emerald-200" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === "desc-local" ? "Copied!" : "Copy Description"}</span>
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 whitespace-pre-line leading-relaxed max-h-64 overflow-y-auto font-sans">
              {analysis.fullSeoDescription}
            </div>
          </div>
        </div>

        {/* Localized 3-Part Video Script Hook */}
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2 text-white font-bold text-sm">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>3-Part Video Reel Hook ({selectedLang.toUpperCase()})</span>
              </div>
              <button
                onClick={() => copyText(`${analysis.recommendedScriptHook.voiceover}\n\n${analysis.recommendedScriptHook.cta}`, "hook-local")}
                className="flex items-center space-x-1 px-3 py-1 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition"
              >
                {copiedKey === "hook-local" ? <Check className="w-3.5 h-3.5 text-emerald-200" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === "hook-local" ? "Copied!" : "Copy Hook"}</span>
              </button>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-cyan-400 font-bold block text-[10px] uppercase mb-0.5">🎬 Visual Action (0.0s):</span>
                <p className="text-slate-300">{analysis.recommendedScriptHook.visual}</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-amber-400 font-bold block text-[10px] uppercase mb-0.5">🗣️ Spoken Voiceover Line:</span>
                <p className="text-white font-semibold leading-relaxed">"{analysis.recommendedScriptHook.voiceover}"</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-emerald-400 font-bold block text-[10px] uppercase mb-0.5">⚡ High-Conversion CTA:</span>
                <p className="text-emerald-300 font-medium">"{analysis.recommendedScriptHook.cta}"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
