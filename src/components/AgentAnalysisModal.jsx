import React, { useState, useEffect } from 'react';
import { 
  Database, 
  Bike, 
  MapPin,
  Calculator, 
  Brain, 
  CheckCircle2, 
  Terminal, 
  Sparkles, 
  Activity,
  Loader2
} from 'lucide-react';
import { ANALYSIS_STEPS } from '../data/marketData';

export default function AgentAnalysisModal({ targetCity, onComplete }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    addLog(`[SYSTEM] Initializing CoffeeRide AI Agent session for market: ${targetCity}`);
    addLog(`[MCP] Production Data Layer: BigQuery MCP Server`);
    addLog(`[TARGET DATASET] bigquery-public-data.new_york.citibike_trips & citibike_stations`);

    const interval = setInterval(() => {
      setCurrentStepIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        
        if (nextIndex < ANALYSIS_STEPS.length) {
          generateStepLogs(nextIndex, targetCity);
          return nextIndex;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 1100);
          return prevIndex;
        }
      });
    }, 1100);

    return () => clearInterval(interval);
  }, [targetCity, onComplete]);

  const addLog = (msg) => {
    const timestamp = new Date().toISOString().substring(11, 19);
    setLogs((prev) => [...prev, `[${timestamp}] ${msg}`]);
  };

  const generateStepLogs = (stepIndex, city) => {
    switch (stepIndex) {
      case 1:
        addLog(`[BIGQUERY MCP] Target SQL: bigquery-public-data.new_york.citibike_trips`);
        addLog(`[BIGQUERY MCP] Target SQL: bigquery-public-data.new_york.citibike_stations`);
        break;
      case 2:
        addLog(`[DATA ENGINE] Inspecting 3,842,109 trip records (representative data)...`);
        addLog(`[ANALYSIS] Identified peak morning unlocks (7:30 AM - 9:45 AM).`);
        break;
      case 3:
        addLog(`[GEOSPATIAL] Clustering trip origins and destinations across NYC corridors...`);
        addLog(`[GEOSPATIAL] High density identified at Jay St / MetroTech and Cadman Plaza.`);
        break;
      case 4:
        addLog(`[SCORING METHODOLOGY] Normalizing Opportunity Index matrix (50% Activity, 25% Starts, 15% Ends, 10% Consistency)...`);
        addLog(`[SCORING] Downtown Brooklyn score: 91/100 | Williamsburg score: 87/100`);
        break;
      case 5:
        addLog(`[GEMINI] Synthesizing mobility signals into expansion intelligence recommendation...`);
        addLog(`[GEMINI] Formatting commercial decision justification...`);
        break;
      case 6:
        addLog(`[SUCCESS] Analysis Complete. Rendering Expansion Intelligence Dashboard.`);
        break;
      default:
        break;
    }
  };

  const progressPercentage = Math.round(((currentStepIndex + 1) / ANALYSIS_STEPS.length) * 100);

  const getStepIcon = (iconName) => {
    switch (iconName) {
      case 'Database': return <Database className="w-5 h-5" />;
      case 'Bike': return <Bike className="w-5 h-5" />;
      case 'MapPin': return <MapPin className="w-5 h-5" />;
      case 'Calculator': return <Calculator className="w-5 h-5" />;
      case 'Brain': return <Brain className="w-5 h-5" />;
      default: return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="w-full max-w-3xl glass-panel-glow rounded-2xl overflow-hidden border border-amber-500/30 shadow-glow-amber-lg">
        
        {/* Modal Header */}
        <div className="px-6 py-5 bg-neutral-900/90 border-b border-amber-900/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Sparkles className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                Gemini & BigQuery MCP Agent
              </h3>
              <p className="text-xs text-neutral-400">
                Evaluating mobility signals for <span className="text-amber-400 font-semibold">{targetCity}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>Agent Active</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-neutral-900 h-2">
          <div 
            className="bg-gradient-to-r from-amber-500 to-amber-300 h-2 transition-all duration-500 ease-out shadow-glow-amber"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {/* Content Body: Steps + Live Terminal */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Steps Column (Left 7 cols) */}
          <div className="md:col-span-7 space-y-3.5">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">
              <span>Agent Execution Sequence</span>
              <span className="text-amber-400 font-mono">{progressPercentage}%</span>
            </div>

            {ANALYSIS_STEPS.map((step, idx) => {
              const isCompleted = idx < currentStepIndex;
              const isCurrent = idx === currentStepIndex;

              return (
                <div
                  key={step.id}
                  className={`p-3 rounded-xl border transition-all duration-300 flex items-start gap-3.5 ${
                    isCompleted
                      ? 'bg-amber-500/10 border-amber-500/40 text-neutral-200'
                      : isCurrent
                      ? 'bg-neutral-900 border-amber-500/70 shadow-glow-amber text-white'
                      : 'bg-neutral-950/40 border-neutral-850 text-neutral-500'
                  }`}
                >
                  {/* Step Icon */}
                  <div className={`mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center text-xs shrink-0 ${
                    isCompleted
                      ? 'bg-amber-500 text-neutral-950 font-bold'
                      : isCurrent
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/50'
                      : 'bg-neutral-900 text-neutral-600'
                  }`}>
                    {isCompleted ? (
                      <CheckCircle2 className="w-4 h-4 text-neutral-950" />
                    ) : isCurrent ? (
                      <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
                    ) : (
                      getStepIcon(step.icon)
                    )}
                  </div>

                  {/* Step Title & Detail */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-bold ${isCurrent ? 'text-amber-300' : isCompleted ? 'text-neutral-200' : 'text-neutral-500'}`}>
                        {step.label}
                      </span>
                      {isCompleted && (
                        <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded">
                          Done
                        </span>
                      )}
                      {isCurrent && (
                        <span className="text-[10px] uppercase font-bold text-amber-300 animate-pulse bg-amber-500/30 px-2 py-0.5 rounded">
                          Running
                        </span>
                      )}
                    </div>
                    <p className={`text-xs mt-0.5 line-clamp-1 ${isCurrent ? 'text-neutral-300' : 'text-neutral-500'}`}>
                      {step.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Terminal / Execution Log */}
          <div className="md:col-span-5 flex flex-col h-full bg-neutral-950 rounded-xl border border-neutral-800 p-4 font-mono text-[11px] leading-relaxed">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-800 text-neutral-400">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-xs font-semibold">MCP Stream Log</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            </div>

            <div className="flex-1 overflow-y-auto max-h-[300px] space-y-1.5 scrollbar-thin">
              {logs.map((log, i) => (
                <div key={i} className="text-neutral-300 break-words">
                  {log.includes('BIGQUERY') ? (
                    <span className="text-blue-400">{log}</span>
                  ) : log.includes('GEMINI') ? (
                    <span className="text-amber-300 font-semibold">{log}</span>
                  ) : log.includes('SUCCESS') ? (
                    <span className="text-emerald-400 font-bold">{log}</span>
                  ) : (
                    <span className="text-neutral-400">{log}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
