import React, { useState } from "react";
import { Calendar, Clock, Zap, Info, ShieldCheck } from "lucide-react";

interface ScheduleHeatmapProps {
  platformData: any;
}

export const ScheduleHeatmap: React.FC<ScheduleHeatmapProps> = ({ platformData }) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("instagram");

  const platformKeys = [
    { key: "youtube", label: "YouTube & Shorts" },
    { key: "instagram", label: "Instagram Reels" },
    { key: "facebook", label: "Facebook Watch" },
    { key: "twitter", label: "Twitter / X" },
    { key: "google_business", label: "Google Business Profile" },
  ];

  const currentData = platformData?.[selectedPlatform] || platformData?.instagram;

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const timeBuckets = ["6-9 AM", "9-12 PM", "12-3 PM", "3-6 PM", "6-9 PM", "9-11 PM", "11-2 AM", "2-6 AM"];

  const getHeatmapColor = (val: number) => {
    if (val >= 90) return "bg-emerald-500 text-white font-bold shadow-sm shadow-emerald-500/40";
    if (val >= 75) return "bg-indigo-600/80 text-indigo-100";
    if (val >= 55) return "bg-indigo-950/60 text-slate-300";
    return "bg-slate-900/60 text-slate-500";
  };

  return (
    <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6">
      {/* Platform Selector Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h3 className="font-bold text-white text-base">Multi-Platform Optimal Timing & Peak Heatmaps</h3>
          <p className="text-xs text-slate-400">Algorithmic traffic spikes and best publishing windows</p>
        </div>

        <div className="flex items-center flex-wrap gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800">
          {platformKeys.map((item) => (
            <button
              key={item.key}
              onClick={() => setSelectedPlatform(item.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                selectedPlatform === item.key
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {currentData && (
        <>
          {/* Top Recommendation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-950/40 to-slate-900 border border-indigo-800/40">
              <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-1 flex items-center space-x-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>Best Days to Post</span>
              </div>
              <div className="text-base font-bold text-white">
                {currentData.bestDays?.join(", ")}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-950/40 to-slate-900 border border-emerald-800/40">
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1 flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Prime Time Slots</span>
              </div>
              <div className="space-y-1">
                {currentData.bestSlots?.slice(0, 2).map((slot: any, idx: number) => (
                  <div key={idx} className="text-xs font-semibold text-emerald-200 flex items-center justify-between">
                    <span>{slot.time}</span>
                    <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/80 px-1.5 py-0.5 rounded">
                      {slot.score}% score
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-br from-purple-950/40 to-slate-900 border border-purple-800/40">
              <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1 flex items-center space-x-1.5">
                <Zap className="w-3.5 h-3.5" />
                <span>Algorithm Secret</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {currentData.algoSecret}
              </p>
            </div>
          </div>

          {/* Interactive Heatmap Matrix */}
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center justify-between">
              <span>Weekly Engagement Distribution Heatmap (IST)</span>
              <div className="flex items-center space-x-2 text-[10px] text-slate-400">
                <span className="w-2.5 h-2.5 rounded bg-slate-900 border border-slate-800 inline-block"></span> Low
                <span className="w-2.5 h-2.5 rounded bg-indigo-600 inline-block"></span> Medium
                <span className="w-2.5 h-2.5 rounded bg-emerald-500 inline-block"></span> Peak Viral
              </div>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-[600px] border border-slate-800 rounded-xl overflow-hidden bg-slate-950/80">
                {/* Header row */}
                <div className="grid grid-cols-9 bg-slate-900 p-2 text-[11px] font-bold text-slate-400 border-b border-slate-800">
                  <div className="col-span-1">Day</div>
                  {timeBuckets.map((tb, i) => (
                    <div key={i} className="text-center">{tb}</div>
                  ))}
                </div>

                {/* Day rows */}
                {days.map((day) => {
                  const values = currentData.heatmap?.[day] || [30, 40, 50, 60, 70, 80, 90, 50];
                  return (
                    <div key={day} className="grid grid-cols-9 p-2 items-center text-xs border-b border-slate-800/40 hover:bg-slate-900/40 transition">
                      <div className="font-semibold text-slate-300 text-[11px]">{day.slice(0, 3)}</div>
                      {values.map((val: number, idx: number) => (
                        <div key={idx} className="flex justify-center px-1">
                          <div className={`w-full py-1.5 rounded-lg text-center text-[10px] transition duration-200 cursor-pointer ${getHeatmapColor(val)}`}>
                            {val}%
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
