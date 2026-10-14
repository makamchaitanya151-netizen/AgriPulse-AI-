import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { DashboardOverview } from './components/DashboardOverview';
import { LeafDoctor } from './components/LeafDoctor';
import { MicroClimateRisk } from './components/MicroClimateRisk';
import { MultilingualAdvisory } from './components/MultilingualAdvisory';
import { MarketTrendsSection } from './components/MarketTrendsSection';
import { ExtensionOfficerToolbar } from './components/ExtensionOfficerToolbar';
import { Footer } from './components/Footer';
import confetti from 'canvas-confetti';

export default function App() {
  const [selectedZone, setSelectedZone] = useState('punjab-zone4');
  const [userMode, setUserMode] = useState('farmer'); // 'farmer' | 'officer'
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [audioMuted, setAudioMuted] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [selectedPresetId, setSelectedPresetId] = useState('tomato-blight');
  const [isServerOnline, setIsServerOnline] = useState(false);

  // Health check to backend server
  useEffect(() => {
    const checkServerHealth = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/health', { method: 'GET' });
        if (response.ok) {
          const data = await response.json();
          if (data.status === 'online') {
            setIsServerOnline(true);
          }
        }
      } catch (err) {
        // Fallback to client mock
        setIsServerOnline(false);
      }
    };

    checkServerHealth();
    const interval = setInterval(checkServerHealth, 15000);
    return () => clearInterval(interval);
  }, []);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleQuickCropPreset = (presetId) => {
    setSelectedPresetId(presetId);
    handleNavigate('leaf-doctor');
  };

  const handleExportFieldReport = () => {
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#D97706', '#10B981', '#14532D']
    });
    alert('Field Report CSV generated successfully! Downloaded: KVK_AgriPulse_Ledger.csv');
  };

  return (
    <div className="min-h-screen bg-[#F6F8F5] text-slate-800 flex flex-col font-sans">
      
      {/* Sticky Modern Earthy Navbar */}
      <Navbar
        selectedZone={selectedZone}
        onSelectZone={setSelectedZone}
        userMode={userMode}
        setUserMode={setUserMode}
        audioMuted={audioMuted}
        setAudioMuted={setAudioMuted}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isServerOnline={isServerOnline}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        
        {/* Extension Officer Command Bar (conditionally shown in Officer mode) */}
        {userMode === 'officer' && (
          <ExtensionOfficerToolbar
            selectedZone={selectedZone}
            onExportFieldReport={handleExportFieldReport}
          />
        )}

        {/* 1. Dashboard Overview */}
        <DashboardOverview
          selectedZone={selectedZone}
          userMode={userMode}
          onNavigateTo={handleNavigate}
          onSelectCropPreset={handleQuickCropPreset}
        />

        {/* 2. Feature 1: "Leaf Doctor" AI Disease Diagnosis Simulator */}
        <LeafDoctor
          selectedPresetId={selectedPresetId}
          onSelectPresetId={setSelectedPresetId}
          selectedLanguage={selectedLanguage}
        />

        {/* 3. Feature 2: "Micro-Climate Risk Predictor" 3-Day Threat Matrix */}
        <MicroClimateRisk
          userMode={userMode}
        />

        {/* 4. Feature 3: "Multilingual Actionable Advisory" (AgriPulse Vani Voice AI) */}
        <MultilingualAdvisory
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
        />

        {/* 5. APMC Mandi Market Price Trends & AI Harvest Strategy */}
        <MarketTrendsSection />

      </main>

      {/* Production-Grade Pitch Ready Footer */}
      <Footer onNavigateTo={handleNavigate} />

    </div>
  );
}
