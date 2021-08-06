import React from 'react';

import './custom-button.styles.scss';

export default function CustomButton({ children, handleClick, fluid, ...props }) {
  return (
    <button className={`customButton ${fluid ? 'fluid' : ''}`} onClick={handleClick} {...props}>
      {children}
    </button>
  );
}
