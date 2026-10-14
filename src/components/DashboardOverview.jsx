import React from 'react';
import { 
  Thermometer, 
  Droplets, 
  CloudRain, 
  Wind, 
  Sun, 
  AlertTriangle, 
  Activity, 
  TrendingUp, 
  TrendingDown, 
  ArrowUpRight,
  ShieldAlert,
  Sparkles,
  MapPin,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';
import { AGRO_ZONES, ZONE_WEATHER_DATA, MARKET_COMMODITIES } from '../services/agriPulseService';

export const DashboardOverview = ({ 
  selectedZone, 
  userMode, 
  onNavigateTo, 
  onSelectCropPreset 
}) => {
  const zoneInfo = AGRO_ZONES.find(z => z.id === selectedZone) || AGRO_ZONES[0];
  const weather = ZONE_WEATHER_DATA[selectedZone] || ZONE_WEATHER_DATA['punjab-zone4'];

  return (
    <section id="dashboard" className="space-y-6">
      
      {/* Hero Banner: Field Agro-Weather Telemetry */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B251A] via-[#123E2C] to-[#0A1F16] text-white shadow-card-elevated border border-emerald-800/60 p-6 md:p-8">
        
        {/* Background Decorative Rings */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10">
          
          {/* Top Location Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-emerald-700/40">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Field Telemetry
                </span>
                <span className="text-xs text-emerald-300/80 font-medium">
                  Updated: Today 1:00 PM • Copernicus AgriSat Sync
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white tracking-tight flex items-center gap-2">
                {zoneInfo.name}
              </h1>
              <p className="text-sm text-emerald-200/90 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{zoneInfo.state}</span>
                <span className="text-emerald-500">•</span>
                <span className="text-emerald-300/80">{zoneInfo.soilType}</span>
                <span className="hidden md:inline text-emerald-500">•</span>
                <span className="hidden md:inline text-emerald-300/80">Elev: {zoneInfo.elevation}</span>
              </p>
            </div>

            {/* Quick Actions in Hero */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => onNavigateTo('leaf-doctor')}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-semibold text-sm shadow-earth-glow transition-all hover:scale-105 active:scale-95"
              >
                <Sparkles className="w-4 h-4" />
                <span>Leaf Doctor AI</span>
              </button>
              <button
                onClick={() => onNavigateTo('micro-climate')}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-900/80 hover:bg-emerald-800 border border-emerald-700 text-emerald-200 font-semibold text-sm transition-all"
              >
                <span>3-Day Threats</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </button>
            </div>
          </div>

          {/* Core Weather & Soil Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            
            {/* Metric 1: Temperature */}
            <div className="bg-[#091D14]/70 backdrop-blur-sm rounded-2xl p-4 border border-emerald-800/50 hover:border-emerald-600/60 transition-all group">
              <div className="flex items-center justify-between text-emerald-300 mb-2">
                <span className="text-xs font-semibold tracking-wider uppercase">Ambient Temperature</span>
                <div className="p-2 rounded-xl bg-emerald-500/10 text-amber-400 group-hover:scale-110 transition-transform">
                  <Thermometer className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold font-heading text-white">{weather.temperature}°C</span>
                <span className="text-xs text-emerald-300/70 font-medium">Feels {weather.feelsLike}°C</span>
              </div>
              <p className="mt-2 text-xs text-emerald-200/80 truncate font-medium">
                {weather.condition}
              </p>
            </div>

            {/* Metric 2: Humidity */}
            <div className="bg-[#091D14]/70 backdrop-blur-sm rounded-2xl p-4 border border-emerald-800/50 hover:border-emerald-600/60 transition-all group">
              <div className="flex items-center justify-between text-emerald-300 mb-2">
                <span className="text-xs font-semibold tracking-wider uppercase">Canopy Humidity</span>
                <div className="p-2 rounded-xl bg-emerald-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Droplets className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold font-heading text-white">{weather.humidity}%</span>
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${weather.humidity > 75 ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' : 'bg-emerald-500/20 text-emerald-300'}`}>
                  {weather.humidity > 75 ? 'Spore Risk' : 'Normal'}
                </span>
              </div>
              <p className="mt-2 text-xs text-emerald-200/80 font-medium">
                Dew point: {weather.dewPoint} • High leaf wetness
              </p>
            </div>

            {/* Metric 3: Soil Moisture */}
            <div className="bg-[#091D14]/70 backdrop-blur-sm rounded-2xl p-4 border border-emerald-800/50 hover:border-emerald-600/60 transition-all group">
              <div className="flex items-center justify-between text-emerald-300 mb-2">
                <span className="text-xs font-semibold tracking-wider uppercase">Soil Moisture (10cm)</span>
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                  <Layers className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold font-heading text-white">{weather.soilMoisture}%</span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  {weather.soilMoistureStatus}
                </span>
              </div>
              {/* Progress bar */}
              <div className="mt-2 w-full bg-emerald-950 rounded-full h-2 overflow-hidden border border-emerald-800/50">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${weather.soilMoisture < 35 ? 'bg-amber-400' : 'bg-emerald-400'}`}
                  style={{ width: `${Math.min(100, weather.soilMoisture * 1.5)}%` }}
                />
              </div>
            </div>

            {/* Metric 4: Rain Risk Probability */}
            <div className="bg-[#091D14]/70 backdrop-blur-sm rounded-2xl p-4 border border-emerald-800/50 hover:border-emerald-600/60 transition-all group">
              <div className="flex items-center justify-between text-emerald-300 mb-2">
                <span className="text-xs font-semibold tracking-wider uppercase">Precipitation Risk</span>
                <div className="p-2 rounded-xl bg-emerald-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                  <CloudRain className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold font-heading text-white">{weather.rainRisk}%</span>
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${weather.rainRisk > 50 ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-emerald-500/20 text-emerald-300'}`}>
                  {weather.rainRisk > 50 ? 'Rain Likely' : 'Low Chance'}
                </span>
              </div>
              <p className="mt-2 text-xs text-emerald-200/80 font-medium">
                Wind: {weather.windSpeed} • UV: {weather.solarUV}
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Quick Stats Row: Crop Health Score, Pending Alerts, Market Price Trends */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Stat Card 1: Active Crop Health Score */}
        <div className="bg-white rounded-3xl p-6 border border-emerald-100 shadow-card-soft hover:shadow-card-elevated transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-700">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-slate-800 text-lg">Crop Health Score</h3>
                  <p className="text-xs text-slate-500">Multi-Spectral NDVI Index</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800">
                Tier A Vigour
              </span>
            </div>

            {/* Circular Gauge Representation */}
            <div className="flex items-center gap-5 my-3">
              <div className="relative w-24 h-24 flex items-center justify-center">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#E2E8F0"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#10B981"
                    strokeWidth="8"
                    strokeDasharray={2 * Math.PI * 40}
                    strokeDashoffset={2 * Math.PI * 40 * (1 - weather.cropHealthScore / 100)}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-2xl font-extrabold font-heading text-slate-800">
                    {weather.cropHealthScore}%
                  </span>
                </div>
              </div>

              <div className="space-y-1.5 flex-1">
                <div className="text-xs text-slate-600">
                  <span className="font-semibold text-emerald-700">88% of monitored acreage</span> is thriving within healthy biometric parameters.
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-bold">
                  <TrendingUp className="w-4 h-4" />
                  <span>+3.4% recovery since last treatment</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-medium">Dominant: {zoneInfo.crops.slice(0, 2).join(' & ')}</span>
            <button
              onClick={() => onNavigateTo('leaf-doctor')}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 group"
            >
              <span>Scan sample</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Stat Card 2: Pending Alerts */}
        <div className="bg-white rounded-3xl p-6 border border-emerald-100 shadow-card-soft hover:shadow-card-elevated transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2.5 rounded-2xl bg-rose-50 text-rose-600">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-slate-800 text-lg">Pending Threat Alerts</h3>
                  <p className="text-xs text-slate-500">Early Warning System</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-rose-100 text-rose-800 animate-pulse">
                {weather.alertsCount} High Priority
              </span>
            </div>

            <div className="space-y-2.5 my-2">
              <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-200/70 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-bold text-slate-800">Spore Epidemic Window Open</p>
                  <p className="text-slate-600 mt-0.5">Leaf wetness &gt;7h creates high risk for Late Blight & Blast.</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/70 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-bold text-slate-800">Pest Outbreak Alert: Aphids / FAW</p>
                  <p className="text-slate-600 mt-0.5">Warm dusk temperatures stimulating nymph hatch in next 24h.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-medium">Automatic alert dispatch</span>
            <button
              onClick={() => onNavigateTo('micro-climate')}
              className="text-xs font-bold text-rose-700 hover:text-rose-900 flex items-center gap-1 group"
            >
              <span>View full matrix</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Stat Card 3: Market Price Trends */}
        <div className="bg-white rounded-3xl p-6 border border-emerald-100 shadow-card-soft hover:shadow-card-elevated transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-700">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-slate-800 text-lg">Market Mandi Trends</h3>
                  <p className="text-xs text-slate-500">Live APMC Spot Rates</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-800">
                Spot Ticker
              </span>
            </div>

            <div className="space-y-3 my-2">
              {MARKET_COMMODITIES.slice(0, 3).map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50/50 transition-colors">
                  <div>
                    <p className="text-xs font-bold text-slate-800">{item.name}</p>
                    <p className="text-[11px] text-slate-500">{item.mandi}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-extrabold text-slate-900">₹{item.price.toLocaleString()}</p>
                    <span className={`text-[10px] font-bold flex items-center justify-end gap-0.5 ${item.trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}`}>
                      {item.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {item.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-medium">Updated every 30m</span>
            <button
              onClick={() => onNavigateTo('market-mandi')}
              className="text-xs font-bold text-amber-700 hover:text-amber-900 flex items-center gap-1 group"
            >
              <span>Explore all rates</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>

      {/* Judge Spotlight Banner / Quick Preset Launcher */}
      <div className="rounded-2xl bg-gradient-to-r from-emerald-50 via-amber-50/60 to-emerald-50 border border-emerald-200/80 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
            <Sparkles className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-slate-800 text-sm sm:text-base">
              Hackathon Judge Quick-Test Presets
            </h4>
            <p className="text-xs text-slate-600">
              Instant one-click diagnosis simulation with neural leaf vision & organic treatment prescriptions:
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => onSelectCropPreset('tomato-blight')}
            className="px-3 py-1.5 rounded-lg bg-white border border-rose-200 text-rose-800 hover:bg-rose-50 text-xs font-bold transition-all shadow-sm"
          >
            🍅 Tomato Blight
          </button>
          <button
            onClick={() => onSelectCropPreset('healthy-corn')}
            className="px-3 py-1.5 rounded-lg bg-white border border-emerald-200 text-emerald-800 hover:bg-emerald-50 text-xs font-bold transition-all shadow-sm"
          >
            🌽 Healthy Corn
          </button>
          <button
            onClick={() => onSelectCropPreset('rice-blast')}
            className="px-3 py-1.5 rounded-lg bg-white border border-amber-200 text-amber-800 hover:bg-amber-50 text-xs font-bold transition-all shadow-sm"
          >
            🌾 Rice Blast
          </button>
          <button
            onClick={() => onSelectCropPreset('cotton-leaf-curl')}
            className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 text-xs font-bold transition-all shadow-sm"
          >
            🌱 Cotton Curl
          </button>
        </div>
      </div>

    </section>
  );
};
