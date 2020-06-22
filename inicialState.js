/* Herramientas */
import iconAI from './src/assets/icons/adobe-ai.png';
import iconPS from './src/assets/icons/adobe-ps.png';
import iconXD from './src/assets/icons/adobe-xd.png';
import iconExcel from './src/assets/icons/excel.png';
import iconMSSQL from './src/assets/icons/mssql.png';
import iconOracle from './src/assets/icons/oracle.png';
import iconVSC from './src/assets/icons/visual-studio-code.png';
import iconMailChimp from './src/assets/icons/mailchimp.png';
import iconHTML from './src/assets/icons/iconHTML.png';
import iconCSS from './src/assets/icons/iconCSS.png';
import iconSASS from './src/assets/icons/iconSASS.png';
import iconMySQL from './src/assets/icons/iconMysql.png';
import iconNodeJS from './src/assets/icons/nodejs.png';
import iconJS from './src/assets/icons/iconJS.png';
import iconReact from './src/assets/icons/iconReact.png';
import iconAngular from './src/assets/icons/angular-icon.png';
import iconFirebase from './src/assets/icons/firebase.png';
import iconKactus from './src/assets/icons/kactus.png';
import iconGitHub from './src/assets/icons/github.png';
import iconGitLab from './src/assets/icons/gitlab.png';
import iconGit from './src/assets/icons/git.png';
import iconTypeScript from './src/assets/icons/typeScript.png';

/** Iconos Amarillos */
import iconAudit from './src/assets/YellowIcons/iconAuditoria.png';
import iconDevelopment from './src/assets/YellowIcons/iconDesarrollo.png';
import iconNomina from './src/assets/YellowIcons/iconNomina.png';
import iconUGPP from './src/assets/YellowIcons/iconUGPP.png';
import iconKactusYellow from './src/assets/YellowIcons/iconkactusAmarillo.png';
import iconUI from './src/assets/YellowIcons/iconUI.png';

/* Logos Experiencia */

import undervisa from './src/assets/logoExperiencia/Undervisa.svg';
import DigitalWare from './src/assets/logoExperiencia/DigitalWare.jpg';
import HN from './src/assets/logoExperiencia/HN.png';
import almaviva from './src/assets/logoExperiencia/almaviva.jpg';
import unad from './src/assets/logoExperiencia/unad.jpg';
import outsourcing from './src/assets/logoExperiencia/outsourcing.png';
import unipanamericana from './src/assets/logoExperiencia/unipanamericana.jpg';
import compensar from './src/assets/logoExperiencia/compensar.jpg';

/* carreras */

import iconSena from './src/assets/education/SENA.png';
import Ucatolica from './src/assets/education/Ucatolica.png';
import iconBDGolden from './src/assets/education/goldenBD.svg';
import iconPBGolden from './src/assets/education/goldenPB.svg';
import iconEMGolden from './src/assets/education/goldenEM.svg';
import iconDGGolden from './src/assets/education/goldenDG.svg';

/* project */
import buynow from './src/assets/proyectos/buynow2.png';
import blogTecnology from './src/assets/proyectos/BlogTecnology.png';
import calculadoraBases from './src/assets/proyectos/calculadoraBases.png';
import cvReact from './src/assets/proyectos/cvReact.png';
import platziVideo from './src/assets/proyectos/platziVideo.png';
import dexpress from './src/assets/proyectos/dexpress.png';

/* project ui */
import cardAsteroid from './src/assets/ProjectUI/cardAsteroid.png';
import distance from './src/assets/ProjectUI/distance.png';
import medilab from './src/assets/ProjectUI/medilab.png';
import parners from './src/assets/ProjectUI/parners.png';

