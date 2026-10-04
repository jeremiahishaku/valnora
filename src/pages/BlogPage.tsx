import React, { useMemo, useState } from 'react';
import { PenLine, BookOpen, TrendingUp, Users, Mail, ArrowRight, Bookmark, LayoutGrid, Briefcase, Building2, Lightbulb, Clock } from 'lucide-react';
import { SEO } from '../components/common/SEO.tsx';

type Cat = 'For Professionals' | 'For Businesses' | 'Industry Insights' | 'Tips & Guides' | 'Community Stories';
const POSTS: { img: string; cat: Cat; title: string; excerpt: string; by: string; date: string; read: string }[] = [
  { img: 'blog-1', cat: 'For Professionals', title: '5 Ways to Get More Bookings as a Service Professional', excerpt: 'Practical strategies to increase your visibility, build trust, and get more customers.', by: 'David O.', date: 'May 18, 2024', read: '4 min read' },
  { img: 'blog-2', cat: 'For Businesses', title: 'Using Data to Understand Your Customers Better', excerpt: 'How businesses can leverage data insights to make smarter decisions and grow.', by: 'Zara M.', date: 'May 15, 2024', read: '5 min read' },
  { img: 'blog-3', cat: 'Industry Insights', title: 'The Future of Work is Independent', excerpt: 'Why more professionals are choosing independence and how platforms like Valnora empower them.', by: 'Valnora Team', date: 'May 12, 2024', read: '6 min read' },
  { img: 'blog-4', cat: 'Community Stories', title: "A Plumber's Journey to Financial Freedom", excerpt: 'How Michael grew his plumbing business from one booking to a full team.', by: 'Michael E.', date: 'May 10, 2024', read: '5 min read' },
  { img: 'blog-5', cat: 'Tips & Guides', title: 'How to Set the Right Price for Your Services', excerpt: 'A simple guide to pricing your services for profit and competitiveness.', by: 'Valnora Team', date: 'May 8, 2024', read: '4 min read' },
  { img: 'blog-6', cat: 'For Businesses', title: 'Reward Customers, Drive Loyalty', excerpt: 'How cashback and rewards create stronger customer relationships.', by: 'Valnora Team', date: 'May 5, 2024', read: '4 min read' },
];
const CATEGORIES: { name: 'All Articles' | Cat; count: number; Icon: React.ElementType }[] = [
  { name: 'All Articles', count: 24, Icon: LayoutGrid }, { name: 'For Professionals', count: 8, Icon: Briefcase }, { name: 'For Businesses', count: 6, Icon: Building2 },
  { name: 'Industry Insights', count: 5, Icon: TrendingUp }, { name: 'Tips & Guides', count: 4, Icon: Lightbulb }, { name: 'Community Stories', count: 2, Icon: Users },
];
const TAGS = ['Business Growth', 'Skills', 'Entrepreneurship', 'Pricing', 'Productivity', 'Customer Experience', 'Technology', 'Cashback', 'Partnerships'];
const PILLARS = [
  { Icon: PenLine, t: 'Expert Insights', d: 'Learn from experts and industry leaders.' }, { Icon: BookOpen, t: 'Practical Guides', d: 'Step-by-step tips to grow your skills and business.' },
  { Icon: TrendingUp, t: 'Industry Trends', d: 'Stay updated on market trends and opportunities.' }, { Icon: Users, t: 'Community Stories', d: 'Real stories from professionals and businesses.' },
];

const Subscribe: React.FC<{ className?: string; btn: React.ReactNode; inputClass?: string }> = ({ className = '', btn, inputClass = '' }) => {
  const [email, setEmail] = useState(''); const [state, setState] = useState<'idle' | 'err' | 'ok'>('idle');
  return (
    <form noValidate className={className} onSubmit={(e) => { e.preventDefault(); if (/^\S+@\S+\.\S+$/.test(email)) { setState('ok'); setEmail(''); } else setState('err'); }}>
      <div className="flex gap-[11px] w-full">
        <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); setState('idle'); }} placeholder="Enter your email" aria-label="Email address" className={`flex-1 min-w-0 h-8 px-3 rounded-md bg-[#0C0E10] border border-[#2A2F36] focus:border-[#FF6500] outline-none text-[9px] placeholder:text-[#6B7280] ${inputClass}`} />
        <button type="submit" className="h-8 px-5 lg:min-w-[83px] justify-center rounded-md bg-[#FA5A00] hover:bg-[#E05000] text-[9.5px] font-medium inline-flex items-center gap-2 transition-colors shrink-0">{btn}</button>
      </div>
      {state === 'err' && <p role="alert" className="text-[#FF8A4C] text-[11px] mt-1.5">Enter a valid email address.</p>}
      {state === 'ok' && <p role="status" className="text-[#4ADE80] text-[11px] mt-1.5">You're on the list — thanks for subscribing.</p>}
    </form>
  );
};

const Avatar: React.FC<{ name: string }> = ({ name }) => (
  <span className="w-[19px] h-[19px] rounded-full bg-[#2A2F36] text-[6.5px] font-bold flex items-center justify-center shrink-0">{name.split(' ').map((w) => w[0]).join('').slice(0, 2)}</span>
);

