import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarCheck,
  faCommentDots,
  faShieldHalved,
  faCoins,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: typeof faCalendarCheck;
  points: string[];
}

const CORE_FEATURES: FeatureCard[] = [
  {
    id: 'book-service',
    title: 'Book Any Service',
    description: 'Find and book trusted service professionals for your home, vehicle, or personal projects with clear upfront availability.',
    icon: faCalendarCheck,
    points: ['Real-time calendar scheduling', 'Verified ratings & qualifications', 'Transparent service scopes'],
  },
  {
    id: 'communication',
    title: 'Easy Communication',
    description: 'Communicate directly with service providers, share job photos, request quotes, and receive instant status updates.',
    icon: faCommentDots,
    points: ['In-app direct messaging', 'Photo & detail sharing', 'Live booking notifications'],
  },
  {
    id: 'secure-payments',
    title: 'Secure Payments',
    description: 'Make transactions with confidence through a secure escrow payment architecture where funds are released upon job completion.',
    icon: faShieldHalved,
    points: ['Encrypted transactions', 'Milestone-based release', 'Digital receipts & invoices'],
  },
  {
    id: 'cashback-rewards',
    title: 'Cashback & Rewards',
    description: 'Earn cashback and loyalty rewards on eligible service bookings, redeemable automatically toward future requests.',
    icon: faCoins,
    points: ['Automatic loyalty points', 'Direct credit on completed jobs', 'Exclusive member discounts'],
  },
];

/**
 * CORE FEATURES SECTION
 * 
 * Communicates the 4 pillar capabilities of Razorbill:
 * 1. Book Any Service
 * 2. Easy Communication
 * 3. Secure Payments
 * 4. Cashback & Rewards
 */
export const AppFeaturesSection: React.FC = () => {
  return (
    <section
      id="features"
      className="relative w-full bg-[#070707] py-14 sm:py-20 z-10 border-t border-[#1E2227]/40 scroll-mt-20"
      aria-label="Core Razorbill Capabilities"
    >
      <div
        id="features-container"
        className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-[54px]"
      >
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span
            id="features-eyebrow"
            className="text-[#FF6500] text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3 select-none"
          >
            POWERFUL FEATURES
          </span>
          <h2
            id="features-heading"
            className="text-white text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight leading-[1.15] mb-4"
          >
            Engineered for speed, trust, and simplicity.
          </h2>
          <p
            id="features-subtitle"
            className="text-[#9CA3AF] text-xs sm:text-sm leading-relaxed"
          >
            Every feature in Razorbill is built to eliminate friction between having a job to do and getting it finished safely.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div
          id="features-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CORE_FEATURES.map((feature) => (
            <div
              key={feature.id}
              id={`feature-card-${feature.id}`}
              className="bg-[#0E1012] border border-[#1E2227] hover:border-[#FF6500]/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 group"
            >
              <div>
                {/* Feature Icon */}
                <div
                  id={`feature-icon-${feature.id}`}
                  className="w-11 h-11 rounded-xl bg-[#070707] border border-[#1E2227] flex items-center justify-center text-[#FF6500] text-base mb-5 group-hover:border-[#FF6500]/40 group-hover:scale-105 transition-all"
                >
                  <FontAwesomeIcon icon={feature.icon} />
                </div>

                {/* Title */}
                <h3
                  id={`feature-title-${feature.id}`}
                  className="text-white text-base sm:text-lg font-bold tracking-tight mb-2.5"
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  id={`feature-desc-${feature.id}`}
                  className="text-[#9CA3AF] text-xs sm:text-[13px] leading-relaxed mb-5 font-normal"
                >
                  {feature.description}
                </p>
              </div>

              {/* Bullet Points */}
              <ul className="pt-4 border-t border-[#1E2227]/60 space-y-2 text-xs text-[#9CA3AF]">
                {feature.points.map((pt, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheck} className="text-[#FF6500] text-[10px] shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
