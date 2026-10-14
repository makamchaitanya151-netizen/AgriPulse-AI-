/**
 * AgriPulse AI - Core Agriculture Data & Mock Intelligence Engine
 * Comprehensive data models for:
 * - Leaf Disease Diagnosis & Agronomic Prescriptions
 * - Micro-Climate 3-Day Risk Matrix & Threat Triggers
 * - Multilingual Farmer Advisories (EN, HI, TE, PA, MR, ES)
 * - Agro-Climatic Zones & Real-time Weather Telemetry
 * - APMC Mandi Market Trends & Sparkline Data
 */

export const AGRO_ZONES = [
  {
    id: 'punjab-zone4',
    name: 'Punjab Agri-Zone 4 (Ludhiana)',
    state: 'Punjab, India',
    crops: ['Wheat', 'Basmati Rice', 'Maize', 'Mustard'],
    soilType: 'Alluvial Loam (pH 7.4)',
    irrigation: 'Canal & Tube Well Network',
    elevation: '244m ASL',
  },
  {
    id: 'nashik-valley',
    name: 'Nashik Valley Horticulture Belt',
    state: 'Maharashtra, India',
    crops: ['Table Grapes', 'Red Onion', 'Tomato', 'Pomegranate'],
    soilType: 'Black Cotton Basaltic (pH 7.8)',
    irrigation: 'Drip Micro-Irrigation',
    elevation: '600m ASL',
  },
  {
    id: 'guntur-delta',
    name: 'Guntur Krishna Delta Zone',
    state: 'Andhra Pradesh, India',
    crops: ['Guntur Sannam Chilli', 'Bt Cotton', 'Paddy', 'Tobacco'],
    soilType: 'Deep Clayey Alluvium (pH 7.1)',
    irrigation: 'Krishna Delta Barrage',
    elevation: '31m ASL',
  },
  {
    id: 'midwest-corn',
    name: 'Corn Belt Heartland (Story County)',
    state: 'Iowa, United States',
    crops: ['Yellow Corn (Maize)', 'Soybeans', 'Winter Wheat'],
    soilType: 'Mollisol Prairie Loam (pH 6.5)',
    irrigation: 'Rainfed & Center Pivot',
    elevation: '298m ASL',
  }
];

export const ZONE_WEATHER_DATA = {
  'punjab-zone4': {
    temperature: 28.4,
    feelsLike: 30.1,
    condition: 'Partly Cloudy, High Humidity',
    humidity: 78,
    soilMoisture: 42,
    soilMoistureStatus: 'Adequate',
    rainRisk: 65,
    windSpeed: '12 km/h WNW',
    solarUV: '6.2 (Moderate)',
    soilPh: 7.4,
    evapotranspiration: '4.8 mm/day',
    dewPoint: '21.5°C',
    cropHealthScore: 82,
    alertsCount: 3,
  },
  'nashik-valley': {
    temperature: 31.2,
    feelsLike: 33.0,
    condition: 'Hot & Clear, Low Leaf Moisture',
    humidity: 52,
    soilMoisture: 31,
    soilMoistureStatus: 'Slight Deficit',
    rainRisk: 15,
    windSpeed: '9 km/h NE',
    solarUV: '8.4 (Very High)',
    soilPh: 7.8,
    evapotranspiration: '6.2 mm/day',
    dewPoint: '16.2°C',
    cropHealthScore: 78,
    alertsCount: 2,
  },
  'guntur-delta': {
    temperature: 33.8,
    feelsLike: 38.5,
    condition: 'Humid Tropical, Heat Stress',
    humidity: 84,
    soilMoisture: 49,
    soilMoistureStatus: 'High Moisture',
    rainRisk: 75,
    windSpeed: '16 km/h SSW',
    solarUV: '9.1 (Extreme)',
    soilPh: 7.1,
    evapotranspiration: '5.4 mm/day',
    dewPoint: '25.8°C',
    cropHealthScore: 86,
    alertsCount: 4,
  },
  'midwest-corn': {
    temperature: 22.5,
    feelsLike: 22.0,
    condition: 'Mild Prairie Breezes, Clear Sky',
    humidity: 48,
    soilMoisture: 55,
    soilMoistureStatus: 'Optimal',
    rainRisk: 20,
    windSpeed: '18 km/h NW',
    solarUV: '5.0 (Moderate)',
    soilPh: 6.5,
    evapotranspiration: '3.9 mm/day',
    dewPoint: '11.4°C',
    cropHealthScore: 91,
    alertsCount: 1,
  }
};

