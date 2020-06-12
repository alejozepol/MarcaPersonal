import React from 'react';
import bgFooter from '../../assets/bgFooter.png';
import bgFooterMovil from '../../assets/bgFooter-movil.png';
import IconSocialMedia from '../../components/iconSocialMedia';
import Button from '../../components/Button';
import LogoContraste from '../../assets/logoContraste.png';
import StatupWeekend from '../../assets/statupWeekend.png';
import logoPlatziMaster from '../../assets/logoPlatziMaster.png';

const Footer = () => {
  return (
    <footer className='Footer'>
      <img className='Footer-bg' src={bgFooter} alt='decoracion fondo' />
      <img className='Footer-bg-movil' src={bgFooterMovil} alt='decoracion fondo' />
      <div className='Footer__socialMedia'>
        <p>
          <span className='color-primario-claro'>¿</span>
          Quieres ayuda u orientación con algo
          <span className='color-primario-claro'>?</span>
        </p>
        <p>
          ¡
          <span className='color-primario-claro'>Escríbeme</span>
          {' '}
          en alguna red Social!
        </p>
        <div className='Footer__socialMedia-followr'>
          <p>Sígueme en:</p>
          <div>
            <IconSocialMedia type='TW' size='sm' />
            <IconSocialMedia type='IG' size='sm' />
            <IconSocialMedia type='FB' size='sm' />
          </div>
        </div>
        <div className='Footer__socialMedia-professional'>
          <p>Redes Profesionales:</p>
          <div>
            <IconSocialMedia type='GH' size='sm' />
            <IconSocialMedia type='IN' size='sm' />

          </div>
        </div>
      </div>
      <div className='Footer__branding'>
        <Button type='primary' size='md' name='Trabajemos Juntos' />
        <img src={LogoContraste} alt='Logo Alejandro Lopez | Alejozepol con morado' />
        <p>© 2020</p>
        <p>Si no haces lo que no sabes hacer, nunca serás mejor de lo que eres hoy</p>
      </div>
      <div className='Footer__recognition'>
        <p className='Footer__recognition-title'>Reconocimientos:</p>
        <div className='Footer__recognition-items'>
          <div className='Footer__recognition-item'>
            <h2>Apps.Co</h2>
            <p>Emprendedor en etapa de descubrimiento</p>
          </div>
          <div className='Footer__recognition-item'>
            <img src={StatupWeekend} alt='Logo statup Weekend' />
            <p>2do Puesto Colombia emprendimientos contra el covid-19</p>
          </div>
          <div className='Footer__recognition-item'>
            <img src={logoPlatziMaster} alt='Logo Platzi Master' />
            <p>Estudiante de Platzi Master cohort 2 </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
