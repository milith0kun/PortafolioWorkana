import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  icon = null,
  as = 'button',
  ...props 
}) => {
  const classNames = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    fullWidth && 'btn-full'
  ].filter(Boolean).join(' ');

  const Component = as;

  return (
    <Component className={classNames} {...props}>
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </Component>
  );
};

export default Button;
