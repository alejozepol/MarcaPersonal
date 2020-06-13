import React from 'react';
import TextIconRedondo from '../../components/TextIcon';

const Herramientas = ({ items = [] }) => (
  <section className='Herramientas'>
    <h2>Herramientas y Lenguajes</h2>
    <div className='Herramientas__icons'>
      {
        items.map((item) => <TextIconRedondo key={item.id} img={item.imagen} name={item.nombre} />)
      }
    </div>
  </section>
);

export default Herramientas;
