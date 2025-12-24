import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="section-title">
      <h2 className="section-title-main">{title}</h2>
      {subtitle && <p className="section-title-subtitle">{subtitle}</p>}
      <div className="section-title-divider"></div>
    </div>
  );
};

export default SectionTitle;