// Preset Leaf Diagnosis Samples
export const PRESET_DISEASES = [
  {
    id: 'tomato-blight',
    cropName: 'Tomato (Solanum lycopersicum)',
    diseaseName: 'Tomato Late Blight',
    pathogen: 'Phytophthora infestans (Oomycete)',
    confidence: 96.8,
    severity: 'High',
    severityColor: 'rose',
    lesionCoverage: '38%',
    sampleTag: 'Fungal/Oomycete Blast',
    thumbnail: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23963?auto=format&fit=crop&w=400&q=80',
    fallbackSvg: 'tomato',
    symptoms: [
      'Large, irregular dark water-soaked brownish-black lesions on leaf margins and tips.',
      'Pale green chlorotic halo bordering necrotic lesions during damp morning hours.',
      'White fluffy sporulation visible on abaxial (underside) leaf surface in >85% relative humidity.',
      'Rapid stem girdling and premature defoliation leading to exposed fruit sun-scald.'
    ],
    organicTreatment: {
      headline: 'Bio-Fungicidal Protective Barrier & Cultural Sanitization',
      steps: [
        'Apply Trichoderma viride or Bacillus subtilis bio-formulation (5g/L water) as early morning foliar spray.',
        'Spray Copper Oxychloride 50 WP (Organic certified copper soap) at 2.5g/L every 7 days during foggy periods.',
        'Immediately hand-prune and burn infected lower canopy foliage; sanitize shears in 70% isopropyl alcohol.',
        'Switch from overhead sprayers to localized drip irrigation to keep leaf lamina dry.'
      ]
    },
    chemicalTreatment: {
      headline: 'Systemic Curative & Protective Agronomic Protocol',
      steps: [
        'Curative spray: Azoxystrobin 18.2% + Difenoconazole 11.4% SC @ 1 ml/L or Dimethomorph 50% WP @ 1g/L.',
        'Protective barrier: Mancozeb 75% WP @ 2.0g/L spray covering both upper and lower leaf surface.',
        'Pre-Harvest Interval (PHI): Maintain strictly 5-7 days prior to harvest fruit picking.',
        'PPE Caution: Wear nitrile gloves and N95 vapor mask during application.'
      ]
    },
    preventiveAdvice: 'Increase inter-row spacing to 60cm for maximum aeration. Avoid planting tomatoes immediately adjacent to potato fields.',
    localAudioAdvice: {
      en: 'High severity Late Blight detected on tomato leaf with 96.8% confidence. Immediate bio-copper or Azoxystrobin spray required. Cease overhead irrigation immediately.',
      hi: 'टमाटर के पत्ते में 96.8% सटीकता के साथ पछेती झुलसा (लेट ब्लाइट) रोग पाया गया है। तुरंत कॉपर ऑक्सीक्लोराइड या एजॉक्सीस्ट्रोबिन का छिड़काव करें और ऊपर से पानी देना तुरंत बंद करें।',
      te: 'టమాట ఆకుపై 96.8% ఖచ్చితత్వంతో లేట్ బ్లైట్ తెగులు నిర్ధారించబడింది. వెంటనే కాపర్ ఆక్సీక్లోరైడ్ లేదా సిస్టమిక్ మందును పిచికారీ చేయండి, ఆకులపై నీరు పడకుండా చూడండి.',
      pa: 'ਟਮਾਟਰ ਦੇ ਪੱਤਿਆਂ ਤੇ 96.8% ਯਕੀਨ ਨਾਲ ਪਛੇਤਾ ਝੁਲਸ ਰੋਗ ਪਾਇਆ ਗਿਆ ਹੈ। ਤੁਰੰਤ ਕਾਪਰ ਆਕਸੀਕਲੋਰਾਈਡ ਦਾ ਛਿੜਕਾਅ ਕਰੋ ਅਤੇ ਤੁਪਕਾ ਸਿੰਚਾਈ ਹੀ ਵਰਤੋ।',
      mr: 'टोमॅटो पिकावर ९६.८% अचूकतेने करपा (लेट ब्लाइट) रोगाचा प्रादुर्भाव आढळला आहे. त्वरित कॉपर किंवा योग्य बुरशीनाशकाची फवारणी करा आणि तुषार सिंचन बंद करा.',
      es: 'Se detectó Tizón Tardío de alta gravedad en hoja de tomate con 96.8% de confianza. Aplique fungicida a base de cobre de inmediato y evite el riego por aspersión.'
    }
  },
  {
    id: 'healthy-corn',
    cropName: 'Maize / Corn (Zea mays)',
    diseaseName: 'Optimal Vigour — Healthy Canopy',
    pathogen: 'None (Zero Pathological Necrosis)',
    confidence: 99.2,
    severity: 'None',
    severityColor: 'emerald',
    lesionCoverage: '0%',
    sampleTag: 'Clean Biomass',
    thumbnail: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=400&q=80',
    fallbackSvg: 'corn',
    symptoms: [
      'Uniform deep emerald green chlorophyll pigmentation across linear parallel leaf venation.',
      'Zero chlorotic streaking, tar spots, rust pustules, or leaf miner boring tunnels.',
      'Strong turgor pressure in leaf sheath with healthy dew-retention cuticle.',
      'Vigorous vegetative growth index matching V6–V8 phenological stage.'
    ],
    organicTreatment: {
      headline: 'Maintenance of Soil Microbiome & Humic Health',
      steps: [
        'Apply fermented Jeevamrutha or enriched compost tea at 200L/acre via irrigation canal every 14 days.',
        'Mulch with dry straw (5cm layer) to conserve subsoil moisture and preserve beneficial mycorrhizae.',
        'Introduce trichogramma egg parasitoid cards (20,000 cards/acre) proactively against Fall Armyworm.'
      ]
    },
    chemicalTreatment: {
      headline: 'Balanced N-P-K & Micronutrient Top-Dressing',
      steps: [
        'Top-dress with Urea @ 45 kg/acre during knee-high stage just before scheduled light irrigation.',
        'Apply Zinc Sulphate (ZnSO4 21%) foliar spray @ 2g/L if interveinal whitening is anticipated in high pH soils.',
        'Maintain balanced nitrogen to prevent succulent foliage overgrowth attractive to stem borers.'
      ]
    },
    preventiveAdvice: 'Monitor pheromone traps twice weekly for Fall Armyworm moth arrivals. Soil moisture is currently in the ideal 50-60% zone.',
    localAudioAdvice: {
      en: 'Excellent news. Maize crop exhibits prime vegetative vigour with zero disease lesions. Continue routine organic Jeevamrutha or top-dress nitrogen.',
      hi: 'शानदार समाचार! मक्का की फसल पूरी तरह स्वस्थ है और कोई रोग नहीं है। नियमित सिंचाई और यूरिया की संस्तुत खुराक जारी रखें।',
      te: 'శుభవార్త! మొక్కజొన్న పైరు పూర్తి ఆరోగ్యంగా ఉంది, ఎలాంటి తెగుళ్లు లేవు. సాధారణ ఎరువుల యాజమాన్యం మరియు తడి అందించడం కొనసాగించండి.',
      pa: 'ਵਧੀਆ ਖ਼ਬਰ! ਮੱਕੀ ਦੀ ਫ਼ਸਲ ਪੂਰੀ ਤਰ੍ਹਾਂ ਤੰਦਰੁਸਤ ਹੈ ਅਤੇ ਕੋਈ ਕੀੜਾ-ਰੋਗ ਨਹੀਂ ਹੈ। ਸੰਤੁਲਿਤ ਖਾਦਾਂ ਅਤੇ ਪਾਣੀ ਦਾ ਪ੍ਰਬੰਧ ਜਾਰੀ ਰੱਖੋ।',
      mr: 'उत्तम बातमी! मका पीक पूर्णपणे निरोगी असून पानांवर कोणताही रोगाचा अंश नाही. नेहमीप्रमाणे खत आणि पाणी व्यवस्थापन सुरू ठेवा.',
      es: 'Excelente estado. El cultivo de maíz muestra vigor óptimo sin presencia de patógenos. Mantenga el esquema regular de fertilización y monitoreo.'
    }
  },
  {
    id: 'rice-blast',
    cropName: 'Paddy / Rice (Oryza sativa)',
    diseaseName: 'Rice Leaf Blast',
    pathogen: 'Magnaporthe oryzae (Pyricularia oryzae)',
    confidence: 94.4,
    severity: 'High',
    severityColor: 'rose',
    lesionCoverage: '42%',
    sampleTag: 'Severe Spore Blast',
    thumbnail: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=400&q=80',
    fallbackSvg: 'rice',
    symptoms: [
      'Diagnostic spindle-shaped / diamond elliptical lesions with greyish-white ash centres.',
      'Dark reddish-brown borders encircling the lesion with acute pointed apex.',
      'Multiple coalesced blast lesions creating scorched, burnt "dead patch" appearance across panicles.',
      'Neck rot vulnerability if left untreated during booting and tillering phases.'
    ],
    organicTreatment: {
      headline: 'Botanical Antifungal Decocations & Silicon Fortification',
      steps: [
        'Foliar spray of 5% Raw Cow Urine + Fermented Sour Butter Milk (Chaas) mixed 1:10 with water.',
        'Apply soluble Potassium Silicate (2.5ml/L) to harden silica epidermal cells of leaf sheath against fungal appressorium.',
        'Broadcast Pseudomonas fluorescens bio-agent @ 2.5 kg/acre mixed with 50 kg farmyard manure.'
      ]
    },
    chemicalTreatment: {
      headline: 'Systemic Triazole / Strobilurin Blast Eradication',
      steps: [
        'Immediate foliar spray: Tricyclazole 75% WP @ 0.6g/L of water (or Isoprothiolane 40% EC @ 1.5ml/L).',
        'Alternate with Tebuconazole 50% + Trifloxystrobin 25% WG @ 0.4g/L at 10-day intervals.',
        'Immediately suspend excessive top-dressed Urea; excess Nitrogen accelerates blast spore multiplication.'
      ]
    },
    preventiveAdvice: 'Drain standing water for 24-48 hours if soil conditions permit to aerate the root rootzone. Ensure resistant cultivar seed treatment in next cycle.',
    localAudioAdvice: {
      en: 'Warning: Rice Leaf Blast identified with 94.4% confidence. Spindle lesions threaten canopy. Spray Tricyclazole 75 WP at 0.6 grams per litre immediately and stop excess urea.',
      hi: 'चेतावनी: धान की फसल में 94.4% संभावना के साथ पत्ती झुलसा (राइस ब्लास्ट) पाया गया है। तुरंत ट्राइसाइक्लाजोल 75 WP 0.6 ग्राम प्रति लीटर छिड़कें और यूरिया डालना बंद करें।',
      te: 'హెచ్చరిక: వరి పంటలో 94.4% నిశ్చితత్వంతో అగ్గి తెగులు (రైస్ బ్లాస్ట్) కనిపించింది. వెంటనే ట్రైసైక్లాజోల్ మందును పిచికారీ చేసి, యూరియా వాడకాన్ని తగ్గించండి.',
      pa: 'ਚੇਤਾਵਨੀ: ਝੋਨੇ ਦੀ ਫਸਲ ਤੇ 94.4% ਪੁਸ਼ਟੀ ਨਾਲ ਧੌਣ ਮਰੋੜ/ਪੱਤਾ ਝੁਲਸ ਰੋਗ ਹੈ। ਤੁਰੰਤ ਟਰਾਈਸਾਈਕਲਾਜ਼ੋਲ ਦਾ ਛਿੜਕਾਅ ਕਰੋ ਅਤੇ ਯੂਰੀਆ ਬੰਦ ਕਰੋ।',
      mr: 'सावधान: भात पिकावर ९४.४% तीव्रतेने तांबेरा/करपा (राईस ब्लास्ट) रोगाची लागण झाली आहे. त्वरित ट्रायसायक्लॅझोल फवारा आणि युरियाचा वापर थांबवा.',
      es: 'Alerta crítica: Añublo o Piricularia del arroz confirmada con 94.4% de certeza. Aplique Triciclazol inmediatamente y suspenda la fertilización nitrogenada.'
    }
  },
  {
    id: 'cotton-leaf-curl',
    cropName: 'Cotton (Gossypium hirsutum)',
    diseaseName: 'Cotton Leaf Curl Virus (CLCuV)',
    pathogen: 'Begomovirus (Transmitted by Whitefly Bemisia tabaci)',
    confidence: 92.6,
    severity: 'Medium',
    severityColor: 'amber',
    lesionCoverage: '26%',
    sampleTag: 'Vector-Borne Viral',
    thumbnail: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=400&q=80',
    fallbackSvg: 'cotton',
    symptoms: [
      'Upward or downward cupping and curling of leaf margins with severe vein thickening.',
      'Enation (leaf-like outgrowths) emerging on the undersides of primary and secondary veins.',
      'Stunted internodal growth leading to significant reduction in boll formation.',
      'Whitefly colonies clustered on tender apical flush.'
    ],
    organicTreatment: {
      headline: 'Vector Suppression & Botanical Repellents',
      steps: [
        'Install yellow sticky traps (25 traps per acre) at 15cm above crop canopy to capture adult whiteflies.',
        'Spray cold-pressed Neem Oil (10,000 ppm Azadirachtin) @ 3ml/L with 0.5ml liquid soap as surfactant.',
        'Spray Castor oil barrier lines along field perimeter to obstruct incoming whitefly vector swarms.'
      ]
    },
    chemicalTreatment: {
      headline: 'Targeted Systemic Whitefly Vector Management',
      steps: [
        'Spray Diafenthiuron 50% WP @ 1.25g/L or Pyriproxyfen 10% + Bifenthrin 10% EC @ 2ml/L.',
        'Rotate with Flonicamid 50% WG @ 0.3g/L to prevent insecticide resistance build-up.',
        'Uproot and bury rogue infected plants before vector spreads virus to entire parcel.'
      ]
    },
    preventiveAdvice: 'Eradicate weed hosts such as Parthenium (Gajar Ghas) and Abutilon from field borders. Plant border rows of pearl millet or sorghum.',
    localAudioAdvice: {
      en: 'Cotton Leaf Curl Virus detected. Transmitted by whiteflies. Install yellow sticky traps and spray Neem Oil or Diafenthiuron immediately.',
      hi: 'कपास में पत्ता मरोड़ विषाणु (लीफ कर्ल वायरस) के लक्षण मिले हैं। सफेद मक्खी की रोकथाम के लिए पीले चिपचिपे कार्ड लगाएं और नीम तेल या कीटनाशक का छिड़काव करें।',
      te: 'ప్రత్తి పంటలో తెల్లదోమ ద్వారా వచ్చే ఆకుముడత వైరస్ గుర్తించబడింది. వెంటనే పసుపు రంగు జిగురు అట్టలు ఏర్పాటు చేసి, వేపనూనె లేదా తగిన మందు చల్లండి.',
      pa: 'ਨਰਮੇ/ਕਪਾਹ ਵਿੱਚ ਪੱਤਾ ਮਰੋੜ ਵਿਸ਼ਾਣੂ ਰੋਗ ਦੇ ਲੱਛਣ ਹਨ ਜੋ ਚਿੱਟੀ ਮੱਖੀ ਰਾਹੀਂ ਫੈਲਦਾ ਹੈ। ਪੀਲੇ ਕਾਰਡ ਲਗਾਓ ਅਤੇ ਨਿੰਮ ਦੇ ਤੇਲ ਦਾ ਛਿੜਕਾਅ ਕਰੋ।',
      mr: 'कापूस पिकावर पांढऱ्या माशीमुळे पसरणाऱ्या चुरडा-मुरडा (लीफ कर्ल) विषाणूचा प्रादुर्भाव आहे. पिवळे चिकट सापळे लावा आणि योग्य फवारणी करा.',
      es: 'Virus del rizado de la hoja del algodón detectado, transmitido por mosca blanca. Coloque trampas amarillas y aplique aceite de neem o insecticida sistémico.'
    }
  }
];

