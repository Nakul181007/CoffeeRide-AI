import React, { useState } from 'react';
import { Bike, TrendingUp, ChevronDown, ChevronUp, MapPin, Award, Activity } from 'lucide-react';

export default function TopLocationsList({ locations }) {
  const [expandedId, setExpandedId] = useState("downtown-brooklyn");

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <span>Ranked Opportunity Locations</span>
          </h3>
          <p className="text-xs text-neutral-400">
            Top 5 urban neighborhoods sorted by Cyclist Opportunity Score
          </p>
        </div>
        <span className="text-xs font-mono text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
          5 Corridors Evaluated
        </span>
      </div>

      <div className="space-y-3">
        {locations.map((loc) => {
          const isExpanded = expandedId === loc.id;
          const isTopRank = loc.rank === 1;

          return (
            <div
              key={loc.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isTopRank
                  ? 'glass-panel-glow border-amber-500/40 shadow-glow-amber'
                  : 'glass-panel border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {/* Main Summary Header Bar */}
              <div
                onClick={() => toggleExpand(loc.id)}
                className="p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 cursor-pointer select-none"
              >
                {/* Rank & Location Name */}
                <div className="flex items-center gap-4 min-w-[240px]">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm ${
                      isTopRank
                        ? 'bg-amber-500 text-neutral-950 shadow-glow-amber'
                        : 'bg-neutral-900 text-neutral-300 border border-neutral-800'
                    }`}
                  >
                    #{loc.rank}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base sm:text-lg font-extrabold text-white">
                        {loc.name}
                      </h4>
                      {isTopRank && (
                        <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/40">
                          Top Candidate
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      {loc.shortExplanation}
                    </p>
                  </div>
                </div>

                {/* Metrics Badges & Score */}
                <div className="flex items-center gap-4 sm:gap-6 ml-auto">
                  {/* Cycling Activity Indicator */}
                  <div className="hidden md:flex flex-col items-end">
                    <span className="text-[10px] uppercase font-bold text-neutral-500">Cycling Activity</span>
                    <span className="text-xs font-semibold text-amber-300 flex items-center gap-1">
                      <Bike className="w-3.5 h-3.5 text-amber-400" />
                      {loc.cyclingActivity}
                    </span>
                  </div>

                  {/* Demand Level */}
                  <div className="hidden sm:flex flex-col items-end">
                    <span className="text-[10px] uppercase font-bold text-neutral-500">Demand Level</span>
                    <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {loc.demandLevel}
                    </span>
                  </div>

                  {/* Score Pill */}
                  <div className="flex items-center gap-2 pl-2">
                    <div className="text-right">
                      <div className="text-2xl font-black text-white font-mono leading-none">
                        {loc.score}
                      </div>
                      <span className="text-[10px] text-neutral-500 uppercase font-bold">Score</span>
                    </div>

                    <div className="text-neutral-400 hover:text-white p-1">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </div>
              </div>

              {/* Expandable Details Drawer */}
              {isExpanded && (
                <div className="px-5 pb-5 pt-2 border-t border-neutral-800/80 bg-neutral-950/60 space-y-4">
                  <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                    {loc.fullAnalysis}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                    <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                      <div className="text-[10px] text-neutral-400 uppercase font-bold">Trip-Start Index</div>
                      <div className="text-sm font-bold text-white mt-1">{loc.tripStartDensity} / 100</div>
                    </div>

                    <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                      <div className="text-[10px] text-neutral-400 uppercase font-bold">Trip-End Index</div>
                      <div className="text-sm font-bold text-white mt-1">{loc.tripEndDensity} / 100</div>
                    </div>

                    <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                      <div className="text-[10px] text-neutral-400 uppercase font-bold">Avg Station Dist</div>
                      <div className="text-sm font-bold text-amber-400 mt-1">{loc.avgStationDistance}</div>
                    </div>

                    <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                      <div className="text-[10px] text-neutral-400 uppercase font-bold">Peak Daily Traffic</div>
                      <div className="text-sm font-bold text-emerald-400 mt-1">{loc.peakHourVolume}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
