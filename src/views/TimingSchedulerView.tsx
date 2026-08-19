import React, { useState, useEffect } from "react";
import { CalendarClock, Sparkles, Globe, Clock, ShieldCheck } from "lucide-react";
import { ScheduleHeatmap } from "../components/ScheduleHeatmap";
import { api } from "../services/api";

export const TimingSchedulerView: React.FC = () => {
  const [platformData, setPlatformData] = useState<any>(null);
  const [timezone, setTimezone] = useState<string>("Asia/Kolkata (IST)");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await api.getOptimalTimes("all", timezone);
        setPlatformData(res.platforms);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [timezone]);

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-2">
          <CalendarClock className="w-3.5 h-3.5" />
          <span>Algorithmic Timing Precision Engine</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          Multi-Platform Optimal Timing & Scheduling
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Never post blindly. Maximize initial 45-minute velocity across YouTube, Instagram, Facebook, Twitter, and Google Business Profile.
        </p>
      </div>

      {/* Heatmap & Timing Engine Card */}
      {loading ? (
        <div className="p-12 text-center text-slate-400">Loading timing algorithms...</div>
      ) : (
        <ScheduleHeatmap platformData={platformData} />
      )}
    </div>
  );
};
