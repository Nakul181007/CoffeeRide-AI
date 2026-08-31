import React, { useState } from 'react';
import { RefreshCw, MapPin, Sparkles, Filter, ChevronRight, Calendar, Database } from 'lucide-react';
import MainRecommendationCard from './MainRecommendationCard';
import TopLocationsList from './TopLocationsList';
import DataInsights from './DataInsights';
import AiReasoningPanel from './AiReasoningPanel';
import DataPipeline from './DataPipeline';
import DataSourcesPanel from './DataSourcesPanel';
import SqlQueryModal from './SqlQueryModal';
import FooterNote from './FooterNote';

export default function ResultsDashboard({ marketData, targetCity, marketType, onReset }) {
  const [isSqlModalOpen, setIsSqlModalOpen] = useState(false);

  if (!marketData) return null;

  return (
    <div className="space-y-12 pt-4 pb-12 animate-fadeIn">
      
      {/* 1. DASHBOARD HEADER & CONTROLS */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-neutral-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Market Intelligence Output</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Expansion Intelligence
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-300 mt-1">
            <span className="font-bold text-amber-400 flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {marketData.cityName}
            </span>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-300 font-medium">{marketType}</span>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-400 font-mono text-xs flex items-center gap-1">
              <Database className="w-3 h-3 text-blue-400" />
              {marketData.totalTripsAnalyzed}
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={onReset}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-neutral-950 font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-glow-amber flex items-center gap-2 cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Run New Analysis</span>
          </button>
        </div>
      </div>

      {/* 2. MAIN RECOMMENDATION CARD */}
      <MainRecommendationCard
        recommendation={marketData.mainRecommendation}
        onOpenSql={() => setIsSqlModalOpen(true)}
      />

      {/* 3. TOP 5 LOCATIONS & DATA INSIGHTS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Top 5 Locations List (7 cols) */}
        <div className="lg:col-span-7">
          <TopLocationsList locations={marketData.topLocations} />
        </div>

        {/* Data Insights (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          <DataInsights
            insights={marketData.insights}
            locations={marketData.topLocations}
          />
        </div>

      </div>

      {/* 4. AI REASONING PANEL */}
      <AiReasoningPanel
        recommendation={marketData.mainRecommendation}
        cityName={marketData.cityName}
        onOpenSql={() => setIsSqlModalOpen(true)}
      />

      {/* 5. VISUAL DATA PIPELINE */}
      <DataPipeline />

      {/* 6. ENTERPRISE DATA SOURCES PANEL */}
      <DataSourcesPanel />

      {/* 7. TRANSPARENCY FOOTER NOTE */}
      <FooterNote />

      {/* SQL Inspector Modal */}
      <SqlQueryModal
        isOpen={isSqlModalOpen}
        onClose={() => setIsSqlModalOpen(false)}
        sqlQuery={marketData.bigQuerySql}
        cityName={marketData.cityName}
      />

    </div>
  );
}
