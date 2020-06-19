import React from 'react';
import iconInstagram from '../../assets/iconInstagram.png';
import iconTwitter from '../../assets/iconTwitter.png';
import iconFacebook from '../../assets/iconFacebook.png';
import iconGithub from '../../assets/iconGithub.png';
import iconLinkedin from '../../assets/iconLn.png';

const IconSocialMedia = ({ type, size }) => {
  switch (type) {
    case 'IG': return (
      <a className='iconsSocialMedia' href='https://www.instagram.com/alejozepol/' target='__back'>
        <img className={`iconsSocialMedia-${size}`} src={iconInstagram} alt='icono Instagram' />
      </a>
    );
    case 'TW': return (
      <a className='iconsSocialMedia' href='https://twitter.com/alejozepol' target='__back'>
        <img className={`iconsSocialMedia-${size}`} src={iconTwitter} alt='icono Instagram' />
      </a>
    );
    case 'FB': return (
      <a className='iconsSocialMedia' href='https://www.facebook.com/alejozepol' target='__back'>
        <img className={`iconsSocialMedia-${size}`} src={iconFacebook} alt='icono Instagram' />
      </a>
    );
    case 'GH': return (
      <a className='iconsSocialMedia' href='https://github.com/alejozepol' target='__back'>
        <img className={`iconsSocialMedia-${size}`} src={iconGithub} alt='icono Instagram' />
      </a>
    );
    case 'IN': return (
      <a className='iconsSocialMedia' href='https://www.linkedin.com/in/alejozepol' target='__back'>
        <img className={`iconsSocialMedia-${size}`} src={iconLinkedin} alt='icono Instagram' />
      </a>
    );

    default:
      return (
        <h1>nada</h1>
      );
  }
};

export default IconSocialMedia;

