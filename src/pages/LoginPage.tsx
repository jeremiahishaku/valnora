import React, { useState } from 'react';
import { Mail, KeyRound } from 'lucide-react';
import { SEO } from '../components/common/SEO.tsx';
import { AuthShell } from '../components/auth/AuthShell.tsx';
import { Link, useRouter } from '../router/Router.tsx';

const inputWrap = 'flex items-center gap-3 h-[52px] px-4 rounded-xl bg-black/60 border border-[#3A4350] shadow-[0_0_14px_rgba(160,180,210,0.18)] focus-within:border-[#FF6500] transition-colors';

export const LoginPage: React.FC = () => {
  const { navigate } = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError('Enter a valid email address.');
    if (password.length < 6) return setError('Password must be at least 6 characters.');
    setError('');
    // No auth backend is wired up yet — hand off to the app page.
    navigate('/our-app');
  };

  return (
    <AuthShell title="Secure Access to Valnora">
      <SEO meta={{ title: 'Log in', description: 'Log in to your Valnora account.' }} />
      <div className="w-full max-w-[840px] rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur p-6 sm:p-10 grid md:grid-cols-[1fr_1px_1fr] gap-8 md:gap-10">
        <form onSubmit={submit} className="flex flex-col gap-5" noValidate>
          <label className={inputWrap}>
            <Mail size={18} className="text-[#9CA3AF]" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" autoComplete="email" className="flex-1 bg-transparent outline-none text-white placeholder:text-[#9CA3AF] text-[15px]" />
          </label>
          <label className={inputWrap}>
            <KeyRound size={18} className="text-[#9CA3AF]" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" autoComplete="current-password" className="flex-1 bg-transparent outline-none text-white placeholder:text-[#9CA3AF] text-[15px]" />
          </label>
          <div className="text-right -mt-2">
            <a href="#/login" className="text-white text-sm underline underline-offset-2 hover:text-[#FF6500]">Forgot Password?</a>
          </div>
          {error && <p role="alert" className="text-[#FF8A4C] text-xs">{error}</p>}
          <button type="submit" className="mt-2 h-[68px] rounded-xl bg-gradient-to-b from-[#FF7A2E] to-[#F26A1F] hover:brightness-110 transition text-white flex flex-col items-center justify-center shadow-[0_6px_20px_rgba(250,90,0,0.25)]">
            <span className="text-lg font-semibold leading-tight">Log in</span>
            <span className="text-[13px] opacity-90 leading-tight">Sign in to your account</span>
          </button>
        </form>

        <div className="hidden md:block bg-[#2A2F36]" aria-hidden="true" />

        <div className="flex flex-col items-center text-center pt-2">
          <h2 className="text-white text-xl font-semibold">Don't have an account?</h2>
          <p className="text-[#B4BAC4] text-[15px] mt-2">Join the Valnora network today.</p>
          <Link to="/get-started" className="mt-6 w-full rounded-xl border border-[#FF6500] py-3 flex flex-col items-center hover:bg-[#FF6500]/10 transition-colors">
            <span className="text-white text-lg font-semibold leading-tight">Sign Up</span>
            <span className="text-[#FF6500] text-[13px] leading-tight">Register as a Business or Professional</span>
          </Link>
          <p className="text-[#B4BAC4] text-sm mt-6">Or, sign in with...</p>
          <div className="flex gap-3 mt-4">
            <button type="button" aria-label="Sign in with Google" className="w-11 h-11 rounded-lg bg-[#1E2227] text-white font-bold hover:bg-[#2A2F36] transition-colors">G</button>
            <button type="button" aria-label="Sign in with LinkedIn" className="w-11 h-11 rounded-lg bg-[#1E2227] text-white font-bold hover:bg-[#2A2F36] transition-colors">in</button>
          </div>
        </div>
      </div>
    </AuthShell>
  );
};
