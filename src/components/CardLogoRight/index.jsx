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
        <div className='CardLogoRight__Container-content'>
          <h5 className='CardLogoRight__Container-title'>{empresa}</h5>
          <h3 className='CardLogoRight__Container-subtitle'>{cargo}</h3>
          <div className='CardLogoRight__Container-date'>
            <p className='CardLogoRight__Container-date-start'>{fechaInicio}</p>
            <p className='CardLogoRight__Container-date-end'>{fechaFin}</p>
          </div>
          <ul className='CardLogoRight__Container-activity'>
            {
              actividad.map((item) => <li key={item}>{item}</li>)
            }
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default CardLogoRight;
