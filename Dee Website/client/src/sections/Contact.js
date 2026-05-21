import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section-container bg-neutral-900">
      <div className="text-center mb-16">
        <h2 className="section-title center">Get In Touch</h2>
        <p className="section-subtitle">
          I'm always open to discussing new projects and opportunities
        </p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <div className="accent-layer bg-neutral-900/70 rounded-3xl shadow-2xl p-10 border border-primary-800/50 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-3rem] right-[-2rem] w-56 h-56 bg-accent-500/15 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-4rem] left-[-4rem] w-64 h-64 bg-primary-700/20 rounded-full blur-3xl"></div>
          </div>
          <div className="relative">
          <h3 className="text-2xl font-bold text-neutral-100 mb-8">Contact Information</h3>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-primary-300/20 p-3 rounded-full">
                <FaEnvelope className="text-primary-200 text-xl" />
              </div>
              <div>
                <p className="text-neutral-300 text-sm">Email</p>
                <a
                  href="mailto:deandrarodricks@gmail.com"
                  className="text-neutral-100 font-medium hover:text-primary-200 transition-colors"
                >
                  deandrarodricks@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-primary-300/20 p-3 rounded-full">
                <FaLinkedin className="text-primary-200 text-xl" />
              </div>
              <div>
                <p className="text-neutral-300 text-sm">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/deandra-rodricks/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-100 font-medium hover:text-primary-200 transition-colors"
                >
                  linkedin.com/in/deandra-rodricks
                </a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
