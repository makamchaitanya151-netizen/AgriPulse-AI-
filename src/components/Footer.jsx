import React from 'react';
import { Sprout, ShieldCheck, Heart, Radio, Cpu, Layers } from 'lucide-react';

export const Footer = ({ onNavigateTo }) => {
  return (
    <footer className="mt-16 bg-[#071911] border-t border-emerald-900/80 text-emerald-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-emerald-900/60">
          
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-green-700 flex items-center justify-center text-white">
                <Sprout className="w-5 h-5 text-emerald-200" />
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                Agri<span className="text-emerald-400">Pulse</span> <span className="text-amber-400">AI</span>
              </span>
            </div>
            <p className="text-xs text-emerald-300/70 leading-relaxed">
              Intelligent agriculture risk prediction and foliar health platform empowering smallholder farmers and extension officers with computer vision and predictive micro-meteorology.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Hackathon MVP Ready</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider mb-3">
              Platform Modules
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigateTo('dashboard')} 
                  className="hover:text-emerald-300 transition-colors"
                >
                  Field Telemetry Overview
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateTo('leaf-doctor')} 
                  className="hover:text-emerald-300 transition-colors"
                >
                  "Leaf Doctor" AI Diagnostics
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateTo('micro-climate')} 
                  className="hover:text-emerald-300 transition-colors"
                >
                  3-Day Micro-Climate Threat Matrix
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateTo('multilingual-advisory')} 
                  className="hover:text-emerald-300 transition-colors"
                >
                  "AgriPulse Vani" Voice Assistant
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateTo('market-mandi')} 
                  className="hover:text-emerald-300 transition-colors"
                >
                  APMC Mandi Price Trends
                </button>
              </li>
            </ul>
          </div>

          {/* Agronomic Data Sources */}
          <div>
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider mb-3">
              Data & AI Foundations
            </h4>
            <ul className="space-y-2 text-xs text-emerald-300/70">
              <li>• AgriVision Vision Transformer (ViT-50)</li>
              <li>• Copernicus Sentinel-2 AgriSat Telemetry</li>
              <li>• ICAR / FAO Crop Pathogen Taxonomies</li>
              <li>• Web Speech Vernacular Synthesis API</li>
              <li>• AGMARKNET Mandi Price Indices</li>
            </ul>
          </div>

          {/* Built for Hackathon */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider mb-1">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2 py-1 rounded bg-emerald-950 border border-emerald-800 text-[10px] font-mono text-emerald-300">
                React.js 18
              </span>
              <span className="px-2 py-1 rounded bg-emerald-950 border border-emerald-800 text-[10px] font-mono text-emerald-300">
                Tailwind CSS
              </span>
              <span className="px-2 py-1 rounded bg-emerald-950 border border-emerald-800 text-[10px] font-mono text-emerald-300">
                Lucide React
              </span>
              <span className="px-2 py-1 rounded bg-emerald-950 border border-emerald-800 text-[10px] font-mono text-emerald-300">
                Node.js Express API
              </span>
              <span className="px-2 py-1 rounded bg-emerald-950 border border-emerald-800 text-[10px] font-mono text-emerald-300">
                Web Speech API
              </span>
            </div>
            <p className="text-[11px] text-emerald-300/60 leading-relaxed pt-1">
              Designed with forest greens, warm ambers, and clean whites for maximum readability in bright outdoor sunlight.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-400/60 gap-3">
          <p>© 2026 AgriPulse AI. Built for Sustainable Agriculture & Extension Empowerment.</p>
          <p className="flex items-center gap-1">
            Engineered with Pair Programming AI for Hackathon Impact 🌾
          </p>
        </div>

      </div>
    </footer>
  );
};
