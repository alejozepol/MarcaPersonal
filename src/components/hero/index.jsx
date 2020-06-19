import React from 'react';

const Hero = ({ children, direction, color }) => {
  return (
    <section className={` Hero Hero-${direction} Hero-${direction}-${color}`}>
      {children}
    </section>
  );
};

export default Hero;
