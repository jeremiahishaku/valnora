import React, { useState } from 'react';
import { User, Mail, Phone, Lock, ChevronDown, Store, Briefcase, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/common/SEO.tsx';
import { AuthShell } from '../components/auth/AuthShell.tsx';
import { Link } from '../router/Router.tsx';

type Kind = 'consumer' | 'business' | 'professional';
type Field = { name: string; placeholder: string; type: 'text' | 'email' | 'tel' | 'password' | 'select'; Icon?: React.ElementType; options?: string[] };

const PROFESSIONS = ['Electrician', 'Plumber', 'Mechanic', 'Chef', 'Artist', 'Cleaner', 'Other'];
const INDUSTRIES = ['Auto & Repair', 'Home Services', 'Food & Beverage', 'Retail', 'Beauty & Wellness', 'Other'];

const CONFIG: Record<Kind, { h1: string; h2: string; Icon: React.ElementType; button: string; fields: Field[] }> = {
  consumer: {
    h1: 'Create Your Valnora Consumer Account', h2: 'Consumer Registration', Icon: User, button: 'Create Consumer Account',
    fields: [
      { name: 'fullName', placeholder: 'Full Name', type: 'text', Icon: User },
      { name: 'email', placeholder: 'Email Address', type: 'email', Icon: Mail },
      { name: 'phone', placeholder: 'Phone Number', type: 'tel', Icon: Phone },
      { name: 'password', placeholder: 'Create Password', type: 'password', Icon: Lock },
      { name: 'confirm', placeholder: 'Confirm Password', type: 'password', Icon: Lock },
    ],
  },
  business: {
    h1: 'Create Your Valnora Business Account', h2: 'Business Registration', Icon: Store, button: 'Create Business Account',
    fields: [
      { name: 'name', placeholder: 'Professional Name / Business Name', type: 'text', Icon: User },
      { name: 'email', placeholder: 'Email Address', type: 'email', Icon: Mail },
      { name: 'phone', placeholder: 'Phone Number', type: 'tel', Icon: Phone },
      { name: 'password', placeholder: 'Create Password', type: 'password', Icon: Lock },
      { name: 'category', placeholder: 'Profession / Service Category', type: 'select', options: PROFESSIONS },
      { name: 'industry', placeholder: 'Business Type / Industry', type: 'select', options: INDUSTRIES },
    ],
  },
  professional: {
    h1: 'Create Your Valnora Professional Account', h2: 'Professional Registration', Icon: Briefcase, button: 'Create Professional Account',
    fields: [
      { name: 'name', placeholder: 'Professional Name / Business Name', type: 'text', Icon: User },
      { name: 'email', placeholder: 'Email Address', type: 'email', Icon: Mail },
      { name: 'phone', placeholder: 'Phone Number', type: 'tel', Icon: Phone },
      { name: 'password', placeholder: 'Create Password', type: 'password', Icon: Lock },
      { name: 'category', placeholder: 'Profession / Service Category', type: 'select', options: PROFESSIONS },
    ],
  },
};

const box = 'flex items-center gap-3 h-[42px] px-3.5 rounded-lg bg-[#0B0D10]/80 border border-[#2C323A] focus-within:border-[#FF6500] focus-within:shadow-[0_0_12px_rgba(255,101,0,0.25)] transition';

export const SignUpPage: React.FC<{ type: Kind }> = ({ type }) => {
  const cfg = CONFIG[type];
  const [values, setValues] = useState<Record<string, string>>({});
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  // reset when switching between the three sign-up routes
  React.useEffect(() => { setValues({}); setAgree(false); setError(''); setDone(false); }, [type]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cfg.fields.some((f) => !values[f.name]?.trim())) return setError('Please complete every field.');
    if (!/^\S+@\S+\.\S+$/.test(values.email || '')) return setError('Enter a valid email address.');
    if (type === 'consumer' && values.password !== values.confirm) return setError('Passwords do not match.');
    if ((values.password || '').length < 6) return setError('Password must be at least 6 characters.');
    if (!agree) return setError('Please accept the Terms of Service and Privacy Policy.');
    setError('');
    setDone(true); // no backend yet — confirm locally
  };

  return (
    <AuthShell title={cfg.h1} compact>
      <SEO meta={{ title: cfg.h2, description: cfg.h1 }} />
      <div className="w-full max-w-[460px] rounded-2xl bg-white/[0.035] border border-[#FF6500]/40 shadow-[0_0_30px_rgba(255,101,0,0.08)] px-6 py-6">
        <div className="flex flex-col items-center">
          <cfg.Icon size={34} strokeWidth={1.4} className="text-[#FF6500]" />
          <h2 className="text-white text-lg font-semibold mt-3 mb-4">{cfg.h2}</h2>
        </div>
        {done ? (
          <div className="flex flex-col items-center text-center py-8 gap-3" role="status">
            <CheckCircle2 size={40} className="text-[#FF6500]" />
            <p className="text-white font-semibold">Thanks — your details are in.</p>
            <p className="text-[#9CA3AF] text-sm">Account creation will be connected soon.</p>
            <Link to="/login" className="text-[#FF7A45] underline underline-offset-2 text-sm">Go to Log in</Link>
          </div>
        ) : (
          <form onSubmit={submit} className="flex flex-col gap-2.5" noValidate>
            {cfg.fields.map((f) => (
              <label key={f.name} className={box}>
                {f.type === 'select' ? <ChevronDown size={16} className="text-[#FF7A45] shrink-0" /> : f.Icon && <f.Icon size={16} className="text-[#FF7A45] shrink-0" />}
                {f.type === 'select' ? (
                  <select value={values[f.name] || ''} onChange={(e) => setValues({ ...values, [f.name]: e.target.value })} className="flex-1 bg-transparent outline-none text-[14px] text-white appearance-none cursor-pointer">
                    <option value="" className="bg-[#0E1012]">{f.placeholder}</option>
                    {f.options!.map((o) => <option key={o} value={o} className="bg-[#0E1012]">{o}</option>)}
                  </select>
                ) : (
                  <input type={f.type} placeholder={f.placeholder} value={values[f.name] || ''} onChange={(e) => setValues({ ...values, [f.name]: e.target.value })} className="flex-1 bg-transparent outline-none text-white placeholder:text-[#D1D5DB] text-[14px]" />
                )}
              </label>
            ))}
            <label className="flex items-center gap-2 text-white text-[13px] mt-1 cursor-pointer">
              <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="w-4 h-4 accent-[#FF6500]" />
              <span>I agree to the Valnora <a href="#/contact" className="text-[#FF7A45] underline">Terms of Service</a> and <a href="#/contact" className="text-[#FF7A45] underline">Privacy Policy</a></span>
            </label>
            {error && <p role="alert" className="text-[#FF8A4C] text-xs">{error}</p>}
            <button type="submit" className="h-10 rounded-md bg-gradient-to-b from-[#FF7A2E] to-[#F26A1F] hover:brightness-110 text-white text-[14px] font-medium transition">{cfg.button}</button>
            <p className="text-center text-white text-[13px] mt-1">Already have an account? <Link to="/login" className="text-[#FF7A45] underline">Log in</Link></p>
          </form>
        )}
      </div>
    </AuthShell>
  );
};
