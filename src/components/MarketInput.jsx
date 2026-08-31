import React from 'react';
import { MapPin, Search, Coffee, Sparkles, ChevronDown, Check } from 'lucide-react';

export default function MarketInput({
  targetCity,
  setTargetCity,
  marketType,
  setMarketType,
  onAnalyze,
  isAnalyzing
}) {
  const cityPresets = ["New York City", "San Francisco", "Chicago"];

  const marketTypes = [
    "Cyclist-focused coffee shop",
    "Espresso & Repair Kiosk",
    "Roastery & Cyclist Lounge"
  ];

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-amber-900/30 shadow-2xl relative text-left backdrop-blur-xl">
      {/* Outer subtle glow line */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 via-amber-600/10 to-amber-700/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 pointer-events-none" />

      <form onSubmit={(e) => { e.preventDefault(); onAnalyze(); }} className="relative z-10 space-y-6">
        
        {/* Main Grid: Target Market Input */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-xs uppercase font-bold tracking-wider text-amber-400">
              Target Market
            </label>
            <span className="text-[11px] text-neutral-400">Select or type city</span>
          </div>

          <div className="relative flex items-center">
            <div className="absolute left-4 pointer-events-none text-amber-500">
              <MapPin className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={targetCity}
              onChange={(e) => setTargetCity(e.target.value)}
              placeholder="e.g. New York City, San Francisco"
              className="w-full pl-12 pr-4 py-3.5 bg-neutral-900/90 border border-neutral-700/80 rounded-xl text-white text-base font-semibold placeholder:text-neutral-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition shadow-inner"
              required
            />
          </div>

          {/* City Presets Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs text-neutral-400 mr-1">Presets:</span>
            {cityPresets.map((city) => (
              <button
                key={city}
                type="button"
                onClick={() => setTargetCity(city)}
                className={`px-3 py-1 text-xs rounded-full font-medium transition ${
                  targetCity === city
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-glow-amber'
                    : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-neutral-200 hover:border-neutral-700'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Small selector for Market Type */}
        <div className="space-y-2">
          <label className="block text-xs uppercase font-bold tracking-wider text-neutral-400">
            Market Type
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">
              <Coffee className="w-4 h-4 text-amber-500/80" />
            </div>
            <select
              value={marketType}
              onChange={(e) => setMarketType(e.target.value)}
              className="w-full pl-11 pr-10 py-3 bg-neutral-900/90 border border-neutral-800 rounded-xl text-neutral-200 text-sm font-medium focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 appearance-none cursor-pointer"
            >
              {marketTypes.map((type) => (
                <option key={type} value={type} className="bg-neutral-900 text-white">
                  {type}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          type="submit"
          disabled={isAnalyzing || !targetCity.trim()}
          className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:via-amber-500 hover:to-amber-600 text-neutral-950 font-extrabold text-base tracking-wide uppercase transition-all duration-300 shadow-glow-amber hover:shadow-glow-amber-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer"
        >
          {isAnalyzing ? (
            <>
              <div className="w-5 h-5 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
              <span>Analyzing Market Data...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5 text-neutral-950 group-hover:rotate-12 transition-transform" />
              <span>Analyze Market</span>
            </>
          )}
        </button>

      </form>
    </div>
  );
}
