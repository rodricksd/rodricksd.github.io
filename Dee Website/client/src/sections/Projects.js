import React from 'react';

const Projects = () => {
  const experiences = [
    {
      id: 1,
      company: 'Blackink IT',
      position: 'Cybersecurity Analyst',
      location: 'Indianapolis, IN',
      duration: 'June 2022 - June 2025',
      achievements: [
        'Promoted from specialist within two years for demonstrating strong analytical skills and in-depth cyber expertise.',
        'Led and facilitated upgrades of endpoint detection and response across 3000 client assets for enhanced security.',
        'Collaborated with cross-functional teams to standardize risk assessments for improved incident responses methodologies.',
        'Developed and executed a social media campaign with the marketing team to promote security solutions.',
        'Managed and coached an intern, providing on-the-job training and equipping with technical skills.'
      ]
    },
    {
      id: 2,
      company: 'TechPoint Xtern - Blackink IT',
      position: 'Service Intern',
      location: 'Indianapolis, IN',
      duration: 'June 2021 - May 2022',
      achievements: [
        'Designed roadmap and process integrations for an automated ticket portal to increase key performance indicators.',
        'Optimized internal operations by migrating and organizing all standard operating procedures.',
        'Proactively researched security initiatives and conceptualized a competency matrix to address potential skill gaps.'
      ]
    },
    {
      id: 3,
      company: 'TechPoint',
      position: 'Alumni Board Member for Professional Development',
      location: '',
      duration: 'June 2022 – June 2025',
      achievements: [
        'Created a holistic up-skill program, including workshops, guest speaker sessions, and networking events.',
        'Developed strong public speaking skills through participation as a panelist at tech and leadership conferences.'
      ]
    }
  ];

  return (
    <section id="projects" className="section-container bg-neutral-900 space-y-20">
      <div>
        <div className="text-center mb-16">
          <h2 className="section-title center">Professional Experience</h2>
          <p className="section-subtitle">
            My career journey and professional achievements
          </p>
        </div>
        
        <div className="accent-layer max-w-4xl mx-auto space-y-8">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="bg-neutral-800/70 rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-shadow duration-300 border border-neutral-700/60 relative overflow-hidden"
            >
              <div className="absolute inset-0 border border-accent-400/15 rounded-2xl pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-500/10 rounded-bl-[80px] blur-xl"></div>
              <div className="mb-4">
                <h3 className="heading-font text-2xl font-semibold text-neutral-100 mb-2">
                  {experience.company}
                </h3>
                <p className="text-lg font-semibold text-accent-200 tracking-wide uppercase">
                  {experience.position}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-neutral-300">
                  {experience.location && (
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {experience.location}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {experience.duration}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-3 mt-6">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3 text-neutral-200">
                    <span className="text-accent-200 mt-1.5 flex-shrink-0">▹</span>
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="section-divider" aria-hidden="true"></div>

      <div id="education">
        <div className="text-center mb-16">
          <h2 className="section-title center">Education</h2>
          <p className="section-subtitle">
            Academic foundation that fuels my strategic and technical expertise
          </p>
        </div>
        <div className="accent-layer max-w-4xl mx-auto space-y-6">
          <div className="relative bg-neutral-900/70 border border-primary-800/50 rounded-2xl p-8 md:p-10 shadow-xl backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-[-3rem] left-[-2rem] w-52 h-52 bg-primary-700/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-[-4rem] right-[-3rem] w-60 h-60 bg-accent-500/12 rounded-full blur-3xl"></div>
            </div>
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="heading-font text-2xl font-semibold text-neutral-100">
                  Purdue University
                </h3>
                <p className="uppercase tracking-[0.25em] text-sm text-accent-200/80 mt-2">
                  Masters of Business and Technology · 2026
                </p>
              </div>
              <div className="text-neutral-200 text-base leading-relaxed">
                <p>Concentration:</p>
                <p>Tech Commercialization</p>
              </div>
            </div>
          </div>
          <div className="relative bg-neutral-900/70 border border-primary-800/50 rounded-2xl p-8 md:p-10 shadow-xl backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-[-3rem] left-[-3rem] w-44 h-44 bg-primary-700/25 rounded-full blur-3xl"></div>
              <div className="absolute bottom-[-4rem] right-[-4rem] w-56 h-56 bg-accent-500/15 rounded-full blur-3xl"></div>
            </div>
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="heading-font text-2xl font-semibold text-neutral-100">
                  University of Indianapolis
                </h3>
                <p className="uppercase tracking-[0.25em] text-sm text-accent-200/80 mt-2">
                  Bachelor of Science · 2022
                </p>
              </div>
              <div className="text-neutral-200 text-base leading-relaxed">
                <p>Major: Computer Science</p>
                <p>Minor: Mathematics</p>
              </div>
            </div>
          </div>
          <div className="relative bg-neutral-900/70 border border-primary-800/50 rounded-2xl p-8 md:p-10 shadow-xl backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-[-4rem] right-[-5rem] w-48 h-48 bg-primary-700/25 rounded-full blur-3xl"></div>
              <div className="absolute bottom-[-4rem] left-[-4rem] w-60 h-60 bg-accent-500/12 rounded-full blur-3xl"></div>
            </div>
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="heading-font text-2xl font-semibold text-neutral-100">
                  Purdue University Indianapolis
                </h3>
                <p className="uppercase tracking-[0.25em] text-sm text-accent-200/80 mt-2">
                  Bachelor of Science · 2022
                </p>
              </div>
              <div className="text-neutral-200 text-base leading-relaxed">
                <p>Major:</p>
                <p>Computer Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-divider" aria-hidden="true"></div>

      <div id="technical-projects">
        <div className="text-center mb-16">
          <h2 className="section-title center">Technical Projects</h2>
          <p className="section-subtitle">
            Selected hands-on work showcasing engineering and cybersecurity problem-solving
          </p>
        </div>
        <div className="accent-layer max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
          {[
            {
              title: 'Incident Response Tabletop Exercise',
              subtitle: 'Non-Profit Organization',
              icon: (
                <svg className="w-9 h-9 text-accent-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M9 12l2 2 4-4" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M9 5h6" />
                </svg>
              ),
              bullets: [
                'Conducted a tabletop exercise reviewing hardware and software asset readiness.',
                'Administered a risk analysis to evaluate tolerance and transference levels.',
                'Delivered a methodical, actionable incident response plan for executive adoption.',
              ],
            },
            {
              title: 'OSA SmartRing',
              subtitle: 'Purdue University Indianapolis',
              icon: (
                <svg className="w-9 h-9 text-accent-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M12 2a5 5 0 015 5v1a2 2 0 002 2 3 3 0 01-3 3h-1" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M12 22a5 5 0 01-5-5v-1a2 2 0 00-2-2 3 3 0 013-3h1" />
                  <rect width="8" height="12" x="8" y="6" rx="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M10 6V4a2 2 0 114 0v2" />
                </svg>
              ),
              bullets: [
                'Led a team of five to design a smart ring detecting obstructive sleep apnea events.',
                'Designed the physical prototype and wearable architecture.',
                'Programmed LDF sensors, PSoC6 microcontroller, and pulse oximeter integration.',
              ],
            },
            {
              title: '3D Modelling Software of Teeth',
              subtitle: 'University of Indianapolis',
              icon: (
                <svg className="w-9 h-9 text-accent-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M20.485 20.485A11.955 11.955 0 0112 24c-3.137 0-5.983-1.195-8.182-3.152a11.955 11.955 0 01-3.152-8.182 11.955 11.955 0 013.152-8.182A11.955 11.955 0 0112 1c3.137 0 5.983 1.195 8.182 3.152a11.955 11.955 0 013.152 8.182 11.955 11.955 0 01-3.152 8.182z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M12 12l3-3m-3 3l3 3m-3-3l-3-3m3 3l-3 3" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              ),
              bullets: [
                'Built software ingesting topographic dental data to render 3D teeth models.',
                'Enabled dental researchers to measure cusp apexes for molar crowns.',
                'Leveraged VPython for scientific visualization and tooling.',
              ],
            },
          ].map((project, idx) => (
            <div
              key={idx}
              className="group relative h-72 md:h-80 bg-neutral-900/70 border border-primary-800/40 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-3rem] right-[-2rem] w-40 h-40 bg-accent-500/18 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-110"></div>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center transition-opacity duration-300 group-hover:opacity-0 space-y-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent-500/10 border border-accent-300/30">
                  {project.icon}
                </div>
                <div>
                  <h3 className="heading-font text-xl font-semibold text-neutral-50">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.3em] text-accent-200/80">
                    {project.subtitle}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-neutral-950/95 px-6 py-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="heading-font text-lg font-semibold text-neutral-50 mb-3">
                  {project.title}
                </h3>
                <p className="text-[11px] uppercase tracking-[0.35em] text-accent-300 mb-4">
                  {project.subtitle}
                </p>
                <ul className="space-y-2 text-neutral-200 text-sm leading-relaxed">
                  {project.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex gap-2 items-start">
                      <span className="text-accent-200 mt-1">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
