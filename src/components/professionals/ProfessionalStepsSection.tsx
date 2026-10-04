import React from 'react';

const STEPS = [
  {
    "title": "Build Your Profile",
    "desc": "Showcase your skills, experience, services, and work."
  },
  {
    "title": "Showcase Your Work",
    "desc": "Post your projects and build a portfolio that speaks for you."
  },
  {
    "title": "Set Your Prices",
    "desc": "Create your services and set your own pricing."
  },
  {
    "title": "Get Discovered",
    "desc": "Customers search, compare and find you."
  },
  {
    "title": "Get Booked",
    "desc": "Receive booking requests and choose what works for you."
  },
  {
    "title": "Communicate",
    "desc": "Chat with customers in-app and keep everything organized."
  },
  {
    "title": "Get Paid",
    "desc": "Complete the job and get paid securely through Valnora."
  },
  {
    "title": "Build Your Reputation",
    "desc": "Happy customers, great reviews, more bookings."
  }
];

/**
 * 8-STEP JOURNEY — For-Professionals.jpg: heading, then eight numbered cards joined by orange arrows.
 * Each card's phone-screen preview is an image cropped from the design reference.
 */
export const ProfessionalStepsSection: React.FC = () => {
  return (
    <section id="professional-steps-section" className="relative w-full bg-[#070707] py-1 z-10" aria-label="Everything you need to grow your professional business">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="rounded-xl border border-[#2A1A10] bg-[#0A0A0B] px-3 pt-2 pb-1.5">
          <h2 id="steps-heading" className="text-white text-center text-[18px] font-medium tracking-tight leading-tight mb-2">
            Everything you need to grow your professional business
          </h2>
          <ol id="steps-grid" className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-8 gap-3 xl:gap-[14px]">
            {STEPS.map((s, i) => (
              <li key={s.title} className="relative bg-[#0E1012] border border-[#1E2227] rounded-lg p-2 flex flex-col text-left">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="w-[15px] h-[15px] rounded-full bg-[#FA5A00] text-white text-[9px] font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                  <h3 className="text-white text-[11px] font-medium leading-tight">{s.title}</h3>
                </div>
                <p className="text-[#B4BAC4] text-[9px] leading-[13px] min-h-[39px]">{s.desc}</p>
                <img src={`/assets/ref/pro-step-${i + 1}.jpg`} alt={`${s.title} preview`} className="w-full h-auto rounded-md mt-1.5 select-none" loading="lazy" />
                {i < STEPS.length - 1 && (
                  <span aria-hidden="true" className="hidden xl:block absolute -right-[11px] top-[42%] text-[#FF6500] text-[10px] leading-none z-10">&rsaquo;</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
