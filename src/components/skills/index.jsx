import React from 'react';
import TextIcon from '../TextIcon';

import iconSolucion from '../../assets/iconsBgYellow/iconSolucion.png';
import iconLiderazgo from '../../assets/iconsBgYellow/iconLiderazgo.png';
import iconCreativo from '../../assets/iconsBgYellow/IconCreativo.png';
import iconEmpatia from '../../assets/iconsBgYellow/IconEmpatia.png';
import iconAutoDidagta from '../../assets/iconsBgYellow/iconAutodidacta.png';

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

    default:
      return (
        <h1>No esta</h1>
      );
  }
};

export default Skills;
