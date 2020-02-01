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

const home = {
  areaInteres: [
    {
      id: 'RRHH',
      nombre: 'Legislación Laboral, Nómina y Gestión Humana',
      imagen: iconRRHH,
    },
    {
      id: 'BD',
      nombre: 'Bases de Datos',
      imagen: iconBD,
    },
    {
      id: 'Kactus',
      nombre: 'kactus HCM',
      imagen: iconKactus,
    },
    {
      id: 'ME',
      nombre: 'Email Marketing',
      imagen: iconEM,
    },
    {
      id: 'Fronend',
      nombre: 'Desarrollo Fronent',
      imagen: iconFronend,
    },
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
      id: 'Excel',
      nombre: 'Office Excel',
      imagen: iconExcel,
    },
  ],
  hero: {
    img: imagenHero,
    saludo: '¡Hola! soy',
    title: 'Alejandro López Ramírez',
    texto: 'Desarrollador full stack JavaScript con Node.js y Consultor de Nómina y Gestión Humana con amplios conocimientos en el ERP Kactus y con mucha pasión por nunca aprender',

  }
};

export default home;
