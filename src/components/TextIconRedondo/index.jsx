import React from 'react';
import './TextIconRedondo.scss';

const TextIconRedondo = ({ img, name }) => {
  return (
    <section className='TextIconRedondo'>
      <img className='TextIconRedondo-img' src={img} alt={name} />
      <h2 className='TextIconRedondo-name'>{name}</h2>
    </section>
  );
};

export default TextIconRedondo;
