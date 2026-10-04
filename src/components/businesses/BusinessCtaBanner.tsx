import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from '../../router/Router.tsx';

/**
 * BUSINESS CTA CONVERSION BANNER
 * 
 * Recreates the exact bottom card from the reference image (business.jpg):
 * - Left Orange Double Chevron badge: '>>'
 * - Headline: 'Ready to grow your business with Valnora?'
 * - Subtitle: 'Join thousands of businesses already winning with Valnora.'
 * - Dual Action Buttons:
 *    - 'Learn More' (card border button)
 *    - 'Get Started →' (solid orange #FA5A00 button)
 */
export const BusinessCtaBanner: React.FC = () => {
  return (
    <section
      id="business-cta-banner-section"
      className="relative w-full bg-[#070707] pt-5 pb-0 z-10"
      aria-label="Join Valnora for Businesses CTA"
    >
      <div
        id="business-cta-container"
        className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14"
      >
        <div
          id="business-cta-card"
          className="relative bg-[#0E1012] border border-[#1E2227] rounded-xl px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl overflow-hidden"
        >
          {/* Subtle warm glow behind */}
          <div
            className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#FF6500]/10 rounded-full blur-[90px] pointer-events-none select-none"
            aria-hidden="true"
          />

          {/* Left: Orange Double Chevron Badge & Copy */}
          <div className="flex items-center gap-5 sm:gap-6 z-10">
            {/* Orange >> Badge */}
            <div
              id="cta-chevron-badge"
              className="w-[52px] h-[52px] rounded-lg bg-[#FA5A00] flex items-center justify-center text-white text-lg sm:text-xl shrink-0 shadow-md select-none"
            >
              <FontAwesomeIcon icon={faAnglesRight} />
            </div>

            {/* Headline & Subtitle */}
            <div className="flex flex-col text-left">
              <h2
                id="cta-banner-heading"
                className="text-white text-[17px] font-semibold leading-snug"
              >
                Ready to grow your business with Valnora?
              </h2>
              <p
                id="cta-banner-subheading"
                className="text-[#9CA3AF] text-[12px] mt-1.5 font-normal"
              >
                Join thousands of businesses already winning with Valnora.
              </p>
            </div>
          </div>

          {/* Right: Dual Buttons (Learn More & Get Started →) */}
          <div
            id="cta-banner-actions"
            className="flex items-center gap-3 sm:gap-4 w-full md:w-auto justify-start md:justify-end shrink-0 z-10"
          >
            {/* Learn More Button */}
            <Link
              id="cta-learn-more-button"
              to="/about"
              className="inline-flex items-center justify-center bg-[#070707] hover:bg-[#15181C] text-white border border-[#1E2227] hover:border-[#FF6500]/40 font-medium text-xs sm:text-[12px] w-[116px] h-[40px] rounded-md transition-all duration-150 select-none focus:outline-none"
            >
              <span>Learn More</span>
            </Link>

            {/* Get Started Button */}
            <Link
              id="cta-get-started-button"
              to="/get-started"
              className="inline-flex items-center justify-center gap-2 bg-[#FA5A00] hover:bg-[#E05000] text-white font-medium text-xs sm:text-[12px] w-[126px] h-[40px] rounded-md shadow-sm transition-all duration-150 select-none group focus:outline-none focus:ring-2 focus:ring-[#FF6500]"
            >
              <span>Get Started</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-xs group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
