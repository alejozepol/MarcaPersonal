import React from 'react';
import './Card.scss';

const Card = ({ img, title, text, children }) => {
  return (
    <section className='Card'>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
      {children}
    </section>
  );
};

export default Card;
