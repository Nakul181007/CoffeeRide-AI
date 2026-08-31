import React from 'react';
import { Award, CheckCircle, Code, ShieldCheck } from 'lucide-react';

export default function MainRecommendationCard({ recommendation, onOpenSql }) {
  if (!recommendation) return null;

  return (
    <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 border border-amber-500/40 relative overflow-hidden shadow-glow-amber-lg">
      
      {/* Decorative Gradient Flare */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4 text-amber-400" />
                <span>#1 Recommended Expansion Area</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-md bg-neutral-900 border border-neutral-700 text-neutral-400 text-[11px] font-mono font-semibold">
                Prototype / Demo Data
              </span>
            </div>

            <button
              onClick={onOpenSql}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-900/90 border border-neutral-700 text-xs text-neutral-300 hover:text-white hover:border-amber-500/50 transition cursor-pointer"
            >
              <Code className="w-3.5 h-3.5 text-amber-400" />
              <span>Inspect BigQuery SQL</span>
            </button>
          </div>

          <div>
            <h2 className="text-xs uppercase font-bold tracking-widest text-neutral-400 mb-1">
              Recommended Location
            </h2>
            <div className="text-3xl sm:text-5xl font-black text-white tracking-tight flex items-center gap-3">
              <span>{recommendation.area}</span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                {recommendation.status}
              </span>
            </div>
          </div>

          {/* Key Mobility Drivers */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs uppercase font-bold tracking-wider text-amber-400">
              Key Mobility Drivers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {recommendation.reasons.map((reason, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-900/60 border border-neutral-800 text-sm text-neutral-200"
                >
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Cyclist Opportunity Score */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-neutral-950/80 border border-amber-500/30 text-center relative shadow-inner">
          <div className="text-xs uppercase font-extrabold tracking-widest text-neutral-400 mb-2">
            Cyclist Opportunity Score
          </div>
          
          <div className="relative my-2 flex items-baseline gap-1">
            <span className="text-6xl sm:text-7xl font-black bg-gradient-to-b from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent tracking-tighter">
              {recommendation.score}
            </span>
            <span className="text-xl font-bold text-neutral-500">/ 100</span>
          </div>

          <div className="w-full bg-neutral-900 rounded-full h-2.5 mt-3 overflow-hidden border border-neutral-800">
            <div 
              className="bg-gradient-to-r from-amber-500 to-amber-300 h-full rounded-full shadow-glow-amber"
              style={{ width: `${recommendation.score}%` }}
            />
          </div>

          <p className="text-xs text-neutral-400 mt-4 leading-relaxed">
            Targeting production dataset <br />
            <code className="text-amber-300 font-mono text-[10px]">bigquery-public-data.new_york.citibike_trips</code>
          </p>
        </div>

      </div>
    </div>
  );
}
