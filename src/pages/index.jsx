import React from 'react';
import Hero from '../components/hero';
import home from '../data';
import TextIconRedondo from '../components/TextIconRedondo';
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
      {
        home.areaInteres.map((i) => <TextIconRedondo img={i.imagen} name={i.nombre} />)
      }
    </section>
  );
};

export default Index;
