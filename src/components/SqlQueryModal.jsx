import React from 'react';
import { X, Code, Copy, Check, Terminal } from 'lucide-react';

export default function SqlQueryModal({ isOpen, onClose, sqlQuery, cityName }) {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(sqlQuery);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-2xl glass-panel-glow rounded-2xl overflow-hidden border border-amber-500/40 shadow-glow-amber-lg">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white font-bold text-base">
            <Terminal className="w-4 h-4 text-amber-400" />
            <span>BigQuery MCP SQL Inspector — {cityName}</span>
          </div>

          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4">
          <p className="text-xs text-neutral-300 leading-relaxed">
            This BigQuery SQL query was constructed via natural-language reasoning by Gemini through the BigQuery MCP Server to aggregate trip origins and destinations.
          </p>

          <div className="relative rounded-xl bg-neutral-950 border border-neutral-800 p-4 font-mono text-xs text-amber-300 leading-relaxed overflow-x-auto max-h-[300px]">
            <button
              onClick={handleCopy}
              className="absolute top-3 right-3 p-1.5 rounded-md bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-white transition flex items-center gap-1 text-[11px]"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy SQL</span>
                </>
              )}
            </button>
            <pre>{sqlQuery}</pre>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-neutral-900/80 border-t border-neutral-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wide transition cursor-pointer"
          >
            Close Inspector
          </button>
        </div>

      </div>
    </div>
  );
}