export const BlogPage: React.FC = () => {
  const [active, setActive] = useState<'All Articles' | Cat>('All Articles');
  const [saved, setSaved] = useState<string[]>([]);
  const posts = useMemo(() => (active === 'All Articles' ? POSTS : POSTS.filter((p) => p.cat === active)), [active]);
  const toggleSave = (t: string) => setSaved((s) => (s.includes(t) ? s.filter((x) => x !== t) : [...s, t]));

  return (
    <div className="w-full bg-[#070707] text-white">
      <SEO meta={{ title: 'Blog', description: 'Stories, tips, and insights about skilled professionals, business growth, and the future of work.' }} />
      <div className="w-full lg:w-[1218px] mx-auto px-5 lg:px-0 pt-3 lg:pt-[14px] pb-2 flex flex-col">
        {/* HERO */}
        <section className="grid lg:grid-cols-[480px_738px] lg:-mx-[0px] gap-6 lg:gap-0 lg:h-[271px] lg:w-[1218px]">
          <div className="lg:pl-[15px] lg:pt-[5px]">
            <p className="text-[#FF6500] text-[10px] font-semibold tracking-[0.08em]">OUR BLOG</p>
            <h1 className="text-[34px] lg:text-[36px] font-semibold leading-[37px] tracking-[-0.01em] mt-[10px]">Insights. Inspiration.<br /><span className="text-[#FF6500]">Opportunity.</span></h1>
            <p className="text-[#E5E7EB] text-[12.4px] leading-[17.5px] mt-[14px] max-w-[300px]">Stories, tips, and insights about skilled professionals, business growth, and the future of work. Together, we build a better tomorrow.</p>
            <Subscribe className="mt-[14px] lg:w-[318px]" btn="Subscribe" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-0 mt-[20px] lg:w-[470px]">
              {PILLARS.map(({ Icon, t, d }) => (
                <div key={t} className="flex gap-[7px] sm:border-l sm:border-[#2A2F36] sm:pl-[9px] first:border-0 first:pl-0"><span className="w-[25px] h-[25px] rounded-full border border-[#FF6500]/60 flex items-center justify-center shrink-0 text-[#FF6500]"><Icon size={11} /></span><span><span className="block text-[8.5px] font-semibold leading-tight">{t}</span><span className="block text-[6.5px] text-[#9CA3AF] leading-[9px] mt-[2px] max-w-[84px]">{d}</span></span></div>
              ))}
            </div>
          </div>

          <article className="relative rounded-xl overflow-hidden border border-[#2A2F36] bg-[#0A0B0C] min-h-[260px] lg:h-[271px]">
            <img src="/assets/ref/blog-featured.jpg" alt="Professional in an orange hard hat smiling" className="absolute inset-y-0 left-0 w-[44%] h-full object-cover object-top" style={{ maskImage: 'linear-gradient(to right, black 82%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, black 82%, transparent 100%)' }} />
            <span className="absolute top-[14px] left-[14px] bg-[#FA5A00] text-[8px] font-semibold px-[7px] py-[4px] rounded-[3px] tracking-wide">FEATURED</span>
            <div className="relative z-10 lg:ml-[44%] lg:pl-[24px] p-6 lg:pr-6 lg:pt-[20px] h-full flex flex-col">
              <p className="text-[#FF6500] text-[8.5px] font-semibold tracking-[0.06em]">PROFESSIONALS</p>
              <h2 className="text-[20px] font-medium leading-[26px] mt-[12px] max-w-[250px]">From Skill to Success: Building a Profitable Service Business</h2>
              <p className="text-[#9CA3AF] text-[9px] leading-[14px] mt-[14px] max-w-[215px]">Learn how skilled professionals are turning their expertise into thriving businesses on Valnora.</p>
              <div className="flex items-center gap-2 mt-[22px]"><Avatar name="Tunde A." /><span className="text-[7.5px] text-[#E5E7EB] leading-[10px]">By Tunde A.<br /><span className="text-[#6B7280] text-[6.5px]">May 20, 2024 • 6 min read</span></span></div>
              <a href="#/blog" className="mt-auto lg:mb-[14px] self-end text-[#FF6500] text-[10.5px] font-medium inline-flex items-center gap-1.5">Read More <ArrowRight size={13} /></a>
            </div>
          </article>
        </section>

        {/* SIDEBAR + GRID */}
        <section className="grid lg:grid-cols-[226px_1fr] gap-3 lg:gap-[12px] lg:mt-[20px] lg:w-[1218px]">
          <aside className="flex flex-col gap-[9px]">
            <div className="rounded-[10px] bg-[#0A0B0C] border border-[#22262B] px-[17px] pt-[14px] pb-[10px] lg:h-[180px]">
              <h3 className="text-[#FF6500] text-[8.5px] font-semibold tracking-[0.06em] mb-[8px] flex items-center gap-1.5"><LayoutGrid size={10} />CATEGORIES</h3>
              <ul>
                {CATEGORIES.map(({ name, count, Icon }) => (
                  <li key={name}><button type="button" onClick={() => setActive(name)} aria-pressed={active === name} className={`w-full flex items-center gap-[8px] h-[22px] rounded-md text-[9.5px] transition-colors ${active === name ? 'text-white' : 'text-[#D1D5DB] hover:text-white'}`}><Icon size={11} className="text-[#9CA3AF]" /><span className="flex-1 text-left">{name}</span><span className="text-[7px] text-[#9CA3AF] bg-[#1A1D21] rounded px-[5px] py-[1px]">{count}</span></button></li>
                ))}
              </ul>
            </div>
            <div className="rounded-[10px] bg-[#0A0B0C] border border-[#22262B] px-[14px] pt-[13px] pb-[10px] lg:h-[145px]">
              <h3 className="text-[#FF6500] text-[8.5px] font-semibold tracking-[0.06em] mb-[9px]">POPULAR TAGS</h3>
              <div className="flex flex-wrap gap-[6px]">{TAGS.map((t) => <span key={t} className="text-[7px] px-[7px] py-[3px] rounded-full border border-[#2F343B] text-[#D1D5DB]">{t}</span>)}</div>
            </div>
          </aside>

          <div className="grid sm:grid-cols-3 gap-[11px] lg:grid-rows-[201px_120px] content-start">
            {posts.length === 0 && <p className="sm:col-span-3 text-[#9CA3AF] text-sm py-10 text-center">No articles in this category yet.</p>}
            {posts.map((p) => {
              const saveBtn = (
                <button type="button" onClick={() => toggleSave(p.title)} aria-label={saved.includes(p.title) ? 'Remove bookmark' : 'Bookmark article'} className="ml-auto text-[#9CA3AF] hover:text-[#FF6500]"><Bookmark size={11} fill={saved.includes(p.title) ? '#FF6500' : 'none'} className={saved.includes(p.title) ? 'text-[#FF6500]' : ''} /></button>
              );
              const meta = (<div className="flex items-center gap-[6px]"><Avatar name={p.by} /><span className="text-[7px] text-[#D1D5DB] leading-[9px]">By {p.by}<br /><span className="text-[#6B7280] text-[6px]">{p.date} • {p.read}</span></span>{saveBtn}</div>);
              const isTall = POSTS.indexOf(p) < 3;
              return isTall ? (
                <article key={p.title} className="relative rounded-[10px] overflow-hidden border border-[#22262B] bg-[#0A0B0C] flex flex-col lg:h-[201px]">
                  <div className="relative lg:h-[108px] h-[110px] shrink-0">
                    <img src={`/assets/ref/${p.img}.jpg`} alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                    <p className="absolute bottom-[6px] left-[13px] text-[#FF6500] text-[7px] font-semibold tracking-[0.05em] uppercase">{p.cat}</p>
                  </div>
                  <div className="px-[13px] pt-[9px] pb-[8px] flex-1 flex flex-col">
                    <h3 className="text-[11.5px] font-semibold leading-[14px]">{p.title}</h3>
                    <p className="text-[#9CA3AF] text-[7.5px] leading-[10.5px] mt-[5px] max-w-[250px]">{p.excerpt}</p>
                    <div className="mt-auto">{meta}</div>
                  </div>
                </article>
              ) : (
                <article key={p.title} className="relative rounded-[10px] overflow-hidden border border-[#22262B] bg-[#0A0B0C] grid grid-cols-[45%_55%] lg:h-[120px]">
                  <img src={`/assets/ref/${p.img}.jpg`} alt="" className="w-full h-full object-cover min-h-[110px]" style={{ maskImage: 'linear-gradient(to right, black 75%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, black 75%, transparent 100%)' }} />
                  <div className="pl-[4px] pr-[12px] pt-[10px] pb-[8px] flex flex-col">
                    <p className="text-[#FF6500] text-[7px] font-semibold tracking-[0.05em] uppercase">{p.cat}</p>
                    <h3 className="text-[11.5px] font-semibold leading-[14px] mt-[5px]">{p.title}</h3>
                    <p className="text-[#9CA3AF] text-[7.5px] leading-[10.5px] mt-[4px]">{p.excerpt}</p>
                    <div className="mt-auto">{meta}</div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* NEWSLETTER STRIP */}
        <section className="rounded-[10px] bg-[#0A0B0C] border border-[#22262B] px-[42px] flex flex-col lg:flex-row items-center gap-5 lg:mt-[13px] lg:h-[60px] lg:w-[1218px] py-3 lg:py-0">
          <span className="w-[44px] h-[44px] rounded-full bg-[#FA5A00] flex items-center justify-center shrink-0"><Mail size={20} /></span>
          <div className="lg:w-[330px]"><p className="text-[13px] font-semibold leading-[16px]">Never miss an update.</p><p className="text-[8px] text-[#9CA3AF] leading-[11px] max-w-[230px] mt-[1px]">Subscribe to our newsletter and get the latest insights on skills, business, and growth delivered to your inbox.</p></div>
          <Subscribe className="flex-1 w-full lg:max-w-[565px] lg:ml-auto lg:mr-[90px]" btn={<>Subscribe Now <ArrowRight size={12} /></>} />
        </section>
      </div>
    </div>
  );
};
