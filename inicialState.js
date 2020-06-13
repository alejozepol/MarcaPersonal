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
};

export default inicialState;
