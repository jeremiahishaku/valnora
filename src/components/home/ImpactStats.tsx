import React from 'react';

const STATS = [
  { value: '10K+', label: 'Verified Professionals' },
  { value: '50K+', label: 'Happy Customers' },
  { value: '120+', label: 'Service Categories' },
  { value: '24/7', label: 'Customer Support' },
];

/** IMPACT STATS — Home.jpg: bordered panel, heading, short orange rule, 2x2 metrics. */
export const ImpactStats: React.FC = () => {
  return (
    <div id="impact-stats-container" className="bg-[#0C0D0F] border border-[#1E2227] rounded-xl px-[26px] pt-[22px] pb-5 h-full lg:h-[206px]">
      <h3 id="impact-stats-heading" className="text-white text-[12.5px] font-medium leading-[20px] mb-[14px]">
        Building a connected world
        <br />
        of opportunities
      </h3>
      <div className="w-[26px] h-[2px] bg-[#FF6500] mb-[16px]" aria-hidden="true" />
      <div id="impact-stats-grid" className="grid grid-cols-2 gap-x-6 gap-y-[14px]">
        {STATS.map((m, i) => (
          <div key={m.label} id={`stat-item-${i + 1}`} className="flex flex-col">
            <span id={`stat-item-${i + 1}-value`} className="text-[#FF6500] font-medium text-[18px] leading-none mb-[6px] select-none">{m.value}</span>
            <span id={`stat-item-${i + 1}-label`} className="text-[#9CA3AF] text-[10px] leading-tight">{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
