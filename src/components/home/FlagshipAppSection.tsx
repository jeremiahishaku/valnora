import React from 'react';
import { ClipboardList, MessageSquareText, Wallet } from 'lucide-react';

const FEATURES = [
  { id: 1, Icon: ClipboardList, title: 'Book Any Service', sub: 'Thousands of trusted professionals near you.' },
  { id: 2, Icon: MessageSquareText, title: 'Easy Communication', sub: 'Chat, share details, and stay updated.' },
  { id: 3, Icon: Wallet, title: 'Secure Payments', sub: 'Pay safely in-app with multiple options.' },
];

/**
 * FLAGSHIP APP STRIP — Home.jpg: one bordered card, brand lockup | description | 3 features,
 * separated by thin vertical dividers.
 */
export const FlagshipAppSection: React.FC = () => {
  return (
    <section id="flagship-app-section" className="relative w-full bg-transparent z-20" aria-label="Our Flagship App - Razorbill">
      <div id="flagship-container" className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
        <div
          id="flagship-card-surface"
          className="bg-[#0C0D0F] border border-[#1E2227] rounded-xl px-5 py-5 lg:px-[16px] lg:py-0 lg:h-[110px]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[300px_290px_1fr_1fr_1fr] gap-5 lg:gap-0 items-center lg:h-full">
            <div id="flagship-brand-lockup" className="flex items-center gap-4 lg:pr-6">
              <img id="flagship-brand-mark" src="/valnora-mark.png" alt="" className="w-[52px] h-[52px] object-contain shrink-0" loading="lazy" decoding="async" />
              <div className="flex flex-col">
                <span id="flagship-eyebrow" className="text-[#FF6500] text-[8px] font-semibold uppercase tracking-[0.14em] leading-none mb-2 select-none">
                  OUR FLAGSHIP APP
                </span>
                <span id="flagship-app-name" className="text-white text-[19px] font-medium uppercase tracking-[0.3em] leading-none select-none">
                  RAZORBILL
                </span>
              </div>
            </div>

            <div id="flagship-description-col" className="lg:border-l lg:border-[#1E2227] lg:h-[64px] lg:flex lg:items-center lg:pl-8 lg:pr-6">
              <p id="flagship-description-text" className="text-[#9CA3AF] text-[11px] leading-[19px] font-normal">
                The all-in-one app for booking services, managing bookings, and earning cashback on every transaction.
              </p>
            </div>

            {FEATURES.map(({ id, Icon, title, sub }) => (
              <div
                key={id}
                id={`flagship-feature-${id}`}
                className="flex items-start gap-3 lg:border-l lg:border-[#1E2227] lg:h-[64px] lg:pl-6 lg:pr-2 lg:items-center"
              >
                <Icon className="text-[#FF6500] w-[26px] h-[26px] shrink-0" strokeWidth={1.4} aria-hidden="true" />
                <div className="flex flex-col">
                  <h3 id={`flagship-feature-${id}-title`} className="text-white text-[11.5px] font-semibold leading-snug mb-1">{title}</h3>
                  <p id={`flagship-feature-${id}-sub`} className="text-[#9CA3AF] text-[10.5px] leading-[17px] max-w-[150px]">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
