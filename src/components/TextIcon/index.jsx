import React from 'react';
import './TextIcon.scss';

const TextIcon = ({ img, name }) => {
  return (
    <section className='TextIcon'>
      <img className='TextIcon-img' src={img} alt={name} />
      <h2 className='TextIcon-name'>{name}</h2>
    </section>
  );
};

export default TextIcon;
