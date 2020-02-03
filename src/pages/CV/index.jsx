/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { HV } from '../../data';
import CardHorizontal from '../../components/cardHorizontal';
import './CV.scss';
import CardSencilla from '../../components/cardSencilla';
import TextIconRedondo from '../../components/TextIconRedondo';

const CV = () => {
  return (
    <section className='CV'>
      <div className='CV__Perfil'>
        <h2>Perfil Profesional General</h2>
        <p>{HV.perfil}</p>
      </div>
      <div className='CV__Experiencia'>
        <h2>Experiencia Laboral</h2>
        {HV.experienciaLaboral.map((i) => <CardHorizontal key={i.cargo} {...i} />)}
      </div>
      <div className='CV__Educacion'>
        <h2>Educación</h2>
        <div className='CV__Educacion-items'>
          {HV.carreras.map((i) => <CardSencilla key={i.titulo} img={i.logo} title={i.titulo} subtitle={i.entidad} />)}
        </div>
      </div>
      <div className='CV__EducacionComplementaria'>
        <h2>Educación Complementaria</h2>
        <div className='CV__EducacionComplementaria-items'>
          {
            HV.cursos.map((i) => (
              <TextIconRedondo
                key={i.id}
                img={i.badge}
                name={i.title}
                type='sm'
                button='Ver Certificado'
                url={i.diploma_link}
                subTitle={i.instituto}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default CV;
