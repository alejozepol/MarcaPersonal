import React from 'react';

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

/** Iconos Amarillos */
import iconAudit from './src/assets/YellowIcons/iconAuditoria.png';
import iconDevelopment from './src/assets/YellowIcons/iconDesarrollo.png';
import iconNomina from './src/assets/YellowIcons/iconNomina.png';
import iconUGPP from './src/assets/YellowIcons/iconUGPP.png';
import iconKactusYellow from './src/assets/YellowIcons/iconkactusAmarillo.png';
import iconUI from './src/assets/YellowIcons/iconUI.png';

/* Logos Experiencia */

import undervisa from './src/assets/logoExperiencia/Undervisa.svg';
import alejozepol from './dist/assets/logo.png';
import DigitalWare from './src/assets/logoExperiencia/DigitalWare.jpg';
import HN from './src/assets/logoExperiencia/HN.png';
import almaviva from './src/assets/logoExperiencia/almaviva.jpg';
import unad from './src/assets/logoExperiencia/unad.jpg';
import outsourcing from './src/assets/logoExperiencia/outsourcing.png';
import unipanamericana from './src/assets/logoExperiencia/unipanamericana.jpg';
import compensar from './src/assets/logoExperiencia/compensar.jpg';

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
      id: 1,
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
};

export default inicialState;
