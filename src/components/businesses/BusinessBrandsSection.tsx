import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBullseye, faChartColumn, faUsers, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Link } from '../../router/Router.tsx';

const BENEFITS = [
  { id: 'reward-customers', title: 'Reward Customers', description: 'Give cashback rewards that keep customers coming back.', icon: faBullseye },
  { id: 'smart-insights', title: 'Smart Insights', description: 'Access real-time data on product consumption and customer behavior.', icon: faChartColumn },
  { id: 'stronger-loyalty', title: 'Stronger Loyalty', description: 'Build stronger connections and long-term loyalty with your brand.', icon: faUsers },
  { id: 'wider-reach', title: 'Wider Reach', description: "Reach more people through Valnora's growing customer network.", icon: faGlobe },
];

/** FOR BRANDS — single compact card: product photo + pitch on the left, four benefits across the right. */
export const BusinessBrandsSection: React.FC = () => (
  <section id="business-brands-section" className="relative w-full bg-[#070707] py-0 z-10" aria-label="Valnora for Brands">
    <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
      <div className="bg-[#0C0E10] border border-[#1E2227] rounded-xl p-4 lg:px-6 lg:py-5 grid lg:grid-cols-[auto_1.05fr_2fr] gap-6 items-center">
        <img src="/assets/ref/biz-brands.jpg" alt="Everyday consumer products: Coca-Cola, Milo and Golden Morn" className="w-[190px] h-[146px] object-cover rounded-lg mx-auto lg:mx-0" />
        <div>
          <span className="text-[#FF6500] text-[10px] font-bold tracking-[0.18em]">FOR BRANDS</span>
          <h2 className="text-white text-[21px] font-semibold leading-[26px] mt-1.5">Turn everyday purchases into customer rewards.</h2>
          <p className="text-[#9CA3AF] text-[11.5px] leading-[18px] mt-3 max-w-[330px]">Partner with Valnora to reward customers, drive engagement and gain valuable insights across your markets.</p>
          <Link to="/contact" id="brands-partner-cta" className="mt-4 inline-flex items-center gap-2 bg-[#FA5A00] hover:bg-[#E05000] text-white text-[11.5px] font-medium px-4 py-2.5 rounded-md transition-colors">
            Partner with Valnora <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#1E2227]">
          {BENEFITS.map((b) => (
            <div key={b.id} id={`brand-benefit-${b.id}`} className="px-4 text-center">
              <FontAwesomeIcon icon={b.icon} className="text-[#FF6500] text-[30px]" />
              <h3 className="text-white text-[12.5px] font-semibold mt-3">{b.title}</h3>
              <p className="text-[#9CA3AF] text-[10.5px] leading-[16px] mt-2">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
