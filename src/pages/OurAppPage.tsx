import React from 'react';
import { SEO } from '../components/common/SEO.tsx';
import { AppHeroSection } from '../components/app/AppHeroSection.tsx';
import { TrustPartnerBar } from '../components/home/TrustPartnerBar.tsx';
import { AppFeaturesSection } from '../components/app/AppFeaturesSection.tsx';
import { AppHowItWorksSection } from '../components/app/AppHowItWorksSection.tsx';
import { AppDiscoverySection } from '../components/app/AppDiscoverySection.tsx';
import { AppBenefitsSection } from '../components/app/AppBenefitsSection.tsx';
import { AppDownloadCtaSection } from '../components/app/AppDownloadCtaSection.tsx';

/**
 * OUR APP PAGE — RAZORBILL FLAGSHIP
 * 
 * Recreates the complete Our App page for the Razorbill by Valnora platform:
 * 1. SEO: Title 'Razorbill — Our App | Valnora'
 * 2. AppHeroSection: 'Everything you need to get things done.' + Realistic Phone Mockup
 * 3. AppFeaturesSection: 4 core capabilities (Booking, Communication, Escrow, Cashback)
 * 4. AppHowItWorksSection: 4-step progressive timeline
 * 5. AppDiscoverySection: Breadth across verified skilled categories
 * 6. AppBenefitsSection: 6 fundamental user benefits
 * 7. AppDownloadCtaSection: 'Your next service is just a tap away.' with dual store buttons
 */
export const OurAppPage: React.FC = () => {
  return (
    <div
      id="our-app-page-container"
      className="flex-1 flex flex-col w-full bg-[#070707] text-white selection:bg-[#FA5A00] selection:text-white"
    >
      <SEO
        meta={{
          title: 'Razorbill — Our App | Valnora',
          description:
            'Download Razorbill by Valnora. Connect with verified service professionals, manage instant bookings and communication, protect payments, and earn cashback on every completed service.',
        }}
      />
      <AppHeroSection />
      <TrustPartnerBar />
      <AppFeaturesSection />
      <AppHowItWorksSection />
      <AppDiscoverySection />
      <AppBenefitsSection />
      <AppDownloadCtaSection />
    </div>
  );
};
