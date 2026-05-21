import React from 'react';
import Navigation from './components/Navigation';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="bg-primary-900 text-neutral-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neutral-300">
            &copy; {new Date().getFullYear()} Portfolio Website. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