// Micro-Climate 3-Day Risk Matrix Data
export const MICRO_CLIMATE_RISKS = [
  {
    id: 'pest-outbreak',
    title: 'Pest Outbreak Risk',
    scientificVector: 'Spodoptera frugiperda & Brown Planthopper',
    category: 'Entomological Stress',
    icon: 'Bug',
    currentLevel: 'High',
    score: 82,
    color: 'rose',
    days: [
      { day: 'Day 1 (Today)', risk: 'Medium', score: 68, badge: 'Moderate Swarm' },
      { day: 'Day 2 (Tomorrow)', risk: 'High', score: 85, badge: 'Critical Hatching' },
      { day: 'Day 3 (+48h)', risk: 'High', score: 82, badge: 'Peak Dispersion' },
    ],
    triggers: 'Prolonged relative humidity (>80%) coinciding with warm dusk temperatures (26-29°C) triggers accelerated nymph hatching cycle.',
    affectedCrops: ['Paddy', 'Maize', 'Cotton'],
    farmerDirective: 'Deploy pheromone traps at dusk. Check underside of 20 random leaves per acre for egg masses.',
    extensionOfficerProtocol: 'Issue Cluster Advisory #24B. Coordinate community trap installations across village panchayat borders.',
  },
  {
    id: 'fungal-epidemic',
    title: 'Fungal Spore Epidemic',
    scientificVector: 'Downy Mildew & Blast Spores',
    category: 'Pathogen Dispersal',
    icon: 'CloudRain',
    currentLevel: 'High',
    score: 88,
    color: 'rose',
    days: [
      { day: 'Day 1 (Today)', risk: 'High', score: 79, badge: 'Leaf Wetness >6h' },
      { day: 'Day 2 (Tomorrow)', risk: 'High', score: 92, badge: 'Infection Window Open' },
      { day: 'Day 3 (+48h)', risk: 'Medium', score: 64, badge: 'Gradual Drying' },
    ],
    triggers: 'Heavy dew persistence (>7 hours continuous leaf wetness) paired with overcast sky (solar radiation < 350 W/m²).',
    affectedCrops: ['Tomato', 'Grapes', 'Paddy', 'Chilli'],
    farmerDirective: 'Apply preventative contact fungicide early morning before rainfall. Clear water stagnation from furrow drains.',
    extensionOfficerProtocol: 'Mandate drone canopy surveillance in high-density orchards. Verify cold-chain bio-control availability.',
  },
  {
    id: 'drought-heat-stress',
    title: 'Drought & Heat Scald',
    scientificVector: 'Evapotranspirative Vapour Deficit (VPD)',
    category: 'Hydrological Deficit',
    icon: 'Sun',
    currentLevel: 'Low',
    score: 24,
    color: 'emerald',
    days: [
      { day: 'Day 1 (Today)', risk: 'Low', score: 20, badge: 'Root Moisture Safe' },
      { day: 'Day 2 (Tomorrow)', risk: 'Low', score: 25, badge: 'Normal Transpiration' },
      { day: 'Day 3 (+48h)', risk: 'Low', score: 28, badge: 'Mild Soil Desiccation' },
    ],
    triggers: 'VPD remains below 1.4 kPa due to incoming monsoon cloud cover; soil rootzone moisture at 15cm is currently at 42%.',
    affectedCrops: ['Wheat', 'Maize', 'Vegetables'],
    farmerDirective: 'Delay deep tube-well pumping by 48 hours to conserve electricity and ground water table.',
    extensionOfficerProtocol: 'Record aquifer replenishment levels; update weekly canal release scheduling ledger.',
  },
  {
    id: 'frost-cold-shock',
    title: 'Frost & Cold Inversion',
    scientificVector: 'Radiative Night Inversion (<4°C)',
    category: 'Thermal Stress',
    icon: 'ThermometerSnowflake',
    currentLevel: 'Medium',
    score: 54,
    color: 'amber',
    days: [
      { day: 'Day 1 (Today)', risk: 'Low', score: 32, badge: 'Night Low: 14°C' },
      { day: 'Day 2 (Tomorrow)', risk: 'Medium', score: 58, badge: 'Night Low: 7°C' },
      { day: 'Day 3 (+48h)', risk: 'Medium', score: 54, badge: 'Ground Chill Alert' },
    ],
    triggers: 'Clear night skies with wind speed dropping below 4 km/h creating ground radiation inversion window.',
    affectedCrops: ['Potato', 'Mustard', 'Tomato Seedlings'],
    farmerDirective: 'Give light evening irrigation to raise latent soil heat; arrange smoking crop residue mulch around borders at 3 AM.',
    extensionOfficerProtocol: 'Broadcast SMS blast warning nursery managers to cover polyhouses with thermal agri-fleece nets.',
  },
  {
    id: 'nutrient-leaching',
    title: 'Soil Nutrient Leaching',
    scientificVector: 'Percolation Runoff Loss (Nitrate & Boron)',
    category: 'Edaphic Integrity',
    icon: 'Droplets',
    currentLevel: 'Medium',
    score: 48,
    color: 'amber',
    days: [
      { day: 'Day 1 (Today)', risk: 'Low', score: 28, badge: 'Stable Horizon' },
      { day: 'Day 2 (Tomorrow)', risk: 'High', score: 72, badge: 'Heavy Runoff Threat' },
      { day: 'Day 3 (+48h)', risk: 'Low', score: 36, badge: 'Percolation Settling' },
    ],
    triggers: 'Forecasted thunderstorm bursts (>35mm/h) risk washing away unabsorbed soluble Nitrogen & micro-nutrients.',
    affectedCrops: ['All Field Crops'],
    farmerDirective: 'Do NOT apply granular fertilizers or DAP within 24 hours of anticipated heavy downpours.',
    extensionOfficerProtocol: 'Audit regional river runoff catchment sensors; log soil organic matter erosion metrics.',
  }
];

