import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-container bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title center">About Me</h2>
          <p className="section-subtitle">
            Learn more about my background, interests, and goals
          </p>
        </div>
        
        <div className="accent-layer bg-neutral-900/70 border border-primary-800/40 rounded-[2.75rem] p-10 md:p-12 shadow-2xl backdrop-blur-sm overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -left-16 w-72 h-72 bg-accent-400/18 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-6rem] right-[-5rem] w-80 h-80 bg-primary-700/25 rounded-full blur-[90px]"></div>
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent-400/60 to-transparent"></div>
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[2fr,2fr]">
            <div className="space-y-8">
              <div className="rounded-2xl border border-primary-700/40 bg-primary-900/40 p-6 shadow-inner">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-500/15 border border-accent-300/30 text-accent-200">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M12 12c2.21 0 4-1.642 4-3.667C16 6.31 14.21 4.667 12 4.667S8 6.31 8 8.333C8 10.358 9.79 12 12 12z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M6.75 20.5a10.05 10.05 0 0110.5 0" />
                    </svg>
                  </div>
                  <h3 className="heading-font text-xl font-semibold text-neutral-100">Who I Am</h3>
                </div>
                <p className="text-neutral-200 leading-relaxed mb-3">
                  I'm Deandra Lauren Rodricks, currently pursuing a Masters of Business and Technology at the Mitch Daniels School of Business, Purdue University, graduating in 2026.
                </p>
                <p className="text-neutral-200 leading-relaxed">
                  My journey blends technology and business: Magna Cum Laude graduate with dual degrees in Computer Science (University of Indianapolis) and Computer Engineering (Purdue University Indianapolis).
                </p>
              </div>

              <div className="rounded-2xl border border-primary-700/40 bg-primary-900/40 p-6 shadow-inner">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-500/15 border border-accent-300/30 text-accent-200">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M8.28 13.97L3 16l2.03-5.28a1 1 0 01.13-.24L11.6 3l6.87 6.87-5.81 5.82a1 1 0 01-.24.13L8.28 13.97z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M6 6l4 4" />
                    </svg>
                  </div>
                  <h3 className="heading-font text-xl font-semibold text-neutral-100">From Cybersecurity to Business School</h3>
                </div>
                <p className="text-neutral-200 leading-relaxed mb-3">
                  I fast-tracked from intern to Cybersecurity Analyst at a managed service provider, thriving in high-pressure environments. I loved translating technical risk into confident business decisions.
                </p>
                <p className="text-neutral-200 leading-relaxed">
                  That passion brought me back to Purdue, and I am now laser-focused on bridging technological potential with strategic organizational goals.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-2xl border border-primary-700/40 bg-primary-900/40 p-6 shadow-inner">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-500/15 border border-accent-300/30 text-accent-200">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M9.5 11l1.8 1.8 3.2-3.6" />
                    </svg>
                  </div>
                  <h3 className="heading-font text-xl font-semibold text-neutral-100">What Drives Me</h3>
                </div>
                <ul className="space-y-3 text-neutral-200 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-accent-200 mt-1">▹</span>
                    Championing tech strategy that fuels secure, sustainable growth for organizations.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-200 mt-1">▹</span>
                    Leveraging deep technical skills to solve complex business challenges.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-200 mt-1">▹</span>
                    Building bridges between technical teams and executive stakeholders.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-primary-700/40 bg-primary-900/40 p-6 shadow-inner">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-500/15 border border-accent-300/30 text-accent-200">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M8 2h8a2 2 0 012 2v18l-6-3-6 3V4a2 2 0 012-2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M12 7h.01" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M9 10h6" />
                    </svg>
                  </div>
                  <h3 className="heading-font text-xl font-semibold text-neutral-100">Beyond the Desk</h3>
                </div>
                <p className="text-neutral-200 leading-relaxed mb-3">
                  When I'm not crafting tech strategy, you'll find me cooking something bold, planning my next adventure, or exploring a new dance routine (the 5-year-old dancer in me never left).
                </p>
                <p className="text-neutral-200 leading-relaxed">
                  I'm an extroverted and optimistic collaborator—Enneagram Challenger + Loyalist and Predictive Index Altruist—driven by helping teams and organizations win.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-divider" aria-hidden="true"></div>
    </section>
  );
};

export default About;

