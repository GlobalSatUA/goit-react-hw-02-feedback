import React from 'react';

const Section = ({ title, children }) => {
  return (
    <div>
      <h2 style={{ fontWeight: 'bold', fontSize: '18px' }}>{title}</h2>
      {children}
    </div>
  );
};

export default Section;
