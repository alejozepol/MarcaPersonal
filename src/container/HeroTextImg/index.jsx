import React from 'react';
import Hero from '../../components/hero';

const HeroTextImg = ({ color, direction, children, img, alt }) => (
  <Hero color={color} direction={direction}>
    <section className='HeroTextImg'>
      <div className='HeroTextImg__img'>
        <img src={img} alt={alt} />
      </div>
      <div className='HeroTextImg__content'>
        {children}
      </div>
    </section>
  </Hero>
);

export default HeroTextImg;