const inicialState = {
  herramientas: [
    {
      id: 'Photoshop',
      nombre: 'Adobe Photoshop',
      imagen: iconPS,
    },
    {
      id: 'Ilustrator',
      nombre: 'Adobe Ilustrator',
      imagen: iconAI,
    },
    {
      id: 'TypeScript',
      nombre: 'TypeScript',
      imagen: iconTypeScript,
    },
    {
      id: 'XD',
      nombre: 'Adobe XD',
      imagen: iconXD,
    },
    {
      id: 'HTML',
      nombre: 'HTML',
      imagen: iconHTML,
    },
    {
      id: 'CSS',
      nombre: 'CSS',
      imagen: iconCSS,
    },
    {
      id: 'SASS',
      nombre: 'SASS preprocesador CSS',
      imagen: iconSASS,
    },
    {
      id: 'Kactus',
      nombre: 'kactus HCM',
      imagen: iconKactus,
    },
    {
      id: 'Excel',
      nombre: 'Excel',
      imagen: iconExcel,
    },
    {
      id: 'GitHub',
      nombre: 'GitHub',
      imagen: iconGitHub,
    },
    {
      id: 'GitLab',
      nombre: 'GitLab',
      imagen: iconGitLab,
    },
    {
      id: 'Git',
      nombre: 'Git',
      imagen: iconGit,
    },
    {
      id: 'React',
      nombre: 'React JS',
      imagen: iconReact,
    },
    {
      id: 'Angular',
      nombre: 'Angular',
      imagen: iconAngular,
    },
    {
      id: 'MSSQL',
      nombre: 'SQL Server',
      imagen: iconMSSQL,
    },
    {
      id: 'MySql',
      nombre: 'MySQL',
      imagen: iconMySQL,
    },
    {
      id: 'Oracle',
      nombre: 'Oracle',
      imagen: iconOracle,
    },
    {
      id: 'JavaScript',
      nombre: 'JavaScript',
      imagen: iconJS,
    },
    {
      id: 'NodeJS',
      nombre: 'NodeJS',
      imagen: iconNodeJS,
    },
    {
      id: 'Firebase',
      nombre: 'Firebase',
      imagen: iconFirebase,
    },
    {
      id: 'VSC',
      nombre: 'Visual Studio Code',
      imagen: iconVSC,
    },
    {
      id: 'Mailchimp',
      nombre: 'Mailchimp',
      imagen: iconMailChimp,
    },
  ],
  servicios: [
    {
      id: 1,
      title: 'Auditorias',
      content:
        `En procesos gestión humana,
      nómina, seguridad social,
      contabilización en nómina y
      su liquidación`,
      icon: iconAudit,
    },
    {
      id: 2,
      title: 'Desarrollo',
      content:
        `Desarrollo a la medida, paginas
      web, mantenimiento, e-commerce
      utilizando HTML5, CCS3, JavaScript
      y framework como Angular, React.

      Conocimientos en NodeJS, Sass,
      Bases de Datos, Firebase,
      Bootstrap y otros mas...

      Ejecuto campañas de email
      Marketing con su desarrollo en
      HTML.`,
      icon: iconDevelopment,
    },
    {
      id: 3,
      title: 'Nómina',
      content:
        `Administración y liquidación de
      nomina y/o seguridad social de
      pequeño y grande empresas
      regidas por la legislación
      Colombiana, con conocimientos en
      beneficios por convenciones
      colectivas o beneficios
        extralegales. `,
      icon: iconNomina,
    },
    {
      id: 4,
      title: 'UGPP',
      content:
        `Servicios en elaborción
      de informes, reportes,
      verificación y liquidación
      de requerimientos UGPP,
      generacion de planillas
      de correción`,
      icon: iconUGPP,
    },
    {
      id: 5,
      title: 'KACTUS HCM',
      content:
        `Software de administración de
      nómina y gestión humana
      desarrollado por DigitalWare.
      Consultor con 10 años de
      experiencia en administración,
      implementación y optimización.
      Administración de base de datos,
      SQL Server, Oracle`,
      icon: iconKactusYellow,
    },
    {
      id: 6,
      title: 'Diseño UI',
      content:
        `Diseño de interfaces de usuario,
      para web o movil, enfocado en
      experiencia de usuario.`,
      icon: iconUI,
    },
  ],
  experienciaLaboral: [
    {
      id: 20,
      empresa: 'Parners Co',
      fechaInicio: 'Marzo/2019',
      fechaFin: 'Actualidad',
      cargo: 'Co-fundador',
      actividad: [
        'Desarrollo plan de negocio',
        'Diseño UI/UX',
        'Desarrollo Plataforma',
        'Desarrollo web',
      ],
      logo: undervisa,
    },
    {
      id: 1,
      empresa: 'Undervisa Master Trade',
      fechaInicio: 'Agosto/2018',
      fechaFin: 'Julio/2019',
      cargo: 'Co-fundador y CFO',
      actividad: [
        'Planificación financiera',
        'Administración de redes sociales',
        'Elaboracion  de campañas de marketing',
        'Elaboraciones de planes de Negocios',
        'Desarrollo de web application PWA',
        'Elaboracion y administracion de Paginas Web',
      ],
      logo: undervisa,
    },
    {
      id: 2,
      empresa: 'Freelancer',
      fechaInicio: 'Noviembre/2014',
      fechaFin: 'Marzo/2019',
      cargo: 'Consultor Kactus HCM',
      actividad: [
        'Proyectos de soporte e implementación de Kactus HCM (nomina y RRHH)',
        'Elaboración de reportes SQL y Kactus Report ',
        'Asesorías en legislación laboral',
        'Elaboración informes de UGPP y liquidacion de planillas de correcion',
        'Auditorias Nomina ',
        'Liquidación de nomina y seguridad sociales',
        'Interfaz contable',
        'Optimización de procesos ',
      ],
      logo: alejozepol,
    },
    {
      id: 3,
      empresa: 'DigitalWare',
      fechaInicio: 'Abril/2014',
      fechaFin: 'Octubre/2014',
      cargo: 'Consultor Senior Kactus HCM',
      actividad: [
        'Soporte Técnico y funcional',
        'Atención casos clientes',
        'Replicas Errores',
        'Calidad Producto',
        'Consulta en todos los motores',
        'Consulta, capacitación y soporte a clientes y consultores',
        'Implementación aplicació',
      ],
      logo: DigitalWare,
    },
    {
      id: 4,
      empresa: 'Heinsohn',
      fechaInicio: 'Abril/2013',
      fechaFin: 'Febrero/2014',
      cargo: 'Líder de Soporte',
      actividad: [
        'Lider Soporte',
        'Soporte técnico y funcional',
        'Atención casos clientes',
        'Documentación Casos Pruebas',
        'Generación de scripts y consulta Bases de datos',
        'Consulta, capacitación y soporte a consultores',
        'Implementación aplicación',
        'Diseño Nuevos casos de uso',
      ],
      logo: HN,
    },
    {
      id: 5,
      empresa: 'Almaviva S.A.',
      cargo: 'Usuario Lider Kactus HR',
      fechaInicio: 'Febrero/2012',
      fechaFin: 'Abril/2013',
      actividad: [
        'Liquidación, pago de Nómina y Seguridad Social',
        'Reimplantación módulos Gestión Humana y Nomina KACTUS',
        'Interfaz Kactus -> Seven',
        'Instalación kactus ORACLE e INFORMIX',
        'Migración base de datos de INFORMIX -> ORACLE',
        'Soporte primer y segundo nivel',
        'Atención empleados casos nomina',
        'Parametrización para pago convención colectiva de trabajo',
        'Creacion de reportes Kactus',
      ],
      logo: almaviva,
    },
    {
      id: 6,
      empresa: 'UNAD.',
      cargo: 'Contratista Kactus HR',
      fechaInicio: 'Julio/2010',
      fechaFin: 'Septiembre/2011',
      actividad: [
        'Liquidación, pago de Nómina y Seguridad Social',
        'Generacion de CDP y distribución de costos',
        'Administración Base de datos Kactus',
        'Actualización ServicePack',
        'Soporte primer y segundo nivel',
        'Atención empleados casos nomina',
        'Creacion de reportes Kactus',
      ],
      logo: unad,
    },
    {
      id: 7,
      empresa: 'Outsourcing SA.',
      cargo: 'Analista Nómina',
      fechaInicio: 'Marzo/2010',
      fechaFin: 'Julio/2010',
      actividad: [
        'Liquidación, pago de Nómina y Seguridad Social',
        'Actualización ServicePack',
        'Soporte primer',
        'Ingreso de novedades',
        'Atención empleados casos nomina',
      ],
      logo: outsourcing,
    },
    {
      id: 8,
      empresa: 'Unipanamericana',
      cargo: 'Gestor de Gestión Humana',
      fechaInicio: 'Noviembre/2008',
      fechaFin: 'Agosto/2009',
      actividad: [
        'Liquidación, pago de Nómina y Seguridad Social',
        'Bienestar de personal',
        'Salud Ocupacional',
        'Ingreso de novedades',
        'Atención empleados casos nomina',
      ],
      logo: unipanamericana,
    },
    {
      id: 9,
      empresa: 'Compensar',
      cargo: 'Auxiliar Técnologia',
      fechaInicio: 'Marzo/2009',
      fechaFin: 'Septiembre/2009',
      actividad: [
        'Atención clientes, externo e interno',
        'Atención Proveedores',
        'Solicitud pedidos Consumos',
        'Solicitud pedidos activos Fijos',
        'control manejo salida de activos fijos y elementos',
        'registro novedades de nomina',
      ],
      logo: compensar,
    },
    {
      id: 10,
      empresa: 'Compensar',
      cargo: 'Aprendiz Gestión Humana',
      fechaInicio: 'Junio/2007',
      fechaFin: 'Marzo/2009',
      actividad: [
        'Liquidador de Nomina Empresas Temporales (Aprox. 250 Pers.)',
        'Tramitador de Seguridad Social colaboradores COMPENSAR',
        'pago proveedores',
        'Atención Colaboradores inquietudes de Seguridad Socia',
        'Apoyo atención inquietudes de liquidación nomina y seguridad social',
        'Archivo',
      ],
      logo: compensar,
    },
  ],
  carreras: [
    {
      id: 1,
      titulo: 'Técnico Contabilidad y Finanza',
      entidad: 'Servicio Nacional de Aprendizaje SENA',
      logo: iconSena,
    },
    {
      id: 2,
      titulo: 'Técnologo Analisis y desarrollo de software',
      entidad: 'Servicio Nacional de Aprendizaje SENA',
      logo: iconSena,
    },
    {
      id: 3,
      titulo: 'Carrera en Bases de Datos',
      entidad: 'Platzi',
      logo: iconBDGolden,
    },
    {
      id: 4,
      titulo: 'Carrera en Fundamentos de Programación',
      entidad: 'Platzi',
      logo: iconPBGolden,
    },
    {
      id: 5,
      titulo: 'Carrera en Diseño Grafico',
      entidad: 'Platzi',
      logo: iconDGGolden,
    },
    {
      id: 6,
      titulo: 'Carrera en Email Marketing',
      entidad: 'Platzi',
      logo: iconEMGolden,
    },
    {
      id: 7,
      titulo: 'Carrera en JavaScrip',
      entidad: 'Platzi',
      logo: 'https://static.platzi.com/media/achievements/golden-badge-carrera-javascript-48750f5a-8298-4d64-a06f-53982113c5e2.png',
    },
    {
      id: 8,
      titulo: 'Frontend con Angular',
      entidad: 'Platzi',
      logo: 'https://static.platzi.com/media/learningpath/golden_badges/453bc71c-39e5-4228-9153-722954c24f95.jpg',
    },
  ],
  cursos: [
    {
      'id': 1512,
      'title': 'Curso Básico de GraphQL',
      'badge': 'https://static.platzi.com/media/achievements/badge-graphql-2e658b66-c0b9-4b33-8f84-c1b7311be302.png',
      'url': '/clases/graphql/',
      'career': 'Backend con JavaScript',
      'diploma_link': '/@Alejozepol/curso/1512-graphql/diploma/detalle/',
    },
    {
      'id': 1281,
      'title': 'Curso Básico de Ionic 2018',
      'badge': 'https://static.platzi.com/media/achievements/1281-af122f0f-560a-408c-b3da-1d5aee8636f6.png',
      'url': '/clases/ionic/',
      'career': 'Desarrollo con Angular',
      'diploma_link': '/@Alejozepol/curso/1281-ionic/diploma/detalle/',
    },
    {
      'id': 1004,
      'title': 'Curso básico de Java 2015',
      'badge': 'https://static.platzi.com/media/achievements/badge-Java-basico-2017.png',
      'url': '/clases/java-basico-2015/',
      'career': 'Desarrollo de Aplicaciones Android',
      'diploma_link': '/@Alejozepol/curso/1004-java-basico-2015/diploma/detalle/',
    },
    {
      'id': 1814,
      'title': 'Curso Básico de JavaScript',
      'badge': 'https://static.platzi.com/media/achievements/badge-basicojs-e2ead888-428e-4f55-962c-8894aeaeacda.png',
      'url': '/clases/basico-javascript/',
      'career': 'Arquitectura Frontend',
      'diploma_link': '/@Alejozepol/curso/1814-basico-javascript/diploma/detalle/',
    },
    {
      'id': 1436,
      'title': 'Curso Básico de Jenkins',
      'badge': 'https://static.platzi.com/media/achievements/badges-jenkins-0073a655-4709-4628-bcad-b4ac569176d4.png',
      'url': '/clases/jenkins-basico/',
      'career': 'Administración de Servidores y DevOps',
      'diploma_link': '/@Alejozepol/curso/1436-jenkins-basico/diploma/detalle/',
    },
    {
      'id': 1230,
      'title': 'Curso Básico de Photoshop',
      'badge': 'https://static.platzi.com/media/achievements/1230-b90f9a3e-a148-40d2-aabd-76c57bf3dd76.png',
      'url': '/clases/photoshop-basico/',
      'career': 'Diseño Gráfico',
      'diploma_link': '/@Alejozepol/curso/1230-photoshop-basico/diploma/detalle/',
    },
    {
      'id': 1400,
      'title': 'Curso de Administración de Actividades con Trello',
      'badge': 'https://static.platzi.com/media/achievements/1400-140d7631-f476-46cf-afa4-8368c9ecf340.png',
      'url': '/clases/trello/',
      'career': 'Transformación Digital',
      'diploma_link': '/@Alejozepol/curso/1400-trello/diploma/detalle/',
    },
    {
      'id': 1125,
      'title': 'Curso de Adobe XD 2017',
      'badge': 'https://static.platzi.com/media/achievements/1125-01cb7cec-bff1-48cf-a782-e0bcfd49b993.png',
      'url': '/clases/adobe-xd-2017/',
      'career': 'Diseño de Productos Digitales y UX',
      'diploma_link': '/@Alejozepol/curso/1125-adobe-xd-2017/diploma/detalle/',
    },
    {
      'id': 1670,
      'title': 'Curso de Angular',
      'badge': 'https://static.platzi.com/media/achievements/badge-angular-b3bf6a40-abfb-44b7-b093-2583f7638a3a.png',
      'url': '/clases/angular/',
      'career': 'Arquitectura Frontend',
      'diploma_link': '/@Alejozepol/curso/1670-angular/diploma/detalle/',
    },
    {
      'id': 1153,
      'title': 'Curso de Angular 4',
      'badge': 'https://static.platzi.com/media/achievements/1153-db3c9f0a-b36b-435e-aa50-7f4aa7f9d264.png',
      'url': '/clases/angular-4/',
      'career': 'Desarrollo con Angular',
      'diploma_link': '/@Alejozepol/curso/1153-angular-4/diploma/detalle/',
    },
    {
      'id': 1340,
      'title': 'Curso de Angular 6 2018',
      'badge': 'https://static.platzi.com/media/achievements/1340-7609a8dc-f858-4863-abeb-02a7dbbf59c1.png',
      'url': '/clases/angular-avanzado/',
      'career': 'Desarrollo con Angular',
      'diploma_link': '/@Alejozepol/curso/1340-angular-avanzado/diploma/detalle/',
    },
    {
      'id': 1789,
      'title': 'Curso de Asincronismo con JavaScript',
      'badge': 'https://static.platzi.com/media/achievements/badge-asincronismo-javascript-3f44d51e-209e-4e47-a228-4142d049525c.png',
      'url': '/clases/asincronismo-js/',
      'career': 'JavaScript',
      'diploma_link': '/@Alejozepol/curso/1789-asincronismo-js/diploma/detalle/',
    },
    {
      'id': 1649,
      'title': 'Curso de Autenticación con Passport.js',
      'badge': 'https://static.platzi.com/media/achievements/badge-autenticacion-passport-6d45426a-2b24-4757-8927-7bfaf54529dd.png',
      'url': '/clases/passport/',
      'career': 'JavaScript',
      'diploma_link': '/@Alejozepol/curso/1649-passport/diploma/detalle/',
    },
    {
      'id': 1646,
      'title': 'Curso de Backend con Node.js',
      'badge': 'https://static.platzi.com/media/achievements/badge-backend-node-8e6aa8a9-f7cd-42b7-bf4a-e1ee916a942b.png',
      'url': '/clases/backend-nodejs/',
      'career': 'JavaScript',
      'diploma_link': '/@Alejozepol/curso/1646-backend-nodejs/diploma/detalle/',
    },
    {
      'id': 1331,
      'title': 'Curso de Bootstrap',
      'badge': 'https://static.platzi.com/media/achievements/1331-cda68a62-24e5-464a-95ca-6e5d339c7244.png',
      'url': '/clases/bootstrap/',
      'career': 'Arquitectura Frontend',
      'diploma_link': '/@Alejozepol/curso/1331-bootstrap/diploma/detalle/',
    },
    {
      'id': 1309,
      'title': 'Curso de Business Model Canvas',
      'badge': 'https://static.platzi.com/media/achievements/1309-25772f56-4753-489d-a3b5-8a432e9d4c1d.png',
      'url': '/clases/canvas/',
      'career': 'Creación de Startups',
      'diploma_link': '/@Alejozepol/curso/1309-canvas/diploma/detalle/',
    },
    {
      'id': 1807,
      'title': 'Curso de Closures y Scope en JavaScript',
      'badge': 'https://static.platzi.com/media/achievements/badge-_closures-scope-javascript-3848a8e7-cf6f-47c5-a824-df5fc0c14d41.png',
      'url': '/clases/scope/',
      'career': 'Arquitectura Frontend',
      'diploma_link': '/@Alejozepol/curso/1807-scope/diploma/detalle/',
    },
    {
      'id': 1399,
      'title': 'Curso de Comunicación Online con Slack 2018',
      'badge': 'https://static.platzi.com/media/achievements/badges-comunicacion-slack-a9bd2f28-82f2-4fef-8d67-6cec70724d94.png',
      'url': '/clases/slack-2018/',
      'career': 'Transformación Digital',
      'diploma_link': '/@Alejozepol/curso/1399-slack-2018/diploma/detalle/',
    },
    {
      'id': 1044,
      'title': 'Curso de Construcción de Marca 2016',
      'badge': 'https://static.platzi.com/media/achievements/badge_marcadigital.png',
      'url': '/clases/branding-2016/',
      'career': 'Negocios Online',
      'diploma_link': '/@Alejozepol/curso/1044-branding-2016/diploma/detalle/',
    },
    {
      'id': 1229,
      'title': 'Curso de CSS Grid Layout',
      'badge': 'https://static.platzi.com/media/achievements/1229-dbff8a06-bcca-48e9-98e3-1fd76d6216f3.png',
      'url': '/clases/css-grid-layout/',
      'career': 'Arquitectura Frontend',
      'diploma_link': '/@Alejozepol/curso/1229-css-grid-layout/diploma/detalle/',
    },
    {
      'id': 1350,
      'title': 'Curso de Desarrollo Web Online',
      'badge': 'https://static.platzi.com/media/achievements/1350-09ddb033-354b-4c0c-84a4-56cbb71d0b08.png',
      'url': '/clases/html5-css3/',
      'career': 'Arquitectura Frontend',
      'diploma_link': '/@Alejozepol/curso/1350-html5-css3/diploma/detalle/',
    },
    {
      'id': 1034,
      'title': 'Curso de Desarrollo Web Online 2016',
      'badge': 'https://static.platzi.com/media/achievements/badge-html-y-css-para-mails.png',
      'url': '/clases/html5-css3-2016/',
      'career': 'Arquitectura Frontend',
      'diploma_link': '/@Alejozepol/curso/1034-html5-css3-2016/diploma/detalle/',
    },
    {
      'id': 1140,
      'title': 'Curso de Diseño de Interfaces y UX 2017',
      'badge': 'https://static.platzi.com/media/achievements/badge-diseno-interfaces-ux-f4591d4c-0fda-4e3b-bbbb-38bb0a61e724.png',
      'url': '/clases/diseno-interfaces-ux-2017/',
      'career': 'Diseño de Productos Digitales y UX',
      'diploma_link': '/@Alejozepol/curso/1140-diseno-interfaces-ux-2017/diploma/detalle/',
    },
    {
      'id': 1470,
      'title': 'Curso de Diseño y Maquetación para Emails',
      'badge': 'https://static.platzi.com/media/achievements/badge-html-css-email-0306f75d-b180-4ccd-996a-b0768001d2f1.png',
      'url': '/clases/diseno-email/',
      'career': 'Email Marketing',
      'diploma_link': '/@Alejozepol/curso/1470-diseno-email/diploma/detalle/',
    },
    {
      'id': 1815,
      'title': 'Curso de ECMAScript 6+',
      'badge': 'https://static.platzi.com/media/achievements/badge-ecmascript-6-d48e7bb7-a7a4-416d-a3b4-e11f0b13a229.png',
      'url': '/clases/ecmascript-6/',
      'career': 'Backend con JavaScript',
      'diploma_link': '/@Alejozepol/curso/1815-ecmascript-6/diploma/detalle/',
    },
    {
      'id': 1322,
      'title': 'Curso de Email Marketing',
      'badge': 'https://static.platzi.com/media/achievements/1322-8d6d1875-22a4-4690-9cc5-7cd58654ebfa.png',
      'url': '/clases/email-marketing/',
      'career': 'Ventas y Mercadeo',
      'diploma_link': '/@Alejozepol/curso/1322-email-marketing/diploma/detalle/',
    },
    {
      'id': 1481,
      'title': 'Curso de Estrategia y Creación de Contenido Digital',
      'badge': 'https://static.platzi.com/media/achievements/badges-contenidos-digitales-82cb6788-520c-48c4-9e1e-98fb0e5e40ba.png',
      'url': '/clases/contenidos-digitales/',
      'career': 'Producción de Audio',
      'diploma_link': '/@Alejozepol/curso/1481-contenidos-digitales/diploma/detalle/',
    },
    {
      'id': 1437,
      'title': 'Curso de Express.js',
      'badge': 'https://static.platzi.com/media/achievements/badges-express-43987e06-2d8c-4f0d-89d4-c4aecd2135dd.png',
      'url': '/clases/express-js/',
      'career': 'Backend con JavaScript',
      'diploma_link': '/@Alejozepol/curso/1437-express-js/diploma/detalle/',
    },
    {
      'id': 1435,
      'title': 'Curso de Firebase para Web',
      'badge': 'https://static.platzi.com/media/achievements/badge-firebase-web-441f64cc-bedf-4aea-937d-e2f413f2d96d.png',
      'url': '/clases/firebase-web/',
      'career': 'Vue.js',
      'diploma_link': '/@Alejozepol/curso/1435-firebase-web/diploma/detalle/',
    },
    {
      'id': 1640,
      'title': 'Curso de Frontend Developer',
      'badge': 'https://static.platzi.com/media/achievements/badge-frontend-developer-8a49e681-3e22-408d-b886-2f47dfc9953a.png',
      'url': '/clases/frontend-developer/',
      'career': 'JavaScript',
      'diploma_link': '/@Alejozepol/curso/1640-frontend-developer/diploma/detalle/',
    },
    {
      'id': 1759,
      'title': 'Curso de Fundamentos de Node.js',
      'badge': 'https://static.platzi.com/media/achievements/badge-fundamentos-nodejs-8fd9c0f4-562a-48e9-a85a-3a7db0fa384b.png',
      'url': '/clases/fundamentos-node/',
      'career': 'JavaScript',
      'diploma_link': '/@Alejozepol/curso/1759-fundamentos-node/diploma/detalle/',
    },
    {
      'id': 1720,
      'title': 'Curso de Gestión de Documentos Digitales con PowerPoint',
      'badge': 'https://static.platzi.com/media/achievements/badge-powerpoint-064ac3a0-17b9-420c-9fc3-740689e6374d.png',
      'url': '/clases/microsoft-powerpoint/',
      'career': 'Crecimiento Profesional',
      'diploma_link': '/@Alejozepol/curso/1720-microsoft-powerpoint/diploma/detalle/',
    },
    {
      'id': 1749,
      'title': 'Curso de Gestión Efectiva del Tiempo',
      'badge': 'https://static.platzi.com/media/achievements/badge-gestion-tiempo-5368aa24-4418-4e10-b6c3-c8775b849bf9.png',
      'url': '/clases/gestion-tiempo/',
      'career': 'Crecimiento Profesional',
      'diploma_link': '/@Alejozepol/curso/1749-gestion-tiempo/diploma/detalle/',
    },
    {
      'id': 1492,
      'title': 'Curso de HTML y CSS',
      'badge': 'https://static.platzi.com/media/achievements/badges-html-css-b0a71550-d5e7-4e27-aca2-f09f1321a517.png',
      'url': '/clases/html-css/',
      'career': 'Arquitectura Frontend',
      'diploma_link': '/@Alejozepol/curso/1492-html-css/diploma/detalle/',
    },
    {
      'id': 1130,
      'title': 'Curso de Illustrator',
      'badge': 'https://static.platzi.com/media/achievements/1130-5d671f11-65d0-42dc-8f5c-b8536389cd7d.png',
      'url': '/clases/illustrator/',
      'career': 'Diseño Gráfico',
      'diploma_link': '/@Alejozepol/curso/1130-illustrator/diploma/detalle/',
    },
    {
      'id': 1345,
      'title': 'Curso de Ilustración Digital con Vectores',
      'badge': 'https://static.platzi.com/media/achievements/1345-f01b1eb4-0d9c-404c-835d-6c0efca01b2e.png',
      'url': '/clases/ilustracion-illustrator/',
      'career': 'Diseño de Interfaces (UI)',
      'diploma_link': '/@Alejozepol/curso/1345-ilustracion-illustrator/diploma/detalle/',
    },
    {
      'id': 1371,
      'title': 'Curso de Inglés Básico: Conversación',
      'badge': 'https://static.platzi.com/media/achievements/1371-db5ea3c7-4ac9-4b61-b786-9346ebb3fc7f.png',
      'url': '/clases/ingles-conversacion/',
      'career': 'Inglés',
      'diploma_link': '/@Alejozepol/curso/1371-ingles-conversacion/diploma/detalle/',
    },
    {
      'id': 1358,
      'title': 'Curso de Inglés Básico: Fundamentos',
      'badge': 'https://static.platzi.com/media/achievements/badge-basico-ingles-e073f711-763d-4129-badc-5e4baa78b225.png',
      'url': '/clases/ingles-basico/',
      'career': 'Crecimiento Profesional',
      'diploma_link': '/@Alejozepol/curso/1358-ingles-basico/diploma/detalle/',
    },
    {
      'id': 1748,
      'title': 'Curso de Introducción a la Terminal y Línea de Comandos',
      'badge': 'https://static.platzi.com/media/achievements/badges-terminal-c9ee432b-2598-4e94-88d8-0a30842ef886.png',
      'url': '/clases/terminal/',
      'career': 'Desarrollo Backend con GO',
      'diploma_link': '/@Alejozepol/curso/1748-terminal/diploma/detalle/',
    },
    {
      'id': 1228,
      'title': 'Curso de Introducción al Diseño',
      'badge': 'https://static.platzi.com/media/achievements/1228-16a010ab-8b53-43b2-8819-8a552ad16e12.png',
      'url': '/clases/fundamentos-diseno/',
      'career': 'Diseño Gráfico',
      'diploma_link': '/@Alejozepol/curso/1228-fundamentos-diseno/diploma/detalle/',
    },
    {
      'id': 1328,
      'title': 'Curso de Introducción al Marketing Digital',
      'badge': 'https://static.platzi.com/media/achievements/1328-bdfaf9ae-05e1-44c3-9c14-fccbb491a7d3.png',
      'url': '/clases/introduccion-marketing/',
      'career': 'Creación de Startups',
      'diploma_link': '/@Alejozepol/curso/1328-introduccion-marketing/diploma/detalle/',
    },
    {
      'id': 1798,
      'title': 'Curso de JavaScript Engine (V8) y el Navegador',
      'badge': 'https://static.platzi.com/media/achievements/badge-javascript-engine-v8-navegador-de67cba4-0548-4361-9c6a-1a25aa96fa2a.png',
      'url': '/clases/javascript-navegador/',
      'career': 'Arquitectura Frontend',
      'diploma_link': '/@Alejozepol/curso/1798-javascript-navegador/diploma/detalle/',
    },
    {
      'id': 1803,
      'title': 'Curso de Keynote',
      'badge': 'https://static.platzi.com/media/achievements/badge-keynote-ba822ddd-150e-4135-b9d5-76430af56cdf.png',
      'url': '/clases/keynote/',
      'career': null,
      'diploma_link': '/@Alejozepol/curso/1803-keynote/diploma/detalle/',
    },
    {
      'id': 1689,
      'title': 'Curso de Node.js',
      'badge': 'https://static.platzi.com/media/achievements/badge-node-js-54cb43fe-527e-4315-9472-81021bac36a7.png',
      'url': '/clases/backend-js/',
      'career': 'Backend con JavaScript',
      'diploma_link': '/@Alejozepol/curso/1689-backend-js/diploma/detalle/',
    },
    {
      'id': 1376,
      'title': 'Curso de Node.js con Hapi',
      'badge': 'https://static.platzi.com/media/achievements/1376-881b3368-afa8-49a9-958c-077afe664537.png',
      'url': '/clases/hapi-js/',
      'career': 'Desarrollo con JavaScript',
      'diploma_link': '/@Alejozepol/curso/1376-hapi-js/diploma/detalle/',
    },
    {
      'id': 100,
      'title': 'Curso de PostgreSQL 2017',
      'badge': 'https://static.platzi.com/media/achievements/100-aa73b9eb-3205-4baf-9af6-dc9c80e7ee9c.png',
      'url': '/clases/postgresql-2017/',
      'career': 'Desarrollo Backend con GO',
      'diploma_link': '/@Alejozepol/curso/100-postgresql-2017/diploma/detalle/',
    },
    {
      'id': 1665,
      'title': 'Curso de Preprocesadores CSS',
      'badge': 'https://static.platzi.com/media/achievements/badge-preprocesadores-8c2ed161-d4f1-4d08-bb9e-9e741cdd539d.png',
      'url': '/clases/preprocesadores/',
      'career': 'Arquitectura Frontend',
      'diploma_link': '/@Alejozepol/curso/1665-preprocesadores/diploma/detalle/',
    },
    {
      'id': 1650,
      'title': 'Curso de Prework: Buenas Prácticas y Entorno de Desarrollo',
      'badge': 'https://static.platzi.com/media/achievements/badge-prework-da6b0493-9908-40f3-ad53-f5d330b995b8.png',
      'url': '/clases/prework/',
      'career': 'JavaScript',
      'diploma_link': '/@Alejozepol/curso/1650-prework/diploma/detalle/',
    },
    {
      'id': 1497,
      'title': 'Curso de Programación Funcional en JavaScript por Bedu',
      'badge': 'https://static.platzi.com/media/achievements/badges-programacion-funcional-js-a4a32291-e53e-4322-9e80-f5297d636ab1.png',
      'url': '/clases/funcional-js/',
      'career': 'Vue.js',
      'diploma_link': '/@Alejozepol/curso/1497-funcional-js/diploma/detalle/',
    },
    {
      'id': 1818,
      'title': 'Curso de Progressive Web Apps con Angular',
      'badge': 'https://static.platzi.com/media/achievements/badge-pwa-con-angular-b79389e2-813c-4e61-89b9-e065ff742ce8.png',
      'url': '/clases/pwa-angular/',
      'career': 'Desarrollo con Angular',
      'diploma_link': '/@Alejozepol/curso/1818-pwa-angular/diploma/detalle/',
    },
    {
      'id': 1268,
      'title': 'Curso de PWA con Angular 2018',
      'badge': 'https://static.platzi.com/media/achievements/1268-63ffe8e5-ef4a-4906-974a-204f15d0e1be.png',
      'url': '/clases/pwa-angular-2018/',
      'career': 'Desarrollo de Apps multiplataforma',
      'diploma_link': '/@Alejozepol/curso/1268-pwa-angular-2018/diploma/detalle/',
    },
    {
      'id': 1652,
      'title': 'Curso de React Router y Redux',
      'badge': 'https://static.platzi.com/media/achievements/badge-react-redux-2ca3c0a5-fc53-437f-bfba-69e9ddd5a803.png',
      'url': '/clases/react-router-redux/',
      'career': 'JavaScript',
      'diploma_link': '/@Alejozepol/curso/1652-react-router-redux/diploma/detalle/',
    },
    {
      'id': 1277,
      'title': 'Curso de Redes de Internet',
      'badge': 'https://static.platzi.com/media/achievements/1277-9358e87f-0435-48a4-b158-3d6bde87bca0.png',
      'url': '/clases/redes/',
      'career': 'Seguridad Informática',
      'diploma_link': '/@Alejozepol/curso/1277-redes/diploma/detalle/',
    },
    {
      'id': 1730,
      'title': 'Curso de Rendimiento en Angular',
      'badge': 'https://static.platzi.com/media/achievements/badge-rendimiento-angular-85947c7f-6419-4965-abe8-412863b3bdbb.png',
      'url': '/clases/angular-performance/',
      'career': 'Desarrollo con Angular',
      'diploma_link': '/@Alejozepol/curso/1730-angular-performance/diploma/detalle/',
    },
    {
      'id': 1362,
      'title': 'Curso de Responsive Design',
      'badge': 'https://static.platzi.com/media/achievements/1362-87c8ad3d-a50d-41a2-b023-ad838594e1c9.png',
      'url': '/clases/responsive-design/',
      'career': 'Arquitectura Frontend',
      'diploma_link': '/@Alejozepol/curso/1362-responsive-design/diploma/detalle/',
    },
    {
      'id': 1643,
      'title': 'Curso de Server Side Render con Express 2019',
      'badge': 'https://static.platzi.com/media/achievements/badge-server-side-render-dec727dc-c4b2-4beb-a1d1-d43f614d7818.png',
      'url': '/clases/ssr-2019/',
      'career': null,
      'diploma_link': '/@Alejozepol/curso/1643-ssr-2019/diploma/detalle/',
    },
    {
      'id': 1420,
      'title': 'Curso de Sistemas de Diseño',
      'badge': 'https://static.platzi.com/media/achievements/badges-sistema-diseno-72e121d5-e96b-46cc-ba40-cf3ef7c1e1da.png',
      'url': '/clases/sistemas-diseno/',
      'career': 'Diseño de Productos Digitales y UX',
      'diploma_link': '/@Alejozepol/curso/1420-sistemas-diseno/diploma/detalle/',
    },
    {
      'id': 1422,
      'title': 'Curso de Sistemas de Diseño para Desarrolladores',
      'badge': 'https://static.platzi.com/media/achievements/badges-sistemas-desarrolladores-041a4def-ce1a-4e88-9c84-eb3eff740433.png',
      'url': '/clases/diseno-desarrolladores/',
      'career': 'Arquitectura Frontend',
      'diploma_link': '/@Alejozepol/curso/1422-diseno-desarrolladores/diploma/detalle/',
    },
    {
      'id': 1272,
      'title': 'Curso de SQL y MySQL',
      'badge': 'https://static.platzi.com/media/achievements/1272-15ff4836-0221-4001-b945-5cf34bd65bab.png',
      'url': '/clases/sql-mysql/',
      'career': 'Desarrollo Backend con Ruby',
      'diploma_link': '/@Alejozepol/curso/1272-sql-mysql/diploma/detalle/',
    },
    {
      'id': 1321,
      'title': 'Curso de Transformación Digital para Empresas',
      'badge': 'https://static.platzi.com/media/achievements/1321-67f2b04c-1735-4813-8d39-4c943932b7de.png',
      'url': '/clases/transforma-digital/',
      'career': 'Transformación Digital',
      'diploma_link': '/@Alejozepol/curso/1321-transforma-digital/diploma/detalle/',
    },
    {
      'id': 1843,
      'title': 'Curso de Travis CI',
      'badge': 'https://static.platzi.com/media/achievements/badge-travis-ci2--7ddee2a2-9343-492f-8461-32f6c7f2edeb.png',
      'url': '/clases/travis/',
      'career': 'Backend con JavaScript',
      'diploma_link': '/@Alejozepol/curso/1843-travis/diploma/detalle/',
    },
    {
      'id': 1580,
      'title': 'Curso de TypeScript con Angular por Belatrix',
      'badge': 'https://static.platzi.com/media/achievements/badge-typescript-d2e526a5-526d-4077-b433-a9337e8a5d8a.png',
      'url': '/clases/typescript-angular/',
      'career': 'Desarrollo con Angular',
      'diploma_link': '/@Alejozepol/curso/1580-typescript-angular/diploma/detalle/',
    },
    {
      'id': 1620,
      'title': 'Curso de Webpack',
      'badge': 'https://static.platzi.com/media/achievements/badge-webpack-e9f63293-1e52-4bd1-90b7-82740c8131a9.png',
      'url': '/clases/webpack/',
      'career': 'Frontend con React.JS',
      'diploma_link': '/@Alejozepol/curso/1620-webpack/diploma/detalle/',
    },
    {
      'id': 1058,
      'title': 'Curso Gratis de Marketing Voz a Voz 2016',
      'badge': 'https://static.platzi.com/media/achievements/badgeWOM.png',
      'url': '/clases/marketing-voz-2016/',
      'career': 'Fundamentos Básicos',
      'diploma_link': '/@Alejozepol/curso/1058-marketing-voz-2016/diploma/detalle/',
    },
    {
      'id': 1050,
      'title': 'Curso Gratis de Programación Básica',
      'badge': 'https://static.platzi.com/media/achievements/1050-bfb74f83-8e2e-4ff7-a66d-77d2c0067908.png',
      'url': '/clases/programacion-basica/',
      'career': 'Backend Profesional',
      'diploma_link': '/@Alejozepol/curso/1050-programacion-basica/diploma/detalle/',
    },
    {
      'id': 1634,
      'title': 'Curso para Desbloquear tu Creatividad',
      'badge': 'https://static.platzi.com/media/achievements/mesa-de-trabajo-38-33c261c4-28ea-4541-8ed9-3a7376ea0f6f.png',
      'url': '/clases/desbloquea-creatividad/',
      'career': null,
      'diploma_link': '/@Alejozepol/curso/1634-desbloquea-creatividad/diploma/detalle/',
    },
    {
      'id': 1758,
      'title': 'Curso Práctico de HTML y CSS',
      'badge': 'https://static.platzi.com/media/achievements/badge-practico-html-css-1-106665ee-bf4f-4301-8991-1fab9e54a73e.png',
      'url': '/clases/html-practico/',
      'career': 'Arquitectura Frontend',
      'diploma_link': '/@Alejozepol/curso/1758-html-practico/diploma/detalle/',
    },
    {
      'id': 1767,
      'title': 'Curso Práctico de Node.js',
      'badge': 'https://static.platzi.com/media/achievements/badge-practico-nodejs-c09b11c0-4ca0-43ce-a13c-aeaad6921778.png',
      'url': '/clases/practico-node/',
      'career': 'Backend con JavaScript',
      'diploma_link': '/@Alejozepol/curso/1767-practico-node/diploma/detalle/',
    },
    {
      'id': 1651,
      'title': 'Curso Práctico de React JS',
      'badge': 'https://static.platzi.com/media/achievements/badge-react-adec89d0-1c35-4c9c-847e-18c284dc79dd.png',
      'url': '/clases/react-ejs/',
      'career': 'JavaScript',
      'diploma_link': '/@Alejozepol/curso/1651-react-ejs/diploma/detalle/',
    },
    {
      'id': 1731,
      'title': 'Curso Profesional de Angular',
      'badge': 'https://static.platzi.com/media/achievements/badge-angular-profesional-ece15327-173e-43fd-8361-08562cd3c38a.png',
      'url': '/clases/angular-profesional/',
      'career': 'Desarrollo con Angular',
      'diploma_link': '/@Alejozepol/curso/1731-angular-profesional/diploma/detalle/',
    },
    {
      'id': 1248,
      'title': 'Curso Profesional de Arquitectura de Software',
      'badge': 'https://static.platzi.com/media/achievements/1248-8cdbdf8f-aaa1-4752-91c9-13083dab983e.png',
      'url': '/clases/pro-arquitectura/',
      'career': 'Fundamentos de Programación',
      'diploma_link': '/@Alejozepol/curso/1248-pro-arquitectura/diploma/detalle/',
    },
    {
      'id': 1557,
      'title': 'Curso Profesional de Git y GitHub',
      'badge': 'https://static.platzi.com/media/achievements/badge-github-0b729570-934d-47d8-ba6b-610d7f15e0ec.png',
      'url': '/clases/git-github/',
      'career': 'JavaScript',
      'diploma_link': '/@Alejozepol/curso/1557-git-github/diploma/detalle/',
    },
    {
      'id': 1170,
      'title': 'Curso profesional de Git y GitHub 2017',
      'badge': 'https://static.platzi.com/media/achievements/badge-github-c53a39e6-772b-4e41-b3c4-223bb252fbd6.png',
      'url': '/clases/git-github-2017-old/',
      'career': 'Desarrollo con Node.js',
      'diploma_link': '/@Alejozepol/curso/1170-git-github-2017-old/diploma/detalle/',
    },
    {
      'id': 1642,
      'title': 'Curso Profesional de JavaScript',
      'badge': 'https://static.platzi.com/media/achievements/badge-profesional-javascript-13538df2-24ce-433f-9aa6-e34eed608e70.png',
      'url': '/clases/javascript-profesional/',
      'career': 'JavaScript',
      'diploma_link': '/@Alejozepol/curso/1642-javascript-profesional/diploma/detalle/',
    },
    {
      'id': 1247,
      'title': 'Fundamentos de Arquitectura de Software',
      'badge': 'https://static.platzi.com/media/achievements/1247-4f5b5d04-4b56-4e64-bec2-db8fe3c0aa18.png',
      'url': '/clases/arquitectura-software/',
      'career': 'Desarrollo Backend con GO',
      'diploma_link': '/@Alejozepol/curso/1247-arquitectura-software/diploma/detalle/',
    },
    {
      'id': 1183,
      'title': 'Fundamentos de Bases de Datos 2017',
      'badge': 'https://static.platzi.com/media/achievements/1183-4a1fb0f2-00d0-4ef3-ac49-bfd2f651531d.png',
      'url': '/clases/bd-2017/',
      'career': 'Desarrollo Backend con GO',
      'diploma_link': '/@Alejozepol/curso/1183-bd-2017/diploma/detalle/',
    },
    {
      'id': 1098,
      'title': 'Fundamentos de Ingeniería de Software',
      'badge': 'https://static.platzi.com/media/achievements/badge-ing-software-2017-18f503fd-36bd-42d8-b1a1-492865659687.png',
      'url': '/clases/ingenieria/',
      'career': 'Desarrollo Backend con Ruby',
      'diploma_link': '/@Alejozepol/curso/1098-ingenieria/diploma/detalle/',
    },
    {
      'id': 1339,
      'title': 'Fundamentos de JavaScript',
      'badge': 'https://static.platzi.com/media/achievements/badge-fundamentos-javascript-61c15bdf-0a83-4aed-8537-b4753e4071e1.png',
      'url': '/clases/fundamentos-javascript/',
      'career': 'JavaScript',
      'diploma_link': '/@Alejozepol/curso/1339-fundamentos-javascript/diploma/detalle/',
    },
    {
      'id': 1186,
      'title': 'Introducción a la Creación de Empresas y Startups',
      'badge': 'https://static.platzi.com/media/achievements/1186-0cbf6899-eeb8-4b9e-9bf9-a55a004e4307.png',
      'url': '/clases/creacion-de-empresas/',
      'career': 'Creación de Startups',
      'diploma_link': '/@Alejozepol/curso/1186-creacion-de-empresas/diploma/detalle/',
    },
    {
      'id': 6,
      'title': 'Excel Avanzado',
      'badge': '../assets/SENA.png',
      'url': '',
      'career': 'EXCEL',
      'diploma_link': '',
      'instituto': 'SENA',
    },
    {
      'id': 5,
      'title': 'Actualizacion del Sistema de seguridad social integral',
      'badge': '../assets/SENA.png',
      'url': '',
      'career': '',
      'diploma_link': '',
      'instituto': 'SENA',
    },
    {
      'id': 1,
      'title': 'Diplomado seguridad social y legislación Laboral',
      'badge': Ucatolica,
      'url': '',
      'career': 'SGSS',
      'diploma_link': '',
      'instituto': 'Universidad Catolica de Colombia',
    },
    {
      'id': 2,
      'title': 'Contabilidad Básica I y II',
      'badge': '../assets/SENA.png',
      'url': '',
      'career': '',
      'diploma_link': '',
      'instituto': 'SENA',
    },
    {
      'id': 3,
      'title': 'Calidad en el desarollo de software',
      'badge': '../assets/SENA.png',
      'url': '',
      'career': '',
      'diploma_link': '',
      'instituto': 'SENA',
    },
    {
      'id': 4,
      'title': 'Modelo de calidad de software',
      'badge': '../assets/SENA.png',
      'url': '',
      'career': '',
      'diploma_link': '',
      'instituto': 'SENA',
    },
  ],
  ProjectWeb: [
    {
      id: 1,
      title: 'BuyNow',
      img: buynow,
      content: 'E-commerce de productos de platzi realizo con angular 9 e implementado Lazy Loader y PWA',
      lenguage: [iconXD, iconAngular, iconHTML, iconSASS, iconTypeScript, iconFirebase],
      video: 'https://youtu.be/OZRcMeVD4y4',
      code: 'https://github.com/alejozepol/BuyNow',
      project: 'https://buynow-8ed3d.web.app/home',
    },
    {
      id: 2,
      title: 'Blog Tecnlogy',
      img: blogTecnology,
      content: 'Blog realizado con React en diferentes tipos de acomodación de elementos y tarjetas tipo pinterest utilizando grid y flex de css',
      lenguage: [iconReact, iconHTML, iconSASS, iconFirebase],
      code: 'https://github.com/alejozepol/Blog-tecnology',
      project: 'https://blog-react-platzimaster.web.app/',
      video: 'https://youtu.be/3Z93YyBJUbE',
    },
    {
      id: 3,
      title: 'Calculadora Bases',
      img: calculadoraBases,
      content: 'Calculadora para operaciones básicas y conversiones de números en sistema binario, octal, decimal y hexadecimal.',
      lenguage: [iconXD, iconReact, iconHTML, iconSASS, iconFirebase],
      code: 'https://github.com/alejozepol/calculadora-Bases',
      project: 'https://calculadorabases.web.app/',
      video: 'https://youtu.be/EpsgOypIyrQ',
    },
    {
      id: 4,
      title: 'Curiculum Viate',
      img: cvReact,
      content: 'Desarrollo de CV de una persona imaginaria iterando datos de un array',
      lenguage: [iconXD, iconReact, iconHTML, iconSASS, iconFirebase],
      code: 'https://github.com/alejozepol/CV-React',
      project: 'https://reactcalleger-cv.web.app/',
      video: 'https://youtu.be/CeT2FxNzHb0',
    },
    {
      id: 5,
      title: 'Platzi Video',
      img: platziVideo,
      content: 'Proyecto escuela JS de plataforma de reproduccion de videos',
      lenguage: [iconReact, iconHTML, iconSASS, iconNodeJS],
      video: 'https://youtu.be/HlYKUZa8JMY',
      code: 'https://github.com/alejozepol/PlatziVideoReact',
    },
    {
      id: 6,
      title: 'D-Express',
      img: dexpress,
      content: 'Sistema POS desarrollado que tiene como objetivo la administración de caja y pagos',
      lenguage: [iconReact, iconHTML, iconSASS, iconFirebase],
      code: 'https://github.com/d-express/pos-frontend/blob/master/now.json',
      project: 'https://pos-frontend-9ryc25ptu.now.sh/',
    },
  ],
  ProjectUI: [
    {
      id: 1,
      title: 'detail asteroid Card NASA',
      img: cardAsteroid,
      content: 'Seguerencia de tarjeta para mostrar a informacion de la API de los asteorides registrados por la NASA',
      lenguage: [iconXD],
      code: 'https://xd.adobe.com/view/23186d94-3532-4de1-4311-7ab1ab33beae-5529/?fullscreen',
      project: 'https://www.behance.net/gallery/99143409/detail-asteroid-card-NASA',
    },
    {
      id: 2,
      title: 'Distance',
      img: distance,
      content: 'Distance el cual quedo en segundo lugar en el Startup Weekend 2019 en contra del covid-19',
      lenguage: [iconXD],
      code: 'https://xd.adobe.com/view/1486231e-ec5a-4913-6512-a9325c7c958b-62b7/',
      project: 'https://www.behance.net/gallery/99144855/Distance-segundo-lugar-en-el-Startup-Weekend-2019',
      video: 'https://youtu.be/5w1LVLzYZH8',
    },
    {
      id: 3,
      title: 'MediLab',
      img: medilab,
      content: 'Diseño de plataforma para administracion de laboratorios medicos',
      lenguage: [iconXD, iconAI],
      code: 'https://xd.adobe.com/view/50d60adc-0d33-4e20-5980-8e36bf89f348-26e7/',
      project: 'https://www.behance.net/gallery/99145743/Medilab?share=1',
      video: 'https://youtu.be/NvWcd0TxU5o',
    },
    {
      id: 4,
      title: 'Parners',
      img: parners,
      content: 'diseño y desarrollo de la Landing Parners y captura de datos en Mailchimp',
      lenguage: [iconXD, iconAI, iconHTML, iconCSS],
      project: 'https://www.parners.com.co/',
    },
  ],
};

export default inicialState;
