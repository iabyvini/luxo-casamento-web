
import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    // Smooth scroll behavior for all anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
};

interface ScrollToSectionProps {
  sectionId: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const ScrollToSection = ({ sectionId, children, className = "", onClick }: ScrollToSectionProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className={`transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};
