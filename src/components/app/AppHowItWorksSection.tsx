import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faCalendarCheck,
  faComments,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';

interface Step {
  number: string;
  title: string;
  description: string;
  icon: typeof faMagnifyingGlass;
}

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'Browse verified categories or search precisely for the skilled professional your project requires.',
    icon: faMagnifyingGlass,
  },
  {
    number: '02',
    title: 'Book',
    description: 'Compare profiles, review ratings, inspect verified skills, and select a time slot that suits your schedule.',
    icon: faCalendarCheck,
  },
  {
    number: '03',
    title: 'Connect',
    description: 'Directly chat with your selected provider, send photos, confirm details, and track progress effortlessly.',
    icon: faComments,
  },
  {
    number: '04',
    title: 'Pay & Earn',
    description: 'Release payments securely once the job is completed to your satisfaction and automatically earn cashback.',
    icon: faWallet,
  },
];

/**
 * HOW IT WORKS SECTION
 * 
 * Simple, elegant 4-step user journey:
 * 01 — Discover
 * 02 — Book
 * 03 — Connect
 * 04 — Pay & Earn
 */
export const AppHowItWorksSection: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="relative w-full bg-[#070707] py-14 sm:py-20 z-10 border-t border-[#1E2227]/40"
      aria-label="How Razorbill Works"
    >
      <div
        id="how-it-works-container"
        className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-[54px]"
      >
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span
            id="how-it-works-eyebrow"
            className="text-[#FF6500] text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3 select-none"
          >
            HOW IT WORKS
          </span>
          <h2
            id="how-it-works-heading"
            className="text-white text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight leading-[1.15] mb-4"
          >
            Four simple steps to get things done.
          </h2>
          <p
            id="how-it-works-subtitle"
            className="text-[#9CA3AF] text-xs sm:text-sm leading-relaxed"
          >
            From discovery to job sign-off and reward crediting, Razorbill keeps the entire journey seamless.
          </p>
        </div>

        {/* 4 Step Cards */}
        <div
          id="steps-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STEPS.map((step) => (
            <div
              key={step.number}
              id={`step-card-${step.number}`}
              className="relative bg-[#0E1012] border border-[#1E2227] rounded-2xl p-6 flex flex-col justify-between group hover:border-[#FF6500]/40 transition-all duration-200"
            >
              <div>
                {/* Step Number & Icon Row */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[#FF6500] text-sm font-extrabold tracking-wider">
                    {step.number}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-[#070707] border border-[#1E2227] flex items-center justify-center text-[#FF6500] text-xs group-hover:border-[#FF6500]/50 transition-colors">
                    <FontAwesomeIcon icon={step.icon} />
                  </div>
                </div>

                {/* Title */}
                <h3
                  id={`step-title-${step.number}`}
                  className="text-white text-base sm:text-lg font-bold tracking-tight mb-2.5"
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  id={`step-desc-${step.number}`}
                  className="text-[#9CA3AF] text-xs sm:text-[13px] leading-relaxed font-normal"
                >
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#1E2227]/40 text-[11px] text-[#9CA3AF]/60 flex items-center justify-between">
                <span>Step {step.number}</span>
                <span className="text-[#FF6500] opacity-0 group-hover:opacity-100 transition-opacity">
                  Ready →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
