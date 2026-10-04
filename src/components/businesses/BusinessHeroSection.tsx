import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStore,
  faCalendarCheck,
  faChartLine,
  faStar,
  faCircleCheck,
  faSliders,
  faBell,
  faLocationDot,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

/**
 * BUSINESS HERO SECTION
 * 
 * Recreates the exact layout and content from the approved reference (business.jpg):
 * - Eyebrow: 'BUSINESS'
 * - Headline: 'More customers. More growth. More impact.' (with 'More growth.' in solid orange)
 * - Copy: 'Valnora connects businesses to thousands of customers actively looking for trusted services.
 *          List your business, showcase what you do, and grow your customer base effortlessly.'
 * - 3 Value Pillars:
 *    1. Get Discovered: 'Be visible to customers in your area.'
 *    2. Get Bookings: 'Receive bookings and manage jobs easily.'
 *    3. Grow Your Business: 'Build reviews, repeat customers and scale.'
 * - Hero Visual: Dual-Device Split Screen (Valnora Business Portal Dashboard Laptop + Mobile Storefront)
 */
export const BusinessHeroSection: React.FC = () => {
  return (
    <section
      id="business-hero-section"
      className="relative w-full bg-[#070707] pt-4 lg:pt-4 pb-3 overflow-hidden z-10"
      aria-label="Valnora for Businesses Hero"
    >
      <div
        id="business-hero-container"
        className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
          
          {/* LEFT COLUMN: Narrative & 3 Value Pillars */}
          <div
            id="business-hero-copy"
            className="lg:col-span-4 flex flex-col items-start z-10"
          >
            {/* Eyebrow */}
            <span
              id="business-hero-eyebrow"
              className="text-[#FF6500] text-[10px] font-semibold tracking-[0.14em] uppercase mb-4 select-none"
            >
              BUSINESS
            </span>

            {/* Headline */}
            <h1
              id="business-hero-heading"
              className="text-white text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-0.01em] leading-[46px] mb-4"
            >
              More customers.<br />
              <span className="text-[#FF6500]">More growth.</span><br />
              More impact.
            </h1>

            {/* Narrative text */}
            <p
              id="business-hero-description"
              className="text-[#9CA3AF] text-[12.5px] leading-[21px] max-w-[360px] mb-7 font-normal"
            >
              Valnora connects businesses to thousands of customers actively looking for trusted services.
              List your business, showcase what you do, and grow your customer base effortlessly.
            </p>

            {/* 3 Value Pillars Row (from reference image) */}
            <div
              id="business-hero-pillars"
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full"
            >
              {/* Pillar 1 */}
              <div className="flex flex-row items-start gap-2">
                <div className="w-[34px] h-[34px] rounded-md bg-[#0E1012] border border-[#2A1A10] flex items-center justify-center text-[#FF6500] text-xs shrink-0">
                  <FontAwesomeIcon icon={faStore} />
                </div>
                <div>
                  <h3 className="text-white text-[12px] font-semibold mb-0.5">
                    Get Discovered
                  </h3>
                  <p className="text-[#9CA3AF] text-[10.5px] leading-[16px]">
                    Be visible to customers in your area.
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex flex-row items-start gap-2">
                <div className="w-[34px] h-[34px] rounded-md bg-[#0E1012] border border-[#2A1A10] flex items-center justify-center text-[#FF6500] text-xs shrink-0">
                  <FontAwesomeIcon icon={faCalendarCheck} />
                </div>
                <div>
                  <h3 className="text-white text-[12px] font-semibold mb-0.5">
                    Get Bookings
                  </h3>
                  <p className="text-[#9CA3AF] text-[10.5px] leading-[16px]">
                    Receive bookings and manage jobs easily.
                  </p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="flex flex-row items-start gap-2">
                <div className="w-[34px] h-[34px] rounded-md bg-[#0E1012] border border-[#2A1A10] flex items-center justify-center text-[#FF6500] text-xs shrink-0">
                  <FontAwesomeIcon icon={faChartLine} />
                </div>
                <div>
                  <h3 className="text-white text-[12px] font-semibold mb-0.5">
                    Grow Your Business
                  </h3>
                  <p className="text-[#9CA3AF] text-[10.5px] leading-[16px]">
                    Build reviews, repeat customers and scale.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: dual-device mockup (laptop dashboard + phone storefront), taken from the design reference */}
          <div id="business-hero-visual" className="lg:col-span-8 relative flex justify-end items-start">
            <img
              src="/assets/ref/business-devices.jpg"
              alt="Valnora business dashboard on a laptop and the Bright Auto Care storefront on a phone"
              className="w-full max-w-[760px] h-auto select-none lg:-mb-[96px] relative z-30 lg:mr-[52px]"
              style={{ maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 100%)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
