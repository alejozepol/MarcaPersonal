import React from 'react';
import './CardHorizontal.scss';

const CardHorizontal = ({ empresa, fechaInicio, fechaFin, cargo, actividad, logo }) => {
  if (!actividad) {
    // eslint-disable-next-line no-param-reassign
    actividad = [];
  }
  return (
    <section className='CardHorizontal'>
      <img className='CardHorizontal-logo' src={logo} alt={empresa} />
      <h4 className='CardHorizontal-empresa'>{empresa}</h4>
      <h3 className='CardHorizontal-cargo'>{cargo}</h3>
      <p className='CardHorizontal-fechaInicio'>{fechaInicio}</p>
      <p className='CardHorizontal-fechaFinal'>{fechaFin}</p>
      <ul className='CardHorizontal-actividades'>
        {
          actividad.map((i) => <li key={i}>{i}</li>)
        }
      </ul>
    </section>
  );
};

export default CardHorizontal;
