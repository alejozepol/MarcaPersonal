import React from 'react';

const Button = ({ type, size, onClick, name }) => {
  switch (type) {
    case 'primary':
      return (
        <button type='button' className={`Btn Btn-${size} Btn-${size}-primary`} onClick={onClick}>{name}</button>
      );
    case 'segundary':
      return (
        <button type='button' className={`Btn Btn-${size} Btn-${size}-segundary`} onClick={onClick}>{name}</button>
      );
    default:
      return (
        <button type='button' className='Btn Btn-md Btn-md-primary' onClick={onClick}>{name}</button>
      );
  }

};

export default Button;
