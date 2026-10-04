import React from 'react';
import { SEO } from '../components/common/SEO.tsx';
import { AboutHeroSection } from '../components/about/AboutHeroSection.tsx';
import { WhyWeExistSection } from '../components/about/WhyWeExistSection.tsx';
import { OurEcosystemSection } from '../components/about/OurEcosystemSection.tsx';
import { GlobalBannerSection } from '../components/about/GlobalBannerSection.tsx';

/**
 * ABOUT US PAGE — MASTER BUILD
 * 
 * Recreates the complete About Us page from about.jpg:
 * 1. AboutHeroSection: 'The future is human. The platform is Valnora.' + digital map
 * 2. WhyWeExistSection: 'Skills are everywhere. Opportunity is not.' + 5 Profession Strips
 * 3. OurEcosystemSection: 'Three sides. One ecosystem.' + 3-node diagram + Built for Impact card
 * 4. GlobalBannerSection: 'Built locally. Designed for the world.' + 4 impact metrics
 */
export const AboutPage: React.FC = () => {
  return (
    <div
      id="about-page-container"
      className="flex-1 flex flex-col w-full bg-[#070707] text-white selection:bg-[#FA5A00] selection:text-white"
    >
      <SEO
        meta={{
          title: 'About Us',
          description:
            'Valnora connects people, empowers professionals, rewards loyalty and helps businesses grow. Built locally. Designed for the world.',
        }}
      />
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-8 lg:px-14">
        <div id="about-frame" className="border-x border-[#15181C]">
          <AboutHeroSection />
          <WhyWeExistSection />
          <OurEcosystemSection />
          <GlobalBannerSection />
        </div>
      </div>
    </div>
  );
};
