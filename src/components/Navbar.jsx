import React, { useState } from 'react';
import { 
  Sprout, 
  MapPin, 
  ShieldCheck, 
  UserCheck, 
  Volume2, 
  VolumeX, 
  Menu, 
  X, 
  ChevronDown,
  Activity,
  Layers
} from 'lucide-react';
import { AGRO_ZONES } from '../services/agriPulseService';

export const Navbar = ({ 
  selectedZone, 
  onSelectZone, 
  userMode, 
  setUserMode, 
  audioMuted, 
  setAudioMuted,
  activeSection,
  onNavigate,
  isServerOnline
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [zoneDropdownOpen, setZoneDropdownOpen] = useState(false);

  const activeZoneObj = AGRO_ZONES.find(z => z.id === selectedZone) || AGRO_ZONES[0];

  const navItems = [
    { id: 'dashboard', label: 'Field Dashboard' },
    { id: 'leaf-doctor', label: 'Leaf Doctor AI' },
    { id: 'micro-climate', label: '3-Day Climate Risk' },
    { id: 'multilingual-advisory', label: 'Kisan Vani (Voice)' },
    { id: 'market-mandi', label: 'Mandi Rates' },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0A2016]/95 backdrop-blur-md border-b border-emerald-900/60 shadow-lg text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('dashboard')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-green-700 p-0.5 shadow-earth-glow group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0B2319] rounded-[10px] flex items-center justify-center">
                <Sprout className="w-6 h-6 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-[#0A2016]"></span>
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                  Agri<span className="text-emerald-400">Pulse</span> <span className="text-amber-400">AI</span>
                </span>
                <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-700/60 uppercase tracking-wider">
                  MVP v2.4
                </span>
              </div>
              <p className="text-[11px] text-emerald-300/80 font-medium">Smart Crop Health & Risk Sentinel</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-emerald-800/80 text-white shadow-inner border border-emerald-600/50'
                    : 'text-emerald-100/80 hover:text-white hover:bg-emerald-900/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Controls: Agro Zone Picker & Mode Switcher */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Zone Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setZoneDropdownOpen(!zoneDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-900/60 hover:bg-emerald-800/70 border border-emerald-700/50 text-xs font-medium text-emerald-200 transition-all"
                title="Change Agro-Climatic Zone"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="max-w-[140px] truncate">{activeZoneObj.name.split(' (')[0]}</span>
                <ChevronDown className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              </button>

              {zoneDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-[#0E281C] border border-emerald-700/70 rounded-xl shadow-2xl p-2 z-50">
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-400 border-b border-emerald-800/60 mb-1">
                    Select Agro-Climatic Zone
                  </div>
                  {AGRO_ZONES.map((zone) => (
                    <button
                      key={zone.id}
                      onClick={() => {
                        onSelectZone(zone.id);
                        setZoneDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors flex flex-col gap-0.5 ${
                        selectedZone === zone.id 
                          ? 'bg-emerald-800 text-white font-semibold' 
                          : 'text-emerald-100/90 hover:bg-emerald-900/70'
                      }`}
                    >
                      <span className="font-semibold">{zone.name}</span>
                      <span className="text-[10px] text-emerald-300/70">{zone.state} • {zone.crops.slice(0, 2).join(', ')}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Persona Switch: Farmer vs Extension Officer */}
            <div className="flex items-center bg-[#071710] p-1 rounded-xl border border-emerald-800/60">
              <button
                onClick={() => setUserMode('farmer')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                  userMode === 'farmer'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-emerald-300/70 hover:text-white'
                }`}
                title="Simplified farmer-friendly visual interface"
              >
                <Sprout className="w-3.5 h-3.5" />
                <span>Farmer</span>
              </button>
              <button
                onClick={() => setUserMode('officer')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                  userMode === 'officer'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'text-emerald-300/70 hover:text-white'
                }`}
                title="Advanced Extension Officer agronomy metrics & telemetry"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Officer</span>
              </button>
            </div>

            {/* Audio Mute/Unmute quick toggle */}
            <button
              onClick={() => setAudioMuted(!audioMuted)}
              className={`p-2 rounded-lg border transition-all ${
                audioMuted 
                  ? 'bg-red-950/40 border-red-800/50 text-red-400' 
                  : 'bg-emerald-900/40 border-emerald-700/50 text-emerald-300 hover:text-white'
              }`}
              title={audioMuted ? "Unmute Voice Assistant" : "Mute Voice Assistant"}
            >
              {audioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Server Online Badge */}
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-[11px] text-emerald-300">
              <span className={`w-2 h-2 rounded-full ${isServerOnline ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              <span>{isServerOnline ? 'Cloud AI Ready' : 'Edge Mode'}</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-emerald-900/60 text-emerald-200 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A2016] border-b border-emerald-800 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3 border-b border-emerald-800/80">
            <button
              onClick={() => setUserMode('farmer')}
              className={`flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold ${
                userMode === 'farmer' ? 'bg-emerald-600 text-white' : 'bg-emerald-950 text-emerald-200'
              }`}
            >
              <Sprout className="w-4 h-4" /> Farmer Mode
            </button>
            <button
              onClick={() => setUserMode('officer')}
              className={`flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold ${
                userMode === 'officer' ? 'bg-amber-600 text-white' : 'bg-emerald-950 text-emerald-200'
              }`}
            >
              <ShieldCheck className="w-4 h-4" /> Officer Mode
            </button>
          </div>

          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  activeSection === item.id
                    ? 'bg-emerald-800 text-white'
                    : 'text-emerald-100 hover:bg-emerald-900/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Zone Selector */}
          <div className="pt-3 border-t border-emerald-800/80">
            <label className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
              Active Agro-Climatic Zone
            </label>
            <select
              value={selectedZone}
              onChange={(e) => onSelectZone(e.target.value)}
              className="w-full bg-[#081810] border border-emerald-700 text-white text-xs rounded-lg p-2.5 focus:ring-2 focus:ring-emerald-500"
            >
              {AGRO_ZONES.map(z => (
                <option key={z.id} value={z.id}>{z.name}</option>
              ))}
            </select>
          </div>
        </div>
      )}
    </header>
  );
};
