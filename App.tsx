import React, { useState, useCallback, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Education from './components/Education';
import Works from './components/Works';
import { AuroraBackground } from './components/AuroraBackground';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from './lib/utils';

const pageTransition = { duration: 0.4 };

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('Home');

  const handleNavigate = useCallback((view: string) => {
    setCurrentView(view);
  }, []);

  const containerClass = useMemo(() => cn(
    "flex-1 w-full relative overflow-x-hidden scrollbar-hide",
    currentView === 'Home' ? "overflow-y-auto lg:overflow-hidden" : "overflow-y-auto"
  ), [currentView]);

  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden flex flex-col h-screen w-screen">
      {/* Dark Grid Lines Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #262626 1px, transparent 1px),
            linear-gradient(to bottom, #262626 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />
      <Navbar currentView={currentView} onNavigate={handleNavigate} />

      <div className={containerClass}>
        <AnimatePresence mode="wait">
          {currentView === 'Home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={pageTransition}
              className="h-full w-full min-h-[600px] md:min-h-0 gpu-accelerated"
            >
              <Hero onNavigate={handleNavigate} />
            </motion.div>
          )}

          {currentView === 'Skills' && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={pageTransition}
              className="h-full w-full gpu-accelerated"
            >
              <Skills />
            </motion.div>
          )}

          {currentView === 'About' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={pageTransition}
              className="h-full w-full gpu-accelerated"
            >
              <About />
            </motion.div>
          )}

          {currentView === 'Education' && (
            <motion.div
              key="education"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={pageTransition}
              className="h-full w-full gpu-accelerated"
            >
              <Education />
            </motion.div>
          )}

          {currentView === 'Works' && (
            <motion.div
              key="works"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={pageTransition}
              className="h-full w-full gpu-accelerated"
            >
              <Works />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

   
    </div>
  );
};

export default App;