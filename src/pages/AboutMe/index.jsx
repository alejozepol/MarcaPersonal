import React from 'react';
import Hero from '../../components/hero';
import Quote from '../../components/Quote';
import foto2 from '../../assets/foto2.png';

const AboutMe = () => (
  <section className='AboutMe'>
    <Hero color='contrast' direction='right'>
      <div className='AboutMe__hero'>
        <img src={foto2} alt='Foto Alejandro López' />
        <Quote
          direction='left'
          sentence='Si en privado te avergüenzas de ti mismo, es por que aun no eres la mejor version que puedes ser'
        />
      </div>
    </Hero>
    <section className='AboutMe__content'>
      <h2>¿Quién soy?</h2>
      <div>
        <p>Emprendedor, líder, desarrollador de software, consultor de nómina y gestión humana, diseñador UI/UX, son algunas cosas que me definen como profesional, sin embargo, hay muchas otras cosas.</p>
        <br />
        <p>
          Siempre he sido una persona curiosa por entender como funcionan las cosas y por ende con ganas de seguir aprendiendo y adquirir cada día nuevos conocimientos.
        </p>
        <br />
        <p>Soy un joven con metas claras apasionado por la tecnología, por la igualdad, el crecimiento y consolidación del talento humano. Así que mi meta es ser un empresario que genere empleo e impacte de manera positiva a muchas personas. </p>
        <br />
        <p>
          Con los emprendimientos en curso o algunos que han sido fallidos he aprendido mucho y tomado siempre lo mejor para poder llegar a mi meta.
        </p>
        <br />
        <p>Algunos de mis habilidades que destaco son:</p>
      </div>
      <div>this is icons</div>
      <h2>Parte de mi historia</h2>
      <div>
        <p>Desde muy pequeño he sido muy curioso por entender el funcionamiento de las cosas que me rodean, por este motivo desde mis 14 años llevo realizando diferentes cursos para complementar mi formación entre estos relacionados conla tecnología y las finanzas.</p>
        <br />
        <p>A mis 16 años después de obtener mi título de bachiller comencé mi formación en el Servicio Nacional de Aprendiza SENA y me gradué como Técnico en contabilidad y finanzas, gracias a esto en mis practicas labores entre a trabajar a Compensar Caja de compensar familiar de Bogotá y conocí el mundo de la nómina, seguridad social y el talento humano. Desde este momento llevo formándome en este tema y trabajando para varias empresas no solo como usuario de nómina y gestión humana, si no también, con el tiempo y gracias a mi formación me desempeñe como consultor en diferentes compañías.</p>
        <br />
        <p>
          Después de terminar mis prácticas realice unos semestres de administración de empresas, por desgracia y debido a problemas financieros no pude terminar la carrera. Aunque esto fue una dificultad seguí mi formación con educación complementaria y certificándome en temas de nómina y gestión humana.
        </p>
        <br />
        <p>
          En mi labor como consultor aprendí a administrar y manejar bases de datos relacionales, tuve la oportunidad de realizar migraciones de motores de bases de datos, creación de consultas y reportes. Conocí así el mundo del desarrollo de software encontrando mi otra posición, la cual reforcé en el momento en que fui contratado como ingeniero de pruebas y con el tiempo me volví el creador del proceso de la mesa de ayuda de Heinsohn Nomina y su coordinador
        </p>
        <br />
        <p>Comencé a estudiar un tecnólogo en Análisis y desarrollo de sistemas de información y fui líder de curso y de equipo en el proyecto desarrollado, sin embargo, debí retirarme por problemas de salud faltando solo la formación de negoción, pero como todo son ganas de aprender, conocí la mejor comunidad que es Platzi desde hay sigo estudiando cada día los diferentes temas en desarrollo marketing, diseño y crecimiento personal y hoy en dia hago parte del 1% de los mejores estudiantes y estoy en el programa de Platzi Master puedes conocer más de mi formación en mi curricular viate y #NuncaParesDeAprender </p>
      </div>
      <h2>Actualmente</h2>
      <div>
        <p>Sigo prestando asesorías de vez en cuando y creando proyectos personales en diferentes temas, desarrollando y diseñando. </p>
        <br />
        <p>Siempre seguiré en un proceso de formación continua y aprendiendo cosas nuevos, gracias a esto desde hace el 2015 comencé el proceso de emprendiendo con las consolatorias a diferentes empresas en temas de nómina y gestión humana.</p>
        <br />
        <p>Al comienzo del 2018 me subí en el tren del emprendimiento y comencé a formándome en este tema, por esto nación Undervisa Master Trader, aunque tuvimos ventas y más de 30 clientes el proyecto se terminó por problemas con el equipo de trabajo, no obstante, sigo en el proceso de emprendimiento de varios proyectos a corto y mediano plazo.</p>
        <br />
        <p>
          Actualmente soy parte de Platzi Master que es 1% de los mejores estudiantes y hago parte de un equipo de emprendedores maravilloso donde estados desarrollando una app para el sector del fitness llamada Parners.
        </p>
        <br />
        <p>Con Parners nos certificamos como emprendedores en Apps.Co en la etapa de descubrimiento de negocio digital y validando la idea exitosamente.</p>
        <br />
        <p>Participe en el StartupWeedend 2020 en ideas de emprendimiento para combatir el Covid-19.</p>
      </div>
    </section>

  </section>
);

export default AboutMe;
