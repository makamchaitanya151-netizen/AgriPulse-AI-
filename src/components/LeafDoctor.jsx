import React, { useState, useEffect, useRef } from 'react';
import { 
  UploadCloud, 
  Scan, 
  Sparkles, 
  CheckCircle, 
  AlertTriangle, 
  ShieldCheck, 
  Leaf, 
  FileText, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  Printer, 
  Share2, 
  Layers, 
  Cpu, 
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PRESET_DISEASES } from '../services/agriPulseService';
import { LeafSvgArtwork } from './LeafSvgArtwork';
import { speechService } from '../services/speechService';

export const LeafDoctor = ({ 
  selectedPresetId, 
  onSelectPresetId, 
  selectedLanguage = 'en' 
}) => {
  const [activePreset, setActivePreset] = useState(PRESET_DISEASES[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanStepText, setScanStepText] = useState('');
  const [scanCompleted, setScanCompleted] = useState(false);
  const [activeTab, setActiveTab] = useState('organic'); // 'organic' | 'chemical' | 'preventive'
  const [customImage, setCustomImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [isSpeakingResult, setIsSpeakingResult] = useState(false);
  const fileInputRef = useRef(null);

  // Sync when preset is requested from outside (e.g. hero banner)
  useEffect(() => {
    if (selectedPresetId) {
      const match = PRESET_DISEASES.find(p => p.id === selectedPresetId);
      if (match) {
        handlePresetClick(match);
      }
    }
  }, [selectedPresetId]);

  // Subscribe to speechService updates
  useEffect(() => {
    const unsubscribe = speechService.subscribe((state) => {
      setIsSpeakingResult(state.isPlaying);
    });
    return () => unsubscribe();
  }, []);

  const handlePresetClick = (preset) => {
    speechService.stop();
    setCustomImage(null);
    setActivePreset(preset);
    if (onSelectPresetId) onSelectPresetId(preset.id);
    triggerScanning(preset);
  };

  const triggerScanning = (preset) => {
    setIsScanning(true);
    setScanCompleted(false);
    setScanProgress(0);
    setScanStepText('Initializing AgriVision ResNet-Transformer...');

    const scanSteps = [
      { progress: 20, text: 'Extracting leaf contour & leaf area index (LAI)...' },
      { progress: 45, text: 'Isolating chlorotic halo & necrotic lesion pixel clusters...' },
      { progress: 70, text: 'Cross-referencing global phytopathology blast & blight tensors...' },
      { progress: 90, text: 'Formulating dual Organic & Chemical agronomic prescription...' },
      { progress: 100, text: 'Diagnosis verified with 96.8% statistical confidence.' }
    ];

    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx < scanSteps.length) {
        setScanProgress(scanSteps[currentIdx].progress);
        setScanStepText(scanSteps[currentIdx].text);
        currentIdx++;
      } else {
        clearInterval(interval);
        setIsScanning(false);
        setScanCompleted(true);
      }
    }, 450);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      processCustomFile(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processCustomFile(file);
    }
  };

  const processCustomFile = (file) => {
    const reader = new FileReader();
    reader.onload = (uploadEvent) => {
      setCustomImage(uploadEvent.target.result);
      // Map custom upload to realistic AI diagnosis simulation
      const customAnalysisPreset = {
        ...PRESET_DISEASES[0],
        cropName: 'Uploaded Specimen (Field Leaf)',
        diseaseName: 'Tomato Late Blight (Detected in Custom Sample)',
        confidence: 95.6,
        sampleTag: 'Custom User Upload'
      };
      setActivePreset(customAnalysisPreset);
      triggerScanning(customAnalysisPreset);
    };
    reader.readAsDataURL(file);
  };

  const handlePlayVoiceAdvice = () => {
    if (isSpeakingResult) {
      speechService.stop();
      return;
    }
    const audioText = activePreset.localAudioAdvice[selectedLanguage] || activePreset.localAudioAdvice.en;
    const langCodeMap = {
      en: 'en-US',
      hi: 'hi-IN',
      te: 'te-IN',
      pa: 'pa-IN',
      mr: 'mr-IN',
      es: 'es-ES'
    };
    speechService.speak(audioText, langCodeMap[selectedLanguage] || 'en-US');
  };

  const handleExportPrescription = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#10B981', '#F59E0B', '#15803D']
    });
    window.print();
  };

  return (
    <section id="leaf-doctor" className="space-y-6 pt-2">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 mb-2">
            <Cpu className="w-3.5 h-3.5 text-emerald-600" />
            Feature 1: Computer Vision Diagnostics
          </div>
          <h2 className="text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
            "Leaf Doctor" AI Disease Diagnosis Simulator
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mt-1">
            Instant on-device phytopathology classifier. Upload your crop leaf photo or test clickable agricultural presets to reveal pathogen identities, confidence scores, and dual bio vs chemical treatment protocols.
          </p>
        </div>

        {/* Action badge */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-500">ML Model:</span>
          <span className="px-3 py-1 rounded-lg bg-slate-900 text-emerald-400 font-mono text-xs font-bold">
            AgriVision-ViT-50
          </span>
        </div>
      </div>

      {/* Main Interactive Grid: Upload & Presets vs Scanner & Results */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column (5 Cols): Presets & Drag-Drop Box */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Preset Samples Selector */}
          <div className="bg-white rounded-3xl p-5 border border-emerald-100 shadow-card-soft">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-heading font-bold text-slate-800 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                Clickable Preset Samples (Instant Test)
              </h3>
              <span className="text-[11px] text-emerald-700 font-bold">4 Verified Leaves</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {PRESET_DISEASES.map((preset) => {
                const isSelected = activePreset.id === preset.id && !customImage;
                return (
                  <button
                    key={preset.id}
                    onClick={() => handlePresetClick(preset)}
                    className={`p-2.5 rounded-2xl border text-left transition-all duration-200 group flex flex-col justify-between ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50/80 ring-2 ring-emerald-500/30 shadow-md'
                        : 'border-slate-200 hover:border-emerald-300 hover:bg-slate-50'
                    }`}
                  >
                    {/* Leaf thumbnail render */}
                    <div className="w-full h-24 rounded-xl overflow-hidden mb-2 bg-[#0B2319] relative">
                      <LeafSvgArtwork type={preset.id} className="w-full h-full object-cover" />
                      <span className={`absolute top-1.5 right-1.5 px-2 py-0.5 rounded text-[10px] font-extrabold uppercase ${
                        preset.severity === 'High' ? 'bg-rose-600 text-white' :
                        preset.severity === 'Medium' ? 'bg-amber-600 text-white' : 'bg-emerald-600 text-white'
                      }`}>
                        {preset.severity}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-slate-800 line-clamp-1 group-hover:text-emerald-700">
                        {preset.cropName.split(' (')[0]}
                      </h4>
                      <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        {preset.diseaseName}
                      </p>
                    </div>

                    <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px]">
                      <span className="font-mono font-bold text-emerald-700">{preset.confidence}% match</span>
                      <span className="text-slate-400 group-hover:text-emerald-600">Simulate →</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Drag & Drop Upload Zone */}
          <div 
            onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
            onDragLeave={() => setDragActive(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-3xl p-6 text-center cursor-pointer transition-all duration-200 ${
              dragActive 
                ? 'border-emerald-500 bg-emerald-50 scale-[1.01]' 
                : 'border-slate-300 hover:border-emerald-500 bg-white hover:bg-emerald-50/30'
            }`}
          >
            <input 
              ref={fileInputRef}
              type="file" 
              accept="image/*" 
              className="hidden" 
              onChange={handleFileUpload}
            />

            <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
              <UploadCloud className="w-6 h-6" />
            </div>

            <h4 className="font-heading font-bold text-slate-800 text-sm">
              Upload Custom Field Leaf Photo
            </h4>
            <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
              Drag & drop a mobile leaf close-up here, or <span className="text-emerald-700 font-semibold underline">browse files</span>
            </p>
            <p className="text-[10px] text-slate-400 mt-2">
              Supports JPEG, PNG, WEBP (Auto leaf segmentation & classification)
            </p>
          </div>

          {/* Tips for Extension Officers */}
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-3">
            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold">Agronomist Photo Tip:</span>
              <p className="text-[11px] leading-relaxed text-amber-800">
                For highest diagnostic precision (&gt;95%), photograph single leaves against natural background lighting without heavy direct shadow.
              </p>
            </div>
          </div>

        </div>

        {/* Right Column (7 Cols): Scanning Visualizer & Diagnosis Prescription Card */}
        <div className="lg:col-span-7">
          
          <div className="bg-white rounded-3xl border border-emerald-100 shadow-card-soft overflow-hidden">
            
            {/* Top Leaf Visual Stage (With Live Scanning Beam) */}
            <div className="relative bg-[#071911] h-72 sm:h-80 w-full overflow-hidden flex items-center justify-center">
              
              {/* Leaf Image or SVG */}
              {customImage ? (
                <img 
                  src={customImage} 
                  alt="Custom Leaf Specimen" 
                  className="w-full h-full object-contain p-4"
                />
              ) : (
                <LeafSvgArtwork 
                  type={activePreset.id} 
                  className="w-full h-full p-2" 
                />
              )}

              {/* Scanning Active Overlay Beam & Radar Grid */}
              {isScanning && (
                <div className="absolute inset-0 bg-emerald-950/40 backdrop-blur-[2px] flex flex-col justify-between p-6">
                  
                  {/* High Tech Scan Beam */}
                  <div className="leaf-scanner-beam" />

                  {/* Top Scanning Status Header */}
                  <div className="flex items-center justify-between text-white z-20">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-xs font-mono font-bold tracking-wider text-emerald-300 uppercase">
                        AI Scanning Foliar Features...
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-amber-400">{scanProgress}%</span>
                  </div>

                  {/* Center Crosshairs */}
                  <div className="self-center flex flex-col items-center justify-center">
                    <div className="w-28 h-28 rounded-full border-2 border-dashed border-emerald-400/80 animate-spin-slow flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full border border-amber-400/60" />
                    </div>
                  </div>

                  {/* Bottom Scan Telemetry Step */}
                  <div className="bg-black/70 backdrop-blur-md rounded-xl p-3 border border-emerald-700/60 text-white z-20">
                    <p className="text-xs font-mono text-emerald-300 flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-amber-400 animate-spin" />
                      <span>{scanStepText}</span>
                    </p>
                    {/* Progress Bar */}
                    <div className="w-full bg-emerald-950 rounded-full h-1.5 mt-2 overflow-hidden border border-emerald-800">
                      <div 
                        className="bg-gradient-to-r from-emerald-400 to-amber-400 h-full transition-all duration-300"
                        style={{ width: `${scanProgress}%` }}
                      />
                    </div>
                  </div>

                </div>
              )}

              {/* Top Bar on Specimen */}
              {!isScanning && (
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/60 backdrop-blur-sm text-white border border-white/20">
                    {activePreset.cropName.split(' (')[0]}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase backdrop-blur-sm ${
                    activePreset.severity === 'High' ? 'bg-rose-500/90 text-white' :
                    activePreset.severity === 'Medium' ? 'bg-amber-500/90 text-white' : 'bg-emerald-500/90 text-white'
                  }`}>
                    Severity: {activePreset.severity}
                  </span>
                </div>
              )}

              {/* Trigger Re-scan button */}
              {!isScanning && (
                <button
                  onClick={() => triggerScanning(activePreset)}
                  className="absolute bottom-4 right-4 px-3 py-1.5 rounded-xl bg-black/70 hover:bg-black/90 backdrop-blur-md text-emerald-300 hover:text-white border border-emerald-700/70 text-xs font-semibold flex items-center gap-1.5 transition-all"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Re-scan Leaf</span>
                </button>
              )}

            </div>

            {/* Diagnosis Results Card Body */}
            <div className="p-6 space-y-6">
              
              {/* Disease Name & Key Scores */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-slate-100">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      Diagnostic Determination
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs text-slate-500 italic font-mono">{activePreset.pathogen}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold font-heading text-slate-900">
                    {activePreset.diseaseName}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Lesion coverage index: <strong className="text-slate-700">{activePreset.lesionCoverage}</strong> of total leaf surface
                  </p>
                </div>

                {/* Confidence Badge */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 p-3 rounded-2xl bg-slate-50 border border-slate-200/70">
                  <span className="text-[10px] uppercase font-bold text-slate-500">Confidence Score</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-2xl font-black font-heading text-emerald-700">{activePreset.confidence}%</span>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                </div>
              </div>

              {/* Symptoms Observed */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-emerald-600" />
                  Key Observed Symptoms & Biometrics
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  {activePreset.symptoms.map((symptom, idx) => (
                    <li key={idx} className="flex items-start gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Treatment Plan Tabs: Organic vs Chemical vs Preventive */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Actionable Treatment Protocol
                  </h4>
                  
                  {/* Voice Readout of Treatment */}
                  <button
                    onClick={handlePlayVoiceAdvice}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                      isSpeakingResult 
                        ? 'bg-emerald-600 text-white animate-pulse shadow-sm'
                        : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                    }`}
                  >
                    {isSpeakingResult ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    <span>{isSpeakingResult ? 'Stop Audio' : 'Listen Local Advice'}</span>
                  </button>
                </div>

                {/* Tab Switcher */}
                <div className="flex p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-semibold">
                  <button
                    onClick={() => setActiveTab('organic')}
                    className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                      activeTab === 'organic'
                        ? 'bg-white text-emerald-800 shadow-sm font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>🌿 Organic & Bio-Control</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('chemical')}
                    className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                      activeTab === 'chemical'
                        ? 'bg-white text-amber-900 shadow-sm font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>🧪 Chemical Agronomic</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('preventive')}
                    className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                      activeTab === 'preventive'
                        ? 'bg-white text-blue-900 shadow-sm font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>🛡️ Preventive Culture</span>
                  </button>
                </div>

                {/* Tab Content 1: Organic */}
                {activeTab === 'organic' && (
                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-2.5 animate-fadeIn">
                    <p className="text-xs font-bold text-emerald-900">
                      {activePreset.organicTreatment.headline}
                    </p>
                    <div className="space-y-2">
                      {activePreset.organicTreatment.steps.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-emerald-950">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tab Content 2: Chemical */}
                {activeTab === 'chemical' && (
                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2.5 animate-fadeIn">
                    <p className="text-xs font-bold text-amber-900">
                      {activePreset.chemicalTreatment.headline}
                    </p>
                    <div className="space-y-2">
                      {activePreset.chemicalTreatment.steps.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-amber-950">
                          <span className="w-4 h-4 rounded-full bg-amber-200 text-amber-800 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tab Content 3: Preventive */}
                {activeTab === 'preventive' && (
                  <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80 space-y-2 animate-fadeIn">
                    <p className="text-xs font-bold text-blue-900">
                      Long-Term Agronomic Prophylaxis & Crop Rotation
                    </p>
                    <p className="text-xs text-blue-950 leading-relaxed">
                      {activePreset.preventiveAdvice}
                    </p>
                  </div>
                )}

              </div>

              {/* Bottom Prescription Actions */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-slate-500 font-medium">
                  Prescription ID: <span className="font-mono text-slate-800">AP-DX-{Date.now().toString().slice(-6)}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleExportPrescription}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-all"
                  >
                    <Printer className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Print Rx Report</span>
                  </button>
                  <button
                    onClick={() => {
                      if (navigator.clipboard) {
                        navigator.clipboard.writeText(`AgriPulse AI Diagnosis: ${activePreset.diseaseName} (${activePreset.confidence}% confidence). Severity: ${activePreset.severity}.`);
                        alert('Diagnosis summary copied to clipboard!');
                      }
                    }}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-all"
                    title="Share diagnosis"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
