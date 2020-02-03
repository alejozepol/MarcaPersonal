import React from 'react';
import './CardSencilla.scss';

const CardSencilla = ({ title, subtitle, img }) => {
  return (
    <section className='CardSencilla'>
      <img className='CardSencilla-img' src={img} alt={title} />
      <h4 className='CardSencilla-title'>{title}</h4>
      <h3 className='CardSencilla-subTitle'>{subtitle}</h3>
    </section>
  );
};

export default CardSencilla;
