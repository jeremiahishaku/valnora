import React from 'react';
import { ArrowRight, Users, Briefcase, Building2, ShieldCheck, MessageSquareText, Lock, BadgePercent, MoveHorizontal } from 'lucide-react';

const NODES = [
  { id: 'people', Icon: Users, title: 'People', text: 'Find and book trusted professionals and businesses with ease.' },
  { id: 'professionals', Icon: Briefcase, title: 'Professionals', text: 'Showcase your skills, get booked and grow your business.' },
  { id: 'businesses', Icon: Building2, title: 'Businesses', text: 'Reach customers, run campaigns and grow your brand.' },
];

const IMPACT = [
  { Icon: ShieldCheck, title: 'Trust & Safety', text: 'Verified professionals and secure platform' },
  { Icon: MessageSquareText, title: 'Easy Communication', text: 'Chat, share details, get updates' },
  { Icon: Lock, title: 'Secure Payments', text: 'Multiple safe payment options' },
  { Icon: BadgePercent, title: 'Earn Cashback', text: 'Get rewarded on every booking' },
];

/** OUR ECOSYSTEM — About-Us.jpg: copy | three-node diagram around the Valnora mark | Built for Impact list. */
export const OurEcosystemSection: React.FC = () => {
  const [people, pros, biz] = NODES;
  const Node = ({ n }: { n: (typeof NODES)[number] }) => (
    <div id={`ecosystem-node-${n.id}`} className="flex flex-col items-center text-center w-[118px]">
      <n.Icon className="text-[#FF6500] w-[28px] h-[28px] mb-[14px]" strokeWidth={1.3} aria-hidden="true" />
      <h3 className="text-white text-[11px] font-semibold mb-[10px]">{n.title}</h3>
      <p className="text-[#9CA3AF] text-[9px] leading-[16px]">{n.text}</p>
    </div>
  );
  return (
    <section id="our-ecosystem-section" className="relative w-full border-b border-[#15181C] lg:h-[190px]" aria-label="Our Ecosystem">
      <div className="px-6 sm:px-8 lg:pl-[44px] lg:pr-[48px] py-8 lg:py-0 lg:h-full">
        <div className="grid grid-cols-1 lg:grid-cols-[262px_626px_1fr] gap-6 lg:gap-[22px] lg:h-full items-center">
          <div id="ecosystem-copy" className="flex flex-col items-start">
            <span className="text-[#FF6500] text-[9px] font-semibold tracking-[0.12em] uppercase mb-[12px] select-none">OUR ECOSYSTEM</span>
            <h2 id="ecosystem-heading" className="text-white text-[24px] font-semibold leading-[29px] mb-[10px]">
              Three sides.
              <br />
              <span className="text-[#FF6500]">One</span> ecosystem.
            </h2>
            <p className="text-[#9CA3AF] text-[10.5px] leading-[17px] max-w-[220px] mb-[14px]">
              Valnora brings together people, professionals and businesses to create value for everyone.
            </p>
            <a href="#how-it-works" className="inline-flex items-center gap-2 text-[#FF6500] hover:text-white text-[11px] font-medium transition-colors select-none">
              <span>How it works</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div id="ecosystem-diagram" className="bg-[#0C0D0F] border border-[#1A1D21] rounded-lg flex flex-wrap lg:flex-nowrap items-center justify-center gap-4 lg:gap-0 px-3 lg:h-[170px]">
            <Node n={people} />
            <MoveHorizontal className="text-white w-[22px] h-[22px] mx-[14px] shrink-0" strokeWidth={1.2} aria-hidden="true" />
            <div id="ecosystem-core" className="relative w-[128px] h-[128px] shrink-0 rounded-full border border-[#FF6500]/70 bg-[#0A0A0A] flex items-center justify-center shadow-[0_0_28px_rgba(255,101,0,0.35)]">
              <img src="/valnora-mark.png" alt="Valnora" className="w-[58px] h-[58px] object-contain" />
            </div>
            <MoveHorizontal className="text-white w-[22px] h-[22px] mx-[14px] shrink-0" strokeWidth={1.2} aria-hidden="true" />
            <Node n={pros} />
            <Node n={biz} />
          </div>

          <div id="built-for-impact" className="bg-[#0C0D0F] border border-[#1A1D21] rounded-lg px-[22px] py-[16px] lg:h-[170px] flex flex-col justify-between">
            <span className="text-[#FF6500] text-[9px] font-semibold tracking-[0.12em] uppercase select-none">BUILT FOR IMPACT</span>
            {IMPACT.map(({ Icon, title, text }) => (
              <div key={title} className="flex items-center gap-3">
                <Icon className="text-[#FF6500] w-[18px] h-[18px] shrink-0" strokeWidth={1.4} aria-hidden="true" />
                <div className="flex flex-col">
                  <span className="text-white text-[9.5px] font-semibold leading-[13px]">{title}</span>
                  <span className="text-[#9CA3AF] text-[8.5px] leading-[12px]">{text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
