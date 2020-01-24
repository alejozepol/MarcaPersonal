import React from 'react';
/* import { Link } from 'react-router-dom'; */
import TextIcon from '../../components/TextIcon';
import IconoInicio from '../../assets/static/IconoInicio.svg';
import IconoQuienSoy from '../../assets/static/IconoQuienSoy.svg';
import IconoPortafolio from '../../assets/static/IconoPortafolio.svg';
import IconoCV from '../../assets/static/IconoCV.svg';
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

  return (
    <header className='Header'>
      <div className='Header__logo'>
        <img className='Header__logo-img' src={Logo} alt='Logo Alejandro López | Alejozepol' />
        <h1 className='Header__logo-title'>Alejandro López | Alejozepol</h1>
      </div>
      <nav>
        {
          menu.map((item) => <TextIcon key={item.name} img={item.img} name={item.name} />)
        }
      </nav>
    </header>
  );
};

export default Header;
