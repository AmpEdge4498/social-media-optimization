import React from "react";
import { Sparkles, Activity, ShieldCheck, Zap, Globe } from "lucide-react";
import { CompanyProfile } from "../types";

interface NavbarProps {
  company: CompanyProfile;
  activeTab: string;
}

export const Navbar: React.FC<NavbarProps> = ({ company }) => {
  return (
    <header className="h-16 border-b border-slate-800 bg-[#090d16]/80 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center space-x-3">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-[1.5px] flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center">
            <Zap className="w-5 h-5 text-indigo-400" />
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <span className="font-bold tracking-tight text-white text-lg">ViralMind</span>
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              AI Agent 2026
            </span>
          </div>
          <p className="text-xs text-slate-400 hidden sm:block">
            Subconscious Psychology & Social Media Growth Engine
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {/* Platform Status Indicator */}
        <div className="hidden lg:flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="text-slate-300 font-medium">5 Platforms Active:</span>
          <span className="text-slate-400">YT • IG • FB • X • GBP</span>
        </div>

        {/* Company Badge */}
        <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-indigo-950/40 border border-indigo-800/40 text-xs">
          <Globe className="w-3.5 h-3.5 text-indigo-400" />
          <span className="font-semibold text-indigo-200">{company.name}</span>
          <span className="text-slate-400 hidden md:inline">({company.industry})</span>
        </div>
      </div>
    </header>
  );
};
