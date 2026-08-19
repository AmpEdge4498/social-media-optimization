import React from "react";
import { Brain, Sparkles, CheckCircle2, AlertTriangle } from "lucide-react";
import { PsychologyData } from "../types";

interface PsychologyMatrixProps {
  data: PsychologyData;
}

export const PsychologyMatrix: React.FC<PsychologyMatrixProps> = ({ data }) => {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Subconscious Psychology Matrix</h3>
              <p className="text-xs text-slate-400">Deep mental trigger decoding & emotional hook resistance</p>
            </div>
          </div>
          <div className="px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
            Overall Impact: {data.overallPsychologyScore}/100
          </div>
        </div>

        {/* Triggers Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {data.triggers.map((trig, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-slate-200">{trig.name}</span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    trig.score >= 85 ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                  }`}>
                    {trig.score}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden mb-3">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${
                      trig.score >= 85 ? "bg-gradient-to-r from-emerald-500 to-cyan-400" : "bg-gradient-to-r from-amber-500 to-orange-400"
                    }`}
                    style={{ width: `${trig.score}%` }}
                  ></div>
                </div>

                <p className="text-xs text-slate-400 mb-2 leading-relaxed">
                  {trig.explanation}
                </p>
              </div>

              <div className="text-[11px] text-indigo-300 bg-indigo-950/30 p-2 rounded-lg border border-indigo-900/40">
                <span className="font-semibold text-indigo-200">💡 Optimization: </span>
                {trig.recommendation}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Storytelling Critique & Rewrite Framework */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950/20 to-slate-900 border border-slate-800">
        <div className="flex items-center space-x-2.5 mb-4">
          <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-white text-base">Storytelling Tension & Narrative Architecture</h3>
            <p className="text-xs text-slate-400">
              Rating: <span className="text-purple-300 font-semibold">{data.storytellingCritique.narrativeArcRating}</span>
            </p>
          </div>
        </div>

        <div className="space-y-3 mt-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            5-Stage Subconscious Storytelling Framework:
          </div>

          <div className="grid grid-cols-1 gap-2.5">
            {Object.entries(data.storytellingCritique.psychologicalRewriteFramework).map(([stage, text], idx) => {
              const stageNames = [
                "1. Pattern Interrupt",
                "2. Emotional Agitation",
                "3. The Secret Mechanism",
                "4. Transformation Proof",
                "5. Subconscious Call-To-Action"
              ];
              return (
                <div key={stage} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start space-x-3">
                  <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 text-xs font-bold shrink-0 mt-0.5">
                    {stageNames[idx] || `Stage ${idx + 1}`}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
