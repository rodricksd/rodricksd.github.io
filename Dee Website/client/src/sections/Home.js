import React from 'react';

const Home = () => {
  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 pt-24 pb-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-6rem] right-[-4rem] w-96 h-96 bg-accent-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-5rem] left-[-3rem] w-[28rem] h-[28rem] bg-primary-700/25 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[18rem] h-[18rem] bg-accent-500/10 rounded-full blur-2xl"></div>
      </div>
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 w-[92%] max-w-4xl h-[30rem] md:h-[32rem] -translate-x-1/2 -translate-y-1/2 bg-primary-950/90 border border-primary-800/70 rounded-[2.75rem] shadow-[0_35px_90px_-40px_rgba(0,0,0,0.85)] blur-[0.5px]"
      ></div>
      <div className="section-container accent-layer relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-400/40 via-transparent to-transparent blur-xl rounded-full"></div>
              <img
                src="/images/profile.jpg"
                alt="Deandra Lauren Rodricks"
                className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover shadow-2xl border-[6px] border-accent-200/60 bg-neutral-100"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-accent-500/10 border border-accent-400/20 rounded-full text-sm uppercase tracking-[0.35em] text-accent-200">
              Business & Technology Strategist
            </div>
            <h1 className="heading-font text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-100 drop-shadow-sm">
              Deandra Lauren Rodricks
            </h1>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-accent-400 to-transparent"></div>
            <p className="text-xl md:text-2xl text-neutral-200">
              Masters of Business and Technology | Mitch Daniels School of Business, Purdue '26
            </p>
            <p className="text-lg md:text-xl text-neutral-200/90 leading-relaxed">
              Dedicated to bridging the gap between technology and business strategy that translates to organizational wins; focusing on delivering sustainable and secure business growth.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-accent-400 via-accent-500 to-accent-400 text-primary-900 px-10 py-3 rounded-full font-semibold hover:from-accent-300 hover:via-accent-400 hover:to-accent-300 transition-all shadow-[0_10px_30px_-12px_rgba(242,171,58,0.85)]"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-3 rounded-full font-semibold border border-accent-300 text-accent-200 hover:bg-accent-200/10 transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      <div className="section-divider" aria-hidden="true"></div>
    </section>
  );
};

export default Home;

