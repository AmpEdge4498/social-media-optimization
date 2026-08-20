import React, { useState } from "react";
import { 
  UserCheck, 
  Calendar, 
  TrendingUp, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  ExternalLink, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Youtube, 
  Instagram, 
  Facebook, 
  Twitter, 
  MapPin,
  Clock,
  BarChart3,
  Sliders
} from "lucide-react";
import { getThreeDateComparisonAudit, auditSocialProfile } from "../services/profileAuditService";
import { CompanyProfile, PlatformType, ThreeDateAuditData } from "../types";

interface ProfileAuditorProps {
  company: CompanyProfile;
}

export const ProfileAuditorView: React.FC<ProfileAuditorProps> = ({ company }) => {
  const [activePlatform, setActivePlatform] = useState<PlatformType>("instagram");
  const [date1, setDate1] = useState<string>("2026-06-01");
  const [date2, setDate2] = useState<string>("2026-07-15");
  const [date3, setDate3] = useState<string>("2026-08-20");
  const [copiedBio, setCopiedBio] = useState<boolean>(false);

  const threeDateData: ThreeDateAuditData = getThreeDateComparisonAudit(activePlatform, date1, date2, date3);
  const singleAudit = auditSocialProfile(activePlatform, threeDateData.handleOrUrl);

  const platformTabs = [
    { key: "instagram" as PlatformType, label: "Instagram (@ampedge.info)", icon: Instagram },
    { key: "youtube" as PlatformType, label: "YouTube Channel", icon: Youtube },
    { key: "facebook" as PlatformType, label: "Facebook Page", icon: Facebook },
    { key: "google_business" as PlatformType, label: "Google Business 3-Pack", icon: MapPin },
    { key: "twitter" as PlatformType, label: "Twitter / X (@edge_amp)", icon: Twitter },
  ];

  const handleApplyPreset = (preset: "30days" | "90days" | "alltime") => {
    if (preset === "30days") {
      setDate1("2026-07-20");
      setDate2("2026-08-05");
      setDate3("2026-08-20");
    } else if (preset === "90days") {
      setDate1("2026-05-20");
      setDate2("2026-07-05");
      setDate3("2026-08-20");
    } else {
      setDate1("2026-01-01");
      setDate2("2026-05-01");
      setDate3("2026-08-20");
    }
  };

  const copyBio = () => {
    navigator.clipboard.writeText(singleAudit.bioRecommendation.optimizedBio);
    setCopiedBio(true);
    setTimeout(() => setCopiedBio(false), 2000);
  };

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-2">
          <Calendar className="w-3.5 h-3.5" />
          <span>Social Media Profile & Video 3-Date Tracking Engine</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          3-Date Comparative Tracking, Video Analytics & Profile Optimization
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Compare your profile, video retention, search ranking, and WhatsApp lead growth across 3 milestone dates (Date 1 vs Date 2 vs Date 3) and execute AI-guided profile optimizations.
        </p>
      </div>

      {/* Platform Switcher */}
      <div className="flex items-center flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800">
        {platformTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activePlatform === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActivePlatform(tab.key)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center space-x-2 ${
                isActive
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 3-Date Range Selector Bar */}
      <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-300">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span>Select 3 Milestone Dates to Compare:</span>
          </div>

          {/* Preset Buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleApplyPreset("30days")}
              className="px-2.5 py-1 rounded-lg bg-slate-950 hover:bg-slate-800 text-[11px] font-semibold text-slate-300 border border-slate-800"
            >
              Last 30 Days (15d steps)
            </button>
            <button
              onClick={() => handleApplyPreset("90days")}
              className="px-2.5 py-1 rounded-lg bg-slate-950 hover:bg-slate-800 text-[11px] font-semibold text-slate-300 border border-slate-800"
            >
              Last 90 Days (45d steps)
            </button>
            <button
              onClick={() => handleApplyPreset("alltime")}
              className="px-2.5 py-1 rounded-lg bg-slate-950 hover:bg-slate-800 text-[11px] font-semibold text-slate-300 border border-slate-800"
            >
              2026 Year-to-Date
            </button>
          </div>
        </div>

        {/* 3 Date Input Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
            <label className="block text-[10px] uppercase font-bold text-slate-400">
              📅 Date 1 (Baseline / Starting Date):
            </label>
            <input
              type="date"
              value={date1}
              onChange={(e) => setDate1(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-bold focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
            <label className="block text-[10px] uppercase font-bold text-slate-400">
              📅 Date 2 (Mid-Term Checkpoint):
            </label>
            <input
              type="date"
              value={date2}
              onChange={(e) => setDate2(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-bold focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
            <label className="block text-[10px] uppercase font-bold text-slate-400">
              📅 Date 3 (Current / Target Date):
            </label>
            <input
              type="date"
              value={date3}
              onChange={(e) => setDate3(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-bold focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* 3-Date Comparative Metrics Table & Graphs */}
      <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-5 shadow-xl animate-fadeIn">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
          <div>
            <h3 className="font-bold text-white text-base flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <span>3-Date Growth Trajectory for {threeDateData.platformName}</span>
            </h3>
            <p className="text-xs text-slate-400">Side-by-side progression from {date1} ➔ {date2} ➔ {date3}</p>
          </div>

          <a
            href={threeDateData.handleOrUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold self-start sm:self-auto transition"
          >
            <span>Open Live Handle</span>
            <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
          </a>
        </div>

        {/* Metrics Progression Cards */}
        <div className="grid grid-cols-1 gap-3.5">
          {threeDateData.metricsComparison.map((metric, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-indigo-500/40 transition flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4"
            >
              <div className="space-y-1 md:w-1/3">
                <div className="text-xs font-bold text-white flex items-center space-x-2">
                  <span>{metric.metricName}</span>
                </div>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-extrabold bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                  Overall Growth: {metric.growthPercentage}
                </span>
              </div>

              {/* 3 Dates Values Progress Bar */}
              <div className="flex-1 grid grid-cols-3 gap-2 text-center">
                {/* Date 1 */}
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-[9px] text-slate-400 font-mono">{date1}</div>
                  <div className="text-xs sm:text-sm font-extrabold text-slate-300 mt-0.5">
                    {typeof metric.date1Value === "number" ? metric.date1Value.toLocaleString() : metric.date1Value}
                  </div>
                </div>

                {/* Date 2 */}
                <div className="p-2.5 rounded-xl bg-indigo-950/40 border border-indigo-900/40">
                  <div className="text-[9px] text-indigo-300 font-mono">{date2}</div>
                  <div className="text-xs sm:text-sm font-extrabold text-indigo-200 mt-0.5">
                    {typeof metric.date2Value === "number" ? metric.date2Value.toLocaleString() : metric.date2Value}
                  </div>
                </div>

                {/* Date 3 */}
                <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800/40">
                  <div className="text-[9px] text-emerald-300 font-mono">{date3}</div>
                  <div className="text-xs sm:text-sm font-extrabold text-emerald-300 mt-0.5">
                    {typeof metric.date3Value === "number" ? metric.date3Value.toLocaleString() : metric.date3Value}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI 3-Date Evolution & Diagnostic Report */}
      <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/20 to-slate-900 border border-slate-800 space-y-5 shadow-xl">
        <div className="flex items-center space-x-2.5">
          <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-white text-base">
              AI 3-Date Diagnostic & Evolution Report
            </h3>
            <p className="text-xs text-slate-400">Deep comparative intelligence between {date1} and {date3}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
            <span className="text-[10px] uppercase font-bold text-emerald-400 block">🏆 Biggest Milestone Achieved:</span>
            <p className="text-slate-200 leading-relaxed font-medium">
              {threeDateData.aiEvolutionReport.biggestWin}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
            <span className="text-[10px] uppercase font-bold text-amber-400 block">⚠️ Identified Flaw / Drop Bottleneck:</span>
            <p className="text-slate-200 leading-relaxed font-medium">
              {threeDateData.aiEvolutionReport.criticalDropOrBottleneck}
            </p>
          </div>
        </div>

        {/* Immediate 30-Day Roadmap */}
        <div className="p-4 rounded-2xl bg-slate-950 border border-indigo-500/30 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 block">
            🚀 Immediate Action Plan for Next Milestone:
          </span>
          <ul className="space-y-1.5 text-xs text-slate-300">
            {threeDateData.aiEvolutionReport.immediateActionForNext30Days.map((action, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Profile Bio & SEO Optimization Tool */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recommended Bio Rewrite */}
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2 text-white font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>AI Optimized Bio for {threeDateData.platformName}</span>
              </div>
              <button
                onClick={copyBio}
                className="flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition"
              >
                {copiedBio ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedBio ? "Copied!" : "Copy Bio"}</span>
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-200 whitespace-pre-line leading-relaxed font-sans">
              {singleAudit.bioRecommendation.optimizedBio}
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-indigo-950/30 border border-indigo-800/40 text-xs text-indigo-300">
            <span className="font-bold block mb-1">Key Changes Applied:</span>
            {singleAudit.bioRecommendation.keyChanges.join(" • ")}
          </div>
        </div>

        {/* Profile Health Checks */}
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
          <div className="flex items-center space-x-2 text-white font-bold text-sm border-b border-slate-800 pb-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Profile SEO & Conversion Checklist</span>
          </div>

          <div className="space-y-3">
            {threeDateData.profileOptimizationChecks.map((check, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white">{check.item}</span>
                  <span className="text-emerald-400 font-extrabold">{check.score}/100</span>
                </div>
                <p className="text-[11px] text-slate-400">{check.recommendation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
