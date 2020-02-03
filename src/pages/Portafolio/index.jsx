import React from 'react';
import Card from '../../components/card';
import { PF } from '../../data';
import './Portafolio.scss';

const Portafolio = () => {
  return (
    <section className='Portafolio'>
      <h2>Algunos Proyectos</h2>
      <div className='Portafolio__items'>
        {
          PF.proyectosDesarrollo.map((i) => (
            <Card key={i.titulo} img={i.imagen} title={i.titulo} text={i.descripcion}>
              <div className='Card__button'>
                <a href={i.urlCodigo}>
                  <img src={PF.icons[0].a} alt='icono Ver Codigo' />
                  <p>{PF.icons[0].name}</p>
                </a>
                <a href={i.urlProyecto}>
                  {
                    i.urlProyecto ? (
                      <>
                        <img src={PF.icons[1].a} alt='icono Ver Proyecto' />
                        <p>{PF.icons[1].name}</p>
                      </>
                    ) : (
                      <>
                        <img src={PF.icons[1].i} alt='icono Ver Proyecto' />
                        <p>{PF.icons[1].name}</p>
                      </>
                    )
                  }
                </a>
                <a href={i.video}>
                  {
                    i.video ? (
                      <>
                        <img src={PF.icons[2].a} alt='icono Ver Video' />
                        <p>{PF.icons[2].name}</p>
                      </>
                    ) : (
                      <>
                        <img src={PF.icons[2].i} alt='icono Ver Video' />
                        <p>{PF.icons[2].name}</p>
                      </>
                    )
                  }
                </a>
              </div>
            </Card>
          ))
        }
      </div>
    </section>
  );
};

export default Portafolio;
