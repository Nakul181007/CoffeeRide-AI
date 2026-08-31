import React from 'react';
import { Coffee, Layers, Database, Sparkles } from 'lucide-react';

export default function Navbar({ onReset }) {
  return (
    <header className="sticky top-0 z-40 border-b border-amber-900/20 bg-[#0A0908]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Title */}
        <div 
          onClick={onReset}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-800 flex items-center justify-center shadow-glow-amber group-hover:scale-105 transition-transform duration-300">
              <Coffee className="w-6 h-6 text-neutral-950 font-bold" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-extrabold tracking-tight text-white font-sans">
                CoffeeRide <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">AI</span>
              </h1>
              <span className="px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded-full">
                Hackathon Build
              </span>
            </div>
            <p className="text-xs text-neutral-400 font-medium hidden sm:block">
              "Find where cyclists stop. Build where coffee flows."
            </p>
          </div>
        </div>

        {/* Tech Stack Badges Header */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800 text-xs text-neutral-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Gemini</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800 text-xs text-neutral-300">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>BigQuery MCP</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800 text-xs text-neutral-300">
            <Database className="w-3.5 h-3.5 text-emerald-400" />
            <span>Public Citi Bike Data — Prototype</span>
          </div>
        </div>

        {/* Status & Action */}
        <div className="flex items-center gap-2">
          <button 
            onClick={onReset}
            className="px-3.5 py-1.5 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition cursor-pointer"
          >
            New Search
          </button>
        </div>
      </div>
    </header>
  );
}
