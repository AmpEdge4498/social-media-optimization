import React from "react";
import { 
  LayoutDashboard, 
  Sparkles, 
  BrainCircuit, 
  UserCheck, 
  CalendarClock, 
  TrendingUp, 
  Settings,
  Award,
  BarChart3,
  Sliders,
  Building2
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: "construction_leads", label: "Construction Lead Hunter", icon: Building2, badge: "B2B CRM" },
    { id: "title_ranker", label: "Title Ranker & SEO", icon: Award, badge: "Rank #1" },
    { id: "profile_auditor", label: "3-Date Profile & Video Audit", icon: UserCheck, badge: "3-Date AI" },
    { id: "post_analytics", label: "Post Graph & Analytics", icon: BarChart3, badge: "Retention" },
    { id: "social_editor", label: "Live Control Studio", icon: Sliders, badge: "Editor" },
    { id: "content_studio", label: "Viral Content Studio", icon: Sparkles, badge: "AI Gen" },
    { id: "subconscious_lab", label: "Subconscious Mind Lab", icon: BrainCircuit, badge: "Psychology" },
    { id: "dashboard", label: "Agent Dashboard", icon: LayoutDashboard, badge: "Live" },
    { id: "timing_scheduler", label: "Timing & Heatmaps", icon: CalendarClock, badge: "Peak" },
    { id: "trend_hunter", label: "Auto Trend Hunter", icon: TrendingUp, badge: "Velocity" },
    { id: "settings", label: "Brand & API Settings", icon: Settings, badge: "" },
  ];

  return (
    <aside className="w-64 border-r border-slate-800/80 bg-[#090d16] flex flex-col justify-between shrink-0 min-h-[calc(100vh-4rem)]">
      <div className="p-4 space-y-1.5 overflow-y-auto max-h-[calc(100vh-10rem)]">
        <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
          AmpEdge B2B Command Center
        </div>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 group ${
                isActive
                  ? "bg-gradient-to-r from-emerald-600/90 via-indigo-600/90 to-purple-600/90 text-white shadow-lg shadow-emerald-500/20"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
              }`}
            >
              <div className="flex items-center space-x-3">
                <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${isActive ? "text-white" : "text-slate-400 group-hover:text-emerald-400"}`} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className={`text-[9px] px-1.5 py-0.5 rounded-md font-bold ${
                  isActive ? "bg-white/20 text-white" : "bg-slate-800 text-slate-400 border border-slate-700/50"
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Footer Info Box */}
      <div className="p-4 m-3 rounded-2xl bg-slate-900/60 border border-slate-800/80">
        <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-400 mb-1">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>AmpEdge Solutions 2026</span>
        </div>
        <p className="text-[11px] text-slate-400 leading-relaxed">
          Construction Leads, Society AMC CRM & 3-Date Video SEO Optimizer.
        </p>
      </div>
    </aside>
  );
};
