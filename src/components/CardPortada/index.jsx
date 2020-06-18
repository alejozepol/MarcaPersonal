import React from 'react';

const CardPortada = ({ size, color, title, subtitle, img, btn }) => (
  <section className={`CardPortada CardPortada-${size} CardPortada-${color}`}>
    <div className='CardPortada-content'>
      <img className='CardPortada-content-img' src={img} alt={subtitle} />
      <h5 className='CardPortada-content-title'>{title}</h5>
      <h6 className='CardPortada-content-subtitle'>{subtitle}</h6>
      {
        btn && (
          <a className={`CardPortada-content-btn CardPortada-content-btn-${color}`} target='_black' href={btn}>Ver</a>
        )
      }
    </div>
  </section>
);

export default CardPortada;
