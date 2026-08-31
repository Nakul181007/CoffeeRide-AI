import React from 'react';
import { Bike, Sparkles, Database, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';
import MarketInput from './MarketInput';

export default function HeroSection({
  targetCity,
  setTargetCity,
  marketType,
  setMarketType,
  onAnalyze,
  isAnalyzing
}) {
  return (
    <section className="relative pt-12 pb-20 overflow-hidden">
      {/* Background Radial Glow & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md shadow-glow-amber">
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>Gen AI Expansion Intelligence Agent</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1] mb-6">
          Where should your next <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
            coffee shop go?
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          CoffeeRide AI combines cycling activity, public mobility data and Gemini-powered reasoning to discover high-potential locations.
        </p>

        {/* Market Input Card Component */}
        <div className="max-w-2xl mx-auto mb-10">
          <MarketInput
            targetCity={targetCity}
            setTargetCity={setTargetCity}
            marketType={marketType}
            setMarketType={setMarketType}
            onAnalyze={onAnalyze}
            isAnalyzing={isAnalyzing}
          />
        </div>

        {/* Secondary Info Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-xs sm:text-sm font-medium text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span>Powered by Gemini</span>
          </div>
          <span className="hidden sm:inline text-neutral-700">•</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span>BigQuery</span>
          </div>
          <span className="hidden sm:inline text-neutral-700">•</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            <span>MCP Architecture</span>
          </div>
          <span className="hidden sm:inline text-neutral-700">•</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Public Mobility Data</span>
          </div>
        </div>

      </div>
    </section>
  );
}
