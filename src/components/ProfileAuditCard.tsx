import React, { useState } from "react";
import { 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  ExternalLink, 
  Search, 
  Sparkles, 
  Calendar,
  Layers,
  ArrowRight
} from "lucide-react";
import { ProfileAuditData } from "../types";

interface ProfileAuditCardProps {
  audit: ProfileAuditData;
}

export const ProfileAuditCard: React.FC<ProfileAuditCardProps> = ({ audit }) => {
  const [copiedBio, setCopiedBio] = useState(false);

  const handleCopyBio = () => {
    navigator.clipboard.writeText(audit.bioRecommendation.optimizedBio);
    setCopiedBio(true);
    setTimeout(() => setCopiedBio(false), 2000);
  };

  return (
    <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
        <div>
          <div className="flex items-center space-x-2.5">
            <h3 className="font-bold text-white text-lg">{audit.platformName} Audit</h3>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              {audit.status}
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1 flex items-center space-x-1">
            <span className="truncate max-w-sm">{audit.url}</span>
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="text-[11px] text-slate-400 uppercase font-semibold">Health Score</div>
            <div className="text-2xl font-extrabold text-emerald-400">{audit.overallScore}/100</div>
          </div>
        </div>
      </div>

      {/* Metric Scores Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {Object.entries(audit.metrics).map(([key, score]) => {
          const readableName = key.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase()).replace("Score", "");
          return (
            <div key={key} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-center">
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{readableName}</div>
              <div className="text-lg font-bold text-indigo-300 mt-0.5">{score}%</div>
            </div>
          );
        })}
      </div>

      {/* Bottlenecks & Psychological Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Bottlenecks */}
        <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/30 space-y-3">
          <div className="flex items-center space-x-2 text-red-400 text-xs font-bold uppercase tracking-wider">
            <AlertCircle className="w-4 h-4" />
            <span>Identified Growth Bottlenecks</span>
          </div>
          <ul className="space-y-2">
            {audit.currentBottlenecks.map((item, idx) => (
              <li key={idx} className="text-xs text-slate-300 flex items-start space-x-2">
                <span className="text-red-400 font-bold shrink-0 mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Psychological Analysis */}
        <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-900/30 space-y-3">
          <div className="flex items-center space-x-2 text-purple-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Audience Subconscious Analysis</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {audit.psychologicalAnalysis}
          </p>
        </div>
      </div>

      {/* Bio Optimizer */}
      <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center space-x-2">
            <Sparkles className="w-4 h-4" />
            <span>AI Bio & Value Proposition Rewrite</span>
          </div>
          <button
            onClick={handleCopyBio}
            className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-indigo-600/80 hover:bg-indigo-600 text-white text-xs font-semibold transition"
          >
            {copiedBio ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedBio ? "Copied Bio!" : "Copy Bio"}</span>
          </button>
        </div>

        <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 font-mono text-xs text-indigo-200 whitespace-pre-line leading-relaxed">
          {audit.bioRecommendation.optimizedBio}
        </div>

        <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
          <span className="font-semibold text-slate-300">Why this works:</span>
          {audit.bioRecommendation.keyChanges.map((change, idx) => (
            <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
              ✓ {change}
            </span>
          ))}
        </div>
      </div>

      {/* 30-Day Growth Roadmap */}
      <div className="space-y-3">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-2">
          <Calendar className="w-4 h-4 text-emerald-400" />
          <span>Personalized 30-Day Viral Scaling Plan</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {audit.growthPlan30Days.map((plan, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1.5">
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                {plan.week}
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {plan.action}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
