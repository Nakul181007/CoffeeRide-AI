import React from 'react';
import { Coffee, ShieldAlert, ExternalLink } from 'lucide-react';

export default function FooterNote() {
  return (
    <footer className="mt-16 pt-8 pb-12 border-t border-neutral-800/80 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Prototype Transparency Note Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/80 border border-amber-500/30 text-xs sm:text-sm text-neutral-300 leading-relaxed flex items-start gap-3.5">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-bold text-white">
                Prototype Transparency Notice
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                Prototype / Demo Data
              </span>
            </div>
            <p className="text-neutral-300 leading-relaxed">
              Prototype transparency: The current demo uses representative results because local BigQuery MCP authentication is not enabled. The production architecture is designed for live BigQuery MCP integration with public mobility datasets.
            </p>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs pt-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Coffee className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white text-sm block">CoffeeRide AI</span>
              <span className="text-neutral-400 text-xs">"AI-powered location intelligence for cyclist-friendly coffee expansion."</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-neutral-400 font-medium">
            <span className="text-amber-400">Technology:</span>
            <span>Gemini</span>
            <span>•</span>
            <span>BigQuery</span>
            <span>•</span>
            <span>BigQuery MCP</span>
            <span>•</span>
            <span>Public Mobility Data</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
