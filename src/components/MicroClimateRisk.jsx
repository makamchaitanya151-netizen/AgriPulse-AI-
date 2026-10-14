import React, { useState } from 'react';
import { 
  CloudRain, 
  Bug, 
  Sun, 
  ThermometerSnowflake, 
  Droplets, 
  AlertTriangle, 
  CheckCircle, 
  Sliders, 
  RotateCcw, 
  ShieldCheck, 
  Info,
  Calendar,
  Layers,
  ChevronDown,
  ChevronUp,
  Sparkles
} from 'lucide-react';
import { MICRO_CLIMATE_RISKS } from '../services/agriPulseService';

export const MicroClimateRisk = ({ userMode = 'farmer' }) => {
  // Interactive Simulation Sliders
  const [simTemp, setSimTemp] = useState(28);
  const [simHumidity, setSimHumidity] = useState(78);
  const [simRain, setSimRain] = useState(25);
  const [simulationActive, setSimulationActive] = useState(false);
  const [expandedRiskId, setExpandedRiskId] = useState('pest-outbreak');

  // Compute dynamic simulated risks based on slider inputs
  const computeSimulatedRisk = (baseRisk) => {
    if (!simulationActive) return baseRisk;

    let adjustedScore = baseRisk.score;
    if (baseRisk.id === 'fungal-epidemic') {
      // High humidity + rain triggers fungal blast
      adjustedScore = Math.min(99, Math.max(12, Math.round((simHumidity * 0.75) + (simRain * 1.2) - (Math.abs(simTemp - 24) * 1.5))));
    } else if (baseRisk.id === 'pest-outbreak') {
      // Warm temp + moderate humidity stimulates insect reproduction
      adjustedScore = Math.min(99, Math.max(15, Math.round((simTemp * 2.2) + (simHumidity * 0.3) - (simRain * 0.6))));
    } else if (baseRisk.id === 'drought-heat-stress') {
      // High temp + low rain & humidity causes drought
      adjustedScore = Math.min(99, Math.max(5, Math.round((simTemp * 2.8) - (simRain * 2.2) - (simHumidity * 0.4))));
    } else if (baseRisk.id === 'frost-cold-shock') {
      // Drops below 10°C trigger frost
      adjustedScore = simTemp <= 12 ? Math.min(99, Math.round((14 - simTemp) * 12)) : 10;
    } else if (baseRisk.id === 'nutrient-leaching') {
      // Heavy rain causes runoff
      adjustedScore = Math.min(99, Math.max(8, Math.round(simRain * 1.8)));
    }

    const level = adjustedScore >= 70 ? 'High' : adjustedScore >= 40 ? 'Medium' : 'Low';
    const color = level === 'High' ? 'rose' : level === 'Medium' ? 'amber' : 'emerald';

    return {
      ...baseRisk,
      score: adjustedScore,
      currentLevel: level,
      color,
      days: [
        { day: 'Day 1 (Today)', risk: level, score: adjustedScore, badge: `Simulated: ${adjustedScore}%` },
        { day: 'Day 2 (Tomorrow)', risk: adjustedScore > 65 ? 'High' : 'Medium', score: Math.min(99, Math.round(adjustedScore * 1.08)), badge: 'Projected Peak' },
        { day: 'Day 3 (+48h)', risk: adjustedScore > 80 ? 'High' : 'Low', score: Math.max(20, Math.round(adjustedScore * 0.85)), badge: 'Dissipating' },
      ]
    };
  };

  const getRiskBadgeClasses = (level) => {
    if (level === 'High') return 'bg-rose-100 text-rose-800 border-rose-300';
    if (level === 'Medium') return 'bg-amber-100 text-amber-800 border-amber-300';
    return 'bg-emerald-100 text-emerald-800 border-emerald-300';
  };

  const getRiskIcon = (iconName) => {
    switch (iconName) {
      case 'Bug': return <Bug className="w-5 h-5" />;
      case 'CloudRain': return <CloudRain className="w-5 h-5" />;
      case 'Sun': return <Sun className="w-5 h-5" />;
      case 'ThermometerSnowflake': return <ThermometerSnowflake className="w-5 h-5" />;
      case 'Droplets': return <Droplets className="w-5 h-5" />;
      default: return <AlertTriangle className="w-5 h-5" />;
    }
  };

  const resetSimulation = () => {
    setSimTemp(28);
    setSimHumidity(78);
    setSimRain(25);
    setSimulationActive(false);
  };

  return (
    <section id="micro-climate" className="space-y-6 pt-2">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300 mb-2">
            <CloudRain className="w-3.5 h-3.5 text-amber-600" />
            Feature 2: Predictive Micro-Climate Intelligence
          </div>
          <h2 className="text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
            Micro-Climate Risk Predictor (3-Day Matrix)
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mt-1">
            Real-time agro-meteorological forecasting matrix that models upcoming pest swarms, fungal infection windows, and thermal shock based on local canopy micro-climate variables.
          </p>
        </div>

        {/* Live Simulation indicator */}
        <div className="flex items-center gap-2">
          {simulationActive ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-white shadow-sm animate-pulse">
              <Sparkles className="w-3.5 h-3.5" />
              Interactive Simulation Mode Active
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              Live Sensor Feed Active
            </span>
          )}
        </div>
      </div>

      {/* Interactive "What-If" Simulation Playground */}
      <div className="rounded-3xl bg-gradient-to-r from-[#0C2418] via-[#103423] to-[#0A1F15] text-white p-5 md:p-6 border border-emerald-800/60 shadow-card-soft">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          <div className="space-y-1 max-w-sm">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
              <Sliders className="w-4 h-4 text-amber-400" />
              Interactive What-If Climate Simulator
            </div>
            <h3 className="text-lg font-heading font-extrabold text-white">
              Tweak Environmental Factors
            </h3>
            <p className="text-xs text-emerald-200/80">
              Drag the sliders below to see how micro-climate changes instantly recalculate disease and pest risk scores.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 flex-1 max-w-2xl">
            
            {/* Slider 1: Temperature */}
            <div className="bg-[#081B12]/80 p-3.5 rounded-2xl border border-emerald-800/60">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-emerald-300 font-semibold">Temperature</span>
                <span className="font-mono font-bold text-amber-400 text-sm">{simTemp}°C</span>
              </div>
              <input
                type="range"
                min="4"
                max="44"
                value={simTemp}
                onChange={(e) => {
                  setSimTemp(Number(e.target.value));
                  setSimulationActive(true);
                }}
                className="w-full accent-amber-500 cursor-pointer h-1.5 bg-emerald-950 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-emerald-400/60 mt-1">
                <span>4°C (Frost)</span>
                <span>44°C (Heatwave)</span>
              </div>
            </div>

            {/* Slider 2: Relative Humidity */}
            <div className="bg-[#081B12]/80 p-3.5 rounded-2xl border border-emerald-800/60">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-emerald-300 font-semibold">Canopy Humidity</span>
                <span className="font-mono font-bold text-cyan-400 text-sm">{simHumidity}%</span>
              </div>
              <input
                type="range"
                min="20"
                max="100"
                value={simHumidity}
                onChange={(e) => {
                  setSimHumidity(Number(e.target.value));
                  setSimulationActive(true);
                }}
                className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-emerald-950 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-emerald-400/60 mt-1">
                <span>20% (Arid)</span>
                <span>100% (Fog)</span>
              </div>
            </div>

            {/* Slider 3: 24h Rainfall */}
            <div className="bg-[#081B12]/80 p-3.5 rounded-2xl border border-emerald-800/60">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-emerald-300 font-semibold">Precipitation</span>
                <span className="font-mono font-bold text-blue-400 text-sm">{simRain} mm</span>
              </div>
              <input
                type="range"
                min="0"
                max="60"
                value={simRain}
                onChange={(e) => {
                  setSimRain(Number(e.target.value));
                  setSimulationActive(true);
                }}
                className="w-full accent-blue-400 cursor-pointer h-1.5 bg-emerald-950 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-emerald-400/60 mt-1">
                <span>0 mm (Dry)</span>
                <span>60 mm (Downpour)</span>
              </div>
            </div>

          </div>

          {/* Reset button */}
          {simulationActive && (
            <button
              onClick={resetSimulation}
              className="self-center px-3.5 py-2 rounded-xl bg-emerald-800/70 hover:bg-emerald-700 text-emerald-200 hover:text-white border border-emerald-600 text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Default</span>
            </button>
          )}

        </div>
      </div>

      {/* Dynamic 3-Day Risk Matrix Cards */}
      <div className="space-y-4">
        {MICRO_CLIMATE_RISKS.map((baseRisk) => {
          const risk = computeSimulatedRisk(baseRisk);
          const isExpanded = expandedRiskId === risk.id;

          return (
            <div
              key={risk.id}
              className={`bg-white rounded-3xl border transition-all duration-200 shadow-card-soft overflow-hidden ${
                risk.currentLevel === 'High' ? 'border-rose-200/80 hover:border-rose-300' :
                risk.currentLevel === 'Medium' ? 'border-amber-200/80 hover:border-amber-300' :
                'border-emerald-200/80 hover:border-emerald-300'
              }`}
            >
              
              {/* Card Header Row */}
              <div 
                onClick={() => setExpandedRiskId(isExpanded ? null : risk.id)}
                className="p-5 sm:p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                
                {/* Title & Category */}
                <div className="flex items-start sm:items-center gap-3.5">
                  <div className={`p-3 rounded-2xl shrink-0 ${
                    risk.color === 'rose' ? 'bg-rose-50 text-rose-600' :
                    risk.color === 'amber' ? 'bg-amber-50 text-amber-600' :
                    'bg-emerald-50 text-emerald-600'
                  }`}>
                    {getRiskIcon(risk.icon)}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-heading font-extrabold text-slate-900 text-base sm:text-lg">
                        {risk.title}
                      </h3>
                      <span className="hidden sm:inline text-xs text-slate-400">•</span>
                      <span className="hidden sm:inline text-xs text-slate-500 font-mono italic">
                        {risk.scientificVector}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Category: <span className="font-semibold text-slate-700">{risk.category}</span> • Affected: {risk.affectedCrops.join(', ')}
                    </p>
                  </div>
                </div>

                {/* 3-Day Progression Badges */}
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  {risk.days.map((dayItem, dIdx) => (
                    <div 
                      key={dIdx}
                      className={`px-3 py-1.5 rounded-xl border text-center min-w-[90px] ${
                        dayItem.risk === 'High' ? 'bg-rose-50 border-rose-200 text-rose-900' :
                        dayItem.risk === 'Medium' ? 'bg-amber-50 border-amber-200 text-amber-900' :
                        'bg-emerald-50 border-emerald-200 text-emerald-900'
                      }`}
                    >
                      <div className="text-[10px] font-bold text-slate-500">{dayItem.day.split(' ')[0]}</div>
                      <div className="flex items-center justify-center gap-1 mt-0.5">
                        <span className="text-xs font-black">{dayItem.risk}</span>
                        <span className="text-[10px] font-mono opacity-70">({dayItem.score}%)</span>
                      </div>
                    </div>
                  ))}

                  {/* Expand Chevron */}
                  <div className="p-2 rounded-xl bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors ml-1">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>

              </div>

              {/* Expanded Detail Panel */}
              {isExpanded && (
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/60 space-y-4 animate-fadeIn">
                  
                  {/* Triggers Bar */}
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 flex items-start gap-3">
                    <Info className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <span className="font-bold text-slate-800">Biophysical Threshold Trigger: </span>
                      <span className="text-slate-600">{risk.triggers}</span>
                    </div>
                  </div>

                  {/* Actions Grid: Farmer Directive vs Extension Officer Protocol */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* Farmer Directive */}
                    <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/80">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
                          🚜
                        </div>
                        <h4 className="font-heading font-bold text-emerald-900 text-xs uppercase tracking-wider">
                          Farmer Field Directive (Immediate Action)
                        </h4>
                      </div>
                      <p className="text-xs text-emerald-950 leading-relaxed font-medium">
                        {risk.farmerDirective}
                      </p>
                    </div>

                    {/* Extension Officer Protocol */}
                    <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-lg bg-amber-600 text-white flex items-center justify-center text-xs font-bold">
                          📋
                        </div>
                        <h4 className="font-heading font-bold text-amber-900 text-xs uppercase tracking-wider">
                          Extension Officer Protocol (Cluster Level)
                        </h4>
                      </div>
                      <p className="text-xs text-amber-950 leading-relaxed font-medium">
                        {risk.extensionOfficerProtocol}
                      </p>
                    </div>

                  </div>

                </div>
              )}

            </div>
          );
        })}
      </div>

    </section>
  );
};
