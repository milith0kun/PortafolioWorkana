import React from 'react';
import './BrandMark.css';

/**
 * BrandMark - Componente de marca "ed" decorativo
 * @param {string} variant - 'large' | 'small' | 'corner' | 'inline'
 * @param {string} position - 'left' | 'right' | 'center'
 */
const BrandMark = ({ variant = 'small', position = 'right' }) => {
    return (
        <div className={`brand-mark brand-mark-${variant} brand-mark-${position}`}>
            <span className="brand-mark-e">e</span>
            <span className="brand-mark-d">d</span>
        </div>
    );
};

export default BrandMark;
