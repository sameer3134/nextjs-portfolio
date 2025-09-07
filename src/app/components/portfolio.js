'use client'
import React, { useState, useEffect, useRef } from 'react';
import { DarkModeProvider, useDarkMode } from './context/context';
import { HeroSection } from './heroSection';
import { Navigation } from './navbar';
import { AboutSection } from './aboutSection';
import { SkillsSection } from './skillSection';
import { ProjectsSection } from './projectSection';
import { ContactSection } from './contactSection';

// Import other sections...

const PortfolioContent = () => {
//   const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef([]);
   const { darkMode } = useDarkMode();
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//       // Section detection logic...
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
useEffect(() => {
  const handleScroll = () => {
    const sections = sectionsRef.current;
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    sections.forEach((section, index) => {
      if (section) {
        const rect = section.getBoundingClientRect();
        const sectionTop = scrollPosition + rect.top;
        const sectionBottom = sectionTop + rect.height;
        
        if (
          scrollPosition >= sectionTop - windowHeight * 0.5 &&
          scrollPosition < sectionBottom - windowHeight * 0.5
        ) {
          setActiveSection(index);
        }
      }
    });
  };

  handleScroll(); // Set initial state
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
  return (
    <div className={`${!darkMode ? "bg-white" :"bg-gray-900" } text-gray-900 dark:text-white transition-all duration-700`}>
      <Navigation activeSection={activeSection} sectionsRef={sectionsRef} />
      <HeroSection  sectionsRef={sectionsRef} />
      <AboutSection  sectionsRef={sectionsRef}/>
      <SkillsSection activeSection={activeSection} sectionsRef={sectionsRef}/>
      <ProjectsSection  sectionsRef={sectionsRef}/>
      <ContactSection />
    </div>
  );
};

const Portfolio = () => {
  return (
    <DarkModeProvider>
      <PortfolioContent />
    </DarkModeProvider>
  );
};

export default Portfolio;
