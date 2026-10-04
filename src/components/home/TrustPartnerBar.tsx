import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXTwitter,
  faLinkedinIn,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

/**
 * TRUST & PARTNER BAR COMPONENT — MASTER BUILD
 * 
 * Recreates the bottom trust bar from home.jpg:
 * - Left: 'TRUSTED BY FORWARD-THINKING COMPANIES'
 * - Center: Partner brand marks (Access, GTCO, FirstBank, Stanbic IBTC, UBA, and more...)
 * - Right: Social icons (X/Twitter, LinkedIn, Instagram)
 */
export const TrustPartnerBar: React.FC = () => {
  return (
    <div
      id="trust-partner-bar"
      className="relative w-full bg-[#070707] border-t border-transparent pt-[18px] pb-[18px] z-10"
      aria-label="Trusted by forward-thinking companies"
    >
      <div
        id="trust-partner-container"
        className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 flex flex-wrap items-center justify-between gap-y-4 gap-x-6"
      >
        {/* LEFT / CENTER: Trust Label & Partner Marks */}
        <div
          id="trust-brands-group"
          className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-3"
        >
          {/* Label */}
          <span
            id="trust-label"
            className="text-[#9CA3AF]/70 text-[8.5px] font-medium uppercase tracking-[0.06em] select-none shrink-0"
          >
            TRUSTED BY FORWARD-THINKING COMPANIES
          </span>

          {/* Partner Brands */}
          <div
            id="partner-logos-strip"
            className="flex items-center gap-5 sm:gap-7 text-[#9CA3AF]/60 select-none flex-wrap"
          >
            {/* Access Bank */}
            <div id="partner-access" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2L2 22h5.5l4.5-9 4.5 9H22L12 2z" />
              </svg>
              <span className="font-semibold text-xs sm:text-[15px] tracking-tight">access</span>
            </div>

            {/* GTCO */}
            <div id="partner-gtco" className="flex items-center gap-1 hover:text-white transition-colors">
              <div className="w-3.5 h-3.5 border border-current rounded-sm flex items-center justify-center text-[7px] font-black">
                G
              </div>
              <span className="font-bold text-xs sm:text-[15px] tracking-tight">GTCO</span>
            </div>

            {/* FirstBank */}
            <div id="partner-firstbank" className="flex items-center gap-1 hover:text-white transition-colors">
              <span className="font-serif italic font-bold text-xs sm:text-[15px] tracking-tight">FirstBank</span>
            </div>

            {/* Stanbic IBTC */}
            <div id="partner-stanbic" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2L4 6v6c0 5.5 3.5 10.7 8 12 4.5-1.3 8-6.5 8-12V6l-8-4z" />
              </svg>
              <span className="font-semibold text-xs sm:text-[12px] tracking-tight">Stanbic IBTC</span>
            </div>

            {/* UBA */}
            <div id="partner-uba" className="flex items-center gap-1 hover:text-white transition-colors">
              <span className="font-black text-xs sm:text-[15px] tracking-wider">UBA</span>
            </div>

            {/* and more... */}
            <span id="partner-and-more" className="text-[11px] text-[#9CA3AF]/40 italic">
              and more...
            </span>
          </div>
        </div>

        {/* RIGHT: Social Media Icons */}
        <div
          id="trust-social-group"
          className="flex items-center gap-4 text-[#9CA3AF]/70 ml-auto select-none"
          aria-label="Social Media Links"
        >
          {/* X / Twitter */}
          <a
            id="social-x"
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors text-xs sm:text-sm"
            aria-label="X (formerly Twitter)"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>

          {/* LinkedIn */}
          <a
            id="social-linkedin"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors text-xs sm:text-sm"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>

          {/* Instagram */}
          <a
            id="social-instagram"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors text-xs sm:text-sm"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  );
};
