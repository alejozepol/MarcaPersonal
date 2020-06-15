import React from 'react';

const TextIcon = ({ img, name, type, subTitle, url, button }) => {
  if (!type) {
    // eslint-disable-next-line no-param-reassign
    type = '';
  }
  return (
    <section className={`TextIcon ${type}`}>
      <img className='TextIcon-img' src={img} alt={name} />
      <h2 className='TextIcon-name'>{name}</h2>
      <p className='TextIcon-subTitle'>{subTitle}</p>
      {url && (
        <button className='TextIcon-button' type='button' target='_black'>
          <a href={url} target='_black'>{button}</a>
        </button>
      )}
    </section>
  );
};

export default TextIcon;
