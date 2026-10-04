import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faPlay,
  faStar,
  faCircleCheck,
  faLocationDot,
  faBell,
  faHeart,
  faTag,
  faCalendarCheck,
  faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from '../../router/Router.tsx';

/**
 * PROFESSIONAL HERO SECTION
 * 
 * Recreates the exact layout and content from the approved reference (professional.jpg):
 * - Eyebrow: 'FOR PROFESSIONALS'
 * - Headline: 'Your skill. Your business. Your opportunity.' (with 'Your opportunity.' in solid orange)
 * - Copy: 'You don't have to wait for someone to give you a job. Build your profile, showcase your work, set your prices, and let customers find and book you.'
 * - Actions: 'Create Your Profile →' & '► See How It Works'
 * - Left 3 Floating Benefit Pills:
 *    1. Multiple Skills: 'Add and manage multiple skills under one profile.'
 *    2. You Set the Price: 'Set your own prices for the services you offer.'
 *    3. Work Your Way: 'You decide your schedule and grow your business.'
 * - Center Visual:
 *    - Real Service Professional (African Master Electrician with orange hard hat & tool belt)
 *    - Overlaid Verified Profile Card for 'Marcus | Master Electrician' (4.9 ★ 186 reviews, Starting from $80, gallery previews, 'Book Service' button)
 * - Right Column Floating Cards:
 *    - '🔔 New Booking Request' ($120 Electrical Installation with View & Accept buttons)
 *    - Provider Testimonial Card ('David O. | Plumber' with 5.0 ★ rating)
 */
export const ProfessionalHeroSection: React.FC = () => {
  return (
    <section
      id="professional-hero-section"
      className="relative w-full bg-[#070707] pt-3 lg:pt-3 pb-0 overflow-hidden z-10"
      aria-label="Valnora for Professionals Hero"
    >
      <div
        id="professional-hero-container"
        className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[340px_150px_minmax(0,1fr)] gap-6 lg:gap-4 items-start">
          
          {/* LEFT COLUMN: Narrative & Action CTA */}
          <div
            id="professional-hero-copy"
            className="flex flex-col items-start z-10"
          >
            {/* Eyebrow */}
            <span
              id="professional-hero-eyebrow"
              className="text-[#FF6500] text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase mb-3.5 select-none"
            >
              FOR PROFESSIONALS
            </span>

            {/* Headline */}
            <h1
              id="professional-hero-heading"
              className="text-white text-3xl sm:text-4xl lg:text-[41px] font-semibold tracking-[-0.01em] leading-[44px] mb-3"
            >
              Your skill.<br />
              Your business.<br />
              <span className="text-[#FF6500]">Your opportunity.</span>
            </h1>

            {/* Supporting Copy */}
            <p
              id="professional-hero-description"
              className="text-[#D1D5DB] text-sm lg:text-[12.5px] lg:leading-[19px] max-w-lg lg:max-w-[340px] mb-5 lg:mb-6 font-normal"
            >
              You don't have to wait for someone to give you a job. Build your profile, showcase your work, set your prices, and let customers find and book you.
            </p>

            {/* Actions: Primary & Secondary Buttons */}
            <div
              id="professional-hero-buttons"
              className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-4"
            >
              <Link
                id="hero-create-profile-button"
                to="/get-started"
                className="inline-flex items-center justify-center gap-2 bg-[#FA5A00] hover:bg-[#E05000] text-white font-medium text-[12px] w-[158px] h-[44px] rounded-md shadow-sm transition-all duration-150 select-none group focus:outline-none focus:ring-2 focus:ring-[#FF6500]"
              >
                <span>Create Your Profile</span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-xs group-hover:translate-x-0.5 transition-transform"
                />
              </Link>

              <button
                id="hero-see-how-it-works-button"
                type="button"
                onClick={() => {
                  const element = document.getElementById('professional-steps-section');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#0E1012] hover:bg-[#15181D] text-white border border-[#1E2227] hover:border-[#FF6500]/50 font-medium text-xs lg:text-[12px] sm:text-[13.5px] px-5 lg:w-[148px] lg:h-[44px] lg:px-0 lg:py-0 sm:px-6 py-3 rounded-md transition-all duration-150 select-none focus:outline-none"
              >
                <FontAwesomeIcon icon={faPlay} className="text-[#FF6500] text-[10px]" />
                <span>See How It Works</span>
              </button>
            </div>

          </div>


          {/* FEATURE PILLS: sit between copy and portrait */}
          <div className="lg:col-span-1 lg:pt-4 z-20">
            {/* 3 Left Floating Feature Cards (Matching Reference layout) */}
            <div
              id="hero-floating-pills-column"
              className="flex flex-col gap-2 lg:w-[150px] lg:-mr-6"
            >
              <div className="bg-[#0E1012]/80 border border-[#1E2227] rounded-xl p-2 flex items-start gap-2 shadow-md">
                <div className="w-7 h-7 rounded-lg bg-[#FF6500]/15 text-[#FF6500] flex items-center justify-center text-xs shrink-0">
                  <FontAwesomeIcon icon={faLayerGroup} />
                </div>
                <div>
                  <span className="text-white text-xs font-bold block leading-tight">Multiple Skills</span>
                  <span className="text-[#9CA3AF] text-[9px] leading-[12px] block mt-0.5">Add and manage multiple skills under one profile.</span>
                </div>
              </div>

              <div className="bg-[#0E1012]/80 border border-[#1E2227] rounded-xl p-2 flex items-start gap-2 shadow-md">
                <div className="w-7 h-7 rounded-lg bg-[#FF6500]/15 text-[#FF6500] flex items-center justify-center text-xs shrink-0">
                  <FontAwesomeIcon icon={faTag} />
                </div>
                <div>
                  <span className="text-white text-xs font-bold block leading-tight">You Set the Price</span>
                  <span className="text-[#9CA3AF] text-[9px] leading-[12px] block mt-0.5">Set your own prices for the services you offer.</span>
                </div>
              </div>

              <div className="bg-[#0E1012]/80 border border-[#1E2227] rounded-xl p-2 flex items-start gap-2 shadow-md">
                <div className="w-7 h-7 rounded-lg bg-[#FF6500]/15 text-[#FF6500] flex items-center justify-center text-xs shrink-0">
                  <FontAwesomeIcon icon={faCalendarCheck} />
                </div>
                <div>
                  <span className="text-white text-xs font-bold block leading-tight">Work Your Way</span>
                  <span className="text-[#9CA3AF] text-[9px] leading-[12px] block mt-0.5">You decide your schedule and grow your business.</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: portrait, Marcus profile card, booking request and testimonial (from the design reference) */}
          <div id="professional-hero-visual" className="relative flex justify-end items-start">
            <img
              src="/assets/ref/pro-hero-cards.jpg"
              alt="Marcus, a verified master electrician, with a new booking request and a testimonial from David O., plumber"
              className="w-full max-w-[735px] h-auto select-none block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
