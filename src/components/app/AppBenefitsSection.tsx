import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCheck,
  faCalendarDays,
  faComments,
  faLock,
  faPercent,
  faFolderTree,
} from '@fortawesome/free-solid-svg-icons';

interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: typeof faUserCheck;
}

const USER_BENEFITS: BenefitItem[] = [
  {
    id: 'trusted-pros',
    title: 'Trusted Professionals',
    description: 'Every specialist is identity-verified and credential-checked before joining the Valnora network.',
    icon: faUserCheck,
  },
  {
    id: 'convenient-booking',
    title: 'Convenient Booking',
    description: 'Schedule appointments on your terms with real-time availability and immediate confirmations.',
    icon: faCalendarDays,
  },
  {
    id: 'direct-communication',
    title: 'Direct Communication',
    description: 'Chat directly with your technician or artisan without middleman delays or confusing handoffs.',
    icon: faComments,
  },
  {
    id: 'secure-transactions',
    title: 'Secure Transactions',
    description: 'Funds remain protected in verified escrow until you personally inspect and confirm satisfactory completion.',
    icon: faLock,
  },
  {
    id: 'cashback-rewards',
    title: 'Cashback & Rewards',
    description: 'Every completed service returns real loyalty points and cash credits to apply on future jobs.',
    icon: faPercent,
  },
  {
    id: 'centralized-management',
    title: 'Centralized Management',
    description: 'Keep invoices, warranties, scheduled dates, and service records organized in one clean dashboard.',
    icon: faFolderTree,
  },
];

/**
 * USER BENEFITS SECTION
 * 
 * Compact, high-contrast grid highlighting 6 essential user benefits:
 * 1. Trusted professionals
 * 2. Convenient booking
 * 3. Direct communication
 * 4. Secure transactions
 * 5. Cashback/rewards
 * 6. Centralized service management
 */
export const AppBenefitsSection: React.FC = () => {
  return (
    <section
      id="user-benefits"
      className="relative w-full bg-[#070707] py-14 sm:py-20 z-10 border-t border-[#1E2227]/40"
      aria-label="Razorbill User Benefits"
    >
      <div
        id="benefits-container"
        className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-[54px]"
      >
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span
            id="benefits-eyebrow"
            className="text-[#FF6500] text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3 select-none"
          >
            WHY RAZORBILL
          </span>
          <h2
            id="benefits-heading"
            className="text-white text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight leading-[1.15] mb-4"
          >
            Built around confidence and peace of mind.
          </h2>
          <p
            id="benefits-subtitle"
            className="text-[#9CA3AF] text-xs sm:text-sm leading-relaxed"
          >
            Experience a modern service marketplace where both clients and skilled workers thrive with zero ambiguity.
          </p>
        </div>

        {/* 6 Benefit Cards */}
        <div
          id="benefits-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {USER_BENEFITS.map((benefit) => (
            <div
              key={benefit.id}
              id={`benefit-card-${benefit.id}`}
              className="bg-[#0E1012] border border-[#1E2227] rounded-xl p-6 flex flex-col hover:border-[#FF6500]/40 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#070707] border border-[#1E2227] flex items-center justify-center text-[#FF6500] text-sm mb-4 group-hover:border-[#FF6500]/50 transition-colors shrink-0">
                <FontAwesomeIcon icon={benefit.icon} />
              </div>
              <h3
                id={`benefit-title-${benefit.id}`}
                className="text-white text-base font-bold tracking-tight mb-2"
              >
                {benefit.title}
              </h3>
              <p
                id={`benefit-desc-${benefit.id}`}
                className="text-[#9CA3AF] text-xs sm:text-[13px] leading-relaxed font-normal"
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
