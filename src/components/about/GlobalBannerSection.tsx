import React from 'react';
import { Globe } from 'lucide-react';

const STATS = [
  { value: '10K+', label: 'Professionals' },
  { value: '120+', label: 'Categories' },
  { value: '50K+', label: 'Happy Customers' },
  { value: '24/7', label: 'Support' },
];

/** GLOBAL BANNER — About-Us.jpg: bordered strip, globe + headline | description + map | four metrics. */
export const GlobalBannerSection: React.FC = () => {
  return (
    <section id="global-banner-section" className="relative w-full" aria-label="Built locally. Designed for the world.">
      <div className="px-6 sm:px-8 lg:px-[45px] py-5 lg:pt-0 lg:pb-[24px]">
        <div className="relative overflow-hidden bg-[#0A0B0C] border border-[#1A1D21] rounded-lg lg:h-[80px] flex flex-col lg:flex-row lg:items-center gap-5 px-[30px] py-5 lg:py-0">
          <div className="flex items-center gap-[22px] lg:w-[430px] shrink-0">
            <Globe className="text-[#FF6500] w-[46px] h-[46px] shrink-0" strokeWidth={1.2} aria-hidden="true" />
            <h2 className="text-white text-[20px] font-medium leading-tight whitespace-nowrap">
              Built locally. Designed for the <span className="text-[#FF6500]">world.</span>
            </h2>
          </div>
          <p className="relative z-10 lg:border-l lg:border-[#1E2227] lg:pl-[22px] text-[#9CA3AF] text-[10.5px] leading-[17px] max-w-[260px]">
            Valnora is a global platform connecting skills, services and opportunities in every corner of the world.
          </p>
          <img
            src="/assets/ref/about-hero-art.jpg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute hidden lg:block top-[-18px] left-[640px] w-[300px] h-auto opacity-45"
            style={{ maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)' }}
          />
          <div className="relative z-10 flex items-center gap-[34px] lg:ml-auto lg:pr-[10px]">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-white text-[16px] font-medium leading-none mb-[6px]">
                  {s.value.replace(/\+$/, '')}
                  {s.value.endsWith('+') && <span className="text-[#FF6500]">+</span>}
                </span>
                <span className="text-[#9CA3AF] text-[8.5px] leading-none">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
