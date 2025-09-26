// A component that renders an SVG of a cute robot face with animations.

'use client';

type RobotFaceProps = {
  isListening: boolean;
};

export default function RobotFace({ isListening }: RobotFaceProps) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transform transition-transform duration-500 ease-in-out group-hover:scale-105"
    >
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="robot-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--ring))" />
        </linearGradient>
      </defs>

      {/* Head */}
      <path
        d="M30 40 C30 20, 120 20, 120 40 V110 C120 130, 30 130, 30 110 Z"
        fill="url(#robot-gradient)"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        filter={isListening ? 'url(#glow)' : 'none'}
      >
        <animate
          attributeName="stroke"
          values="hsl(var(--primary));hsl(var(--ring));hsl(var(--primary))"
          dur={isListening ? '2s' : '0s'}
          repeatCount="indefinite"
        />
      </path>

      {/* Eyes */}
      <g>
        <rect x="50" y="55" width="20" height="20" rx="5" fill="hsl(var(--background))">
          <animate
            attributeName="height"
            values={isListening ? '20;5;20' : '20;20;20'}
            dur="2s"
            repeatCount="indefinite"
            begin="0.2s"
          />
          <animate
            attributeName="y"
            values={isListening ? '55;62.5;55' : '55;55;55'}
            dur="2s"
            repeatCount="indefinite"
            begin="0.2s"
          />
        </rect>
        <rect x="80" y="55" width="20" height="20" rx="5" fill="hsl(var(--background))">
          <animate
            attributeName="height"
            values={isListening ? '20;5;20' : '20;20;20'}
            dur="2s"
            repeatCount="indefinite"
            begin="0.3s"
          />
           <animate
            attributeName="y"
            values={isListening ? '55;62.5;55' : '55;55;55'}
            dur="2s"
            repeatCount="indefinite"
            begin="0.3s"
          />
        </rect>
      </g>
      
      {/* Mouth */}
      <path d="M65 100 Q75 110, 85 100" stroke="hsl(var(--background))" strokeWidth="4" strokeLinecap="round">
         <animate
          attributeName="d"
          values={isListening ? "M65 100 Q75 110, 85 100;M65 100 Q75 100, 85 100;M65 100 Q75 110, 85 100" : "M65 100 Q75 110, 85 100"}
          dur="0.8s"
          repeatCount="indefinite"
        />
      </path>

      {/* Antenna */}
      <line x1="75" y1="25" x2="75" y2="15" stroke="hsl(var(--primary))" strokeWidth="2" />
      <circle cx="75" cy="12" r="5" fill="hsl(var(--ring))">
        <animate
          attributeName="r"
          values={isListening ? '5;7;5' : '5;5;5'}
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}
