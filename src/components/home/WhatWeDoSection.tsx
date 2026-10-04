import React from 'react';
import { Users, Settings, Wallet, TrendingUp, ArrowRight } from 'lucide-react';
import { ImpactStats } from './ImpactStats.tsx';

const PILLARS = [
  { id: 'connect', Icon: Users, title: 'Connect', text: 'We connect people to verified professionals and trusted businesses in their area.' },
  { id: 'enable', Icon: Settings, title: 'Enable', text: 'We provide digital tools that make it easy to book, communicate, and manage services.' },
  { id: 'reward', Icon: Wallet, title: 'Reward', text: 'We give cashback on every completed booking. Your trust deserves value.' },
  { id: 'grow', Icon: TrendingUp, title: 'Grow', text: 'We help businesses reach more customers and grow with data and technology.' },
];

/**
 * WHAT WE DO — Home.jpg: headline column | 4 tall pillar cards | stats panel.
 */
export const WhatWeDoSection: React.FC = () => {
  return (
    <section id="what-we-do-section" className="relative w-full bg-[#070707] pt-[35px] pb-5 z-10" aria-label="What We Do - Mission and Core Pillars">
      <div id="what-we-do-container" className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_624px_284px] gap-6 items-stretch lg:h-[206px]">
          <div id="what-we-do-intro-col" className="flex flex-col justify-between">
            <div className="pt-[10px]">
              <span id="what-we-do-eyebrow" className="text-[#FF6500] text-[10px] font-semibold uppercase tracking-[0.16em] block mb-[14px] select-none">
                WHAT WE DO
              </span>
              <h2 id="what-we-do-heading" className="text-white text-[24px] font-semibold tracking-[-0.005em] leading-[38px]">
                Technology with purpose<span className="text-[#FF6500]">.</span>
                <br />
                Solutions that create impact<span className="text-[#FF6500]">.</span>
              </h2>
            </div>
            <a id="what-we-do-mission-link" href="#mission" className="inline-flex items-center gap-2 text-white hover:text-[#FF6500] text-[11px] font-medium transition-colors group select-none pb-[22px]">
              <span>Learn more about our mission</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FF6500] transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <div id="what-we-do-pillars-col" className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {PILLARS.map(({ id, Icon, title, text }) => (
              <div key={id} id={`pillar-card-${id}`} className="bg-[#0C0D0F] border border-[#1E2227] rounded-xl px-[14px] pt-[22px] pb-4 flex flex-col">
                <Icon className="text-[#FF6500] w-[26px] h-[26px] mb-[22px]" strokeWidth={1.3} aria-hidden="true" />
                <h3 id={`pillar-${id}-title`} className="text-white text-[12.5px] font-semibold mb-[10px]">{title}</h3>
                <p id={`pillar-${id}-text`} className="text-[#9CA3AF] text-[9.5px] leading-[18px] font-normal">{text}</p>
              </div>
            ))}
          </div>

          <div id="what-we-do-stats-col"><ImpactStats /></div>
        </div>
      </div>
    </section>
  );
};
