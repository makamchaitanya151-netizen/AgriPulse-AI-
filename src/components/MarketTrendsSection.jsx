import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Calendar, 
  ArrowUpRight, 
  Sparkles, 
  Info,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { MARKET_COMMODITIES } from '../services/agriPulseService';

export const MarketTrendsSection = () => {
  const [selectedCommodity, setSelectedCommodity] = useState(MARKET_COMMODITIES[0]);

  return (
    <section id="market-mandi" className="space-y-6 pt-2">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300 mb-2">
            <TrendingUp className="w-3.5 h-3.5 text-amber-600" />
            Market Intelligence & Commodity Price Trends
          </div>
          <h2 className="text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
            APMC Mandi Spot Rates & AI Harvest Advisor
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mt-1">
            Empowering farmers with transparent pricing signals. Real-time spot rates from major regional agricultural produce marketing committees (APMC) with 7-day volatility analysis.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
          <Clock className="w-4 h-4 text-emerald-600" />
          <span>Last sync: Today 12:45 PM • AGMARKNET API</span>
        </div>
      </div>

      {/* Grid: Commodity Cards & Sparklines */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {MARKET_COMMODITIES.map((commodity, idx) => {
          const isSelected = selectedCommodity.name === commodity.name;
          const minP = Math.min(...commodity.trendData);
          const maxP = Math.max(...commodity.trendData);
          const range = maxP - minP || 1;

          return (
            <div
              key={idx}
              onClick={() => setSelectedCommodity(commodity)}
              className={`bg-white rounded-3xl p-6 border cursor-pointer transition-all duration-200 shadow-card-soft hover:shadow-card-elevated flex flex-col justify-between ${
                isSelected 
                  ? 'border-emerald-600 ring-2 ring-emerald-500/30 bg-emerald-50/20' 
                  : 'border-emerald-100 hover:border-emerald-300'
              }`}
            >
              <div>
                {/* Top Badge & Mandi */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    {commodity.mandi}
                  </span>
                  <span className={`text-xs font-extrabold flex items-center gap-0.5 px-2.5 py-1 rounded-full ${
                    commodity.trend === 'up' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                  }`}>
                    {commodity.trend === 'up' ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                    {commodity.change} (7d)
                  </span>
                </div>

                {/* Crop Name & Spot Rate */}
                <h3 className="font-heading font-extrabold text-slate-900 text-lg">
                  {commodity.name}
                </h3>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-black font-heading text-slate-900">
                    ₹{commodity.price.toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">/{commodity.unit.split('/')[1] || 'Quintal'}</span>
                </div>

                {/* 7-Day Sparkline SVG */}
                <div className="my-4 pt-2">
                  <div className="text-[10px] font-bold uppercase text-slate-400 mb-1 flex justify-between">
                    <span>7-Day Price Trajectory</span>
                    <span className="font-mono">Range: ₹{minP} - ₹{maxP}</span>
                  </div>
                  <div className="h-16 w-full bg-slate-50 rounded-xl p-2 flex items-center justify-center border border-slate-100">
                    <svg viewBox="0 0 140 40" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id={`grad-${idx}`} x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor={commodity.trend === 'up' ? '#10B981' : '#F43F5E'} stopOpacity="0.3" />
                          <stop offset="100%" stopColor={commodity.trend === 'up' ? '#10B981' : '#F43F5E'} stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      {/* Area Fill */}
                      <polygon
                        points={`0,40 ${commodity.trendData.map((val, i) => `${(i / (commodity.trendData.length - 1)) * 140},${40 - ((val - minP) / range) * 32}`).join(' ')} 140,40`}
                        fill={`url(#grad-${idx})`}
                      />
                      {/* Line */}
                      <polyline
                        points={commodity.trendData.map((val, i) => `${(i / (commodity.trendData.length - 1)) * 140},${40 - ((val - minP) / range) * 32}`).join(' ')}
                        fill="none"
                        stroke={commodity.trend === 'up' ? '#10B981' : '#F43F5E'}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      {/* Dots */}
                      {commodity.trendData.map((val, i) => (
                        <circle
                          key={i}
                          cx={(i / (commodity.trendData.length - 1)) * 140}
                          cy={40 - ((val - minP) / range) * 32}
                          r={i === commodity.trendData.length - 1 ? 3.5 : 2}
                          fill={commodity.trend === 'up' ? '#10B981' : '#F43F5E'}
                        />
                      ))}
                    </svg>
                  </div>
                </div>

              </div>

              {/* AI Recommendation Footer */}
              <div className="pt-3 border-t border-slate-100">
                <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200/70 text-xs">
                  <div className="flex items-center gap-1.5 text-amber-900 font-bold mb-0.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>AI Harvest Strategy</span>
                  </div>
                  <p className="text-amber-950 font-medium text-[11px] leading-relaxed">
                    {commodity.recommendation}
                  </p>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};
