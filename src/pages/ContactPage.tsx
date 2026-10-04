import React, { useState } from 'react';
import { Mail, Phone, User, Tag, Pencil, Send, Lock, ChevronDown, ArrowRight, Headphones, UserCog, Briefcase, TrendingUp, Building2, Gift, Handshake, MessageSquare } from 'lucide-react';
import { SEO } from '../components/common/SEO.tsx';
import { Link } from '../router/Router.tsx';

const card = 'rounded-xl bg-[#0C0E10] border border-[#1E2227]';
const field = 'flex items-center gap-2 h-[31px] px-3 rounded-md bg-[#0A0B0D] border border-[#232830] focus-within:border-[#FF6500] transition-colors';
const label = 'block text-[9px] text-[#D1D5DB] mb-1';
const req = <span className="text-[#FF6500]"> *</span>;

const HELP = [
  { Icon: Headphones, t: 'Customer Support', d: 'Get help with bookings, payments, accounts, or general questions.' },
  { Icon: UserCog, t: 'Professional Support', d: 'Help with your profile, bookings, verification, or earnings.' },
  { Icon: Briefcase, t: 'Business & Partnerships', d: 'For businesses and brands interested in working with Valnora.' },
  { Icon: TrendingUp, t: 'Investor & Corporate Inquiries', d: 'For investors, strategic partners, and corporate opportunities.' },
];
const PARTNERS = [
  { Icon: Building2, t: 'Businesses', d: 'Reach more customers and grow your business through our platform.' },
  { Icon: Gift, t: 'Brands', d: 'Create reward campaigns and engage customers with real value.' },
  { Icon: Handshake, t: 'Strategic Partners', d: 'Build the future with us through technology and financial solutions.' },
];
const EMAILS = [
  { Icon: Mail, e: 'support@valnora.com', r: 'Customer Support' },
  { Icon: Handshake, e: 'partnerships@valnora.com', r: 'Partnerships & Business' },
  { Icon: Building2, e: 'investors@valnora.com', r: 'Investors & Corporate' },
];

