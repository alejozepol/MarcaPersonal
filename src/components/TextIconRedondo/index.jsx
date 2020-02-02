import React from 'react';
import './TextIconRedondo.scss';

const TextIconRedondo = ({ img, name, type }) => {
  if (!type) {
    // eslint-disable-next-line no-param-reassign
    type = '';
  }
  return (
    <section className={`TextIconRedondo ${type}`}>
      <img className='TextIconRedondo-img' src={img} alt={name} />
      <h2 className='TextIconRedondo-name'>{name}</h2>
    </section>
  );
};

export default TextIconRedondo;
