import React from 'react';

const CardHorizontal = ({ title, icon, img, content }) => (
  <section className='CardHorizontal'>
    {
      !img ? (
        <div className='CardHorizontal__title CardHorizontal__title-text'>
          {icon && (<img className='CardHorizontal__title-text-icon' src={icon} alt={`icono ${title}`} />)}
          <h4 className='CardHorizontal__title-text-title'>{title}</h4>
        </div>
      ) : (
        <img src={img} alt={`imagen ${title}`} className='CardHorizontal__title' />
      )
    }

    <div className='CardHorizontal__content'>
      <p>{content}</p>
    </div>
  </section>
);

export default CardHorizontal;

