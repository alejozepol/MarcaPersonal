import React from 'react';
import Hero from '../../components/hero';
import Button from '../../components/Button';
import Herramientas from '../../container/Herramientas';
import inicialState from '../../../inicialState';
import Skills from '../../components/skills';
import CardLogoRight from '../../components/CardLogoRight';
import CardPortada from '../../components/CardPortada';
import cvPDF from '../../assets/CV.pdf';

const CV = () => {
  const openPDF = () => window.open(cvPDF);

  return (
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
          <Button
            type='primary'
            name='Descargar HV'
            size='md'
            onClick={() => openPDF()}
          />
        </section>
      </Hero>
      <section className='CV__profile'>
        <h2>Perfil Profesional</h2>
        <p>Creador de soluciones tecnológicos, emprendedor, técnico contable, Desarrollador de software y con 10 años de experiencia en liquidación de Nómina, seguridad social y legislación laboral. </p>
        <p>Al unir mi rol de desarrollador y tener tantos años de experiencia en cargos administrativos puedo ver e implementar mejoras tecnológicas para maximizar la efectividad de cada uno de los proceso y efectuarlos al menor tiempo posible con la mejor calidad y bajo costos.</p>
        <p>Desde hace 5 años me he desempeñado como consultor de nómina y gestión humana, prestando servicio de auditoria, liquidación de nómina, seguridad social y en solución de requerimientos de la UGPP. </p>
        <p>Tambien presto servicios de soporte, implementación y asesorías en el sistema Kactus HCM.</p>
      </section>
      <section className='CV__skills'>
        <h2>Habilidades Blandas</h2>
        <div className='CV__skills-items'>
          <Skills skill='solucion' />
          <Skills skill='liderazgo' />
          <Skills skill='responsabilidad' />
          <Skills skill='trabajo' />
          <Skills skill='adaptacion' />
          <Skills skill='creatividad' />
          <Skills skill='autodidagta' />
          <Skills skill='empatia' />
        </div>
      </section>
      <section className='CV__experience'>
        <h2>Experiencia Laboral</h2>
        <div className='CV__experience-items'>
          {
            inicialState.experienciaLaboral.map(
              (item) => (
                <CardLogoRight
                  key={item.id}
                  img={item.logo}
                  empresa={item.empresa}
                  cargo={item.cargo}
                  actividad={item.actividad}
                  fechaInicio={item.fechaInicio}
                  fechaFin={item.fechaFin}
                />
              ),
            )
          }
        </div>
      </section>
      <Herramientas items={inicialState.herramientas} />
      <section className='CV__education'>
        <h2>Educación</h2>
        <div className='CV__education-content'>
          {
            inicialState.carreras.map((item) => (
              <CardPortada
                color='primary'
                size='md'
                key={item.id}
                title={item.titulo}
                subtitle={item.entidad}
                img={item.logo}
              />
            ))
          }
        </div>
      </section>
      <section className='CV__complementEducations'>
        <h2>Educación Complementaria</h2>
        <div className='CV__complementEducations-content'>
          {
            inicialState.cursos.map((item) => (
              <CardPortada
                color='contrast'
                size='sm'
                key={item.id}
                title={item.title}
                subtitle={item.career}
                img={item.badge}
                btn={item.diploma_link}
              />
            ))
          }
        </div>
      </section>
    </section>
  );
};

export default CV;
