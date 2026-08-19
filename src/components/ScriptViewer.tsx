import React, { useState } from "react";
import { Video, Image, Copy, Check, Clock, Film, Volume2, Sparkles, Layers } from "lucide-react";
import { ScriptData } from "../types";

interface ScriptViewerProps {
  script: ScriptData;
  format: "video" | "photo";
}

export const ScriptViewer: React.FC<ScriptViewerProps> = ({ script, format }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAll = () => {
    let fullText = "";
    if (format === "video" && script.scenes) {
      fullText = script.scenes.map(s => `[${s.timestamp}] ${s.sceneTitle}\nVisual: ${s.visual}\nAudio: ${s.audioSFX}\nSpoken: "${s.spokenLine}"`).join("\n\n");
    } else if (script.slides) {
      fullText = script.slides.map(s => `[Slide ${s.slideNumber}: ${s.title}]\nContent: ${s.content}\nDesign: ${s.visualDesign}\nPurpose: ${s.psychologicalPurpose}`).join("\n\n");
    }
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            {format === "video" ? <Video className="w-5 h-5" /> : <Layers className="w-5 h-5" />}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-bold text-white text-base">
                {format === "video" ? "Scene-by-Scene Viral Script" : "High-Save Carousel Storyboard"}
              </h3>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-medium">
                {format === "video" ? script.duration || "45-60s" : `${script.slidesCount || 6} Slides`}
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {format === "video" ? "Visual cues, pacing triggers, and voiceover pacing" : "Multi-slide psychological progression designed for high saves & shares"}
            </p>
          </div>
        </div>

        <button
          onClick={handleCopyAll}
          className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition shadow-lg shadow-indigo-600/20"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? "Copied Script!" : "Copy Full Script"}</span>
        </button>
      </div>

      {/* Video Scenes View */}
      {format === "video" && script.scenes && (
        <div className="space-y-4">
          {script.scenes.map((scene, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-400 text-[11px] font-bold border border-indigo-500/20 flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{scene.timestamp}</span>
                  </span>
                  <span className="text-xs font-bold text-slate-200">{scene.sceneTitle}</span>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Scene {idx + 1}</span>
              </div>

              {/* Spoken Line */}
              <div className="p-3 rounded-lg bg-indigo-950/30 border border-indigo-900/40 text-sm font-semibold text-indigo-100 mb-3">
                "{scene.spokenLine}"
              </div>

              {/* Directives */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                <div className="flex items-start space-x-2 text-slate-400">
                  <Film className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-300">Visual Direction: </span>
                    <span>{scene.visual}</span>
                  </div>
                </div>
                <div className="flex items-start space-x-2 text-slate-400">
                  <Volume2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-300">Audio / SFX: </span>
                    <span>{scene.audioSFX}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Carousel Slides View */}
      {format === "photo" && script.slides && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {script.slides.map((slide, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex flex-col justify-between hover:border-indigo-500/30 transition">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-400 text-xs font-bold border border-purple-500/20">
                    Slide {slide.slideNumber}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">{slide.title}</span>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 font-medium whitespace-pre-line mb-3 min-h-[70px]">
                  {slide.content}
                </div>
              </div>

              <div className="space-y-2 text-[11px]">
                <div className="text-slate-400">
                  <span className="font-semibold text-cyan-300">🎨 Visual Layout: </span>
                  {slide.visualDesign}
                </div>
                <div className="text-indigo-300 pt-2 border-t border-slate-800/80">
                  <span className="font-semibold">🧠 Purpose: </span>
                  {slide.psychologicalPurpose}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
