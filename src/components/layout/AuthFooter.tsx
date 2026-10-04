import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import { MasterLogo } from '../common/MasterLogo.tsx';

const PARTNERS = ['access', 'GTCO', 'FirstBank', 'Stanbic IBTC', 'UBA'];

/** Slim "trusted by" footer used on Login, Get Started and the sign-up pages. */
export const AuthFooter: React.FC = () => (
  <footer id="auth-footer" className="w-full bg-[#050505] border-t border-[#14171B]">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-5 flex flex-col lg:flex-row items-center justify-between gap-6">
      <MasterLogo glyphSize={40} wordmarkSize="text-[19px]" />
      <div className="flex flex-col items-center gap-3 order-3 lg:order-none">
        <span className="text-[#B4BAC4] text-[11px] tracking-normal uppercase">Trusted by forward-thinking companies</span>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-[#8B919B] text-[15px] font-medium">
          {PARTNERS.map((p) => <span key={p}>{p}</span>)}
        </div>
      </div>
      <div className="flex items-center gap-3">
        {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
          <a key={i} href="#" aria-label="Social link" className="w-9 h-9 rounded-full bg-[#1A1D21] flex items-center justify-center text-[#9CA3AF] hover:text-white transition-colors">
            <Icon size={16} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);
