import React from 'react';
import { Sparkles, Database, Layers, Bike } from 'lucide-react';

export default function DataSourcesPanel() {
  const sources = [
    {
      id: "gemini",
      title: "Gemini",
      role: "AI reasoning engine",
      description: "Processes multi-modal context and natural language user intent to generate strategic location evaluations.",
      icon: <Sparkles className="w-6 h-6 text-amber-400" />,
      badge: "Google GenAI"
    },
    {
      id: "bigquery",
      title: "BigQuery",
      role: "Data analytics platform",
      description: "Serverless petabyte-scale data warehouse housing billions of public mobility records.",
      icon: <Database className="w-6 h-6 text-blue-400" />,
      badge: "Google Cloud"
    },
    {
      id: "mcp",
      title: "BigQuery MCP Server",
      role: "Natural-language access to BigQuery",
      description: "Open protocol standard enabling LLMs to safely inspect schemas and execute live analytical SQL.",
      icon: <Layers className="w-6 h-6 text-purple-400" />,
      badge: "Model Context Protocol"
    },
    {
      id: "citibike",
      title: "Public Citi Bike Dataset",
      role: "Cycling mobility data",
      description: "Publicly available anonymized bikeshare trip logs detailing start/end timestamps and station IDs.",
      icon: <Bike className="w-6 h-6 text-emerald-400" />,
      badge: "Open Mobility Data"
    }
  ];

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <span>Enterprise Technology Stack</span>
        </h3>
        <p className="text-xs text-neutral-400">
          Core infrastructure powering CoffeeRide AI expansion decisions
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {sources.map((src) => (
          <div
            key={src.id}
            className="glass-panel p-5 rounded-2xl border border-neutral-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {src.icon}
                </div>
                <span className="text-[10px] font-semibold text-neutral-400 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded-md">
                  {src.badge}
                </span>
              </div>

              <h4 className="text-base font-extrabold text-white">
                {src.title}
              </h4>
              <p className="text-xs font-semibold text-amber-400 mt-0.5">
                {src.role}
              </p>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                {src.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
