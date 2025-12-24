import React from 'react';
import { ChevronDown } from 'lucide-react';
import './NextSectionButton.css';

const NextSectionButton = ({ targetId, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <button 
      className="next-section-button" 
      onClick={handleClick}
      aria-label="Siguiente sección"
    >
      <ChevronDown size={24} />
    </button>
  );
};

export default NextSectionButton;
