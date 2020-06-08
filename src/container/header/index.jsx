import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import iconMenu from '../../assets/iconMenu.svg';
import iconClose from '../../assets/iconClose.svg';

const Header = (props) => {
  const nav = [
    {
      id: 1,
      name: 'Inicio',
      url: '/',
    },
    {
      id: 2,
      name: 'Sobre mi',
      url: '/sobremi',
    },
    {
      id: 3,
      name: 'Curriculum',
      url: '/cv',
    },
    {
      id: 4,
      name: 'Portafolio',
      url: '/portafolio',
    },
  ];

  const hidemenu = () => {
    const check = document.getElementById('toggle');
    check.checked = 0;
  };

  return (
    <header className='Header'>
      <div className='Header__logo'>
        <img className='Header__logo-img' src={Logo} alt='Logo Alejandro López | Alejozepol' />
        <h1 className='Header__logo-title'>Alejandro López | Alejozepol</h1>
      </div>
      <div className='Header__menu'>
        <input type='checkbox' id='toggle' />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className='Header__menu-input' htmlFor='toggle'>
          <img className='Header__menu-input-act' src={iconMenu} alt='icon Menú Hamburgesa' />
          <img className='Header__menu-input-inac' src={iconClose} alt='icon cierre Menú Hamburgesa' />
        </label>
        <nav className='Header__menu-nav'>
          {
            nav.map((item) => (<Link className='Header__menu-item' to={item.url} key={item.id} onClick={() => hidemenu()}><li>{item.name}</li></Link>))
          }
        </nav>
      </div>
    </header>
  );
};

export default Header;
