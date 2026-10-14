import React, { useState, useEffect } from 'react';
import { 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  RotateCcw, 
  Globe, 
  Sparkles, 
  CheckCircle2, 
  Send, 
  MessageSquare, 
  HelpCircle, 
  Share2, 
  Headphones, 
  AlertCircle,
  FileText,
  Radio
} from 'lucide-react';
import { 
  ADVISORY_LANGUAGES, 
  MULTILINGUAL_ADVISORIES, 
  FARMER_FAQ_PROMPTS 
} from '../services/agriPulseService';
import { speechService } from '../services/speechService';
import confetti from 'canvas-confetti';

export const MultilingualAdvisory = ({ 
  selectedLanguage, 
  setSelectedLanguage 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speechRate, setSpeechRate] = useState(0.95);
  const [activeFaq, setActiveFaq] = useState(null);
  const [smsDispatchSuccess, setSmsDispatchSuccess] = useState(false);

  // Subscribe to speech service state changes
  useEffect(() => {
    const unsubscribe = speechService.subscribe((state) => {
      setIsPlaying(state.isPlaying);
    });
    return () => unsubscribe();
  }, []);

  const currentLangObj = ADVISORY_LANGUAGES.find(l => l.code === selectedLanguage) || ADVISORY_LANGUAGES[0];
  const currentAdvisory = MULTILINGUAL_ADVISORIES[selectedLanguage] || MULTILINGUAL_ADVISORIES.en;

  const handleTogglePlay = () => {
    if (isPlaying) {
      speechService.stop();
      setIsPlaying(false);
    } else {
      const textToSpeak = currentAdvisory.voiceScript;
      speechService.speak(textToSpeak, currentLangObj.speechCode, speechRate);
    }
  };

  const handleSelectLanguage = (langCode) => {
    speechService.stop();
    setSelectedLanguage(langCode);
    setActiveFaq(null);
  };

  const handleFaqClick = (faq) => {
    setActiveFaq(faq);
    speechService.speak(faq.voiceText, currentLangObj.speechCode, speechRate);
  };

  const handleDispatchSmsAlert = () => {
    setSmsDispatchSuccess(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#10B981', '#34D399', '#F59E0B']
    });
    setTimeout(() => setSmsDispatchSuccess(false), 4500);
  };

  return (
    <section id="multilingual-advisory" className="space-y-6 pt-2">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 mb-2">
            <Radio className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            Feature 3: Accessible Voice AI Assistant
          </div>
          <h2 className="text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
            "AgriPulse Vani" Multilingual Actionable Advisory
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mt-1">
            Bridging the literacy and language divide for smallholder farmers. Translates complex micro-climate alerts and diagnostic prescriptions into simplified local dialects with natural voice synthesis.
          </p>
        </div>

        {/* Audio Status Pill */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-500">Language Voice Engine:</span>
          <span className="px-3 py-1 rounded-lg bg-emerald-950 text-emerald-300 font-mono text-xs font-bold flex items-center gap-1.5">
            <Headphones className="w-3.5 h-3.5 text-amber-400" />
            WebSpeech Synthesis API
          </span>
        </div>
      </div>

      {/* Main Grid: Voice Player & Language Selector vs Advisory Bulletin */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column (5 Cols): Voice Player Widget & Language Grid */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Interactive Voice Player Card */}
          <div className="rounded-3xl bg-gradient-to-br from-[#0B2519] via-[#123E2A] to-[#081B12] text-white p-6 border border-emerald-800/60 shadow-card-elevated relative overflow-hidden">
            
            {/* Glowing Accent */}
            <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-emerald-500/20 blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-5">
              
              {/* Voice Card Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
                    <Radio className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-white text-base">
                      AgriPulse Kisan Vani
                    </h3>
                    <p className="text-[11px] text-emerald-300/80">Voice Broadcast Player</p>
                  </div>
                </div>

                {/* Live soundwave animation */}
                {isPlaying && (
                  <div className="flex items-center gap-1 text-amber-400 h-8">
                    <span className="audio-bar" />
                    <span className="audio-bar" />
                    <span className="audio-bar" />
                    <span className="audio-bar" />
                    <span className="audio-bar" />
                    <span className="audio-bar" />
                    <span className="audio-bar" />
                  </div>
                )}
              </div>

              {/* Status Display Area */}
              <div className="p-3.5 rounded-2xl bg-[#071910]/80 border border-emerald-800/80">
                <div className="flex items-center justify-between text-xs text-emerald-300 mb-1">
                  <span className="font-bold flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-amber-400" />
                    Broadcasting in: {currentLangObj.native} ({currentLangObj.label})
                  </span>
                  <span className="font-mono text-[11px] text-amber-300">
                    {isPlaying ? 'Speaking Now...' : 'Ready'}
                  </span>
                </div>
                <p className="text-xs text-emerald-100/90 line-clamp-2 italic font-serif">
                  "{currentAdvisory.voiceScript.slice(0, 100)}..."
                </p>
              </div>

              {/* Player Controls */}
              <div className="flex items-center justify-between gap-4 pt-1">
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleTogglePlay}
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg ${
                      isPlaying 
                        ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 scale-105' 
                        : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 hover:scale-105 shadow-earth-glow'
                    }`}
                    title={isPlaying ? 'Pause Voice' : 'Play Audio Broadcast'}
                  >
                    {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-0.5" />}
                  </button>

                  <button
                    onClick={() => {
                      speechService.stop();
                      handleTogglePlay();
                    }}
                    className="p-3 rounded-xl bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 border border-emerald-700/60 transition-colors"
                    title="Replay from start"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>

                {/* Speed Controls */}
                <div className="flex items-center gap-1 bg-[#06150E] p-1 rounded-xl border border-emerald-800/80 text-xs">
                  {[0.8, 0.95, 1.2].map((rate) => (
                    <button
                      key={rate}
                      onClick={() => setSpeechRate(rate)}
                      className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                        speechRate === rate 
                          ? 'bg-emerald-600 text-white' 
                          : 'text-emerald-400 hover:text-white'
                      }`}
                    >
                      {rate === 0.95 ? '1.0x' : `${rate}x`}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Language Selector Grid */}
          <div className="bg-white rounded-3xl p-5 border border-emerald-100 shadow-card-soft">
            <h4 className="font-heading font-bold text-slate-800 text-sm mb-3 flex items-center gap-2">
              <Globe className="w-4 h-4 text-emerald-600" />
              Select Farmer Vernacular Language
            </h4>

            <div className="grid grid-cols-3 gap-2">
              {ADVISORY_LANGUAGES.map((lang) => {
                const isSelected = selectedLanguage === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => handleSelectLanguage(lang.code)}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      isSelected
                        ? 'bg-emerald-700 text-white border-emerald-700 font-bold shadow-sm ring-2 ring-emerald-500/30'
                        : 'bg-slate-50 hover:bg-emerald-50/60 border-slate-200 text-slate-800'
                    }`}
                  >
                    <div className="text-sm font-extrabold">{lang.native}</div>
                    <div className={`text-[10px] mt-0.5 ${isSelected ? 'text-emerald-200' : 'text-slate-500'}`}>
                      {lang.label}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* WhatsApp / SMS Dispatch Simulation for Extension Officers */}
          <div className="bg-white rounded-3xl p-5 border border-emerald-100 shadow-card-soft space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-heading font-bold text-slate-800 text-sm flex items-center gap-2">
                <Send className="w-4 h-4 text-emerald-600" />
                Village Community Broadcast
              </h4>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                142 Farmers Linked
              </span>
            </div>

            <p className="text-xs text-slate-600">
              Simulate dispatching this audio voice note + SMS summary to all registered farmers in the active cluster.
            </p>

            <button
              onClick={handleDispatchSmsAlert}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Broadcast Audio Note & SMS to 142 Farmers</span>
            </button>

            {smsDispatchSuccess && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2 animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Audio memo & text advisory dispatched to 142 farmers in Ludhiana Cluster #4!</span>
              </div>
            )}
          </div>

        </div>

        {/* Right Column (7 Cols): Localized Advisory Bulletin & Farmer FAQ Prompts */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Daily Advisory Bulletin Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-emerald-100 shadow-card-soft space-y-5">
            
            {/* Bulletin Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300">
                  {currentAdvisory.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 mt-2">
                  {currentAdvisory.heroTitle}
                </h3>
              </div>

              <button
                onClick={handleTogglePlay}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                  isPlaying 
                    ? 'bg-amber-500 text-slate-950 font-extrabold shadow-sm'
                    : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-earth-glow'
                }`}
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                <span>{isPlaying ? 'Pause Voice' : 'Listen Bulletin'}</span>
              </button>
            </div>

            {/* Alert Summary Paragraph */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs sm:text-sm text-amber-950 leading-relaxed font-medium">
              <span className="font-bold text-amber-900">⚠️ Critical Agro-Climate Context: </span>
              {currentAdvisory.summary}
            </div>

            {/* Action Points Checklist */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-emerald-600" />
                Actionable Field Directives (Do's & Don'ts)
              </h4>

              <div className="space-y-2.5">
                {currentAdvisory.actionPoints.map((point, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all flex items-start gap-3 text-xs sm:text-sm text-slate-700"
                  >
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="font-medium leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Interactive Farmer FAQ Voice Prompts */}
          <div className="bg-white rounded-3xl p-6 border border-emerald-100 shadow-card-soft space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-500" />
                <h4 className="font-heading font-bold text-slate-800 text-base">
                  Farmer Quick-Voice Queries (Kisan Q&A)
                </h4>
              </div>
              <span className="text-xs text-slate-400">Click to listen answer</span>
            </div>

            <div className="space-y-2.5">
              {FARMER_FAQ_PROMPTS.map((faq, idx) => {
                const isCurrentFaq = activeFaq?.question === faq.question;
                return (
                  <div 
                    key={idx}
                    onClick={() => handleFaqClick(faq)}
                    className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                      isCurrentFaq 
                        ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-500/20' 
                        : 'bg-slate-50 hover:bg-emerald-50/40 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                      <span className="flex items-center gap-2">
                        <span className="text-emerald-600 font-mono">Q{idx + 1}:</span>
                        <span>{faq.question}</span>
                      </span>
                      <div className={`p-1.5 rounded-lg ${isCurrentFaq ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
                        <Volume2 className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {isCurrentFaq && (
                      <div className="mt-2.5 pt-2.5 border-t border-emerald-200 text-xs text-slate-700 leading-relaxed animate-fadeIn">
                        <span className="font-bold text-emerald-800">AI Agronomist Answer: </span>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
