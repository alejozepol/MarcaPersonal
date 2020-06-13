import React from 'react';
import CardHorizontal from '../../components/CardHorizontal';

const GardenCardHorizontal = ({ title, item = [] }) => (
  <section className='GardenCardHorizontal'>
    <h2 className='GardenCardHorizontal__title'>{title}</h2>
    <div className='GardenCardHorizontal__content'>
      {
        item.map((item) => (
          <CardHorizontal
            key={item.id}
            title={item.title}
            icon={item.icon}
            img={item.img}
            content={item.content}
          />
        ))
      }
    </div>
  </section>
);

export default GardenCardHorizontal;

