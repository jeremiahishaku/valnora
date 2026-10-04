import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faBriefcase,
  faStar,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';

interface StatItem {
  id: string;
  metric: string;
  label: string;
  icon: typeof faUsers;
}

const BUSINESS_STATS: StatItem[] = [
  {
    id: 'active-businesses',
    metric: '5,000+',
    label: 'Active Businesses',
    icon: faUsers,
  },
  {
    id: 'services-completed',
    metric: '150,000+',
    label: 'Services Completed',
    icon: faBriefcase,
  },
  {
    id: 'avg-rating',
    metric: '4.8/5',
    label: 'Average Business Rating',
    icon: faStar,
  },
  {
    id: 'countries',
    metric: '20+',
    label: 'Countries & Growing',
    icon: faGlobe,
  },
];

/**
 * BUSINESS STATS SECTION
 * 
 * Recreates the exact bottom metric row from reference image (business.jpg):
 * - 5,000+ Active Businesses (Users/Store icon)
 * - 150,000+ Services Completed (Briefcase icon)
 * - 4.8/5 Average Business Rating (Star icon)
 * - 20+ Countries & Growing (Globe icon)
 */
export const BusinessStatsSection: React.FC = () => {
  return (
    <section
      id="business-stats-section"
      className="relative w-full bg-[#070707] pb-4 pt-1 z-10"
      aria-label="Valnora Business Statistics"
    >
      <div
        id="business-stats-container"
        className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14"
      >
        <div
          id="business-stats-grid"
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4"
        >
          {BUSINESS_STATS.map((stat) => (
            <div
              key={stat.id}
              id={`stat-item-${stat.id}`}
              className="flex items-center gap-3.5 sm:gap-4.5"
            >
              <div className="w-12 h-12 rounded-lg bg-transparent border border-transparent text-[26px] flex items-center justify-center text-[#FF6500] text-sm sm:text-base shrink-0 shadow-sm">
                <FontAwesomeIcon icon={stat.icon} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-white text-[24px] font-semibold leading-tight">
                  {stat.metric}
                </span>
                <span className="text-[#9CA3AF] text-[11px] font-normal mt-0.5">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
