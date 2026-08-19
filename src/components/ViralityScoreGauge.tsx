import React from "react";
import { Zap, TrendingUp, Award, ShieldCheck } from "lucide-react";

interface ViralityScoreGaugeProps {
  score: number;
  confidence: string;
}

export const ViralityScoreGauge: React.FC<ViralityScoreGaugeProps> = ({ score, confidence }) => {
  const getScoreColor = (s: number) => {
    if (s >= 90) return "text-emerald-400 border-emerald-500/30 bg-emerald-950/20";
    if (s >= 75) return "text-indigo-400 border-indigo-500/30 bg-indigo-950/20";
    if (s >= 60) return "text-amber-400 border-amber-500/30 bg-amber-950/20";
    return "text-red-400 border-red-500/30 bg-red-950/20";
  };

  const getRatingText = (s: number) => {
    if (s >= 90) return "Ultra-Viral Probability";
    if (s >= 75) return "Strong Viral Momentum";
    if (s >= 60) return "Moderate Engagement";
    return "Low Retention / Needs Rework";
  };

  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-[#0e172a] to-slate-900 border border-slate-800 relative overflow-hidden shadow-xl">
      {/* Decorative Glow */}
      <div className="absolute -top-12 -right-12 w-36 h-36 bg-indigo-600/10 rounded-full blur-2xl"></div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
        <div className="flex items-center space-x-5">
          {/* Radial score box */}
          <div className={`w-24 h-24 rounded-2xl border flex flex-col items-center justify-center p-3 shadow-inner ${getScoreColor(score)}`}>
            <span className="text-3xl font-extrabold tracking-tight">{score}%</span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mt-0.5">Viral Score</span>
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-white">{getRatingText(score)}</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center space-x-1">
                <ShieldCheck className="w-3 h-3" />
                <span>{confidence} Confidence</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-md">
              Evaluated against 2026 algorithmic distribution models across YouTube, Instagram, Facebook, X, and Google Business.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 w-full sm:w-auto">
          <div className="px-3.5 py-2 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <div className="text-[11px] text-slate-400 font-medium">Scroll-Stop Index</div>
            <div className="text-base font-bold text-emerald-400">9.8 / 10</div>
          </div>
          <div className="px-3.5 py-2 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <div className="text-[11px] text-slate-400 font-medium">Save/Share Multiplier</div>
            <div className="text-base font-bold text-indigo-400">4.2x Avg</div>
          </div>
        </div>
      </div>
    </div>
  );
};
