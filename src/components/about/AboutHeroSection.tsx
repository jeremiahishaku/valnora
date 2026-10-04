import React from 'react';
import { ArrowRight } from 'lucide-react';

/** ABOUT HERO — About-Us.jpg: copy on the left, wide glowing world-map / razorbill art on the right. */
export const AboutHeroSection: React.FC = () => {
  return (
    <section id="about-hero-section" className="relative w-full overflow-hidden border-b border-[#15181C] lg:h-[257px]" aria-label="About Valnora Hero">
      <div
        id="about-hero-visual"
        className="pointer-events-none absolute right-[-10px] top-0 hidden lg:block w-[790px]"
        aria-hidden="true"
      >
        <img
          id="about-world-map-art"
          src="/assets/ref/about-hero-art.jpg"
          alt="Valnora avian emblem over a glowing digital world map"
          className="w-full h-auto select-none"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 14%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 14%, black 100%)',
          }}
        />
      </div>

      <div id="about-hero-container" className="relative px-6 sm:px-8 lg:pl-[44px] lg:pr-6 py-10 lg:py-0 lg:h-full">
        <div id="about-hero-copy" className="flex flex-col items-start justify-center lg:h-full">
          <span id="about-hero-eyebrow" className="text-[#FF6500] text-[9.5px] font-semibold tracking-[0.12em] uppercase mb-[16px] select-none">
            ABOUT US
          </span>
          <h1 id="about-hero-heading" className="text-white text-[32px] lg:text-[34px] font-semibold tracking-[-0.01em] leading-[40px] mb-[14px]">
            The future is human.
            <br />
            The platform is <span className="text-[#FF6500]">Valnora.</span>
          </h1>
          <p id="about-hero-description" className="text-[#9CA3AF] text-[11.5px] leading-[20px] max-w-[300px] mb-[24px]">
            Valnora connects people, empowers professionals, rewards loyalty and helps businesses grow.
          </p>
          <div id="about-hero-ctas" className="flex flex-wrap items-center gap-[26px]">
            <a id="about-hero-primary-cta" href="#mission" className="inline-flex items-center justify-center gap-2 bg-[#FA5A00] hover:bg-[#E05000] text-white font-medium text-[11px] w-[122px] h-[36px] rounded-[4px] transition-colors select-none focus:outline-none focus:ring-2 focus:ring-[#FF6500]">
              <span>Our Mission</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a id="about-hero-secondary-cta" href="#join" className="inline-flex items-center justify-center bg-[#050505] hover:bg-[#101214] text-white border border-[#2A2F36] font-medium text-[11px] w-[126px] h-[36px] rounded-[4px] transition-colors select-none focus:outline-none focus:ring-1 focus:ring-white/20">
              <span>Join Valnora</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
