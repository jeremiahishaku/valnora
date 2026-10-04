import React from 'react';
import { SEO } from '../components/common/SEO.tsx';
import { HeroSection } from '../components/home/HeroSection.tsx';
import { FlagshipAppSection } from '../components/home/FlagshipAppSection.tsx';
import { WhatWeDoSection } from '../components/home/WhatWeDoSection.tsx';
import { TrustPartnerBar } from '../components/home/TrustPartnerBar.tsx';

/**
 * HOME PAGE — MASTER BUILD
 * 
 * Houses the complete Home Page composition according to home.jpg:
 * 1. HeroSection (compact, text on left, Razorbill visual on right)
 * 2. FlagshipAppSection (integrated across lower bird body)
 * 3. WhatWeDoSection (Technology with purpose + 4 Pillars + Impact Stats)
 * 4. TrustPartnerBar (Trusted by forward-thinking companies + bank marks + socials)
 */
export const HomePage: React.FC = () => {
  return (
    <div
      id="homepage-container"
      className="flex-1 flex flex-col w-full bg-[#070707] text-white selection:bg-[#FA5A00] selection:text-white"
    >
      <SEO
        meta={{
          title: 'Home',
          description:
            'Valnora connects people with trusted service professionals and empowers businesses to grow with Razorbill.',
        }}
      />
      <HeroSection />
      <FlagshipAppSection />
      <WhatWeDoSection />
      <TrustPartnerBar />
    </div>
  );
};
