import React from 'react';
import { Bike, Navigation, MapPin, BarChart3, TrendingUp } from 'lucide-react';

export default function DataInsights({ insights, locations }) {
  if (!insights) return null;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <span>Data Mobility Insights</span>
        </h3>
        <p className="text-xs text-neutral-400">
          Aggregated mobility indicators calculated across 90-day public bikeshare logs
        </p>
      </div>

      {/* 3 Analytical Key Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Card 1: Cycling Activity */}
        <div className="glass-panel p-5 rounded-2xl border border-amber-900/30 flex items-center gap-4 relative overflow-hidden group hover:border-amber-500/40 transition">
          <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            <Bike className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
              Cycling Activity
            </span>
            <div className="text-2xl font-black text-white mt-0.5 flex items-center gap-2">
              <span>{insights.cyclingActivity}</span>
              <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded">
                +18% YoY
              </span>
            </div>
            <span className="text-[11px] text-neutral-400">Dense morning commuter corridors</span>
          </div>
        </div>

        {/* Card 2: Trip Starts */}
        <div className="glass-panel p-5 rounded-2xl border border-amber-900/30 flex items-center gap-4 relative overflow-hidden group hover:border-amber-500/40 transition">
          <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
            <Navigation className="w-6 h-6 rotate-45" />
          </div>
          <div>
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
              Trip Starts
            </span>
            <div className="text-2xl font-black text-white mt-0.5 flex items-center gap-2">
              <span>{insights.tripStarts}</span>
              <span className="text-xs text-amber-300 font-semibold bg-amber-500/10 px-2 py-0.5 rounded font-mono">
                142k/mo
              </span>
            </div>
            <span className="text-[11px] text-neutral-400">High origin unlock density</span>
          </div>
        </div>

        {/* Card 3: Trip Ends */}
        <div className="glass-panel p-5 rounded-2xl border border-amber-900/30 flex items-center gap-4 relative overflow-hidden group hover:border-amber-500/40 transition">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
              Trip Ends
            </span>
            <div className="text-2xl font-black text-white mt-0.5 flex items-center gap-2">
              <span>{insights.tripEnds}</span>
              <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded font-mono">
                158k/mo
              </span>
            </div>
            <span className="text-[11px] text-neutral-400">Heavy docking convergence</span>
          </div>
        </div>
      </div>

      {/* Relative Cycling Activity Bar Chart */}
      <div className="glass-panel p-6 rounded-2xl border border-neutral-800 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-bold text-white">
            <BarChart3 className="w-4 h-4 text-amber-400" />
            <span>Relative Cycling Activity Index by Neighborhood</span>
          </div>
          <span className="text-xs text-neutral-400 font-mono">Citi Bike Data Matrix</span>
        </div>

        <div className="space-y-3 pt-2">
          {locations.map((loc) => (
            <div key={loc.id} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-medium">
                <span className="text-neutral-200 font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  {loc.name}
                </span>
                <span className="text-amber-400 font-mono font-bold">{loc.score} Index</span>
              </div>
              
              <div className="w-full bg-neutral-900 h-3 rounded-full overflow-hidden border border-neutral-800">
                <div
                  className="h-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 rounded-full transition-all duration-1000 shadow-glow-amber"
                  style={{ width: `${loc.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
