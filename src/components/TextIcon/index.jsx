import React from 'react';

const TextIconRedondo = ({ img, name, type, subTitle, url, button }) => {
  if (!type) {
    // eslint-disable-next-line no-param-reassign
    type = '';
  }
  return (
    <section className={`TextIconRedondo ${type}`}>
      <img className='TextIconRedondo-img' src={img} alt={name} />
      <h2 className='TextIconRedondo-name'>{name}</h2>
      <p className='TextIconRedondo-subTitle'>{subTitle}</p>
      {url && (
        <button className='TextIconRedondo-button' type='button' target='_black'>
          <a href={url} target='_black'>{button}</a>
        </button>
      )}
    </section>
  );
};

export default TextIconRedondo;
