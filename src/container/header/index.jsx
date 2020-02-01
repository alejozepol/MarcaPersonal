import React, { useState } from 'react';
/* import { Link } from 'react-router-dom'; */
import TextIcon from '../../components/TextIcon';
import IconoInicio from '../../assets/static/icons/IconoInicio.svg';
import IconoQuienSoy from '../../assets/static/icons/IconoQuienSoy.svg';
import IconoPortafolio from '../../assets/static/icons/IconoPortafolio.svg';
import IconoCV from '../../assets/static/icons/IconoCV.svg';
import Logo from '../../assets/static/LogoRedondo.svg';
import './Header.scss';

const Header = (props) => {
  const menu =
    [
      {
        name: 'Inicio',
        img: IconoInicio,
      },
      {
        name: '¿Quién soy?',
        img: IconoQuienSoy,
      },
      {
        name: 'Curriculum Viate',
        img: IconoCV,
      },
      {
        name: 'Portafolio',
        img: IconoPortafolio,
      },
    ];
  const [bmenu, setBMenu] = useState(false);
  const handleMenu = () => {
    bmenu ? setBMenu(false) : setBMenu(true);
  };

  return (
    <header className='Header'>
      <div className='Header__logo'>
        <img className='Header__logo-img' src={Logo} alt='Logo Alejandro López | Alejozepol' />
        <h1 className='Header__logo-title'>Alejandro López | Alejozepol</h1>
      </div>
      {
        bmenu ? (
          <button type='button' className='Header__menu' onClick={() => handleMenu()}>
            <i className='material-icons'>
              menu_open
            </i>
          </button>
        ) :
          (
            <button type='button' className='Header__menu' onClick={() => handleMenu()}>
              <i className='material-icons'>menu</i>
            </button>
          )
      }
      {bmenu && (
        <nav className='Header__nav700'>
          {
            menu.map((item) => <TextIcon key={item.name} img={item.img} name={item.name} />)
          }
        </nav>
      )}
      {
        <nav className='Header__nav701'>
          {
            menu.map((item) => <TextIcon key={item.name} img={item.img} name={item.name} />)
          }
        </nav>
      }
    </header>
  );
};

export default Header;
