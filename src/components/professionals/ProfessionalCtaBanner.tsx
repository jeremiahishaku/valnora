import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faCircleCheck,
  faLayerGroup,
  faTag,
  faShieldHalved,
  faHeadset,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from '../../router/Router.tsx';

/**
 * PROFESSIONAL CONVERSION & TRUST BANNER
 * 
 * Recreates the exact bottom conversion card from the reference image (professional.jpg):
 * - Left: Trend Icon + Headline:
 *    - 'Turn your skill into financial independence.'
 *    - 'You have the skill. We give you the platform. You build your future.'
 * - Center 5 Trust Badges:
 *    - Verified Professional Badge
 *    - Multiple Skills
 *    - Set Your Own Prices
 *    - Secure Payments
 *    - 24/7 Support
 * - Right Action:
 *    - 'Ready to grow your business?'
 *    - 'Create Your Profile →' (solid #FA5A00 button)
 *    - "It's free to get started"
 */
export const ProfessionalCtaBanner: React.FC = () => {
  return (
    <section
      id="professional-cta-banner-section"
      className="relative w-full bg-[#070707] py-1 z-10"
      aria-label="Valnora for Professionals Conversion & Trust"
    >
      <div
        id="professional-cta-container"
        className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14"
      >
        <div
          id="professional-cta-card"
          className="relative grid grid-cols-1 lg:grid-cols-[934px_1fr] gap-[6px] lg:h-[106px]"
        >
          {/* Subtle orange ambient glow */}
          <div
            className="absolute -right-10 -bottom-10 w-72 h-72 bg-[#FF6500]/10 rounded-full blur-[100px] pointer-events-none select-none"
            aria-hidden="true"
          />

          <div className="contents">
            
            <div className="bg-[#0A0B0C] border border-[#2A1A10] rounded-xl p-3 lg:px-[30px] flex flex-col lg:flex-row items-center gap-4 lg:gap-0">
            {/* LEFT: Financial Independence Headline */}
            <div className="lg:w-[430px] flex items-center gap-[22px] text-left">
              <div className="w-[62px] h-[62px] rounded-full bg-transparent border border-[#FF6500]/70 flex items-center justify-center text-[#FF6500] text-[26px] shrink-0">
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <div>
                <h3 className="text-white text-[18px] font-medium tracking-tight leading-snug">
                  Turn your skill into financial independence.
                </h3>
                <p className="text-[#D1D5DB] text-[12px] mt-1.5 leading-snug font-normal">
                  You have the skill. We give you the platform. You build your future.
                </p>
              </div>
            </div>

            {/* CENTER: 5 Trust Badges */}
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-2 text-center border-y lg:border-y-0 lg:border-l border-[#2A2F36] py-4 lg:py-0 lg:pl-5 lg:h-[62px] items-center">
              {/* Badge 1 */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 flex items-center justify-center text-[#FF6500] text-[24px] mb-1">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </div>
                <span className="text-[#E5E7EB] text-[10px] font-medium leading-[13px]">
                  Verified Professional Badge
                </span>
              </div>

              {/* Badge 2 */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 flex items-center justify-center text-[#FF6500] text-[24px] mb-1">
                  <FontAwesomeIcon icon={faLayerGroup} />
                </div>
                <span className="text-[#E5E7EB] text-[10px] font-medium leading-[13px]">
                  Multiple Skills
                </span>
              </div>

              {/* Badge 3 */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 flex items-center justify-center text-[#FF6500] text-[24px] mb-1">
                  <FontAwesomeIcon icon={faTag} />
                </div>
                <span className="text-[#E5E7EB] text-[10px] font-medium leading-[13px]">
                  Set Your Own Prices
                </span>
              </div>

              {/* Badge 4 */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 flex items-center justify-center text-[#FF6500] text-[24px] mb-1">
                  <FontAwesomeIcon icon={faShieldHalved} />
                </div>
                <span className="text-[#E5E7EB] text-[10px] font-medium leading-[13px]">
                  Secure Payments
                </span>
              </div>

              {/* Badge 5 */}
              <div className="flex flex-col items-center col-span-2 sm:col-span-1">
                <div className="w-8 h-8 flex items-center justify-center text-[#FF6500] text-[24px] mb-1">
                  <FontAwesomeIcon icon={faHeadset} />
                </div>
                <span className="text-[#E5E7EB] text-[10px] font-medium leading-[13px]">
                  24/7 Support
                </span>
              </div>
            </div>

            </div>
            {/* RIGHT: Conversion CTA */}
            <div className="bg-[#0A0B0C] border border-[#2A1A10] rounded-xl p-3 lg:col-span-1 flex flex-col items-center items-center justify-center text-center">
              <span className="text-white text-[13px] font-medium mb-2 block w-full text-center">
                Ready to grow your business?
              </span>
              <Link
                id="footer-create-profile-button"
                to="/get-started"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#FA5A00] hover:bg-[#E05000] text-white font-medium text-[13px] lg:h-[40px] px-6 py-3 lg:py-0 rounded-md shadow-sm transition-all duration-150 select-none group focus:outline-none focus:ring-2 focus:ring-[#FF6500]"
              >
                <span>Create Your Profile</span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-xs group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
              <span className="text-[#D1D5DB] text-[10px] mt-1.5 font-normal w-full text-center">
                It's free to get started
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
