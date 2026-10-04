import React from 'react';
import { Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Link } from '../../router/Router.tsx';
import { MasterLogo } from '../common/MasterLogo.tsx';

const COLUMNS: { title: string; links: { label: string; to: string }[] }[] = [
  { title: 'Company', links: [{ label: 'About Us', to: '/about' }, { label: 'Careers', to: '/contact' }, { label: 'Press', to: '/blog' }] },
  { title: 'Platform', links: [{ label: 'Razorbill App', to: '/our-app' }, { label: 'For Businesses', to: '/for-businesses' }, { label: 'For Professionals', to: '/for-professionals' }] },
  { title: 'Support', links: [{ label: 'Help Center', to: '/contact' }, { label: 'Safety Center', to: '/contact' }, { label: 'Contact Us', to: '/contact' }] },
  { title: 'Legal', links: [{ label: 'Terms of Use', to: '/contact' }, { label: 'Privacy Policy', to: '/contact' }, { label: 'Cookie Policy', to: '/contact' }] },
];

export const SOCIALS = [
  { label: 'X', Icon: Twitter }, { label: 'Instagram', Icon: Instagram },
  { label: 'LinkedIn', Icon: Linkedin }, { label: 'YouTube', Icon: Youtube },
];

/** Full footer used on Blog and Contact (matches reference). */
export const SiteFooter: React.FC = () => (
  <footer id="site-footer" className="w-full bg-[#070707]">
    <div className="lg:w-[1202px] max-w-full mx-auto px-6 lg:px-0 pt-[10px] pb-2 grid grid-cols-2 md:grid-cols-[301px_120px_155px_143px_132px_1fr] gap-6 md:gap-0 items-start">
      <div className="col-span-2 md:col-span-1">
        <MasterLogo glyphSize={20} wordmarkSize="text-[14px]" />
        <p className="text-[11px] text-[#9CA3AF] mt-2 leading-snug max-w-[200px]">
          Connecting skills. Empowering people. Creating opportunity.
        </p>
      </div>
      {COLUMNS.map((c) => (
        <div key={c.title}>
          <h4 className="text-white text-[10px] font-semibold mb-2">{c.title}</h4>
          <ul className="space-y-[5px] text-[9.5px] leading-[12px]">
            {c.links.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-[#B4BAC4] hover:text-white text-[9.5px] transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div>
        <span className="block text-white text-[10px] font-semibold mb-2">Follow Us</span>
        <div className="flex items-center gap-2">
          {SOCIALS.map(({ label, Icon }) => (
            <a key={label} href="#" aria-label={label} className="w-6 h-6 rounded-full border border-[#2A2F36] flex items-center justify-center text-[#9CA3AF] hover:text-[#FF6500] hover:border-[#FF6500] transition-colors">
              <Icon size={11} />
            </a>
          ))}
        </div>
        <p className="text-[#9CA3AF] text-[9px] mt-3">© 2025 Valnora. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