// Multilingual Advisory Transcripts & Audio Scripts
export const ADVISORY_LANGUAGES = [
  { code: 'en', label: 'English', native: 'English', speechCode: 'en-US' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी', speechCode: 'hi-IN' },
  { code: 'te', label: 'Telugu', native: 'తెలుగు', speechCode: 'te-IN' },
  { code: 'pa', label: 'Punjabi', native: 'ਪੰਜਾਬੀ', speechCode: 'pa-IN' },
  { code: 'mr', label: 'Marathi', native: 'मराठी', speechCode: 'mr-IN' },
  { code: 'es', label: 'Spanish', native: 'Español', speechCode: 'es-ES' },
];

export const MULTILINGUAL_ADVISORIES = {
  en: {
    heroTitle: 'Daily Agro-Advisory Bulletin',
    summary: 'High humidity (>78%) combined with a 65% rain probability makes the next 48 hours critical for fungal disease spread and pest breeding.',
    actionPoints: [
      'Postpone chemical spraying if rain is expected within 3 hours. Rain washes away active ingredients.',
      'Check tomato crops for early dark brown spots on lower leaves indicating Late Blight.',
      'Ensure field drainage channels are cleared to prevent standing water in paddy nursery beds.',
      'Hold wheat and grain sales — local APMC prices are trending up 4.2% over the next week.'
    ],
    voiceScript: 'Attention Farmer: High humidity and upcoming showers elevate fungal blight and pest risk. Do not apply expensive fertilizers before rain. Inspect tomato and paddy fields for leaf spots, and ensure clear drainage channels today.',
    badge: 'Verified Extension Advisory'
  },
  hi: {
    heroTitle: 'दैनिक कृषि-परामर्श बुलेटिन (AgriPulse वाणी)',
    summary: 'उच्च आर्द्रता (78%) और 65% बारिश की संभावना के कारण अगले 48 घंटे फफूंद जनित रोगों और कीटों के प्रकोप के लिए बेहद संवेदनशील हैं।',
    actionPoints: [
      'यदि 3 घंटे के भीतर बारिश की संभावना हो तो किसी भी कीटनाशक या फफूंदनाशक का छिड़काव न करें।',
      'टमाटर और आलू की फसल में पत्तियों के निचले हिस्से पर काले धब्बों (झुलसा रोग) की तुरंत जांच करें।',
      'खेतों में जलभराव रोकने के लिए जल निकासी नालियों को तुरंत साफ करें।',
      'मंडी में गेहूं और मक्का के भाव में 4.2% की तेजी के संकेत हैं, जल्दबाजी में औने-पौने दाम पर न बेचें।'
    ],
    voiceScript: 'किसान भाइयों ध्यान दें: अधिक नमी और आगामी बारिश से फसलों में फफूंद और कीट का खतरा बढ़ गया है। बारिश से पहले महंगे उर्वरक न डालें। टमाटर और धान की फसल में धब्बों की निगरानी करें और खेत में पानी न रुकने दें।',
    badge: 'प्रमाणित कृषि विज्ञान केंद्र परामर्श'
  },
  te: {
    heroTitle: 'దైనందిన వ్యవసాయ సూచిక (అగ్రిపల్స్ వాణి)',
    summary: 'గాలిలో తేమ 78% శాతం మరియు వర్ష సూచన 65% ఉన్నందున, రాబోయే 48 గంటలు పంట తెగుళ్లు మరియు పురుగుల వ్యాప్తికి అత్యంత ప్రమాదకరం.',
    actionPoints: [
      'వర్షం పడే అవకాశం ఉన్నందున ఎటువంటి రసాయన మందులు లేదా యూరియా పిచికారీ చేయవద్దు.',
      'టమాటా మరియు మిరప పైర్లలో ఆకులపై నల్లటి మచ్చలు, కొమ్మ కుళ్లు తెగుళ్లను గమనించి నివారించండి.',
      'చేలలో నీరు నిల్వ ఉండకుండా మురుగు కాలువలను శుభ్రపరచండి.',
      'మార్కెట్లో ధాన్యం ధరలు పెరుగుతున్నందున కొద్ది రోజులు నిల్వ ఉంచడం లాభదాయకం.'
    ],
    voiceScript: 'రైతు సోదరులకు ముఖ్య గమనిక: అధిక తేమ మరియు వర్షం వల్ల పంటలపై బూజు మరియు పురుగుల తాకిడి పెరిగే అవకాశం ఉంది. వర్షానికి ముందు మందులు పిచికారీ చేయకండి. చేలల్లో నీరు నిలవకుండా మురుగు కాల్వలు తీయించండి.',
    badge: 'విస్తరణ అధికారి సిఫార్సు'
  },
  pa: {
    heroTitle: 'ਰੋਜ਼ਾਨਾ ਖੇਤੀ ਸਲਾਹਕਾਰ ਬੁਲੇਟਿਨ',
    summary: 'ਹਵਾ ਵਿਚ 78% ਨਮੀ ਅਤੇ 65% ਮੀਂਹ ਦੀ ਸੰਭਾਵਨਾ ਕਾਰਨ ਅਗਲੇ 48 ਘੰਟੇ ਫਸਲਾਂ ਦੀਆਂ ਉੱਲੀ ਬਿਮਾਰੀਆਂ ਲਈ ਨਾਜ਼ੁਕ ਹਨ।',
    actionPoints: [
      'ਜੇਕਰ ਅਗਲੇ 3 ਘੰਟਿਆਂ ਵਿੱਚ ਮੀਂਹ ਪੈਣ ਦੀ ਉਮੀਦ ਹੈ ਤਾਂ ਕੋਈ ਵੀ ਸਪਰੇਅ ਨਾ ਕਰੋ, ਦਵਾਈ ਧੁਲ ਜਾਵੇਗੀ।',
      'ਟਮਾਟਰ ਅਤੇ ਝੋਨੇ ਵਿੱਚ ਪੱਤਿਆਂ ਤੇ ਕਾਲੇ ਧੱਬਿਆਂ ਦੀ ਰੋਜ਼ਾਨਾ ਜਾਂਚ ਕਰੋ।',
      'ਖੇਤਾਂ ਵਿੱਚੋਂ ਵਾਧੂ ਪਾਣੀ ਕੱਢਣ ਲਈ ਖਾਲਾਂ ਅਤੇ ਨਾਲੀਆਂ ਨੂੰ ਸਾਫ਼ ਕਰੋ।',
      'ਮੰਡੀ ਵਿੱਚ ਕਣਕ ਦੇ ਭਾਅ ਵਧਣ ਦੇ ਆਸਾਰ ਹਨ, ਮਾਲ ਵੇਚਣ ਵਿੱਚ ਕਾਹਲੀ ਨਾ ਕਰੋ।'
    ],
    voiceScript: 'ਕਿਸਾਨ ਵੀਰੋ ਧਿਆਨ ਦਿਓ: ਵੱਧ ਨਮੀ ਅਤੇ ਮੀਂਹ ਕਾਰਨ ਫਸਲਾਂ ਵਿੱਚ ਉੱਲੀ ਰੋਗਾਂ ਦਾ ਖਤਰਾ ਵਧ ਗਿਆ ਹੈ। ਮੀਂਹ ਤੋਂ ਪਹਿਲਾਂ ਮਹਿੰਗੀਆਂ ਖਾਦਾਂ ਜਾਂ ਸਪਰੇਅ ਨਾ ਕਰੋ। ਖੇਤਾਂ ਵਿੱਚੋਂ ਪਾਣੀ ਦੀ ਨਿਕਾਸੀ ਦਾ ਪੂਰਾ ਪ੍ਰਬੰਧ ਰੱਖੋ।',
    badge: 'ਪੀ.ਏ.ਯੂ ਪ੍ਰਮਾਣਿਤ ਸਲਾਹ'
  },
  mr: {
    heroTitle: 'दैनिक कृषी सल्ला बुलेटीन (अॅग्रीपल्स वाणी)',
    summary: 'हवेतील आर्द्रता (७८%) आणि पावसाची शक्यता (६५%) असल्याने पुढील ४८ तास पिकांवर बुरशी व किडींचा प्रादुर्भाव वाढू शकतो.',
    actionPoints: [
      'पुढील ३ तासांत पाऊस पडण्याची शक्यता असल्यास कोणत्याही कीटकनाशकाची फवारणी करू नका.',
      'टोमॅटो आणि कांदा पिकांवर करपा रोगाची लक्षणे आढळल्यास तात्काळ जैविक बुरशीनाशक वापरा.',
      'पाण्याचा निचरा होण्यासाठी शेतातील सऱ्या आणि चर त्वरित मोकळे करा.',
      'बाजार समितीत शेतमालाचे दर वधारत असल्याने मालाची साठवणूक फायद्याची ठरेल.'
    ],
    voiceScript: 'शेतकरी मित्रांनो: जास्त आर्द्रता व पावसामुळे पिकांवर करपा आणि कीड वाढण्याची शक्यता आहे. पावसापूर्वी खत आणि औषध फवारणी टाळा. शेतात पाणी साचणार नाही याची दक्षता घ्या.',
    badge: 'कृषी विद्यापीठ सल्लागार'
  },
  es: {
    heroTitle: 'Boletín Diario de Alerta Agroclimática',
    summary: 'La alta humedad relativa (78%) junto con un 65% de probabilidad de lluvia hace que las próximas 48 horas sean críticas para la espora fúngica.',
    actionPoints: [
      'Posponga la fumigación química si se prevén precipitaciones en las próximas 3 horas.',
      'Inspeccione hojas inferiores de tomate y hortalizas por manchas de tizón tardío.',
      'Revise zanjas de drenaje perimetrales para evitar inundaciones en las raíces.',
      'Mantenga granos almacenados: las tendencias del mercado proyectan alzas del 4.2%.'
    ],
    voiceScript: 'Atención agricultor: La alta humedad y lluvias inminentes elevan el riesgo de tizón y plagas. No aplique fertilizantes solubles antes de la lluvia. Asegure drenajes limpios en parcelas hoy mismo.',
    badge: 'Asesoría Certificada FAO'
  }
};

// APMC Mandi Market Price Trends with Sparklines
export const MARKET_COMMODITIES = [
  {
    name: 'Wheat (Sharbati/Mill)',
    unit: '₹ / Quintal',
    price: 2420,
    change: '+4.2%',
    trend: 'up',
    trendData: [2280, 2310, 2300, 2350, 2380, 2400, 2420],
    mandi: 'Khanna Mandi, PB',
    recommendation: 'HOLD — Strong institutional procurement demand ahead.'
  },
  {
    name: 'Tomato (Hybrid Red)',
    unit: '₹ / Quintal',
    price: 3150,
    change: '-2.1%',
    trend: 'down',
    trendData: [3400, 3350, 3380, 3250, 3200, 3180, 3150],
    mandi: 'Pimpalgaon Mandi, MH',
    recommendation: 'SELL 50% — Inflow arrivals surge expected over weekend.'
  },
  {
    name: 'Basmati Rice (1121)',
    unit: '₹ / Quintal',
    price: 3840,
    change: '+1.8%',
    trend: 'up',
    trendData: [3700, 3720, 3750, 3780, 3800, 3820, 3840],
    mandi: 'Karnal Mandi, HR',
    recommendation: 'HOLD — Export parity firming up.'
  },
  {
    name: 'Cotton (Medium Staple)',
    unit: '₹ / Quintal',
    price: 7200,
    change: '+3.5%',
    trend: 'up',
    trendData: [6850, 6900, 6950, 7050, 7100, 7150, 7200],
    mandi: 'Guntur APMC, AP',
    recommendation: 'OPTIMAL SELL — Peak seasonal export index reached.'
  },
  {
    name: 'Red Onion (Garva Quality)',
    unit: '₹ / Quintal',
    price: 1850,
    change: '+5.7%',
    trend: 'up',
    trendData: [1650, 1680, 1720, 1740, 1780, 1810, 1850],
    mandi: 'Lasalgaon Mandi, MH',
    recommendation: 'HOLD — Storage stocks drying out, prices poised for jump.'
  }
];

// Quick Farmer Q&A prompts for Multilingual Voice Assistant
export const FARMER_FAQ_PROMPTS = [
  {
    question: 'Can I spray pesticide today with 65% rain risk?',
    answer: 'No, spraying is strongly discouraged today. Rain within 4-6 hours washes away the pesticide deposit into the soil, causing financial loss and groundwater contamination. Wait for a clear 6-hour dry window.',
    voiceText: 'Spraying is strongly discouraged today. High rain risk will wash away expensive chemical deposits into the soil. Please wait for a dry 6 hour window.'
  },
  {
    question: 'How to protect seedlings from upcoming night cold inversion?',
    answer: 'Apply a light surface irrigation around 5:00 PM. Wet soil retains and radiates latent heat throughout the cold night. Alternatively, arrange smoky crop residue smoulders on the windward side around 3:30 AM.',
    voiceText: 'Apply light evening irrigation at five PM. Moist soil retains ground heat throughout the cold night. Also cover vulnerable seedbeds with mulch or straw.'
  },
  {
    question: 'What is the organic substitute for Mancozeb for Late Blight?',
    answer: 'Use Copper Oxychloride 50 WP (certified organic formulation) at 2.5 grams per litre, or a bio-fungicide slurry of Trichoderma viride enriched with neem leaf decoction.',
    voiceText: 'For organic late blight control, spray copper oxychloride at two point five grams per litre or Trichoderma viride enriched with neem decoction.'
  }
];
