import React from 'react';
import Hero from '../../components/hero';
import { QS } from '../../data';
import './QuienSoy.scss';

const QuienSoy = () => {
  return (
    <section className='QuienSoy'>
      <Hero img={QS.hero.img}>
        <div className='text'>
          <span>
            <p>{QS.hero.saludo}</p>
            <h1>{QS.hero.title}</h1>
          </span>
          <p>{QS.hero.texto}</p>
        </div>
      </Hero>
      <div className='QuienSoy__introduction'>
        <h2>¿Quien Soy?</h2>
        <p>
          Emprendedor, líder, desarrollador web, consultor de nómina y gestión humana y con ganas de seguir aprendiendo cosas nuevas toda la vida son algunas palabras que definen a
          <b>Alejandro López Ramírez.</b>
        </p>
        <p>Soy un joven con metas claras apasionado por la tecnología el desarrollo de software, el crecimiento y consolidación del talento humano y con la meta de ser un empresario que genere empleo y cambiar la economía del país con los emprendimientos que tengan como base la tecnología, la responsabilidad social y el cuidado del ambiental.</p>
      </div>
      <div className='QuienSoy__historia'>
        <h2>Parte de mi historia</h2>
        <p>
          Desde muy pequeño he sido muy curioso por entender el funcionamiento de las cosas que me rodean, por este motivo desde mis 14 años llevo realizando diferentes cursos para complementar mi formación entre estos relacionados con
          <b>la tecnología y las finanzas.</b>
        </p>
        <p>
          A mis 16 años después de obtener mi título de bachiller comencé mi formación en el
          <b>Servicio Nacional de Aprendiza SENA</b>
          y me gradué como Técnico en contabilidad y finanzas, gracias a esto en mis practicas labores entre a trabajar a
          <b>Compensar Caja de compensar familiar</b>
          de Bogotá y conocí el mundo de la nómina, seguridad social y el talento humano. Desde este momento llevo formándome en este tema y trabajando para varias empresas no solo como usuario de nómina y gestión humana, si no también, con el tiempo y gracias a mi formación me desempeñe como consultor en diferentes empresas.
        </p>
        <p>Después de terminar mis prácticas realice unos semestres de administración de empresas, sin embargo, por problemas financieros no pude terminar la carrera. Aunque esto fue una dificultad seguí mi formación con educación complementaria y certificándome en temas de nómina y gestión humana.</p>
        <p>En mi labor como consultor aprendí a administrar y manejar bases de datos relacionales, tuve la oportunidad de realizar migraciones de motores de bases de datos, creación de consultas y reportes. Conocí así el mundo del desarrollo de software encontrando mi otra posición la cual reforcé en el momento en que fui contratado como ingeniero de pruebas y con el tiempo me volví el creador del proceso de la mesa de ayuda de Heinsohn Nomina y su coordinador</p>
        <p>
          Comencé a estudiar un tecnólogo en Análisis y desarrollo de sistemas de información y fui líder de curso y de equipo en el proyecto desarrollado, sin embargo, debí aplazar por problemas de salud faltando solo la formación de negoción, sin embargo conocí la mejor comunidad que es Platzi desde hay sigo estudiando cada día los diferentes temas en desarrollo marketing, diseño y crecimiento personal.
          <b>#NuncaParesDeAprender.</b>
          puedes conocer más de mi formación en mi curricular viate
        </p>
      </div>
      <div className='QuienSoy__historia'>
        <h2>Actualmente</h2>
        <p>
          Sigo prestando asesorías de vez en cuando y creando proyectos personales en diferentes temas. Siempre seguiré en un proceso de formación continua y aprendiendo cosas nuevos, gracias a esto desde hace el 2015 comencé el proceso de emprendiendo con las consolatorias a diferentes empresas en temas de nómina y gestión humana pero también, hace desde el comienzo del 2018 me subí en el tren del emprendimiento y formándome en este tema, hay nación
          <b>Undervisa Master Trader</b>
          aunque tuvimos ventas y más de 30 clientes el proyecto se terminó por problemas con el equipo de trabajo, no obstante, sigo en el proceso de emprendimiento de varios proyectos a corto y mediano plazo y actualmente me estoy certificando como desarrollador full stack en JavaScript y hago parte de un equipo de emprendedores maravilloso donde estados desarrollando una app para el sector del fitness.
        </p>
      </div>
    </section>
  );
};

export default QuienSoy;
