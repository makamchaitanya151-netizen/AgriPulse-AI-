import React from 'react';
import { 
  ShieldCheck, 
  Users, 
  MapPin, 
  FileSpreadsheet, 
  Send, 
  AlertOctagon, 
  Download, 
  CheckCircle2,
  Calendar
} from 'lucide-react';

export const ExtensionOfficerToolbar = ({ selectedZone, onExportFieldReport }) => {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-amber-900 via-amber-800 to-amber-950 text-white p-5 sm:p-6 border border-amber-700/80 shadow-card-elevated flex flex-col md:flex-row items-center justify-between gap-4 animate-fadeIn">
      
      <div className="flex items-center gap-3.5">
        <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
          <ShieldCheck className="w-6 h-6 text-amber-400" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Extension Officer Command Bar
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-slate-950 uppercase">
              Officer Mode Active
            </span>
          </div>
          <h3 className="text-lg font-heading font-extrabold text-white">
            Cluster Field Surveillance & Batch Diagnostic Ledger
          </h3>
          <p className="text-xs text-amber-200/80">
            Monitoring 3,420 Ha across 12 Gram Panchayats • ICAR Krishi Vigyan Kendra Linked
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        <button
          onClick={onExportFieldReport}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-amber-400/40 text-amber-100 text-xs font-semibold transition-all"
        >
          <FileSpreadsheet className="w-4 h-4 text-amber-300" />
          <span>Export KVK CSV Ledger</span>
        </button>

        <button
          onClick={() => {
            alert('Emergency Cluster SMS Alert triggered to 142 progressive farmers.');
          }}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold shadow-sm transition-all hover:scale-105 active:scale-95"
        >
          <Send className="w-4 h-4 fill-current" />
          <span>Dispatch Cluster Alert</span>
        </button>
      </div>

    </div>
  );
};
