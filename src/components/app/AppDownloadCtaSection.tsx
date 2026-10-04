import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons';
import { getStoreLink } from '../../config/appLinks.ts';

/**
 * FINAL DOWNLOAD SECTION
 * 
 * Closes the page with the strong download call to action:
 * - Headline: 'Your next service is just a tap away.'
 * - Supporting text
 * - Dual official-style store buttons linking to centralized config (Google Play & App Store)
 */
export const AppDownloadCtaSection: React.FC = () => {
  return (
    <section
      id="download"
      className="relative w-full bg-[#070707] py-16 sm:py-24 z-10 border-t border-[#1E2227]/40 scroll-mt-16"
      aria-label="Download Razorbill App"
    >
      <div
        id="download-cta-container"
        className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-[54px]"
      >
        <div
          id="download-cta-card"
          className="relative bg-[#0E1012] border border-[#1E2227] rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden text-center shadow-2xl"
        >
          {/* Ambient subtle warm glow */}
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FF6500]/15 rounded-full blur-[100px] pointer-events-none select-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            {/* Eyebrow */}
            <span
              id="download-eyebrow"
              className="text-[#FF6500] text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-4 select-none"
            >
              GET STARTED TODAY
            </span>

            {/* Headline */}
            <h2
              id="download-heading"
              className="text-white text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight leading-[1.15] mb-4"
            >
              Your next service is just a tap away.
            </h2>

            {/* Subtitle */}
            <p
              id="download-subtitle"
              className="text-[#9CA3AF] text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 max-w-xl font-normal"
            >
              Download Razorbill for iOS or Android. Connect with verified local professionals, schedule with upfront availability, and unlock rewards on every completed job.
            </p>

            {/* Dual Store Buttons */}
            <div
              id="download-store-buttons"
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
            >
              {/* Google Play Button */}
              <a
                id="cta-download-google-play"
                href={getStoreLink('googlePlay')}
                className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-3.5 bg-[#070707] hover:bg-[#121417] text-white border border-[#1E2227] hover:border-[#FF6500]/50 px-6 py-3.5 rounded-xl transition-all duration-150 select-none group"
              >
                <FontAwesomeIcon
                  icon={faGooglePlay}
                  className="text-[#FF6500] text-2xl group-hover:scale-105 transition-transform shrink-0"
                />
                <div className="flex flex-col text-left">
                  <span className="text-[#9CA3AF] text-[10px] uppercase tracking-wider font-semibold leading-none">
                    GET IT ON
                  </span>
                  <span className="text-white text-sm font-bold leading-tight mt-1">
                    Google Play
                  </span>
                </div>
              </a>

              {/* Apple App Store Button */}
              <a
                id="cta-download-app-store"
                href={getStoreLink('appStore')}
                className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-3.5 bg-[#070707] hover:bg-[#121417] text-white border border-[#1E2227] hover:border-[#FF6500]/50 px-6 py-3.5 rounded-xl transition-all duration-150 select-none group"
              >
                <FontAwesomeIcon
                  icon={faApple}
                  className="text-white text-2xl group-hover:scale-105 transition-transform shrink-0"
                />
                <div className="flex flex-col text-left">
                  <span className="text-[#9CA3AF] text-[10px] uppercase tracking-wider font-semibold leading-none">
                    Download on the
                  </span>
                  <span className="text-white text-sm font-bold leading-tight mt-1">
                    App Store
                  </span>
                </div>
              </a>
            </div>

            {/* Security note */}
            <p className="mt-6 text-[11px] text-[#9CA3AF]/60 select-none">
              Free to download • Verified identities • Escrow protection
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
