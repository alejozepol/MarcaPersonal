import React from 'react';
import './Hero.scss';

const Hero = ({ img, children }) => {
  return (
    <section className='Hero'>
      <img src={img} alt='Imagen Hero' />
      {children}
    </section>
  );
};

export default Hero;
