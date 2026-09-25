import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const scrollToElement = () => {
        const element = document.getElementById(id);
        if (element) {
          const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: topOffset, behavior: 'smooth' });
        }
      };

      // Try immediate and slightly delayed to allow page rendering
      scrollToElement();
      const timer = setTimeout(scrollToElement, 150);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
