import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useStickyNav = () => {
  const [isSticky, setIsSticky] = useState(false);
  const secondSectionRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (secondSectionRef.current) {
        // Detect when the top of the second section is at the viewport top
        const isSectionActive =
          secondSectionRef.current.getBoundingClientRect().top <= 100;
        setIsSticky(isSectionActive);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [secondSectionRef]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setIsSticky(false);
  }, [location.pathname]);

  return { isSticky, secondSectionRef };
};

export default useStickyNav;
