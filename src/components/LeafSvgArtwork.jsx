import React from 'react';

/**
 * High-definition botanical SVG illustrations for sample leaves
 * Guaranteed to render instantly without external CDN dependencies or broken images
 */
export const LeafSvgArtwork = ({ type, className = "w-full h-full" }) => {
  if (type === 'tomato-blight') {
    return (
      <svg viewBox="0 0 400 320" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="bgLeafT" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1E3E2B" />
            <stop offset="100%" stopColor="#0E2318" />
          </radialGradient>
          <linearGradient id="leafGradT" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ADE80" />
            <stop offset="50%" stopColor="#22C55E" />
            <stop offset="100%" stopColor="#15803D" />
          </linearGradient>
          <radialGradient id="blightLesion1" cx="40%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#2E1B10" />
            <stop offset="60%" stopColor="#451A03" />
            <stop offset="85%" stopColor="#92400E" />
            <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.8" />
          </radialGradient>
          <radialGradient id="blightLesion2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1C1917" />
            <stop offset="70%" stopColor="#78350F" />
            <stop offset="90%" stopColor="#FDE68A" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
          </radialGradient>
          <filter id="lesionShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <rect width="400" height="320" fill="url(#bgLeafT)" rx="16" />

        {/* Stem */}
        <path d="M 120 300 Q 170 200 200 90" stroke="#166534" strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M 180 180 Q 240 140 280 120" stroke="#166534" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M 160 220 Q 90 190 70 170" stroke="#166534" strokeWidth="4" fill="none" strokeLinecap="round" />

        {/* Terminal Leaf */}
        <path d="M 200 80 Q 260 40 270 120 Q 280 200 200 170 Q 120 180 130 110 Q 140 40 200 80 Z" 
              fill="url(#leafGradT)" opacity="0.95" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))" />
        
        {/* Leaf Veins */}
        <path d="M 200 170 Q 200 120 200 80" stroke="#86EFAC" strokeWidth="2.5" fill="none" opacity="0.7" />
        <path d="M 200 140 Q 230 130 250 135" stroke="#86EFAC" strokeWidth="1.5" fill="none" opacity="0.6" />
        <path d="M 200 120 Q 160 115 145 125" stroke="#86EFAC" strokeWidth="1.5" fill="none" opacity="0.6" />
        <path d="M 200 100 Q 225 90 240 95" stroke="#86EFAC" strokeWidth="1.5" fill="none" opacity="0.6" />

        {/* Right Leaflet */}
        <path d="M 270 120 Q 340 100 350 160 Q 340 210 270 180 Q 240 160 270 120 Z" 
              fill="url(#leafGradT)" opacity="0.9" />

        {/* Left Leaflet */}
        <path d="M 70 170 Q 50 110 110 110 Q 160 130 130 190 Q 90 200 70 170 Z" 
              fill="url(#leafGradT)" opacity="0.88" />

        {/* Late Blight Lesions with Chlorotic Halos (Phytophthora infestans) */}
        <path d="M 210 95 C 240 85 265 110 250 135 C 235 155 215 150 205 130 C 195 115 200 100 210 95 Z" 
              fill="url(#blightLesion1)" filter="url(#lesionShadow)" />
        <ellipse cx="230" cy="115" rx="18" ry="12" fill="#1C1917" opacity="0.85" />
        <ellipse cx="230" cy="115" rx="26" ry="18" fill="none" stroke="#FBBF24" strokeWidth="3" opacity="0.7" strokeDasharray="6 2" />

        <path d="M 140 120 C 160 110 175 130 165 145 C 150 160 135 150 130 138 Z" 
              fill="url(#blightLesion2)" filter="url(#lesionShadow)" />
        
        <circle cx="310" cy="145" r="22" fill="url(#blightLesion1)" />
        <circle cx="310" cy="145" r="14" fill="#0C0A09" opacity="0.9" />

        {/* Diagnostic Overlay Tag */}
        <g transform="translate(18, 22)">
          <rect width="168" height="28" rx="6" fill="#052E16" fillOpacity="0.85" stroke="#F43F5E" strokeWidth="1.5" />
          <circle cx="14" cy="14" r="5" fill="#F43F5E" />
          <text x="26" y="18" fill="#FFF" fontSize="11" fontWeight="700" fontFamily="sans-serif">TOMATO LATE BLIGHT</text>
        </g>
        <g transform="translate(290, 22)">
          <rect width="92" height="28" rx="6" fill="#881337" fillOpacity="0.9" />
          <text x="46" y="18" fill="#FFF" fontSize="11" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">96.8% CONF</text>
        </g>
      </svg>
    );
  }

  if (type === 'healthy-corn') {
    return (
      <svg viewBox="0 0 400 320" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="bgLeafC" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#143422" />
            <stop offset="100%" stopColor="#0B1F14" />
          </radialGradient>
          <linearGradient id="cornGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#15803D" />
            <stop offset="25%" stopColor="#22C55E" />
            <stop offset="50%" stopColor="#86EFAC" />
            <stop offset="75%" stopColor="#22C55E" />
            <stop offset="100%" stopColor="#166534" />
          </linearGradient>
        </defs>

        <rect width="400" height="320" fill="url(#bgLeafC)" rx="16" />

        {/* Arching Healthy Maize Leaf Sheath */}
        <path d="M 50 310 C 120 220 220 120 370 70 C 320 110 240 220 120 320 Z" 
              fill="url(#cornGrad)" filter="drop-shadow(0 6px 10px rgba(0,0,0,0.4))" />

        {/* Central Prominent Midrib */}
        <path d="M 85 315 C 150 200 240 130 370 70" stroke="#DCFCE7" strokeWidth="4.5" fill="none" strokeLinecap="round" opacity="0.95" />

        {/* Fine Parallel Monocot Venation Lines */}
        <path d="M 80 290 C 145 185 230 120 350 78" stroke="#BBF7D0" strokeWidth="1.2" fill="none" opacity="0.5" />
        <path d="M 95 305 C 160 210 245 140 360 85" stroke="#BBF7D0" strokeWidth="1.2" fill="none" opacity="0.5" />
        <path d="M 70 270 C 130 170 210 110 330 75" stroke="#BBF7D0" strokeWidth="1.2" fill="none" opacity="0.4" />
        <path d="M 105 320 C 170 225 255 155 365 92" stroke="#BBF7D0" strokeWidth="1.2" fill="none" opacity="0.4" />

        {/* Dew drops highlighting healthy cuticle */}
        <circle cx="210" cy="145" r="4.5" fill="#E0F2FE" opacity="0.8" />
        <circle cx="212" cy="143" r="1.5" fill="#FFFFFF" />
        <circle cx="270" cy="115" r="3.5" fill="#E0F2FE" opacity="0.8" />
        <circle cx="271" cy="113" r="1.2" fill="#FFFFFF" />

        {/* Diagnostic Overlay Tag */}
        <g transform="translate(18, 22)">
          <rect width="180" height="28" rx="6" fill="#052E16" fillOpacity="0.85" stroke="#10B981" strokeWidth="1.5" />
          <circle cx="14" cy="14" r="5" fill="#10B981" />
          <text x="26" y="18" fill="#FFF" fontSize="11" fontWeight="700" fontFamily="sans-serif">CORN: OPTIMAL VIGOUR</text>
        </g>
        <g transform="translate(290, 22)">
          <rect width="92" height="28" rx="6" fill="#065F46" fillOpacity="0.9" />
          <text x="46" y="18" fill="#FFF" fontSize="11" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">99.2% SAFE</text>
        </g>
      </svg>
    );
  }

  if (type === 'rice-blast') {
    return (
      <svg viewBox="0 0 400 320" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="bgLeafR" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#252F1C" />
            <stop offset="100%" stopColor="#11180C" />
          </radialGradient>
          <linearGradient id="riceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#65A30D" />
            <stop offset="60%" stopColor="#4D7C0F" />
            <stop offset="100%" stopColor="#3F6212" />
          </linearGradient>
          <linearGradient id="blastSpindle" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7F1D1D" />
            <stop offset="30%" stopColor="#B45309" />
            <stop offset="50%" stopColor="#E2E8F0" />
            <stop offset="70%" stopColor="#B45309" />
            <stop offset="100%" stopColor="#7F1D1D" />
          </linearGradient>
        </defs>

        <rect width="400" height="320" fill="url(#bgLeafR)" rx="16" />

        {/* Slender Rice Blade */}
        <path d="M 40 280 C 100 240 220 180 370 80 C 350 120 200 220 70 310 Z" 
              fill="url(#riceGrad)" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))" />

        {/* Central Vein */}
        <path d="M 55 295 C 150 210 250 150 370 80" stroke="#BEF264" strokeWidth="2.5" fill="none" opacity="0.6" />

        {/* Spindle Shaped Rice Blast Lesions (Magnaporthe oryzae) */}
        {/* Lesion 1 - Central Large Diamond Spindle */}
        <path d="M 180 185 Q 210 170 230 175 Q 215 195 180 185 Z" fill="url(#blastSpindle)" stroke="#991B1B" strokeWidth="1.5" />
        <ellipse cx="205" cy="180" rx="9" ry="3.5" fill="#E2E8F0" />

        {/* Lesion 2 */}
        <path d="M 240 145 Q 275 130 295 138 Q 270 155 240 145 Z" fill="url(#blastSpindle)" stroke="#991B1B" strokeWidth="1.5" />
        <ellipse cx="268" cy="141" rx="11" ry="4" fill="#CBD5E1" />

        {/* Lesion 3 */}
        <path d="M 120 225 Q 150 215 165 220 Q 148 234 120 225 Z" fill="url(#blastSpindle)" stroke="#78350F" strokeWidth="1" />
        <ellipse cx="142" cy="223" rx="7" ry="2.5" fill="#E2E8F0" />

        {/* Diagnostic Overlay Tag */}
        <g transform="translate(18, 22)">
          <rect width="168" height="28" rx="6" fill="#052E16" fillOpacity="0.85" stroke="#F43F5E" strokeWidth="1.5" />
          <circle cx="14" cy="14" r="5" fill="#F43F5E" />
          <text x="26" y="18" fill="#FFF" fontSize="11" fontWeight="700" fontFamily="sans-serif">RICE LEAF BLAST</text>
        </g>
        <g transform="translate(290, 22)">
          <rect width="92" height="28" rx="6" fill="#881337" fillOpacity="0.9" />
          <text x="46" y="18" fill="#FFF" fontSize="11" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">94.4% CONF</text>
        </g>
      </svg>
    );
  }

  // Cotton Leaf Curl
  return (
    <svg viewBox="0 0 400 320" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgLeafCot" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2A3B22" />
          <stop offset="100%" stopColor="#14210E" />
        </radialGradient>
        <linearGradient id="cottonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#84CC16" />
          <stop offset="50%" stopColor="#65A30D" />
          <stop offset="100%" stopColor="#4D7C0F" />
        </linearGradient>
      </defs>

      <rect width="400" height="320" fill="url(#bgLeafCot)" rx="16" />

      {/* Palmate Lobed Cotton Leaf with Curled Crumpled Margins */}
      <path d="M 200 240 Q 150 200 130 140 Q 150 90 200 80 Q 250 90 270 140 Q 250 200 200 240 Z" 
            fill="url(#cottonGrad)" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))" />
      
      {/* Thickened Enations and Curled Veins */}
      <path d="M 200 240 L 200 90" stroke="#FBBF24" strokeWidth="4.5" strokeLinecap="round" opacity="0.9" />
      <path d="M 200 170 Q 160 140 140 130" stroke="#FBBF24" strokeWidth="3.5" strokeLinecap="round" opacity="0.85" />
      <path d="M 200 170 Q 240 140 260 130" stroke="#FBBF24" strokeWidth="3.5" strokeLinecap="round" opacity="0.85" />

      {/* Whitefly vectors dots */}
      <circle cx="175" cy="120" r="2.5" fill="#FEF08A" />
      <circle cx="180" cy="115" r="2.5" fill="#FEF08A" />
      <circle cx="225" cy="125" r="2.5" fill="#FEF08A" />

      {/* Diagnostic Overlay Tag */}
      <g transform="translate(18, 22)">
        <rect width="180" height="28" rx="6" fill="#052E16" fillOpacity="0.85" stroke="#F59E0B" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="5" fill="#F59E0B" />
        <text x="26" y="18" fill="#FFF" fontSize="11" fontWeight="700" fontFamily="sans-serif">COTTON LEAF CURL</text>
      </g>
      <g transform="translate(290, 22)">
        <rect width="92" height="28" rx="6" fill="#78350F" fillOpacity="0.9" />
        <text x="46" y="18" fill="#FFF" fontSize="11" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">92.6% CONF</text>
      </g>
    </svg>
  );
};
