import React from 'react';
import TextIcon from '../TextIcon';

import iconSolucion from '../../assets/iconsBgYellow/iconSolucion.png';
import iconLiderazgo from '../../assets/iconsBgYellow/iconLiderazgo.png';
import iconCreativo from '../../assets/iconsBgYellow/IconCreativo.png';
import iconEmpatia from '../../assets/iconsBgYellow/IconEmpatia.png';
import iconAutoDidagta from '../../assets/iconsBgYellow/iconAutodidacta.png';
import iconTrabajo from '../../assets/iconsBgYellow/iconTrabajo.png';
import iconAdaptacion from '../../assets/iconsBgYellow/iconAdaptacion.png';
import iconResponsabilidad from '../../assets/iconsBgYellow/iconResponsabilidad.png';

const Skills = ({ skill }) => {
  switch (skill) {
    case 'solucion':
      return (
        <TextIcon
          img={iconSolucion}
          name='Solución de Problemas'
        />
      );
    case 'liderazgo':
      return (
        <TextIcon
          img={iconLiderazgo}
          name='Liderazgo'
        />
      );
    case 'creatividad':
      return (
        <TextIcon
          img={iconCreativo}
          name='Creatividad'
        />
      );
    case 'autodidagta':
      return (
        <TextIcon
          img={iconAutoDidagta}
          name='Autodidagta'
        />
      );
    case 'empatia':
      return (
        <TextIcon
          img={iconEmpatia}
          name='Empatia'
        />
      );
    case 'trabajo':
      return (
        <TextIcon
          img={iconTrabajo}
          name='Trabajo en Equipo'
        />
      );
    case 'adaptacion':
      return (
        <TextIcon
          img={iconAdaptacion}
          name='Adaptaci[on al Cambio'
        />
      );
    case 'responsabilidad':
      return (
        <TextIcon
          img={iconResponsabilidad}
          name='Responsabilidad'
        />
      );

    default:
      return (
        <h1>No esta</h1>
      );
  }
};

export default Skills;
