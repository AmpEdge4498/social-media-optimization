import React, { useState } from "react";
import { Settings, Save, Check, Key, ShieldCheck, Building2, Users } from "lucide-react";
import { CompanyProfile } from "../types";

interface SettingsProps {
  company: CompanyProfile;
  setCompany: (c: CompanyProfile) => void;
}

export const SettingsView: React.FC<SettingsProps> = ({ company, setCompany }) => {
  const [formData, setFormData] = useState<CompanyProfile>(company);
  const [saved, setSaved] = useState<boolean>(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setCompany(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold mb-2">
          <Settings className="w-3.5 h-3.5 text-indigo-400" />
          <span>Brand & Model Configuration</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          Company Settings & Intelligence Config
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Customize your company voice, industry focus, target audience psychology, and optional Gemini API integration.
        </p>
      </div>

      <form onSubmit={handleSave} className="p-6 md:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6 shadow-xl">
        {/* Company Name & Industry */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Company / Brand Name:
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Industry / Sector:
            </label>
            <input
              type="text"
              value={formData.industry}
              onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition"
              required
            />
          </div>
        </div>

        {/* Target Audience & Brand Voice */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Primary Target Audience:
            </label>
            <input
              type="text"
              value={formData.targetAudience}
              onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
              placeholder="e.g. Founders, Marketing Directors, Tech Enthusiasts"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Brand Voice & Tone:
            </label>
            <input
              type="text"
              value={formData.brandVoice}
              onChange={(e) => setFormData({ ...formData, brandVoice: e.target.value })}
              placeholder="e.g. Authoritative, Fast-Paced, Direct, Insightful"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition"
            />
          </div>
        </div>

        {/* Optional Gemini API Key */}
        <div className="p-4 rounded-2xl bg-indigo-950/20 border border-indigo-900/40 space-y-3">
          <div className="flex items-center space-x-2 text-indigo-300 text-xs font-bold uppercase tracking-wider">
            <Key className="w-4 h-4 text-indigo-400" />
            <span>Google Gemini API Key (Optional)</span>
          </div>
          <input
            type="password"
            value={formData.apiKey || ""}
            onChange={(e) => setFormData({ ...formData, apiKey: e.target.value })}
            placeholder="AIzaSy... (Leave empty to use built-in intelligence engine)"
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition"
          />
          <p className="text-[11px] text-slate-400">
            ViralMind features a full built-in virality engine. Adding your Gemini API key activates unlimited custom LLM brainstorming.
          </p>
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold shadow-lg shadow-indigo-600/30 flex items-center space-x-2 transition"
          >
            {saved ? <Check className="w-4 h-4 text-emerald-300" /> : <Save className="w-4 h-4" />}
            <span>{saved ? "Settings Saved!" : "Save Configuration"}</span>
          </button>
        </div>
      </form>
    </div>
  );
};
