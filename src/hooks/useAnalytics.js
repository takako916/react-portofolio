import { useEffect } from 'react';

export const useAnalytics = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            // Google Analyticsにページビューとして送信
            window.gtag('event', 'page_view', {
              page_title: sectionId,
              page_path: `/${sectionId}`
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    // 各セクションを監視
    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);
}; 