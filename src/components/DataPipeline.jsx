import React from 'react';
import { 
  User, 
  Sparkles, 
  Layers, 
  Database, 
  Code2, 
  Calculator, 
  Award,
  ArrowDown,
  Brain
} from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/marketData';

export default function DataPipeline() {
  const architectureNodes = [
    {
      id: 1,
      title: "User Business Question",
      subtitle: "Expansion Goal Input",
      icon: <User className="w-5 h-5 text-amber-300" />,
      color: "from-amber-500/20 to-amber-600/10 border-amber-500/40"
    },
    {
      id: 2,
      title: "Gemini",
      subtitle: "AI Reasoning Layer",
      icon: <Sparkles className="w-5 h-5 text-amber-400" />,
      color: "from-amber-500/25 to-amber-600/15 border-amber-400/50"
    },
    {
      id: 3,
      title: "BigQuery MCP Server",
      subtitle: "Standardized Data Interface",
      icon: <Layers className="w-5 h-5 text-blue-400" />,
      color: "from-blue-500/20 to-blue-600/10 border-blue-500/40"
    },
    {
      id: 4,
      title: "Public Citi Bike Dataset",
      subtitle: "citibike_trips & stations",
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      color: "from-emerald-500/20 to-emerald-600/10 border-emerald-500/40"
    },
    {
      id: 5,
      title: "SQL Analytics",
      subtitle: "Spatial Aggregation Queries",
      icon: <Code2 className="w-5 h-5 text-purple-400" />,
      color: "from-purple-500/20 to-purple-600/10 border-purple-500/40"
    },
    {
      id: 6,
      title: "Cyclist Opportunity Score",
      subtitle: "Decision-Support Matrix",
      icon: <Calculator className="w-5 h-5 text-amber-300" />,
      color: "from-amber-400/20 to-amber-500/10 border-amber-400/40"
    },
    {
      id: 7,
      title: "Gemini Reasoning",
      subtitle: "Commercial Synthesis",
      icon: <Brain className="w-5 h-5 text-amber-400" />,
      color: "from-amber-500/20 to-amber-600/10 border-amber-400/40"
    },
    {
      id: 8,
      title: "Expansion Recommendation",
      subtitle: "Ranked Candidate Hubs",
      icon: <Award className="w-5 h-5 text-amber-500" />,
      color: "from-amber-500/30 to-amber-700/20 border-amber-500/60"
    }
  ];

  return (
    <div className="space-y-12">
      
      {/* 1. HOW IT WORKS SECTION */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <span>Workflow Overview</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            How CoffeeRide AI Works
          </h3>
          <p className="text-xs text-neutral-400 mt-1">
            Transforming raw public bicycle mobility logs into clear coffee shop expansion decisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HOW_IT_WORKS_STEPS.map((item) => (
            <div
              key={item.step}
              className="glass-panel p-6 rounded-2xl border border-neutral-800 hover:border-amber-500/40 transition relative overflow-hidden group"
            >
              <div className="text-4xl font-black text-amber-500/20 group-hover:text-amber-500/30 transition mb-3 font-mono">
                {item.step}
              </div>
              <h4 className="text-lg font-extrabold text-white mb-2 tracking-wide">
                {item.title}
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. ARCHITECTURE SECTION PIPELINE */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
            <span>Gen AI & MCP Infrastructure</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            System Architecture
          </h3>
          <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
            Gemini acts as the reasoning layer, while BigQuery MCP provides a standardized interface for accessing analytical data. Public cycling mobility data is transformed into location-level signals that support expansion decisions.
          </p>
        </div>

        {/* Visual Pipeline Box */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-900/30 overflow-x-auto scrollbar-none">
          
          {/* Desktop Horizontal Grid */}
          <div className="hidden xl:grid grid-cols-8 gap-2 items-center min-w-[1100px]">
            {architectureNodes.map((node) => (
              <div key={node.id} className={`p-3 rounded-2xl bg-gradient-to-b ${node.color} border backdrop-blur-md relative group hover:scale-105 transition-all duration-300 flex flex-col items-center text-center shadow-lg h-full justify-between`}>
                <div className="w-8 h-8 rounded-xl bg-neutral-950/80 border border-neutral-800 flex items-center justify-center mb-2 shadow-inner group-hover:border-amber-500/50">
                  {node.icon}
                </div>
                <h4 className="text-[11px] font-bold text-white leading-snug">
                  {node.title}
                </h4>
                <p className="text-[9px] text-neutral-400 mt-1 leading-tight">
                  {node.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile / Tablet Vertical Flow */}
          <div className="xl:hidden space-y-3">
            {architectureNodes.map((node, index) => (
              <React.Fragment key={node.id}>
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${node.color} border backdrop-blur-md flex items-center gap-4`}>
                  <div className="w-10 h-10 rounded-xl bg-neutral-950/80 border border-neutral-800 flex items-center justify-center shrink-0">
                    {node.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {node.title}
                    </h4>
                    <p className="text-xs text-neutral-400">
                      {node.subtitle}
                    </p>
                  </div>
                </div>
                {index < architectureNodes.length - 1 && (
                  <div className="flex justify-center py-0.5">
                    <ArrowDown className="w-4 h-4 text-amber-500 animate-bounce" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}
