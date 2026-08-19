import React, { useState } from "react";
import { 
  Sparkles, 
  Video, 
  Image as ImageIcon, 
  Layers, 
  Share2, 
  Copy, 
  Check, 
  RotateCw, 
  Sliders, 
  ArrowRight,
  Flame,
  BrainCircuit,
  CalendarClock
} from "lucide-react";
import { ViralityScoreGauge } from "../components/ViralityScoreGauge";
import { PsychologyMatrix } from "../components/PsychologyMatrix";
import { HookCard } from "../components/HookCard";
import { ScriptViewer } from "../components/ScriptViewer";
import { CompanyProfile, ContentFormat, PlatformType, ViralBlueprint, PsychologyData } from "../types";
import { api } from "../services/api";

interface ContentStudioProps {
  company: CompanyProfile;
  initialTopic?: string;
  initialFormat?: ContentFormat;
}

export const ContentStudioView: React.FC<ContentStudioProps> = ({ company, initialTopic = "", initialFormat = "video" }) => {
  const [topic, setTopic] = useState<string>(initialTopic || "How AI Agents scale business revenue 10x in 2026");
  const [format, setFormat] = useState<ContentFormat>(initialFormat || "video");
  const [selectedPlatforms, setSelectedPlatforms] = useState<PlatformType[]>([
    "youtube", "instagram", "facebook", "twitter", "google_business"
  ]);
  const [loading, setLoading] = useState<boolean>(false);
  const [blueprint, setBlueprint] = useState<ViralBlueprint | null>(null);
  const [psychology, setPsychology] = useState<PsychologyData | null>(null);
  const [activePlatformTab, setActivePlatformTab] = useState<PlatformType>("instagram");
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const platformsList: { key: PlatformType; name: string }[] = [
    { key: "youtube", name: "YouTube" },
    { key: "instagram", name: "Instagram" },
    { key: "facebook", name: "Facebook" },
    { key: "twitter", name: "Twitter / X" },
    { key: "google_business", name: "Google Business" }
  ];

  const handleTogglePlatform = (p: PlatformType) => {
    if (selectedPlatforms.includes(p)) {
      if (selectedPlatforms.length > 1) {
        setSelectedPlatforms(selectedPlatforms.filter(item => item !== p));
      }
    } else {
      setSelectedPlatforms([...selectedPlatforms, p]);
    }
  };

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    try {
      const data = await api.generateContent({
        topic: topic.trim(),
        format,
        targetPlatforms: selectedPlatforms,
        companyName: company.name,
        industry: company.industry,
        targetAudience: company.targetAudience,
        apiKey: company.apiKey
      });
      setBlueprint(data.blueprint);
      setPsychology(data.psychology);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, sectionId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionId);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>AI Viral Content Studio</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          Generate Viral Blueprints & Subconscious Hooks
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Enter any topic manually or customize format settings to generate full scripts, viral blueprints, psychological hooks, and multi-platform copy.
        </p>
      </div>

      {/* Input Configuration Card */}
      <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6 shadow-xl">
        {/* Topic Input */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
            Content Topic or Manual Idea:
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g., 3 psychological mistakes brands make when launching a new product..."
              className="flex-1 px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition"
            />
            <button
              onClick={handleGenerate}
              disabled={loading || !topic.trim()}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:opacity-50 text-white text-sm font-bold shadow-lg shadow-indigo-600/30 flex items-center justify-center space-x-2 transition shrink-0"
            >
              {loading ? (
                <>
                  <RotateCw className="w-4 h-4 animate-spin" />
                  <span>Analyzing Psychology...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Generate Viral Blueprint</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Format Selector & Platform Switches */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800/80">
          {/* Format Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              Select Output Format:
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setFormat("video")}
                className={`p-3.5 rounded-xl border flex items-center space-x-3 transition ${
                  format === "video"
                    ? "bg-indigo-600/20 border-indigo-500 text-white shadow-md shadow-indigo-500/10"
                    : "bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                <div className={`p-2 rounded-lg ${format === "video" ? "bg-indigo-600 text-white" : "bg-slate-900 text-slate-400"}`}>
                  <Video className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold">Video Mode</div>
                  <div className="text-[10px] text-slate-400">Reels, Shorts, Video</div>
                </div>
              </button>

              <button
                onClick={() => setFormat("photo")}
                className={`p-3.5 rounded-xl border flex items-center space-x-3 transition ${
                  format === "photo"
                    ? "bg-purple-600/20 border-purple-500 text-white shadow-md shadow-purple-500/10"
                    : "bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                <div className={`p-2 rounded-lg ${format === "photo" ? "bg-purple-600 text-white" : "bg-slate-900 text-slate-400"}`}>
                  <Layers className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold">Photo / Carousel</div>
                  <div className="text-[10px] text-slate-400">High-Save Infographics</div>
                </div>
              </button>
            </div>
          </div>

          {/* Target Platforms */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              Active Distribution Channels:
            </label>
            <div className="flex flex-wrap gap-2">
              {platformsList.map((p) => {
                const isSelected = selectedPlatforms.includes(p.key);
                return (
                  <button
                    key={p.key}
                    onClick={() => handleTogglePlatform(p.key)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold border transition ${
                      isSelected
                        ? "bg-indigo-950/80 border-indigo-500 text-indigo-200"
                        : "bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-400"
                    }`}
                  >
                    ✓ {p.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Generated Results Area */}
      {blueprint && psychology && (
        <div className="space-y-8 animate-fadeIn">
          {/* Virality Score Gauge */}
          <ViralityScoreGauge
            score={blueprint.viralityScore}
            confidence={blueprint.confidenceScore}
          />

          {/* Virality Step-by-Step Action Blueprint */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
            <div className="flex items-center space-x-2 text-white font-bold text-base">
              <Flame className="w-5 h-5 text-amber-400" />
              <span>Step-by-Step Viral Blueprint (Algorithm Execution Checklist)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {blueprint.stepByStepBlueprint.map((step) => (
                <div key={step.stepNumber} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider">
                      Step {step.stepNumber}: {step.name}
                    </span>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {step.action}
                    </p>
                  </div>
                  <div className="text-[11px] text-emerald-400 mt-3 pt-2 border-t border-slate-800/80 font-medium">
                    ⚡ {step.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subconscious Psychology Matrix */}
          <PsychologyMatrix data={psychology} />

          {/* High-Retention Hooks Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-white text-lg flex items-center space-x-2">
                  <BrainCircuit className="w-5 h-5 text-indigo-400" />
                  <span>5 Psychologically-Tuned Viral Hooks</span>
                </h3>
                <p className="text-xs text-slate-400">Tested angles with visual & audio pattern interrupts</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {blueprint.hooks.map((hook) => (
                <HookCard key={hook.id} hook={hook} />
              ))}
            </div>
          </div>

          {/* Scene-by-Scene Script or Carousel Storyboard */}
          <ScriptViewer script={blueprint.scriptContent} format={blueprint.format} />

          {/* Multi-Platform Post Copy, Captions & Hashtags */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-white text-base flex items-center space-x-2">
                  <Share2 className="w-5 h-5 text-indigo-400" />
                  <span>Multi-Platform Formatted Content & SEO Tags</span>
                </h3>
                <p className="text-xs text-slate-400">Tailored copy for each algorithm format</p>
              </div>

              {/* Platform Sub-tabs */}
              <div className="flex items-center flex-wrap gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800">
                {platformsList.map((p) => (
                  <button
                    key={p.key}
                    onClick={() => setActivePlatformTab(p.key)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                      activePlatformTab === p.key
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Platform Content Details */}
            <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-4">
              {activePlatformTab === "youtube" && blueprint.platformOutputs.youtube && (
                <div className="space-y-4">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">High-CTR Title Options:</div>
                    <div className="space-y-2">
                      {blueprint.platformOutputs.youtube.titleVariations.map((title, i) => (
                        <div key={i} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-white flex items-center justify-between">
                          <span>{title}</span>
                          <button
                            onClick={() => copyToClipboard(title, `yt-title-${i}`)}
                            className="text-slate-400 hover:text-white"
                          >
                            {copiedSection === `yt-title-${i}` ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      <span>Searchable Video Description & Timestamps:</span>
                      <button
                        onClick={() => copyToClipboard(blueprint.platformOutputs.youtube!.description, "yt-desc")}
                        className="text-indigo-400 hover:text-indigo-300 flex items-center space-x-1"
                      >
                        {copiedSection === "yt-desc" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>Copy Description</span>
                      </button>
                    </div>
                    <pre className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 whitespace-pre-line font-sans">
                      {blueprint.platformOutputs.youtube.description}
                    </pre>
                  </div>
                </div>
              )}

              {activePlatformTab === "instagram" && blueprint.platformOutputs.instagram && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
                    <span>Reel Caption & Engagement CTA:</span>
                    <button
                      onClick={() => copyToClipboard(blueprint.platformOutputs.instagram!.caption, "ig-caption")}
                      className="text-indigo-400 hover:text-indigo-300 flex items-center space-x-1"
                    >
                      {copiedSection === "ig-caption" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>Copy Caption</span>
                    </button>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 whitespace-pre-line leading-relaxed">
                    {blueprint.platformOutputs.instagram.caption}
                  </div>

                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Targeted Hashtags:</div>
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-indigo-300">
                      {blueprint.platformOutputs.instagram.hashtags}
                    </div>
                  </div>
                </div>
              )}

              {activePlatformTab === "facebook" && blueprint.platformOutputs.facebook && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
                    <span>Facebook Post Copy (Conversation Trigger):</span>
                    <button
                      onClick={() => copyToClipboard(blueprint.platformOutputs.facebook!.postCopy, "fb-post")}
                      className="text-indigo-400 hover:text-indigo-300 flex items-center space-x-1"
                    >
                      {copiedSection === "fb-post" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>Copy Post</span>
                    </button>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 whitespace-pre-line leading-relaxed">
                    {blueprint.platformOutputs.facebook.postCopy}
                  </div>
                </div>
              )}

              {activePlatformTab === "twitter" && blueprint.platformOutputs.twitter && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
                    <span>X / Twitter Viral Thread:</span>
                    <button
                      onClick={() => copyToClipboard(blueprint.platformOutputs.twitter!.threadTweets.join("\n\n---\n\n"), "tw-thread")}
                      className="text-indigo-400 hover:text-indigo-300 flex items-center space-x-1"
                    >
                      {copiedSection === "tw-thread" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>Copy Thread</span>
                    </button>
                  </div>
                  <div className="space-y-2.5">
                    {blueprint.platformOutputs.twitter.threadTweets.map((t, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 whitespace-pre-line">
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activePlatformTab === "google_business" && blueprint.platformOutputs.google_business && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
                    <span>Google Business Profile Update (Local SEO Boost):</span>
                    <button
                      onClick={() => copyToClipboard(`${blueprint.platformOutputs.google_business!.title}\n\n${blueprint.platformOutputs.google_business!.body}`, "gbp-post")}
                      className="text-indigo-400 hover:text-indigo-300 flex items-center space-x-1"
                    >
                      {copiedSection === "gbp-post" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>Copy Update</span>
                    </button>
                  </div>
                  <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
                    <div className="font-bold text-sm text-white">{blueprint.platformOutputs.google_business.title}</div>
                    <p className="text-xs text-slate-300 leading-relaxed">{blueprint.platformOutputs.google_business.body}</p>
                    <div className="text-xs text-cyan-400 font-semibold pt-1">
                      Action Button: {blueprint.platformOutputs.google_business.callToAction}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
