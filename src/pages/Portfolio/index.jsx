import React from 'react';
import HeroTextImg from '../../container/HeroTextImg';
import Quote from '../../components/Quote';
import foto3 from '../../assets/foto3.png';
import inicialState from '../../../inicialState';
import GardenCardHorizontal from '../../container/GardenCardHorizontal';
import cavipertrol from '../../assets/RRHH/cavipetrol.png';
import cajaHonor from '../../assets/RRHH/cajaHonor.png';
import vigia from '../../assets/RRHH/vigia.png';
import equidad from '../../assets/RRHH/equidad.png';
import bosque from '../../assets/RRHH/elBosque.png';
import BtnEmail from '../../container/BtnEmail';

const Portfolio = () => (
  <section className='Portfolio'>
    <HeroTextImg color='contrast' direction='left' img={foto3} alt='Foto Alejandro López'>
      <Quote
        direction='right'
        sentence='Si solo sabes de tu profesión ni de tu profesión sabes...'
      />
      <BtnEmail />
    </HeroTextImg>
    <section className='Portfolio__web'>
      <GardenCardHorizontal title='Desarrollo web' items={[...inicialState.ProjectWeb]} />
    </section>
    <section className='Portfolio__RRHH'>
      <h2>Clientes RRHH</h2>
      <div className='Portfolio__RRHH-content'>
        <img src={cavipertrol} alt='logo cavipetrol' />
        <img src={cajaHonor} alt='logo caja honor' />
        <img src={vigia} alt='logo vigia' />
        <img src={bosque} alt='logo clinica el bosque' />
        <img src={equidad} alt='logo equidad seguros' />
      </div>
    </section>
    <section className='Portfolio__UI'>
      <GardenCardHorizontal title='Diseño UI' items={[...inicialState.ProjectUI]} />
    </section>
  </section>
);

export default Portfolio;
