import React from 'react';

/**
 * OUR APP HERO — Our-App_Razorbill.jpg: indented copy block (eyebrow, two-line headline,
 * paragraph, Download Now) vertically centred, tilted phone artwork with orange/teal glow on the right.
 * The phone asset is already tilted, so it is not rotated again here.
 */
export const AppHeroSection: React.FC = () => (
  <section
    id="app-hero-section"
    className="relative w-full bg-[#070707] overflow-hidden z-10 lg:h-[690px]"
    aria-label="Our App hero"
  >
    <div
      className="pointer-events-none absolute inset-y-0 right-0 hidden lg:flex items-center justify-center w-[900px]"
      aria-hidden="true"
    >
      <img
        src="/assets/ref/app-phone.jpg"
        alt="Valnora app on a smartphone, tilted, showing the app dashboard"
        className="w-[560px] max-w-none h-auto select-none translate-x-[18px] translate-y-[8px]"
        style={{
          maskImage: 'radial-gradient(ellipse 50% 52% at 50% 50%, black 55%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 50% 52% at 50% 50%, black 55%, transparent 100%)',
        }}
      />
    </div>

    <div id="app-hero-container" className="relative max-w-[1440px] mx-auto px-6 sm:px-8 lg:pl-[152px] lg:pr-14 py-12 lg:py-0 lg:h-full">
      <div id="app-hero-copy" className="flex flex-col items-start justify-center lg:h-full lg:pb-[24px]">
        <span id="app-hero-eyebrow" className="text-[#FF6500]/90 text-[12px] font-normal tracking-[0.14em] uppercase mb-[22px] select-none">
          OUR APP
        </span>
        <h1 id="app-hero-heading" className="text-white text-[40px] sm:text-[46px] lg:text-[50px] font-semibold tracking-[-0.01em] leading-[64px] max-w-[420px] mb-[22px]">
          Discover the Full Ecosystem.
        </h1>
        <p className="text-[#C9CCD1] text-[17px] leading-[28px] max-w-[450px] mb-[36px]">
          Access the complete Valnora suite of services and tools from one powerful app. Manage, transact, and connect with ease.
        </p>
        <button
          type="button"
          id="app-hero-download-cta"
          className="inline-flex items-center justify-center bg-[#FA5A00] hover:bg-[#E05000] text-white text-[15px] font-medium w-[150px] h-[44px] rounded-[5px] transition-colors"
        >
          Download Now
        </button>
      </div>
    </div>
  </section>
);
