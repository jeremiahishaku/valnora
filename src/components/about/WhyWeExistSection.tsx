import React from 'react';
import { ArrowRight } from 'lucide-react';

/** WHY WE EXIST — About-Us.jpg: copy column + the five-profession photo strip (labels baked into the artwork). */
export const WhyWeExistSection: React.FC = () => {
  return (
    <section id="why-we-exist-section" className="relative w-full overflow-hidden border-b border-[#15181C] lg:h-[260px]" aria-label="Why We Exist">
      <div className="px-6 sm:px-8 lg:pl-[44px] lg:pr-0 py-8 lg:py-0 lg:h-full">
        <div className="flex flex-col lg:flex-row lg:h-full lg:items-center">
          <div id="why-we-exist-copy" className="lg:w-[352px] shrink-0 flex flex-col items-start">
            <span id="why-we-exist-eyebrow" className="text-[#FF6500] text-[9px] font-semibold tracking-[0.12em] uppercase mb-[12px] select-none">WHY WE EXIST</span>
            <h2 id="why-we-exist-heading" className="text-white text-[24px] font-semibold tracking-[-0.005em] leading-[29px] mb-[12px]">
              Skills are <span className="text-[#FF6500]">everywhere.</span>
              <br />
              Opportunity is not.
            </h2>
            <p className="text-[#9CA3AF] text-[11px] leading-[17px] max-w-[250px] mb-[12px]">
              Technology and AI are changing the world. But one thing will never change — the value of human skill.
            </p>
            <p className="text-[#9CA3AF] text-[11px] leading-[17px] max-w-[260px] mb-[14px]">
              Valnora exists to give skilled people a platform to showcase their abilities, connect with the right opportunities and build financial freedom doing what they love.
            </p>
            <a id="why-we-exist-link" href="#story" className="inline-flex items-center gap-2 text-[#FF6500] hover:text-white text-[11px] font-medium transition-colors group select-none">
              <span>Our Story</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <div id="why-we-exist-strip" className="mt-6 lg:mt-0 lg:ml-[12px] lg:flex-1 min-w-0 flex items-center">
            <img
              src="/assets/ref/about-pros.jpg"
              alt="Mechanics, artists, electricians, chefs and plumbers"
              className="w-full h-auto select-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 100%)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
