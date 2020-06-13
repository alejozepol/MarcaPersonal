import React from 'react';

const Quote = ({ direction, sentence }) => (
  <div className='Quote'>
    <hr className={`Quote-${direction}`} />
    <p>{sentence}</p>
  </div>
);

export default Quote;
