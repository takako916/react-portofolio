import React, { useState, useEffect } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import HomePage from "./HomePage";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "../Footer";
import { useAnalytics } from '../../hooks/useAnalytics';
import OptimizedImage from '../common/OptimizedImage';

const MainContent = ({ bgColor, language }) => {
  useScrollAnimation();
  useAnalytics();

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div 
        className="scroll-progress" 
        style={{ transform: `scaleX(${scrollProgress / 100})` }} 
      />
      <div className="main-content">
        <section id="home" className="section">
          <HomePage bgColor={bgColor} language={language} />
        </section>
        
        <section id="about" className="section">
          <div className="fade-up">
            <About language={language} />
          </div>
        </section>
        
        <section id="projects" className="section">
          <div className="fade-up">
            <Projects language={language} />
          </div>
        </section>
        
        <section id="skills" className="section">
          <div className="fade-up">
            <Skills language={language} />
          </div>
        </section>
        
        <section id="footer" className="section">
          <div className="fade-up">
            <Footer language={language} />
          </div>
        </section>
      </div>
    </>
  );
};

export default MainContent;
