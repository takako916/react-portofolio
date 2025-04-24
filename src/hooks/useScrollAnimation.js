import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // 監視対象の要素を追加
    const elements = document.querySelectorAll(`
      .section,
      .fade-up,
      .project-card,
      .skills-section h1,
      .skills-section .nav,
      .skills-section .tab-content
    `);
    
    elements.forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
}; 