import React from 'react';
import '../assets/styles/app.scss';
import imagenHero from '../assets/static/FondoHero.png';
import Hero from '../components/hero';
import home from '../data';
import TextIconRedondo from '../components/TextIconRedondo';

const Index = () => {

  return (
    <section>
      <Hero img={imagenHero}>
        <p>
        ¡Hola¡ soy
          <h1>
          Alejandro López Ramírez
          </h1>
        </p>
      Desarrollador full stack JavaScript
      y
      Consultor de Nómina y Gestión Humana
      con pasión por aprender

      </Hero>
      {
        home.areaInteres.map((i) => <TextIconRedondo img={i.imagen} name={i.nombre} />)
      }

    </section>
  );
};

export default Index;
