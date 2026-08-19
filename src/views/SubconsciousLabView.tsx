import React, { useState } from "react";
import { BrainCircuit, Sparkles, Zap, ArrowRight, RotateCw, AlertTriangle, CheckCircle2 } from "lucide-react";
import { PsychologyMatrix } from "../components/PsychologyMatrix";
import { PsychologyData } from "../types";
import { api } from "../services/api";

export const SubconsciousLabView: React.FC = () => {
  const [inputText, setInputText] = useState<string>(
    "Stop wasting hours on social media marketing. Here is how our AI agent does 10 hours of work in 30 seconds."
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [psychData, setPsychData] = useState<PsychologyData | null>(null);

  const handleAudit = async () => {
    if (!inputText.trim()) return;
    setLoading(true);
    try {
      const res = await api.auditSubconscious({
        content: inputText.trim(),
        format: "video"
      });
      setPsychData(res.result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-2">
          <BrainCircuit className="w-3.5 h-3.5" />
          <span>Neuro-Copywriting & Subconscious Lab</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          Subconscious Mind & Storytelling Tension Lab
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Paste any script, hook, or caption to test its subconscious dopamine pull, curiosity gap strength, and get an immediate 5-stage storytelling overhaul.
        </p>
      </div>

      {/* Input Test Card */}
      <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
          Paste Your Hook, Script Draft, or Post Copy:
        </label>
        <textarea
          rows={4}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type or paste your hook / script lines here..."
          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 transition resize-none font-sans"
        />

        <div className="flex justify-end">
          <button
            onClick={handleAudit}
            disabled={loading || !inputText.trim()}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-50 text-white text-sm font-bold shadow-lg shadow-purple-600/30 flex items-center space-x-2 transition"
          >
            {loading ? (
              <>
                <RotateCw className="w-4 h-4 animate-spin" />
                <span>Scanning Subconscious Pull...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Analyze Subconscious Triggers</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Results View */}
      {psychData && (
        <div className="space-y-6 animate-fadeIn">
          <PsychologyMatrix data={psychData} />
        </div>
      )}
    </div>
  );
};
