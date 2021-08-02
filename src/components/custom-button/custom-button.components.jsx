import React from 'react';

import './custom-button.styles.scss';

export default function CustomButton({ children, handleClick }) {
  return (
    <button className="customButton" onClick={handleClick}>
      {children}
    </button>
  );
}
