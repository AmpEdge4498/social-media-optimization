import React, { useState } from "react";
import { Copy, Check, Eye, Volume2, Sparkles } from "lucide-react";
import { HookItem } from "../types";

interface HookCardProps {
  hook: HookItem;
}

export const HookCard: React.FC<HookCardProps> = ({ hook }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(hook.headline);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/40 transition-all duration-200 group flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            {hook.type}
          </span>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
              {hook.viralityRating}% Viral Rate
            </span>
            <button
              onClick={handleCopy}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition"
              title="Copy Hook"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Hook Headline */}
        <h4 className="text-base font-bold text-white mb-4 leading-snug group-hover:text-indigo-200 transition-colors">
          "{hook.headline}"
        </h4>

        {/* Cues */}
        <div className="space-y-2 mb-4">
          <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start space-x-2 text-xs">
            <Eye className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-300">Visual Cue: </span>
              <span className="text-slate-400">{hook.visualCue}</span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start space-x-2 text-xs">
            <Volume2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-300">Audio / SFX: </span>
              <span className="text-slate-400">{hook.audioCue}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subconscious Impact */}
      <div className="pt-3 border-t border-slate-800/80 flex items-center space-x-2 text-[11px] text-purple-300">
        <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />
        <span>{hook.subconsciousImpact}</span>
      </div>
    </div>
  );
};
