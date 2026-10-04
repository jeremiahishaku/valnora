import React from 'react';
import { SEO } from '../components/common/SEO.tsx';
import { BusinessHeroSection } from '../components/businesses/BusinessHeroSection.tsx';
import { BusinessBrandsSection } from '../components/businesses/BusinessBrandsSection.tsx';
import { BusinessCtaBanner } from '../components/businesses/BusinessCtaBanner.tsx';
import { BusinessStatsSection } from '../components/businesses/BusinessStatsSection.tsx';

/**
 * FOR BUSINESSES PAGE
 * 
 * Recreates the exact full-page composition from the user-approved reference image (business.jpg):
 * 1. SEO Metadata: Title 'For Businesses | Valnora'
 * 2. Business Hero Section (Headline, 3 value pillars, dual device laptop portal + mobile storefront)
 * 3. Brands & Retail Rewards Section (FMCG retail composite card, 4 capability pillars)
 * 4. Business Conversion CTA Banner (Orange >> badge, dual action buttons)
 * 5. Factual Statistics Row (5,000+, 150,000+, 4.8/5, 20+)
 */
export const ForBusinessesPage: React.FC = () => {
  return (
    <div
      id="for-businesses-page-container"
      className="flex-1 flex flex-col w-full bg-[#070707] text-[#9CA3AF] selection:bg-[#FF6500] selection:text-white"
    >
      <SEO
        meta={{
          title: 'For Businesses | Valnora',
          description:
            'Grow your business with Valnora. Connect to thousands of customers actively looking for trusted services, receive bookings, and manage jobs easily.',
        }}
      />
      {/* 1. Hero with Dual Device Showcase */}
      <BusinessHeroSection />

      {/* 2. For Brands & Everyday Purchases Rewards Ecosystem */}
      <BusinessBrandsSection />

      {/* 3. High-Conversion CTA Banner */}
      <BusinessCtaBanner />

      {/* 4. Verified Metrics & Statistics */}
      <BusinessStatsSection />
    </div>
  );
};

