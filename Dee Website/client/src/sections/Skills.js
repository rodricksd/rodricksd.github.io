import React from 'react';
import { HiOutlineUserGroup, HiOutlineAcademicCap, HiOutlineBadgeCheck } from 'react-icons/hi';

const Skills = () => {
  const categories = [
    {
      title: 'Leadership',
      icon: HiOutlineUserGroup,
      items: [
        'President, Business & Technology Association, Purdue University',
        'President of Indian Student Association, University of Indianapolis',
        'Vice President, Delta Kappa Delta Sorority Inc.',
        'TechPoint Xtern Leader',
        'Presidential Ambassador, University of Indianapolis'
      ]
    },
    {
      title: 'Certifications',
      icon: HiOutlineAcademicCap,
      items: [
        'Business Analytics, Harvard Business School Online',
        'Certified in Cybersecurity, ISC2',
        'Certified Peer Educator, NASPA'
      ]
    },
    {
      title: 'Awards & Honors',
      icon: HiOutlineBadgeCheck,
      items: [
        'TechPoint Xtern Value Award - Investment in Community',
        'MIRA Awards Finalist for Resilience',
        "Dean's List | 2017-2022",
        'Honors Induction into ΦΑΕ'
      ]
    }
  ];

  return (
    <section id="skills" className="section-container bg-neutral-900">
      <div className="text-center mb-16">
        <h2 className="section-title center">Leadership, Certifications and Awards</h2>
        <p className="section-subtitle">
          Recognitions and achievements throughout my academic and professional journey
        </p>
      </div>
      <div className="section-divider" aria-hidden="true"></div>
      
      <div className="accent-layer grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
        {categories.map((category, categoryIndex) => {
          const Icon = category.icon;
          return (
          <div
            key={categoryIndex}
            className="bg-gradient-to-br from-primary-500/15 via-neutral-900/90 to-neutral-800/70 rounded-2xl shadow-xl p-8 border border-primary-500/20 backdrop-blur-sm transition transform hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-primary-400/20">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-400/20 text-primary-200">
                <Icon className="text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold text-neutral-50 tracking-wide">
                {category.title}
              </h3>
            </div>
            <ul className="space-y-3">
              {category.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="group flex items-start gap-3 text-neutral-100 bg-neutral-900/50 border border-primary-400/15 rounded-xl px-4 py-3 transition hover:border-primary-300/40 hover:bg-neutral-900/80"
                >
                  <span className="mt-1.5 text-primary-200">▹</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )})}
      </div>
    </section>
  );
};

export default Skills;
