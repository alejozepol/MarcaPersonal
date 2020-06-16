import React from 'react';

const CardLogoRight = ({ img, empresa, cargo, fechaInicio, fechaFin, actividad = [] }) => (
  <section className='CardLogoRight'>
    <div className='CardLogoRight__img'>
      <div className='CardLogoRight__img-circle'>
        <div className='CardLogoRight__img-circle-content'>
          <img src={img} alt={empresa} />
        </div>
      </div>
    </div>
    <div className='CardLogoRight__Container'>
      <div className='CardLogoRight__Container-bg'>
        <h3>{empresa}</h3>
        <h4>{cargo}</h4>
        <p>{fechaInicio}</p>
        <p>{fechaFin}</p>
        <ul>
          {
            actividad.map((item) => <li>{item}</li>)
          }
        </ul>
      </div>
    </div>
  </section>
);

export default CardLogoRight;
