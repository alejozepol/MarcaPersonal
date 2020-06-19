import React from 'react';
import iconCodeA from '../../assets/icons/iconCode-A.svg';
import iconCodeI from '../../assets/icons/iconCode-I.svg';
import iconProyectoA from '../../assets/icons/icoProyecto-A.svg';
import iconProyectoI from '../../assets/icons/icoProyecto-I.svg';
import iconVIdeoA from '../../assets/icons/icoVideo-A.svg';
import iconVIdeoI from '../../assets/icons/icoVideo-I.svg';

const CardHorizontal = ({ title, icon, img, content, lenguage = [], code, video, project }) => (
  <section className='CardHorizontal'>
    {
      !img ? (
        <div className='CardHorizontal__title CardHorizontal__title-text'>
          {icon && (<img className='CardHorizontal__title-text-icon' src={icon} alt={`icono ${title}`} />)}
          <h4 className='CardHorizontal__title-text-title'>{title}</h4>
        </div>
      ) : (
        <div className='CardHorizontal__title CardHorizontal__title-img'>
          <img src={img} alt={`imagen ${title}`} />
        </div>
      )
    }

    <div className='CardHorizontal__content'>
      {
        !img ? (
          <p>{content}</p>
        ) : (
          <div className='CardHorizontal__content-img'>
            <div className='CardHorizontal__content-lenguage'>
              {
                lenguage.map((item) => <img key={item} src={item} alt={item} />)
              }
            </div>
            <h4>{title}</h4>
            <p>{content}</p>
            <div className='CardHorizontal__content-icon'>
              {
                code ? (
                  <a target='_black' href={code}>
                    <img src={iconCodeA} alt='icono ver codigo' />
                  </a>
                ) : (
                  <img src={iconCodeI} alt='icono inactivo ver codigo' />
                )
              }
              {
                video ? (
                  <a target='_black' href={video}>
                    <img src={iconVIdeoA} alt='icono ver codigo' />
                  </a>
                ) : (
                  <img src={iconVIdeoI} alt='icono inactivo ver codigo' />
                )
              }
              {
                project ? (
                  <a target='_black' href={project}>
                    <img src={iconProyectoA} alt='icono ver codigo' />
                  </a>
                ) : (
                  <img src={iconProyectoI} alt='icono inactivo ver codigo' />
                )
              }
            </div>
          </div>
        )
      }

    </div>
  </section>
);

export default CardHorizontal;

