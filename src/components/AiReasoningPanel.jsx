import React, { useState } from 'react';
import { Sparkles, Brain, Code, Terminal, ChevronRight } from 'lucide-react';

export default function AiReasoningPanel({ recommendation, cityName, onOpenSql }) {
  const [showPrompt, setShowPrompt] = useState(false);

  if (!recommendation) return null;

  return (
    <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 border border-amber-500/30 relative overflow-hidden space-y-6">
      
      {/* Top Header & Badge */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
            <Brain className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-white">
              Why {recommendation.area}?
            </h3>
            <p className="text-xs text-neutral-400">
              Gemini Natural Language Synthesis
            </p>
          </div>
        </div>

        {/* Small badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>AI-generated insight</span>
        </div>
      </div>

      {/* Main Quote / Explanation */}
      <div className="p-5 rounded-2xl bg-neutral-950/80 border border-neutral-800 text-neutral-200 text-base sm:text-lg leading-relaxed relative">
        <p className="font-normal italic">
          "{recommendation.aiReasoning}"
        </p>
      </div>

      {/* Interactive Controls */}
      <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={() => setShowPrompt(!showPrompt)}
          className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition cursor-pointer"
        >
          <Terminal className="w-4 h-4" />
          <span>{showPrompt ? "Hide Gemini Prompt & Context" : "Inspect Gemini Prompt & Context"}</span>
          <ChevronRight className={`w-3.5 h-3.5 transition-transform ${showPrompt ? 'rotate-90' : ''}`} />
        </button>

        <button
          onClick={onOpenSql}
          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-white transition cursor-pointer"
        >
          <Code className="w-4 h-4 text-blue-400" />
          <span>View Target BigQuery SQL Payload</span>
        </button>
      </div>

      {/* Prompt Drawer */}
      {showPrompt && (
        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs font-mono text-neutral-300 space-y-2">
          <div className="flex items-center justify-between text-neutral-500 border-b border-neutral-800 pb-2">
            <span>[GEMINI REASONING CONTEXT]</span>
            <span>Production Architecture Target</span>
          </div>
          <p className="text-amber-200/90 leading-relaxed">
            SYSTEM: You are CoffeeRide AI. Analyze bicycle trip density, station capacity, and trip origin/destination ratios for {cityName}. Recommend the single best neighborhood for a new cyclist-focused coffee shop and articulate key commercial drivers.
          </p>
        </div>
      )}

    </div>
  );
}
