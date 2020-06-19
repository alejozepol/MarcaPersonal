import React from 'react';
import CardHorizontal from '../../components/CardHorizontal';

const GardenCardHorizontal = ({ title, items = [] }) => (
  <section className='GardenCardHorizontal'>
    <h2 className='GardenCardHorizontal__title'>{title}</h2>
    <div className='GardenCardHorizontal__content'>
      {
        items.map((item) => (
          <CardHorizontal
            key={item.id}
            title={item.title}
            icon={item.icon}
            img={item.img}
            content={item.content}
            lenguage={item.lenguage}
            code={item.code}
            project={item.project}
            video={item.video}
          />
        ))
      }
    </div>
  </section>
);

export default GardenCardHorizontal;

