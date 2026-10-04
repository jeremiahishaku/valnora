import React from 'react';
import { SEO } from '../components/common/SEO.tsx';
import { ProfessionalHeroSection } from '../components/professionals/ProfessionalHeroSection.tsx';
import { ProfessionalStepsSection } from '../components/professionals/ProfessionalStepsSection.tsx';
import { ProfessionalCtaBanner } from '../components/professionals/ProfessionalCtaBanner.tsx';

/**
 * FOR PROFESSIONALS PAGE
 * 
 * Recreates the exact full-page composition from the user-approved reference image (professional.jpg):
 * 1. SEO Metadata: Title 'For Professionals | Valnora'
 * 2. Professional Hero Section:
 *    - Headline 'Your skill. Your business. Your opportunity.'
 *    - Left floating pills (Multiple Skills, You Set the Price, Work Your Way)
 *    - Real Professional (Master Electrician with hard hat) & Marcus verified profile card
 *    - Right floating New Booking Request ($120) & David O. Plumber 5.0 ★ testimonial
 * 3. 8-Step Visual Workflow Grid:
 *    - Build Your Profile, Showcase Your Work, Set Your Prices, Get Discovered,
 *      Get Booked, Communicate, Get Paid, Build Your Reputation
 * 4. Professional Conversion Banner:
 *    - Financial independence copy
 *    - 5 trust badges (Verified Badge, Multiple Skills, Set Your Own Prices, Secure Payments, 24/7 Support)
 *    - 'Create Your Profile →' CTA
 */
export const ForProfessionalsPage: React.FC = () => {
  return (
    <div
      id="for-professionals-page-container"
      className="flex-1 flex flex-col w-full bg-[#070707] text-[#9CA3AF] selection:bg-[#FF6500] selection:text-white"
    >
      <SEO
        meta={{
          title: 'For Professionals | Valnora',
          description:
            'Put your skills in front of the people who need them. Build your profile, showcase your work, set your prices, and let customers find and book you on Valnora.',
        }}
      />
      {/* 1. Hero with Real Service Professional, Marcus Profile & Booking Request */}
      <ProfessionalHeroSection />

      {/* 2. 8-Step Interactive Onboarding & Feature Workflow */}
      <ProfessionalStepsSection />

      {/* 3. High-Conversion Trust & Financial Independence Banner */}
      <ProfessionalCtaBanner />
    </div>
  );
};
