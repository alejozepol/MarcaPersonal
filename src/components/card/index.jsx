import React from 'react';
import './Card.scss';

const Card = ({ img, title, text }) => {
  return (
    <section className='Card'>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
    </section>
  );
};

export default Card;
