import React, { useState } from "react";
import { 
  UserCheck, 
  Plus, 
  RotateCw, 
  Globe, 
  Youtube, 
  Instagram, 
  Facebook, 
  Twitter, 
  MapPin,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { ProfileAuditCard } from "../components/ProfileAuditCard";
import { ProfileAuditData, CompanyProfile } from "../types";
import { api } from "../services/api";

interface ProfileAuditorProps {
  company: CompanyProfile;
}

export const ProfileAuditorView: React.FC<ProfileAuditorProps> = ({ company }) => {
  // Preset URLs or user input URLs
  const [urls, setUrls] = useState<{ [key: string]: string }>({
    youtube: "https://youtube.com/@ampedge-company",
    instagram: "https://instagram.com/ampedge_official",
    facebook: "https://facebook.com/ampedge.company",
    twitter: "https://x.com/ampedge_tech",
    google_business: "https://maps.app.goo.gl/ampedge-hq"
  });

  const [activePlatformInput, setActivePlatformInput] = useState<string>("youtube");
  const [customUrl, setCustomUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [audits, setAudits] = useState<{ [key: string]: ProfileAuditData }>({});

  const platformList = [
    { key: "youtube", name: "YouTube Channel", icon: Youtube, placeholder: "https://youtube.com/@yourcompany" },
    { key: "instagram", name: "Instagram Profile", icon: Instagram, placeholder: "https://instagram.com/yourcompany" },
    { key: "facebook", name: "Facebook Page", icon: Facebook, placeholder: "https://facebook.com/yourpage" },
    { key: "twitter", name: "Twitter / X Profile", icon: Twitter, placeholder: "https://x.com/yourhandle" },
    { key: "google_business", name: "Google Business Profile", icon: MapPin, placeholder: "https://maps.google.com/?cid=..." }
  ];

  const handleAuditSingle = async (platformKey: string, urlToAudit: string) => {
    if (!urlToAudit) return;
    setLoading(true);
    try {
      const res = await api.analyzeProfile({
        platform: platformKey,
        url: urlToAudit,
        companyData: company
      });
      setAudits(prev => ({ ...prev, [platformKey]: res.audit }));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAuditAll = async () => {
    setLoading(true);
    try {
      const results: { [key: string]: ProfileAuditData } = {};
      for (const p of platformList) {
        const urlToUse = urls[p.key];
        if (urlToUse) {
          const res = await api.analyzeProfile({
            platform: p.key,
            url: urlToUse,
            companyData: company
          });
          results[p.key] = res.audit;
        }
      }
      setAudits(results);
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
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-2">
          <UserCheck className="w-3.5 h-3.5" />
          <span>Multi-Profile Diagnostic Ingestion Engine</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          Social Profile Auditor & 30-Day Growth Roadmap
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Add your social profile links one by one. The AI agent audits algorithmic SEO, identifies bottlenecks, rewrites your bio, and builds a customized 30-day viral roadmap.
        </p>
      </div>

      {/* URL Ingestion Panel */}
      <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
          <div className="text-sm font-bold text-white uppercase tracking-wider">
            Your Company Social Links:
          </div>
          <button
            onClick={handleAuditAll}
            disabled={loading}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:opacity-50 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 flex items-center space-x-2 transition"
          >
            {loading ? (
              <>
                <RotateCw className="w-3.5 h-3.5 animate-spin" />
                <span>Auditing All Profiles...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5" />
                <span>Run Full 5-Platform Audit</span>
              </>
            )}
          </button>
        </div>

        {/* Inputs List */}
        <div className="grid grid-cols-1 gap-3.5">
          {platformList.map((platform) => {
            const Icon = platform.icon;
            const currentUrl = urls[platform.key] || "";
            const hasAudit = !!audits[platform.key];
            return (
              <div
                key={platform.key}
                className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3"
              >
                <div className="flex items-center space-x-3 w-full md:w-56 shrink-0">
                  <div className="p-2 rounded-xl bg-slate-900 text-indigo-400 border border-slate-800">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-200">{platform.name}</span>
                </div>

                <div className="flex-1 flex items-center gap-2">
                  <input
                    type="url"
                    value={currentUrl}
                    onChange={(e) => setUrls({ ...urls, [platform.key]: e.target.value })}
                    placeholder={platform.placeholder}
                    className="flex-1 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-indigo-500 transition"
                  />
                  <button
                    onClick={() => handleAuditSingle(platform.key, currentUrl)}
                    disabled={loading || !currentUrl}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold shrink-0 transition flex items-center space-x-1.5 ${
                      hasAudit
                        ? "bg-emerald-950/40 text-emerald-300 border border-emerald-800/50 hover:bg-emerald-900/40"
                        : "bg-indigo-600/80 hover:bg-indigo-600 text-white"
                    }`}
                  >
                    <span>{hasAudit ? "Re-Audit" : "Audit Link"}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Audits Output List */}
      <div className="space-y-6">
        {Object.keys(audits).length > 0 ? (
          Object.values(audits).map((audit) => (
            <ProfileAuditCard key={audit.platform} audit={audit} />
          ))
        ) : (
          <div className="p-12 rounded-3xl bg-slate-900/40 border border-slate-800/60 text-center space-y-3">
            <UserCheck className="w-12 h-12 text-slate-600 mx-auto" />
            <h3 className="text-base font-bold text-slate-400">No Audits Run Yet</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Click "Run Full 5-Platform Audit" or audit any individual profile URL above to see your diagnostic reports.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
