import React from 'react';

import './custom-button.styles.scss';

export default function CustomButton({ children, handleClick, fluid }) {
  return (
    <button className={`customButton ${fluid ? 'fluid' : ''}`} onClick={handleClick}>
      {children}
    </button>
  );
}
