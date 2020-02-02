import iconRRHH from './assets/static/icons/NominaYGestionHumana.svg';
import iconBD from './assets/static/icons/BasesDeDatos.svg';
import iconKactus from './assets/static/icons/kactus.svg';
import iconEM from './assets/static/icons/EMarketing.svg';
import iconFronend from './assets/static/icons/web.svg';
import iconPS from './assets/static/icons/ps.svg';
import iconAI from './assets/static/icons/ai.svg';
import iconXD from './assets/static/icons/XD.svg';
import iconExcel from './assets/static/icons/excel.svg';
import imagenHero from './assets/static/FondoHero.png';
import imgAuth from './assets/static/auditoria.jpg';
import imgDev from './assets/static/desarrolloWeb.jpg';
import imgNomina from './assets/static/Nomina.jpg';
import imgUGPP from './assets/static/ugpp.png';
import imgKactus from './assets/static/kactus.png';
import imgEM from './assets/static/emailMarketing.png';

const home = {
  areaInteres: [
    {
      id: 'RRHH',
      nombre: 'Legislación Laboral, Nómina y Gestión Humana',
      imagen: iconRRHH,
    },
    {
      id: 'Git',
      nombre: 'Git',
      imagen: iconExcel,
    },
    {
      id: 'BD',
      nombre: 'Bases de Datos',
      imagen: iconBD,
    },
    {
      id: 'ME',
      nombre: 'Email Marketing',
      imagen: iconEM,
    },
    {
      id: 'ui',
      nombre: 'UI / UX',
      imagen: iconFronend,
    },
    {
      id: 'Procesos',
      nombre: 'Optimización de procesos',
      imagen: iconFronend,
    },
    {
      id: 'Frontend',
      nombre: 'Desarrollo Software',
      imagen: iconFronend,
    },
  ],
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
      imagen: iconXD,
    },
    {
      id: 'CSS',
      nombre: 'CSS',
      imagen: iconXD,
    },
    {
      id: 'SASS',
      nombre: 'SASS preprocesador CSS',
      imagen: iconXD,
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
      imagen: iconExcel,
    },
    {
      id: 'GitLab',
      nombre: 'GitLab',
      imagen: iconExcel,
    },
    {
      id: 'React',
      nombre: 'React JS',
      imagen: iconExcel,
    },
    {
      id: 'Angular',
      nombre: 'GitLab',
      imagen: iconExcel,
    },
    {
      id: 'MSSQL',
      nombre: 'SQL Server',
      imagen: iconExcel,
    },
    {
      id: 'MySql',
      nombre: 'MySQL',
      imagen: iconExcel,
    },
    {
      id: 'Oracle',
      nombre: 'Oracle',
      imagen: iconExcel,
    },
    {
      id: 'JavaScript',
      nombre: 'JavaScript',
      imagen: iconExcel,
    },
    {
      id: 'NodeJS',
      nombre: 'NodeJS',
      imagen: iconExcel,
    },
  ],
  servicios: [
    {
      id: 1,
      titulo: 'Auditorias',
      descripcion: 'Presto servicios de autorias en nómina, seguridad social, contabilización de nomina o verificacion de procesos Gestión Humana',
      imagen: imgAuth,
    },
    {
      id: 2,
      titulo: 'Desarrollo Web',
      descripcion: 'Elaboración de paginas web, presentaciones, e-commerce utilizando HTML5, CCS3, JavaScripts y framework como anguelar, bootstrap y otros mas',
      imagen: imgDev,
    },
    {
      id: 3,
      titulo: 'Nomina y seguridad social',
      descripcion: 'administración y liquidación de nomina y/o seguridad social de pequeño y grande volumen con conocimientos en beneficios por convenciones colectivas o beneficios extralegales con la ley presente en 🇨🇴 Colombia',
      imagen: imgNomina,
    },
    {
      id: 4,
      titulo: 'Reportes y liquidación UGPP',
      descripcion: 'Presto servicios de informes, reportes, verificación y liquidación de requerimientos UGPP, generacion de planillas de correción',
      imagen: imgUGPP,
    },
    {
      id: 5,
      titulo: 'Soporte, mantenimiento o implementación en KACTUS HCM',
      descripcion: 'Presto servicio como consultor o usuario lider del sistema KACTUS HCM desarrollado por DigitalWare en modulos de nomina y/o gestión humana',
      imagen: imgKactus,
    },
    {
      id: 6,
      titulo: 'Campañas de Email marketing',
      descripcion: 'Mediante campañas de e-mail marketing podemos comunicarnos con nuestros clientes',
      imagen: imgEM,
    },
  ],
  hero: {
    img: imagenHero,
    saludo: '¡Hola! soy',
    title: 'Alejandro López Ramírez',
    texto: 'Desarrollador full stack JavaScript con Node.js y Consultor de Nómina y Gestión Humana con amplios conocimientos en el ERP Kactus y con mucha pasión por nunca aprender',

  },
};

export default home;
