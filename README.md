# 🌾 AgriPulse AI — Intelligent Agriculture Risk & Crop Health Platform

> **Hackathon MVP Production-Ready Release**  
> An intelligent agro-climatic risk forecasting and foliar crop health platform designed for smallholder farmers and agricultural extension officers.

---

## 🌟 Executive Summary & Pitch Highlights

Smallholder farmers frequently lose **20% to 40% of their seasonal harvest** to predictable, preventable crop diseases and micro-climate stress. **AgriPulse AI** acts as an on-device digital agronomist and proactive micro-climate radar:

1. **"Leaf Doctor" AI Diagnostics**: Computer-vision powered foliar disease classifier that identifies pathogens, quantifies lesion surface damage, and generates immediate **dual Organic (bio-control) vs. Chemical treatment protocols**.
2. **Micro-Climate Risk Predictor**: A dynamic 3-day threat forecasting matrix (Pest Outbreak, Fungal Spores, Drought Deficit, Frost Inversion) with real-time "What-If" simulation sliders.
3. **"AgriPulse Vani" Voice AI**: Multilingual text-to-speech assistant translating technical agronomy advisories into simplified local vernacular (English, Hindi, Telugu, Punjabi, Marathi, Spanish) with village SMS/WhatsApp dispatch simulation.
4. **Spot APMC Mandi Market Intelligence**: Live commodity spot prices with 7-day sparklines and AI harvest timing recommendations.
5. **Dual Persona Modes**: One-click toggle between **Farmer Mode** (high-contrast, voice-first, simplified guidance) and **Extension Officer Mode** (cluster telemetry, KVK CSV ledger export, emergency alert dispatch).

---

## 🏗️ Clean Project Directory Structure

```
├── backend/
│   └── server.js                  # Lightweight Node.js Express REST API
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # Earthy navbar with zone selector & persona switch
│   │   ├── DashboardOverview.jsx  # Hero weather telemetry, health gauge & stat cards
│   │   ├── LeafDoctor.jsx         # Computer vision leaf scanner & diagnosis engine
│   │   ├── LeafSvgArtwork.jsx     # High-fidelity botanical SVG illustrations for leaf samples
│   │   ├── MicroClimateRisk.jsx   # 3-Day risk matrix & interactive what-if climate sliders
│   │   ├── MultilingualAdvisory.jsx # AgriPulse Vani voice assistant (Web Speech API)
│   │   ├── MarketTrendsSection.jsx # APMC mandi spot rates with 7-day SVG sparklines
│   │   ├── ExtensionOfficerToolbar.jsx # Extension officer cluster management toolbar
│   │   └── Footer.jsx             # Hackathon pitch credits & data source citations
│   ├── services/
│   │   ├── agriPulseService.js    # Data models, leaf presets, risk matrices & multilingual texts
│   │   └── speechService.js       # Browser Web Speech API synthesizer & audio callbacks
│   ├── App.jsx                    # Root state coordinator & section navigation
│   ├── index.css                  # Tailwind styles, scanning beam & audio waveforms
│   └── main.jsx                   # Vite React root mount
├── index.html                     # Plus Jakarta Sans & Outfit typography + viewport
├── tailwind.config.js             # Forest greens (#12372A), warm ambers (#F59E0B)
├── package.json                   # Dependencies: React 18, Tailwind, Lucide, Canvas-Confetti
└── vite.config.js                 # Vite bundler configuration (port 5173)
```

---

## 🚀 Running AgriPulse AI Locally

### 1. Start the React Frontend

```bash
npm run dev
```

Open your browser at **`http://localhost:5173`**.

### 2. (Optional) Run the Node.js Express Backend

The frontend features automatic dual-mode operation: it connects to the Express REST API when active, and automatically falls back to client-side mock intelligence if running standalone.

To start the backend server:

```bash
node backend/server.js
# Or
npm run server
```

Backend REST API will run on **`http://localhost:5000`**.

---

## 🧪 Testing Hackathon Core Features

### Feature 1: "Leaf Doctor" Simulator
- Select any of the 4 clickable presets:
  - 🍅 **Tomato Late Blight** (*Phytophthora infestans*) — 96.8% Confidence, High Severity
  - 🌽 **Healthy Corn / Maize** (*Zea mays*) — 99.2% Confidence, Clean Biomass
  - 🌾 **Rice Leaf Blast** (*Magnaporthe oryzae*) — 94.4% Confidence, High Severity
  - 🌱 **Cotton Leaf Curl Virus** (*Begomovirus*) — 92.6% Confidence, Medium Severity
- Or drag-and-drop your own photo from your device!
- Watch the **high-tech neural radar scan beam** sweep the leaf while real-time inference steps are logged.
- Inspect the **dual Organic vs. Chemical treatment tabs** with dosage recommendations.
- Click **"Listen Local Advice"** to hear the diagnosis read aloud.
- Click **"Print Rx Report"** to trigger a confetti celebration and exportable diagnosis.

### Feature 2: "Micro-Climate Risk Predictor"
- Explore the **3-day threat progression** for Pest Swarms, Fungal Blight, Drought, Frost, and Soil Runoff.
- Use the **What-If Climate Simulator sliders** (Temperature, Canopy Humidity, Precipitation) to test real-time risk index recalculation!

### Feature 3: "AgriPulse Vani" Voice Assistant
- Switch languages among **English, Hindi (हिन्दी), Telugu (తెలుగు), Punjabi (ਪੰਜਾਬੀ), Marathi (मराठी), Spanish (Español)**.
- Click **"Listen Bulletin"** or the play button to hear natural vernacular voice synthesis with live equalizer wave bars.
- Click any of the **Kisan Q&A voice queries** to hear instant agronomist answers.
- Click **"Broadcast Audio Note & SMS"** to test village alert dispatch.

---

## 🛡️ Hackathon Pitch Ready Aesthetic

- **Color Palette**: Rich forest greens (`#0F2E22`, `#166534`), sprout emerals (`#10B981`), warm harvest ambers (`#F59E0B`), and clean sunlight whites.
- **Typography**: Google Fonts *Plus Jakarta Sans* and *Outfit* for modern legibility in outdoor sunlight.
- **Icons**: 100% clean imports from `lucide-react`.
- **Zero compile errors**: Tested with Vite v5 production build.
