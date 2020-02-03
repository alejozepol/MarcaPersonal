import React from 'react';
/* import { Link } from 'react-router-dom'; */
import IconMegadono from '../../assets/static/megafono.svg';
import Logo from '../../assets/static/LogoRedondo.svg';
/* import IconContactame from '../../assets/static/Contactame.svg'; */
import './Footer.scss';
/* import TextIcon from '../../components/TextIcon'; */

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='Footer__suscription'>
        <img className='Footer__suscription-img' src={IconMegadono} alt='icono megafono' />
        <h3 className='Footer__suscription-text'>Cuentame de emprendimiento, tecnología y nuevos proyectos</h3>
        <form action='https://facebook.us20.list-manage.com/subscribe/post?u=b7f408a304fd50944e1238192&amp;id=e7dbf243c0' method='post' id='mc-embedded-subscribe-form' name='mc-embedded-subscribe-form' target='_blank'>
          <input name='EMAIL' id='mce-EMAIL' className='Footer__suscription-input' type='email' placeholder='Correo electronico' />
          <button className='Footer__suscription-buton' type='submit'>Suscribirme</button>
        </form>
      </div>
      <div className='Footer__brand'>
        <img className='Footer__brand-img' src={Logo} alt='Logo Alejandro López | Alejozepol' />
        <p className='Footer__brand-text'>
          hecho en Colombia con.
          <span role='img' aria-labelledby='corazon'>
            💖
          </span>
          y pasion
        </p>
        <p className='Footer__brand-title'>@alejozepol</p>
      </div>
      {/*       <div className='Footer__contact'>
        <TextIcon img={IconContactame} name='Contactame' />
        <TextIcon img={IconContactame} name='@Alejozepol' />
        <TextIcon img={IconContactame} name='Contactame' />
      </div> */}
    </footer>
  );
};

export default Footer;