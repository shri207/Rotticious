import React from 'react';

interface RotticiousLogoProps {
  className?: string;
  variant?: 'white' | 'dark' | 'cream';
  showTagline?: boolean;
}

export const RotticiousLogo: React.FC<RotticiousLogoProps> = ({
  className = 'h-10 w-auto',
  variant = 'white',
  showTagline = false,
}) => {
  const isLight = variant === 'dark';
  const fillColor = isLight ? '#0A0A0B' : '#FFFFFF';
  const particleColor = isLight ? '#27272a' : '#FFFFFF';

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <svg
        viewBox="0 0 420 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
        aria-label="Rotticious Logo"
      >
        {/* Background particle / pixel dust dispersion pattern behind rolling pin */}
        <g opacity="0.85">
          {/* Scatter dots / pixel squares on left side */}
          <rect x="90" y="80" width="4.5" height="4.5" fill={particleColor} opacity="0.6" />
          <rect x="105" y="70" width="5" height="5" fill={particleColor} opacity="0.7" />
          <rect x="115" y="92" width="6" height="6" fill={particleColor} opacity="0.8" />
          <rect x="125" y="60" width="5" height="5" fill={particleColor} opacity="0.5" />
          <rect x="135" y="78" width="7" height="7" fill={particleColor} opacity="0.85" />
          <rect x="145" y="55" width="6" height="6" fill={particleColor} opacity="0.7" />
          <rect x="155" y="42" width="5" height="5" fill={particleColor} opacity="0.6" />
          <rect x="160" y="95" width="8" height="8" fill={particleColor} opacity="0.9" />
          <rect x="170" y="32" width="6" height="6" fill={particleColor} opacity="0.7" />
          <rect x="175" y="115" width="7" height="7" fill={particleColor} opacity="0.8" />
          <rect x="185" y="24" width="5" height="5" fill={particleColor} opacity="0.6" />
          <rect x="190" y="130" width="6" height="6" fill={particleColor} opacity="0.85" />
          <rect x="178" y="145" width="5" height="5" fill={particleColor} opacity="0.6" />

          {/* Scatter dots / pixel squares on right side */}
          <rect x="225" y="25" width="5" height="5" fill={particleColor} opacity="0.6" />
          <rect x="235" y="35" width="6" height="6" fill={particleColor} opacity="0.7" />
          <rect x="245" y="50" width="5" height="5" fill={particleColor} opacity="0.8" />
          <rect x="255" y="68" width="6" height="6" fill={particleColor} opacity="0.85" />
          <rect x="265" y="85" width="7" height="7" fill={particleColor} opacity="0.9" />
          <rect x="275" y="72" width="5" height="5" fill={particleColor} opacity="0.7" />
          <rect x="285" y="90" width="6" height="6" fill={particleColor} opacity="0.8" />
          <rect x="300" y="82" width="5" height="5" fill={particleColor} opacity="0.6" />
          <rect x="315" y="88" width="4.5" height="4.5" fill={particleColor} opacity="0.5" />
          
          <rect x="228" y="132" width="6" height="6" fill={particleColor} opacity="0.7" />
          <rect x="238" y="145" width="5" height="5" fill={particleColor} opacity="0.6" />
          <rect x="248" y="120" width="7" height="7" fill={particleColor} opacity="0.85" />
          <rect x="260" y="105" width="6" height="6" fill={particleColor} opacity="0.8" />

          {/* Extra subtle micro particles */}
          <circle cx="150" cy="110" r="2" fill={particleColor} opacity="0.7" />
          <circle cx="165" cy="70" r="2.5" fill={particleColor} opacity="0.9" />
          <circle cx="250" cy="85" r="2" fill={particleColor} opacity="0.7" />
          <circle cx="265" cy="120" r="2.5" fill={particleColor} opacity="0.8" />
        </g>

        {/* Central Vertical Rolling Pin */}
        <g>
          {/* Top handle */}
          <rect
            x="204"
            y="6"
            width="12"
            height="22"
            rx="6"
            fill={fillColor}
          />
          {/* Main cylindrical rolling body */}
          <rect
            x="193"
            y="32"
            width="34"
            height="116"
            rx="17"
            fill={fillColor}
          />
          {/* Bottom handle */}
          <rect
            x="204"
            y="152"
            width="12"
            height="22"
            rx="6"
            fill={fillColor}
          />
        </g>

        {/* Bubbly Bold 'rotticious' wordmark with crisp outer border and inner shape */}
        <g>
          {/* High-contrast shadow/border mask */}
          <text
            x="210"
            y="102"
            textAnchor="middle"
            dominantBaseline="middle"
            fill={isLight ? '#FFFFFF' : '#0A0A0B'}
            stroke={isLight ? '#FFFFFF' : '#0A0A0B'}
            strokeWidth="16"
            strokeLinejoin="round"
            style={{
              fontFamily: '"Plus Jakarta Sans", "Syne", sans-serif',
              fontWeight: 900,
              fontSize: '54px',
              letterSpacing: '-0.04em',
            }}
          >
            rotticious
          </text>
          
          {/* White outer contour shell */}
          <text
            x="210"
            y="102"
            textAnchor="middle"
            dominantBaseline="middle"
            fill={fillColor}
            stroke={fillColor}
            strokeWidth="6"
            strokeLinejoin="round"
            style={{
              fontFamily: '"Plus Jakarta Sans", "Syne", sans-serif',
              fontWeight: 900,
              fontSize: '54px',
              letterSpacing: '-0.04em',
            }}
          >
            rotticious
          </text>

          {/* Primary crisp text */}
          <text
            x="210"
            y="102"
            textAnchor="middle"
            dominantBaseline="middle"
            fill={fillColor}
            style={{
              fontFamily: '"Plus Jakarta Sans", "Syne", sans-serif',
              fontWeight: 900,
              fontSize: '54px',
              letterSpacing: '-0.04em',
            }}
          >
            rotticious
          </text>
        </g>
      </svg>

      {showTagline && (
        <span
          className={`text-[10px] tracking-[0.25em] uppercase font-semibold mt-1 font-grotesk ${
            isLight ? 'text-zinc-600' : 'text-[#D8D1C5]'
          }`}
        >
          Good Food · Good Coffee · Good Vibes
        </span>
      )}
    </div>
  );
};
