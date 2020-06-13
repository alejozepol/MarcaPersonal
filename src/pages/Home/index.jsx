import React from 'react';
import Hero from '../../components/hero';
import IconSocialMedia from '../../components/iconSocialMedia';
import Button from '../../components/Button';
import foto from '../../assets/Foto1.png';
import inicialState from '../../../inicialState';
import Herramientas from '../../container/Herramientas';
import GardenCardHorizontal from '../../container/GardenCardHorizontal';

const Home = () => (
  <section className='Home'>
    <Hero color='dark' direction='right'>
      <section className='Home__Hero'>
        <img src={foto} alt='Foto Alejandro López Platzi Conf 2018' />
        <div className='Home__Hero__text'>
          <p className='Home__Hero__text-saludo'>
            <span className='primario-oscuro'>¡</span>
            Hola
            <span className='primario-oscuro'>!</span>
            Soy
          </p>
          <h2 className='Home__Hero__text-saludo'>Alejandro López Ramírez</h2>
          <div className='Home__Hero__text-SocialMedia'>
            <IconSocialMedia type='TW' size='md' />
            <IconSocialMedia type='GH' size='md' />
            <IconSocialMedia type='IN' size='md' />
            <IconSocialMedia type='IG' size='md' />
          </div>
          <div className='Home__Hero__text-perfile'>
            <h3>Creador de soluciones Tecnologicas</h3>
            <hr className='Home__Hero__text-perfile-line' />
            <p className='Home__Hero__text-perfile-text'>
              Consultor de nómina y RRHH, Desarrollador full Stack con tecnología JavaScript, enfocado en UI/UX.
            </p>
          </div>
          <Button type='primary' size='md' name='Trabajemos Juntos' />
        </div>
      </section>
    </Hero>
    <Herramientas items={inicialState.herramientas} />
    <GardenCardHorizontal />
  </section>

);

export default Home;
