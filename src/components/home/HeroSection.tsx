import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlay } from '@fortawesome/free-solid-svg-icons';

/**
 * HOME HERO — matches Home.jpg: copy on the left, oversized Razorbill head
 * bleeding off the right edge and fading into the flagship strip below.
 */
export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="relative w-full bg-[#070707] overflow-hidden z-10 lg:h-[368px]"
      aria-label="Valnora Introduction and Razorbill Showcase"
    >
      {/* Razorbill visual (decorative, desktop) */}
      <div
        id="hero-visual-column"
        className="pointer-events-none absolute inset-y-0 right-0 hidden lg:block w-[860px]"
        aria-hidden="true"
      >
        <img
          id="hero-razorbill-image"
          src="/assets/hero/razorbill.png"
          alt=""
          className="absolute -top-[96px] right-[36px] w-[860px] h-[860px] max-w-none select-none"
          loading="eager"
          decoding="async"
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, black 22%, black 100%), linear-gradient(to bottom, black 0%, black 62%, transparent 96%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 22%, black 100%), linear-gradient(to bottom, black 0%, black 62%, transparent 96%)',
            filter: 'brightness(0.85)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'source-in',
          }}
        />
      </div>

      <div id="hero-content-container" className="relative max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 pt-8 pb-10 lg:pt-[14px] lg:pb-0">
        <div id="hero-copy-column" className="flex flex-col items-start">
          <span
            id="hero-kicker"
            className="text-[#FF6500] text-[11px] font-semibold tracking-[0.16em] uppercase mb-[14px] select-none"
          >
            WELCOME TO VALNORA
          </span>

          <h1
            id="hero-main-heading"
            className="text-white text-[34px] sm:text-[40px] lg:text-[46px] font-semibold tracking-[-0.01em] leading-[58px] mb-[22px]"
          >
            Connecting people<span className="text-[#FF6500]">.</span>
            <br />
            Empowering businesses<span className="text-[#FF6500]">.</span>
          </h1>

          <p
            id="hero-narrative-paragraph"
            className="text-[#9CA3AF] text-[15px] leading-[24px] max-w-[400px] mb-[30px] font-normal"
          >
            Valnora is a technology company building digital solutions that
            connect people with trusted service professionals and empower
            businesses to grow.
          </p>

          <div id="hero-action-group" className="flex flex-wrap items-center gap-5">
            <a
              id="hero-primary-cta"
              href="#razorbill"
              className="inline-flex items-center justify-center gap-2 bg-[#FA5A00] hover:bg-[#E05000] text-white font-medium text-[13px] w-[177px] h-[46px] rounded-md transition-colors duration-150 select-none focus:outline-none focus:ring-2 focus:ring-[#FF6500] focus:ring-offset-2 focus:ring-offset-[#070707]"
            >
              <span>Discover Razorbill</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-[11px]" />
            </a>

            <button
              type="button"
              id="hero-secondary-action"
              className="inline-flex items-center gap-3 text-white hover:text-[#FA5A00] transition-colors duration-150 cursor-pointer group focus:outline-none"
              aria-label="Watch Overview"
            >
              <span
                id="hero-play-icon-badge"
                className="w-[38px] h-[38px] rounded-full bg-[#0B0B0C] border border-[#2A2F36] text-white flex items-center justify-center select-none"
              >
                <FontAwesomeIcon icon={faPlay} className="text-[10px] ml-0.5" />
              </span>
              <span className="text-[12px] font-medium select-none">Watch Overview</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
