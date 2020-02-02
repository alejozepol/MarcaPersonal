import React from 'react';
import Hero from '../components/hero';
import home from '../data';
import TextIconRedondo from '../components/TextIconRedondo';
import Card from '../components/card';
import '../assets/styles/app.scss';

const Index = () => {

  return (
    <section className='Home'>
      <Hero img={home.hero.img}>
        <div className='text'>
          <span>
            <p>{home.hero.saludo}</p>
            <h1>{home.hero.title}</h1>
          </span>
          <p>{home.hero.texto}</p>
        </div>
      </Hero>
      <div className='Home__herramientas'>
        <h2>Herramientas</h2>
        <div className='Home__herramientas-icons'>
          {
            home.herramientas.map((i) => <TextIconRedondo key={i.id} img={i.imagen} name={i.nombre} />)
          }
        </div>
      </div>
      <div className='Home__habilidades'>
        <h2>Habilidades</h2>
        <div className='Home__habilidades-icons'>
          {
            home.areaInteres.map((i) => <TextIconRedondo key={i.id} img={i.imagen} name={i.nombre} />)
          }
        </div>
      </div>
      <div className='Home__servicios'>
        {
          home.servicios.map((i) => <Card key={i.id} img={i.imagen} title={i.titulo} text={i.descripcion} />)
        }
      </div>
    </section>
  );
};

export default Index;
