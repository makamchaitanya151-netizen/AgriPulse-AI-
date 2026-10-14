/**
 * AgriPulse AI - Backend REST API Service
 * Lightweight Express server handling simulated image classification,
 * micro-climate risk scoring, and multilingual advisory distribution.
 */

import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Agro-Climatic Zones & Weather
const ZONES_DATABASE = {
  'punjab-zone4': {
    name: 'Punjab Agri-Zone 4 (Ludhiana)',
    temperature: 28.4,
    humidity: 78,
    soilMoisture: 42,
    rainRisk: 65,
    windSpeed: '12 km/h WNW',
    solarUV: '6.2 (Moderate)',
    soilPh: 7.4,
    healthScore: 82,
    pendingAlerts: 3
  },
  'nashik-valley': {
    name: 'Nashik Valley Horticulture Belt',
    temperature: 31.2,
    humidity: 52,
    soilMoisture: 31,
    rainRisk: 15,
    windSpeed: '9 km/h NE',
    solarUV: '8.4 (Very High)',
    soilPh: 7.8,
    healthScore: 78,
    pendingAlerts: 2
  },
  'guntur-delta': {
    name: 'Guntur Krishna Delta Zone',
    temperature: 33.8,
    humidity: 84,
    soilMoisture: 49,
    rainRisk: 75,
    windSpeed: '16 km/h SSW',
    solarUV: '9.1 (Extreme)',
    soilPh: 7.1,
    healthScore: 86,
    pendingAlerts: 4
  },
  'midwest-corn': {
    name: 'Corn Belt Heartland (Story County)',
    temperature: 22.5,
    humidity: 48,
    soilMoisture: 55,
    rainRisk: 20,
    windSpeed: '18 km/h NW',
    solarUV: '5.0 (Moderate)',
    soilPh: 6.5,
    healthScore: 91,
    pendingAlerts: 1
  }
};

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    platform: 'AgriPulse AI Engine v2.4',
    timestamp: new Date().toISOString(),
    visionModel: 'AgriVision-Transformer-ResNet50',
    climateEngine: 'MicroClimate-Risk-v3.1'
  });
});

// Weather Telemetry Endpoint
app.get('/api/weather', (req, res) => {
  const zoneId = req.query.zone || 'punjab-zone4';
  const data = ZONES_DATABASE[zoneId] || ZONES_DATABASE['punjab-zone4'];
  res.json({ success: true, zoneId, telemetry: data });
});

// Leaf Doctor Diagnosis Simulator Endpoint
app.post('/api/diagnose', (req, res) => {
  const { presetId, imageBase64, customFilename } = req.body;

  // Simulate neural network classification latency
  setTimeout(() => {
    if (presetId === 'healthy-corn') {
      return res.json({
        success: true,
        crop: 'Maize / Corn',
        disease: 'Optimal Vigour — Healthy Canopy',
        pathogen: 'None',
        confidence: 99.2,
        severity: 'None',
        severityLevel: 0,
        organicTreatment: 'Maintain regular vermicompost and drip irrigation schedules.',
        chemicalTreatment: 'Top-dress recommended balanced nitrogen (Urea @ 45kg/acre).',
        timestamp: new Date().toISOString()
      });
    }

    if (presetId === 'rice-blast') {
      return res.json({
        success: true,
        crop: 'Rice / Paddy',
        disease: 'Rice Leaf Blast',
        pathogen: 'Magnaporthe oryzae',
        confidence: 94.4,
        severity: 'High',
        severityLevel: 3,
        organicTreatment: 'Spray 5% raw cow urine + sour buttermilk (1:10) and potassium silicate.',
        chemicalTreatment: 'Tricyclazole 75% WP @ 0.6g/L or Isoprothiolane 40% EC @ 1.5ml/L.',
        timestamp: new Date().toISOString()
      });
    }

    if (presetId === 'cotton-leaf-curl') {
      return res.json({
        success: true,
        crop: 'Cotton',
        disease: 'Cotton Leaf Curl Virus',
        pathogen: 'Begomovirus (Whitefly Vector)',
        confidence: 92.6,
        severity: 'Medium',
        severityLevel: 2,
        organicTreatment: 'Install yellow sticky traps (25/acre) and cold-pressed Neem Oil spray (3ml/L).',
        chemicalTreatment: 'Diafenthiuron 50% WP @ 1.25g/L or Pyriproxyfen + Bifenthrin.',
        timestamp: new Date().toISOString()
      });
    }

    // Default / Tomato Blight / Custom image
    return res.json({
      success: true,
      crop: 'Tomato',
      disease: 'Tomato Late Blight',
      pathogen: 'Phytophthora infestans',
      confidence: 96.8,
      severity: 'High',
      severityLevel: 3,
      organicTreatment: 'Copper Oxychloride 50 WP (2.5g/L) + Trichoderma viride bio-spray.',
      chemicalTreatment: 'Azoxystrobin + Difenoconazole @ 1ml/L or Mancozeb 75% WP @ 2g/L.',
      timestamp: new Date().toISOString()
    });
  }, 400);
});

// Dynamic Risk Scoring Engine
app.post('/api/simulate-risk', (req, res) => {
  const { temp = 28, humidity = 75, rainfall = 15 } = req.body;

  // Algorithmic risk calculations
  let fungalRisk = Math.min(100, Math.round((humidity * 0.7) + (rainfall * 1.5) - (Math.abs(temp - 24) * 2)));
  let pestRisk = Math.min(100, Math.round((temp * 2.2) + (humidity * 0.3) - (rainfall * 0.8)));
  let droughtRisk = Math.max(0, Math.min(100, Math.round((temp * 2.5) - (rainfall * 2.8) - (humidity * 0.4))));
  let frostRisk = temp < 10 ? Math.round((10 - temp) * 10) : 5;

  res.json({
    success: true,
    simulatedConditions: { temp, humidity, rainfall },
    riskScores: {
      fungalSporeRisk: { score: Math.max(10, fungalRisk), level: fungalRisk > 70 ? 'High' : fungalRisk > 40 ? 'Medium' : 'Low' },
      pestOutbreakRisk: { score: Math.max(15, pestRisk), level: pestRisk > 70 ? 'High' : pestRisk > 40 ? 'Medium' : 'Low' },
      droughtStressRisk: { score: droughtRisk, level: droughtRisk > 70 ? 'High' : droughtRisk > 40 ? 'Medium' : 'Low' },
      frostShockRisk: { score: frostRisk, level: frostRisk > 60 ? 'High' : frostRisk > 30 ? 'Medium' : 'Low' }
    }
  });
});

app.listen(PORT, () => {
  console.log(`🌾 AgriPulse AI Backend server running on http://localhost:${PORT}`);
});
