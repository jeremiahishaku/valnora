import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faScrewdriverWrench,
  faBolt,
  faWrench,
  faUtensils,
  faPalette,
  faHammer,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

interface CategoryItem {
  id: string;
  name: string;
  description: string;
  icon: typeof faScrewdriverWrench;
  popularServices: string[];
}

const ESTABLISHED_CATEGORIES: CategoryItem[] = [
  {
    id: 'mechanics',
    name: 'Mechanics',
    description: 'Vehicle diagnostics, scheduled servicing, engine tuning, and emergency roadside repairs.',
    icon: faScrewdriverWrench,
    popularServices: ['Brake inspection', 'Engine diagnostics', 'Battery replacement'],
  },
  {
    id: 'electricians',
    name: 'Electricians',
    description: 'Residential & commercial wiring, lighting installations, breaker panels, and safety inspections.',
    icon: faBolt,
    popularServices: ['Panel upgrades', 'Smart home setup', 'Circuit troubleshooting'],
  },
  {
    id: 'plumbers',
    name: 'Plumbers',
    description: 'Leak detection, pipe repairs, water heater maintenance, and bathroom/kitchen fixture fitting.',
    icon: faWrench,
    popularServices: ['Emergency drain unblocking', 'Fixture installation', 'Pipe replacement'],
  },
  {
    id: 'chefs',
    name: 'Chefs & Culinary',
    description: 'Private in-home dining experiences, event catering, meal prep, and specialized dietary cooking.',
    icon: faUtensils,
    popularServices: ['Private dinner parties', 'Weekly meal prep', 'Catering events'],
  },
  {
    id: 'artists',
    name: 'Artists & Creatives',
    description: 'Custom murals, bespoke portraits, hand-crafted decor, and professional creative commissions.',
    icon: faPalette,
    popularServices: ['Custom canvas art', 'Wall murals', 'Interior craftwork'],
  },
  {
    id: 'home-repairs',
    name: 'Home & Carpentry',
    description: 'Custom cabinetry, furniture assembly, structural woodwork, and reliable odd-job handyman support.',
    icon: faHammer,
    popularServices: ['Door & lock repair', 'Shelving & cabinetry', 'General maintenance'],
  },
];

/**
 * SERVICE DISCOVERY SECTION
 * 
 * Communicates the breadth of the Razorbill platform using established categories.
 */
export const AppDiscoverySection: React.FC = () => {
  return (
    <section
      id="service-discovery"
      className="relative w-full bg-[#070707] py-14 sm:py-20 z-10 border-t border-[#1E2227]/40"
      aria-label="Service Discovery Across Categories"
    >
      <div
        id="discovery-container"
        className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-[54px]"
      >
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span
              id="discovery-eyebrow"
              className="text-[#FF6500] text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3 block select-none"
            >
              EXPANSIVE PLATFORM
            </span>
            <h2
              id="discovery-heading"
              className="text-white text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight leading-[1.15]"
            >
              Every skilled trade in one unified app.
            </h2>
          </div>
          <p
            id="discovery-subtitle"
            className="text-[#9CA3AF] text-xs sm:text-sm max-w-md"
          >
            Whether you need urgent emergency repairs or planned creative commissions, Razorbill offers direct access to verified specialists across diverse categories.
          </p>
        </div>

        {/* 6 Category Tiles */}
        <div
          id="categories-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {ESTABLISHED_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              id={`category-card-${cat.id}`}
              className="bg-[#0E1012] border border-[#1E2227] rounded-2xl p-6 flex flex-col justify-between hover:border-[#FF6500]/40 transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#070707] border border-[#1E2227] flex items-center justify-center text-[#FF6500] text-sm group-hover:border-[#FF6500]/50 transition-colors shrink-0">
                    <FontAwesomeIcon icon={cat.icon} />
                  </div>
                  <div>
                    <h3 className="text-white text-base font-bold tracking-tight">
                      {cat.name}
                    </h3>
                    <span className="text-[#9CA3AF] text-[11px]">
                      Verified Specialists
                    </span>
                  </div>
                </div>

                <p className="text-[#9CA3AF] text-xs sm:text-[13px] leading-relaxed mb-4">
                  {cat.description}
                </p>
              </div>

              {/* Popular tags */}
              <div className="pt-3 border-t border-[#1E2227]/50 flex flex-wrap gap-1.5">
                {cat.popularServices.map((service, idx) => (
                  <span
                    key={idx}
                    className="text-[10.5px] px-2.5 py-0.5 rounded-md bg-[#070707] border border-[#1E2227] text-[#9CA3AF]"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
