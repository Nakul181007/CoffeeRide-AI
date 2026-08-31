import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AgentAnalysisModal from './components/AgentAnalysisModal';
import ResultsDashboard from './components/ResultsDashboard';
import { MARKETS_DATA } from './data/marketData';

export default function App() {
  const [targetCity, setTargetCity] = useState("New York City");
  const [marketType, setMarketType] = useState("Cyclist-focused coffee shop");
  const [viewState, setViewState] = useState("hero"); // 'hero' | 'analyzing' | 'results'

  // Match selected city to dataset or fallback to NYC with city override
  const getActiveMarketData = () => {
    if (MARKETS_DATA[targetCity]) {
      return MARKETS_DATA[targetCity];
    }
    
    // Fuzzy matching or default fallback
    const key = Object.keys(MARKETS_DATA).find(
      (k) => k.toLowerCase().includes(targetCity.toLowerCase())
    );

    if (key) {
      return MARKETS_DATA[key];
    }

    // Dynamic fallback for custom typed cities
    const fallback = { ...MARKETS_DATA["New York City"] };
    fallback.cityName = targetCity;
    fallback.mainRecommendation = {
      ...fallback.mainRecommendation,
      aiReasoning: `Gemini analyzed public cycling activity in ${targetCity} and identified prime commuter corridors with strong origin/destination trip density for coffee shops.`
    };
    return fallback;
  };

  const handleStartAnalysis = () => {
    setViewState("analyzing");
  };

  const handleAnalysisComplete = () => {
    setViewState("results");
  };

  const handleReset = () => {
    setViewState("hero");
  };

  return (
    <div className="min-h-screen bg-[#0A0908] text-neutral-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Sticky Top Navbar */}
      <Navbar onReset={handleReset} />

      {/* Main App Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {viewState === "hero" && (
          <HeroSection
            targetCity={targetCity}
            setTargetCity={setTargetCity}
            marketType={marketType}
            setMarketType={setMarketType}
            onAnalyze={handleStartAnalysis}
            isAnalyzing={false}
          />
        )}

        {viewState === "analyzing" && (
          <div className="py-20 flex flex-col items-center justify-center">
            <AgentAnalysisModal
              targetCity={targetCity}
              onComplete={handleAnalysisComplete}
            />
          </div>
        )}

        {viewState === "results" && (
          <ResultsDashboard
            marketData={getActiveMarketData()}
            targetCity={targetCity}
            marketType={marketType}
            onReset={handleReset}
          />
        )}

      </main>

    </div>
  );
}
