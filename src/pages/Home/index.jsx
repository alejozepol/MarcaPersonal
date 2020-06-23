import React from 'react';
import inicialState from '../../../inicialState';
import IconSocialMedia from '../../components/iconSocialMedia';
import BtnEmail from '../../container/BtnEmail';
import HeroTextImg from '../../container/HeroTextImg';
import Herramientas from '../../container/Herramientas';
import GardenCardHorizontal from '../../container/GardenCardHorizontal';
import foto from '../../assets/Foto1.png';

const Home = () => (
  <section className='Home'>
    <HeroTextImg color='dark' direction='right' img={foto} alt='Foto Alejandro López Platzi Conf 2018'>
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
        <BtnEmail />
      </div>
    </HeroTextImg>
    <Herramientas items={inicialState.herramientas} />
    <GardenCardHorizontal title='Algunas cosas en que te puedo ayudar' items={[...inicialState.servicios]} />
  </section>

);

export default Home;