export const ContactPage: React.FC = () => {
  const [f, setF] = useState({ first: '', last: '', email: '', role: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'error' | 'sent'>('idle');
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<any>) => setF({ ...f, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = Object.values(f).every((v) => v.trim()) && /^\S+@\S+\.\S+$/.test(f.email);
    setStatus(ok ? 'sent' : 'error');
    if (ok) setF({ first: '', last: '', email: '', role: '', subject: '', message: '' });
  };

  return (
    <div className="w-full bg-[#070707] text-white">
      <SEO meta={{ title: 'Contact', description: 'Get in touch with the Valnora team.' }} />
      <div className="lg:w-[1253px] max-w-full mx-auto px-5 lg:px-0 pt-3 lg:pt-[16px] pb-2 grid lg:grid-cols-[600px_632px] gap-x-[21px] gap-y-3 lg:gap-y-0">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-3 lg:gap-0">
          <section className="relative px-4 lg:pl-[15px] pt-2 lg:pt-[14px] pb-1 lg:h-[259px] overflow-hidden">
            <img src="/assets/ref/contact-hero-map.jpg" alt="" aria-hidden="true" className="absolute right-0 top-0 h-full w-[60%] object-cover opacity-70 pointer-events-none" style={{ maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)' }} />
            <div className="relative">
              <p className="text-[#FF6500] text-[11px] font-medium tracking-[0.04em]">CONTACT US</p>
              <h1 className="text-[40px] lg:text-[44px] font-semibold leading-[46px] tracking-[-0.01em] mt-[10px]">We'd love to<br /><span className="text-[#FF6500]">hear from you.</span></h1>
              <p className="text-[#C7CBD1] text-[12.5px] leading-[19.5px] mt-[14px] max-w-[330px]">Have a question, need support, or want to explore partnership opportunities? Our team is ready to help. Reach out and we'll get back to you as soon as possible.</p>
              <div className="flex flex-wrap items-center gap-5 mt-3">
                <div className="flex items-center gap-3"><span className="w-9 h-9 rounded-full border border-[#FF6500]/70 flex items-center justify-center text-[#FF6500]"><Mail size={15} /></span><div><a href="mailto:support@valnora.com" className="text-[#FF6500] text-xs font-semibold">support@valnora.com</a><p className="text-[#D1D5DB] text-[10.5px]">We're here to help.</p></div></div>
                <span className="hidden sm:block w-px h-9 bg-[#2A2F36]" />
                <div className="flex items-center gap-3"><span className="w-9 h-9 rounded-full border border-[#FF6500]/70 flex items-center justify-center text-[#FF6500]"><Phone size={15} /></span><div><a href="tel:+2349031234567" className="text-[#FF6500] text-xs font-semibold">+234 903 123 4567</a><p className="text-[#9CA3AF] text-[10px]">Mon – Fri, 9AM – 6PM (WAT)</p></div></div>
              </div>
            </div>
          </section>

          <section className={`${card} p-3 lg:px-[17px] lg:pt-[12px] lg:h-[191px] lg:mt-[14px]`}>
            <h2 className="text-[14.5px] font-medium mb-[12px]">How can we help you?</h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {HELP.map(({ Icon, t, d }) => (
                <a key={t} href="#message" className="group flex items-center gap-2.5 p-2.5 rounded-lg bg-[#0F1214] border border-[#1E2227] hover:border-[#FF6500]/60 transition-colors">
                  <span className="w-8 h-8 rounded-full bg-[#FF6500] flex items-center justify-center shrink-0"><Icon size={15} className="text-white" /></span>
                  <span className="flex-1 min-w-0"><span className="block text-[12px] font-medium leading-[15px]">{t}</span><span className="block text-[9px] text-[#9CA3AF] leading-[13px] mt-[3px] max-w-[160px]">{d}</span></span>
                  <ArrowRight size={14} className="text-[#9CA3AF] group-hover:text-[#FF6500] shrink-0" />
                </a>
              ))}
            </div>
          </section>

          <section className={`${card} p-3 lg:px-[17px] lg:h-[137px] lg:mt-[9px] grid md:grid-cols-[250px_1fr] gap-3 items-center`}>
            <div>
              <h2 className="text-[13px] font-medium whitespace-nowrap">Interested in partnering with Valnora?</h2>
              <p className="text-[8.5px] text-[#9CA3AF] leading-snug mt-1.5">We collaborate with businesses, brands, and organizations that share our vision of empowering people and creating real value across communities.</p>
              <Link to="/for-businesses" className="mt-3 inline-flex items-center gap-2 h-7 px-3 rounded-md border border-[#FF6500]/60 text-[10px] font-medium hover:bg-[#FF6500]/10 transition-colors">Become a Partner <ArrowRight size={13} className="text-[#FF6500]" /></Link>
            </div>
            <div className="grid grid-cols-3 divide-x divide-[#1E2227]">
              {PARTNERS.map(({ Icon, t, d }) => (
                <div key={t} className="px-3 text-center"><Icon size={22} strokeWidth={1.4} className="text-[#FF6500] mx-auto" /><p className="text-[10px] font-semibold mt-1.5">{t}</p><p className="text-[8px] text-[#9CA3AF] leading-snug mt-1.5">{d}</p></div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-3 lg:gap-0">
          <section id="message" className={`${card} p-4 lg:px-[27px] lg:pt-[16px] lg:h-[402px]`}>
            <h2 className="text-[18px] font-medium mb-[14px]">Send us a message</h2>
            <form onSubmit={submit} noValidate className="flex flex-col gap-2">
              <div className="grid sm:grid-cols-2 gap-3">
                <div><label className={label}>First Name{req}</label><div className={field}><User size={14} className="text-[#9CA3AF]" /><input value={f.first} onChange={set('first')} placeholder="Enter your first name" className="flex-1 bg-transparent outline-none text-xs placeholder:text-[#6B7280]" /></div></div>
                <div><label className={label}>Last Name{req}</label><div className={field}><User size={14} className="text-[#9CA3AF]" /><input value={f.last} onChange={set('last')} placeholder="Enter your last name" className="flex-1 bg-transparent outline-none text-xs placeholder:text-[#6B7280]" /></div></div>
              </div>
              <div><label className={label}>Email Address{req}</label><div className={field}><Mail size={14} className="text-[#9CA3AF]" /><input type="email" value={f.email} onChange={set('email')} placeholder="Enter your email address" className="flex-1 bg-transparent outline-none text-xs placeholder:text-[#6B7280]" /></div></div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div><label className={label}>I am a{req}</label><div className={field}><Tag size={14} className="text-[#9CA3AF]" /><select value={f.role} onChange={set('role')} className="flex-1 bg-transparent outline-none text-xs appearance-none text-[#9CA3AF] cursor-pointer"><option value="">Select an option</option>{['Customer', 'Professional', 'Business', 'Investor / Partner'].map((o) => <option key={o} className="bg-[#0E1012] text-white">{o}</option>)}</select><ChevronDown size={14} className="text-[#9CA3AF]" /></div></div>
                <div><label className={label}>Subject{req}</label><div className={field}><Tag size={14} className="text-[#9CA3AF]" /><input value={f.subject} onChange={set('subject')} placeholder="What is this regarding?" className="flex-1 bg-transparent outline-none text-xs placeholder:text-[#6B7280]" /></div></div>
              </div>
              <div><label className={label}>Tell us how we can help you{req}</label>
                <div className="relative rounded-lg bg-[#0A0B0D] border border-[#232830] focus-within:border-[#FF6500] transition-colors p-3">
                  <Pencil size={13} className="absolute left-3 top-3.5 text-[#9CA3AF]" />
                  <textarea value={f.message} maxLength={1000} onChange={set('message')} placeholder="Type your message here..." rows={4} className="w-full bg-transparent outline-none text-xs pl-6 resize-none placeholder:text-[#6B7280]" />
                  <span className="block text-right text-[9px] text-[#6B7280]">{f.message.length} / 1000</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-5 mt-1">
                <button type="submit" className="h-[39px] px-12 min-w-[226px] rounded-md bg-gradient-to-b from-[#FF7A2E] to-[#F26A1F] hover:brightness-110 text-[12px] font-medium inline-flex items-center justify-center gap-2 transition">Send Message <Send size={14} /></button>
                <p className="flex items-center gap-2 text-[10px] text-[#9CA3AF] leading-tight"><Lock size={14} className="shrink-0" />Your information is secure<br className="hidden sm:block" />and will never be shared.</p>
              </div>
              {status === 'error' && <p role="alert" className="text-[#FF8A4C] text-xs">Please fill in every field with a valid email address.</p>}
              {status === 'sent' && <p role="status" className="text-[#4ADE80] text-xs">Thanks — your message is ready to send. We'll connect this form to email shortly.</p>}
            </form>
          </section>

          <section className={`${card} p-4 lg:px-[26px] lg:h-[195px] lg:mt-[14px] grid sm:grid-cols-[1fr_1.2fr] gap-3 items-center overflow-hidden`}>
            <div>
              <h2 className="text-[14px] font-medium">Building a connected world.</h2>
              <span className="block w-6 h-0.5 bg-[#FF6500] my-2.5" />
              <p className="text-[10px] text-[#D1D5DB] leading-[15px] max-w-[190px]">Valnora is built for a global market. As we expand into new markets, our goal remains the same: connect people, empower businesses, and create opportunity.</p>
              <Link to="/about" className="mt-3 inline-flex items-center gap-2 h-7 px-3 rounded-md border border-[#FF6500]/60 text-[10px] font-medium hover:bg-[#FF6500]/10 transition-colors">Explore Our Global Vision <ArrowRight size={13} className="text-[#FF6500]" /></Link>
            </div>
            <img src="/assets/ref/contact-map.jpg" alt="World map with Valnora locations" className="w-full h-auto rounded-lg" />
          </section>
        </div>

        {/* FULL-WIDTH CONVERSATION STRIP */}
        <section className={`${card} lg:col-span-2 p-2.5 lg:px-[26px] lg:h-[72px] lg:mt-[12px] flex flex-col lg:flex-row items-center gap-5`}>
          <span className="w-11 h-11 rounded-full bg-[#FF6500] flex items-center justify-center shrink-0"><MessageSquare size={20} /></span>
          <div className="flex-1"><p className="text-[14px] font-medium">Have a question? Start a conversation.</p><p className="text-[#D1D5DB] text-[10.5px]">We're here to help and look forward to connecting with you.</p></div>
          <div className="flex flex-wrap justify-center gap-6 divide-x divide-[#1E2227]">
            {EMAILS.map(({ Icon, e, r }) => (
              <a key={e} href={`mailto:${e}`} className="flex items-center gap-3 pl-6 first:pl-0"><span className="w-9 h-9 rounded-full border border-[#FF6500]/60 flex items-center justify-center text-[#FF6500]"><Icon size={15} /></span><span><span className="block text-xs font-medium">{e}</span><span className="block text-[10px] text-[#9CA3AF]">{r}</span></span></a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
