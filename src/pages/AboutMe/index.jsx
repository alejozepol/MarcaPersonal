import React from 'react';
import Hero from '../../components/hero';
import Quote from '../../components/Quote';

const AboutMe = () => (
  <section className='AboutMe'>
    <Hero color='contrast' direction='right'>
      <Quote
        direction='left'
        sentence='Si en privado te avergüenzas de ti mismo, es por que aun no eres la mejor version que puedes ser'
      />
    </Hero>
  </section>
);

export default AboutMe;
