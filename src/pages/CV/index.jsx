import React from 'react';
import Hero from '../../components/hero';

const CV = () => (
  <section className='CV'>
    <Hero direction='left' color='dark'>
      <section className='CV__hero'>
        <div className='CV__hero-development'>
          <h2>Desarrollador de sofware</h2>
          <p>Creador de productos digitales desarrollados con tecnología JavaScript, enfocado en experiencia de usuario.</p>
          <ul>
            <li>Desarrollo web</li>
            <li>Diseño UI/UX</li>
            <li>Bases de Datos</li>
            <li>Email Marketing</li>
          </ul>
        </div>
        <hr />
        <div className='CV__hero-RRHH'>
          <h2>Nómina y Gestión Humana</h2>
          <p>Consultor con amplia experiencia en normatividad Colombia e implementación de optimización de procesos, liquidación de nómina y auditorias.</p>
          <ul>
            <li>Kactus HCM</li>
            <li>Nomina y SGSS</li>
            <li>Requerimientos UGPP</li>
            <li>Auditorias</li>
          </ul>
        </div>
      </section>
    </Hero>
  </section>
);

export default CV;
