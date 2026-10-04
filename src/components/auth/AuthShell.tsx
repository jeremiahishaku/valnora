import React from 'react';

/** Network-mesh backdrop + centered title used by every auth/onboarding page. */
const MESH = (
  <svg className="absolute top-0 right-0 w-[420px] h-[420px] opacity-40 pointer-events-none" viewBox="0 0 420 420" fill="none" aria-hidden="true">
    <g stroke="#6B7A90" strokeWidth="0.8">
      <path d="M420 20 L340 60 L300 140 L380 170 L340 60 M300 140 L230 120 L340 60 M380 170 L420 240 M300 140 L320 240 L420 240 M230 120 L200 60 L340 60 M320 240 L270 330 L380 340 L420 240 M270 330 L200 400" />
    </g>
    <g fill="#8B98AB">
      {[[340,60],[300,140],[380,170],[230,120],[200,60],[320,240],[270,330],[380,340],[420,240]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="2.5" />)}
    </g>
  </svg>
);

export const AuthShell: React.FC<{ title: string; children: React.ReactNode; titleClass?: string; compact?: boolean }> = ({ title, children, titleClass = '', compact = false }) => (
  <section className="relative flex-1 w-full overflow-hidden bg-gradient-to-b from-[#0B0E12] via-[#0A0C10] to-[#08090C]">
    {MESH}
    <div className={`relative z-10 max-w-[1440px] mx-auto px-5 pt-12 pb-12 ${compact ? 'lg:pt-[26px] lg:pb-10' : 'lg:pt-[104px] lg:pb-16'} flex flex-col items-center`}>
      <h1 className={`text-white text-3xl ${compact ? 'lg:text-[36px] lg:mb-[24px]' : 'lg:text-[44px] lg:mb-[50px]'} font-semibold tracking-tight text-center mb-8 ${titleClass}`}>{title}</h1>
      {children}
    </div>
  </section>
);
