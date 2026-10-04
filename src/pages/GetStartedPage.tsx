import React, { useState } from 'react';
import { User, Store, Briefcase } from 'lucide-react';
import { SEO } from '../components/common/SEO.tsx';
import { AuthShell } from '../components/auth/AuthShell.tsx';
import { Link, useRouter } from '../router/Router.tsx';

const OPTIONS = [
  { id: 'consumer', title: 'For Consumers', Icon: User, cta: 'Continue as Consumer', to: '/signup/consumer', body: 'Book services, find trusted professionals, and manage your household with ease.' },
  { id: 'business', title: 'For Businesses', Icon: Store, cta: 'Continue as Business', to: '/signup/business', body: 'Grow your reach, manage bookings, and connect with millions of clients.' },
  { id: 'professional', title: 'For Professionals', Icon: Briefcase, cta: 'Continue as Professional', to: '/signup/professional', body: 'Manage your schedule, showcase your skills, and build your professional network.' },
];

export const GetStartedPage: React.FC = () => {
  const { navigate } = useRouter();
  const [selected, setSelected] = useState('consumer');

  return (
    <AuthShell title="Choose Your Valnora Journey" titleClass="lg:-mt-9">
      <SEO meta={{ title: 'Get Started', description: 'Choose how you want to join Valnora.' }} />
      <div className="w-full max-w-[956px] rounded-2xl bg-white/[0.03] border border-white/[0.06] p-5 sm:p-7">
        <div className="grid md:grid-cols-3 gap-5">
          {OPTIONS.map(({ id, title, Icon, cta, to, body }) => (
            <div
              key={id}
              onMouseEnter={() => setSelected(id)}
              onFocus={() => setSelected(id)}
              className={`rounded-xl p-5 flex flex-col items-center text-center border transition-colors ${
                selected === id ? 'border-[#FF6500]/80 bg-white/[0.04]' : 'border-white/[0.07] bg-white/[0.015]'
              }`}
            >
              <Icon size={38} strokeWidth={1.4} className="text-[#FF6500] mt-4" />
              <h2 className="text-white text-xl font-semibold mt-5">{title}</h2>
              <p className="text-[#D1D5DB] text-[15px] leading-snug mt-3 flex-1 min-h-[88px]">{body}</p>
              <button type="button" onClick={() => navigate(to)} className="mt-5 w-full h-11 rounded-md bg-gradient-to-b from-[#FF7A2E] to-[#F26A1F] hover:brightness-110 text-white text-[15px] font-medium transition">
                {cta}
              </button>
            </div>
          ))}
        </div>
        <p className="text-center text-[#D1D5DB] text-[15px] mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-[#FF7A45] underline underline-offset-2">Log in</Link>
        </p>
      </div>
    </AuthShell>
  );
};
