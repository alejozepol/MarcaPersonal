import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {
 apiPlatzi = 'https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@Alejozepol'

 cursos:any = [
  {
    "id": 1230,
    "title": "Curso Básico de Photoshop",
    "badge": "https://static.platzi.com/media/achievements/1230-b90f9a3e-a148-40d2-aabd-76c57bf3dd76.png",
    "url": "/clases/photoshop-basico/",
    "career": "Diseño Gráfico",
    "diploma_link": "/@Alejozepol/curso/1230-photoshop-basico/diploma/detalle/"
  },
  {
    "id": 1400,
    "title": "Curso de Administración de Actividades con Trello",
    "badge": "https://static.platzi.com/media/achievements/1400-140d7631-f476-46cf-afa4-8368c9ecf340.png",
    "url": "/clases/trello/",
    "career": "Transformación Digital",
    "diploma_link": "/@Alejozepol/curso/1400-trello/diploma/detalle/"
  },
  {
    "id": 1125,
    "title": "Curso de Adobe XD",
    "badge": "https://static.platzi.com/media/achievements/1125-01cb7cec-bff1-48cf-a782-e0bcfd49b993.png",
    "url": "/clases/adobe-xd/",
    "career": "Diseño de Productos Digitales y UX",
    "diploma_link": "/@Alejozepol/curso/1125-adobe-xd/diploma/detalle/"
  },
  {
    "id": 1309,
    "title": "Curso de Business Model Canvas",
    "badge": "https://static.platzi.com/media/achievements/1309-25772f56-4753-489d-a3b5-8a432e9d4c1d.png",
    "url": "/clases/canvas/",
    "career": "Transformación Digital",
    "diploma_link": "/@Alejozepol/curso/1309-canvas/diploma/detalle/"
  },
  {
    "id": 1399,
    "title": "Curso de Comunicación Online con Slack",
    "badge": "https://static.platzi.com/media/achievements/badges-comunicacion-slack-a9bd2f28-82f2-4fef-8d67-6cec70724d94.png",
    "url": "/clases/slack/",
    "career": "Transformación Digital",
    "diploma_link": "/@Alejozepol/curso/1399-slack/diploma/detalle/"
  },
  {
    "id": 1044,
    "title": "Curso de Construcción de Marca",
    "badge": "https://static.platzi.com/media/achievements/badge_marcadigital.png",
    "url": "/clases/branding/",
    "career": "Ventas y Mercadeo",
    "diploma_link": "/@Alejozepol/curso/1044-branding/diploma/detalle/"
  },
  {
    "id": 1140,
    "title": "Curso de Diseño de Interfaces y UX",
    "badge": "https://static.platzi.com/media/achievements/badge-diseno-interfaces-ux-f4591d4c-0fda-4e3b-bbbb-38bb0a61e724.png",
    "url": "/clases/diseno-interfaces-ux/",
    "career": "Diseño de Interfaces (UI)",
    "diploma_link": "/@Alejozepol/curso/1140-diseno-interfaces-ux/diploma/detalle/"
  },
  {
    "id": 1048,
    "title": "Curso de Diseño Visual de Marcas",
    "badge": "https://static.platzi.com/media/achievements/1048-deb8fc9e-d28a-4582-8cdd-53c49578579a.png",
    "url": "/clases/marca-visual/",
    "career": "Diseño Gráfico",
    "diploma_link": "/@Alejozepol/curso/1048-marca-visual/diploma/detalle/"
  },
  {
    "id": 1470,
    "title": "Curso de Diseño y Maquetación para Emails",
    "badge": "https://static.platzi.com/media/achievements/badge-html-css-email-0306f75d-b180-4ccd-996a-b0768001d2f1.png",
    "url": "/clases/diseno-email/",
    "career": "Email Marketing",
    "diploma_link": "/@Alejozepol/curso/1470-diseno-email/diploma/detalle/"
  },
  {
    "id": 1322,
    "title": "Curso de Email Marketing",
    "badge": "https://static.platzi.com/media/achievements/1322-8d6d1875-22a4-4690-9cc5-7cd58654ebfa.png",
    "url": "/clases/email-marketing/",
    "career": "Email Marketing",
    "diploma_link": "/@Alejozepol/curso/1322-email-marketing/diploma/detalle/"
  },
  {
    "id": 1130,
    "title": "Curso de Illustrator",
    "badge": "https://static.platzi.com/media/achievements/1130-5d671f11-65d0-42dc-8f5c-b8536389cd7d.png",
    "url": "/clases/illustrator/",
    "career": "Diseño Gráfico",
    "diploma_link": "/@Alejozepol/curso/1130-illustrator/diploma/detalle/"
  },
  {
    "id": 1345,
    "title": "Curso de Ilustración Digital con Vectores",
    "badge": "https://static.platzi.com/media/achievements/1345-f01b1eb4-0d9c-404c-835d-6c0efca01b2e.png",
    "url": "/clases/ilustracion-illustrator/",
    "career": "Diseño Gráfico",
    "diploma_link": "/@Alejozepol/curso/1345-ilustracion-illustrator/diploma/detalle/"
  },
  {
    "id": 1268,
    "title": "Curso de PWA con Angular",
    "badge": "https://static.platzi.com/media/achievements/1268-63ffe8e5-ef4a-4906-974a-204f15d0e1be.png",
    "url": "/clases/pwa-angular/",
    "career": "Desarrollo con Angular",
    "diploma_link": "/@Alejozepol/curso/1268-pwa-angular/diploma/detalle/"
  },
  {
    "id": 1277,
    "title": "Curso de Redes de Internet",
    "badge": "https://static.platzi.com/media/achievements/1277-9358e87f-0435-48a4-b158-3d6bde87bca0.png",
    "url": "/clases/redes/",
    "career": "Fundamentos de Programación",
    "diploma_link": "/@Alejozepol/curso/1277-redes/diploma/detalle/"
  },
  {
    "id": 1272,
    "title": "Curso de SQL y MySQL",
    "badge": "https://static.platzi.com/media/achievements/1272-15ff4836-0221-4001-b945-5cf34bd65bab.png",
    "url": "/clases/sql-mysql/",
    "career": "Bases de Datos",
    "diploma_link": "/@Alejozepol/curso/1272-sql-mysql/diploma/detalle/"
  },
  {
    "id": 1321,
    "title": "Curso de Transformación Digital para Empresas",
    "badge": "https://static.platzi.com/media/achievements/1321-67f2b04c-1735-4813-8d39-4c943932b7de.png",
    "url": "/clases/transforma-digital/",
    "career": "Negocios Online",
    "diploma_link": "/@Alejozepol/curso/1321-transforma-digital/diploma/detalle/"
  },
  {
    "id": 1058,
    "title": "Curso Gratis de Marketing Voz a Voz",
    "badge": "https://static.platzi.com/media/achievements/badgeWOM.png",
    "url": "/clases/marketing-voz/",
    "career": "Fundamentos Básicos",
    "diploma_link": "/@Alejozepol/curso/1058-marketing-voz/diploma/detalle/"
  },
  {
    "id": 1050,
    "title": "Curso Gratis de Programación Básica",
    "badge": "https://static.platzi.com/media/achievements/1050-bfb74f83-8e2e-4ff7-a66d-77d2c0067908.png",
    "url": "/clases/programacion-basica/",
    "career": "Marketing Basado en Datos",
    "diploma_link": "/@Alejozepol/curso/1050-programacion-basica/diploma/detalle/"
  },
  {
    "id": 6,
    "title": "Excel Avanzado",
    "badge": "../assets/SENA.png",
    "url": "",
    "career": "EXCEL",
    "diploma_link": "",
    "instituto": "SENA"
  },
  {
    "id": 1248,
    "title": "Curso Profesional de Arquitectura de Software",
    "badge": "https://static.platzi.com/media/achievements/1248-8cdbdf8f-aaa1-4752-91c9-13083dab983e.png",
    "url": "/clases/pro-arquitectura/",
    "career": "Fundamentos de Programación",
    "diploma_link": "/@Alejozepol/curso/1248-pro-arquitectura/diploma/detalle/"
  },
  {
    "id": 1170,
    "title": "Curso profesional de Git y GitHub 2017",
    "badge": "https://static.platzi.com/media/achievements/badge-github-c53a39e6-772b-4e41-b3c4-223bb252fbd6.png",
    "url": "/clases/git-github-2017/",
    "career": "Apple Fullstack Developer",
    "diploma_link": "/@Alejozepol/curso/1170-git-github-2017/diploma/detalle/"
  },
  {
    "id": 18,
    "title": "Curso profesional de Git y GitHub 2019",
    "badge": "https://static.platzi.com/media/achievements/badge-github-c53a39e6-772b-4e41-b3c4-223bb252fbd6.png",
    "url": "/clases/git-github-2017/",
    "career": "Apple Fullstack Developer",
    "diploma_link": "https://platzi.com/@Alejozepol/curso/1557-git-github/diploma/detalle/"
  },
  {
    "id": 1247,
    "title": "Fundamentos de Arquitectura de Software",
    "badge": "https://static.platzi.com/media/achievements/1247-4f5b5d04-4b56-4e64-bec2-db8fe3c0aa18.png",
    "url": "/clases/arquitectura-software/",
    "career": "Fundamentos de Programación",
    "diploma_link": "/@Alejozepol/curso/1247-arquitectura-software/diploma/detalle/"
  },
  {
    "id": 1098,
    "title": "Fundamentos de Ingeniería de Software",
    "badge": "https://static.platzi.com/media/achievements/badge-ing-software-2017-18f503fd-36bd-42d8-b1a1-492865659687.png",
    "url": "/clases/ingenieria/",
    "career": "Fundamentos de Programación",
    "diploma_link": "/@Alejozepol/curso/1098-ingenieria/diploma/detalle/"
  },
  {
    "id": 1339,
    "title": "Fundamentos de JavaScript",
    "badge": "https://static.platzi.com/media/achievements/1339-4758a361-95c0-4e7b-b246-c95cb83db5ce.png",
    "url": "/clases/fundamentos-javascript/",
    "career": "Desarrollo con JavaScript",
    "diploma_link": "/@Alejozepol/curso/1339-fundamentos-javascript/diploma/detalle/"
  },
  {
    "id": 5,
    "title": "Actualizacion del Sistema de seguridad social integral",
    "badge": "../assets/SENA.png",
    "url": "",
    "career": "",
    "diploma_link": "",
    "instituto": "SENA"
  },
  {
    "id": 1186,
    "title": "Introducción a la Creación de Empresas y Startups",
    "badge": "https://static.platzi.com/media/achievements/1186-0cbf6899-eeb8-4b9e-9bf9-a55a004e4307.png",
    "url": "/clases/creacion-de-empresas/",
    "career": "Creación de Startups",
    "diploma_link": "/@Alejozepol/curso/1186-creacion-de-empresas/diploma/detalle/"
  },
  {
    "id": 1228,
    "title": "Introducción al Diseño",
    "badge": "https://static.platzi.com/media/achievements/1228-16a010ab-8b53-43b2-8819-8a552ad16e12.png",
    "url": "/clases/fundamentos-diseno/",
    "career": "Diseño Gráfico",
    "diploma_link": "/@Alejozepol/curso/1228-fundamentos-diseno/diploma/detalle/"
  },
  {
    "id": 1,
    "title": "Diplomado seguridad social y legislación Laboral",
    "badge": "../assets/Ucatolica.png",
    "url": "",
    "career": "SGSS",
    "diploma_link": "",
    "instituto": "Universidad Catolica de Colombia"
  },
  {
    "id": 2,
    "title": "Contabilidad Básica I y II",
    "badge": "../assets/SENA.png",
    "url": "",
    "career": "",
    "diploma_link": "",
    "instituto": "SENA"
  },
  {
    "id": 3,
    "title": "Calidad en el desarollo de software",
    "badge": "../assets/SENA.png",
    "url": "",
    "career": "",
    "diploma_link": "",
    "instituto": "SENA"
  },
  {
    "id": 4,
    "title": "Modelo de calidad de software",
    "badge": "../assets/SENA.png",
    "url": "",
    "career": "",
    "diploma_link": "",
    "instituto": "SENA"
  },
  {
    "id": 10,
    "title": "Curso de Angular 4",
    "badge": "https://static.platzi.com/media/achievements/1153-db3c9f0a-b36b-435e-aa50-7f4aa7f9d264.png",
    "url": "",
    "career": "Desarrollo con JavaScript",
    "diploma_link": "https://platzi.com/@Alejozepol/curso/1153-angular/diploma/detalle/"
  },
  {
    "id": 11,
    "title": "Curso de Bootstrap",
    "badge": "https://static.platzi.com/media/achievements/1331-cda68a62-24e5-464a-95ca-6e5d339c7244.png",
    "url": "",
    "career": "Arquitectura Frontend",
    "diploma_link": "https://platzi.com/@Alejozepol/curso/1331-bootstrap/diploma/detalle/"
  },
  {
    "id": 12,
    "title": "Curso de Desarrollo Web Online",
    "badge": "https://static.platzi.com/media/achievements/1350-09ddb033-354b-4c0c-84a4-56cbb71d0b08.png",
    "url": "",
    "career": "Arquitectura Frontend",
    "diploma_link": "https://platzi.com/@Alejozepol/curso/1350-html5-css3/diploma/detalle/"
  },
  {
    "id": 20,
    "title": "Curso de Desarrollo Web Online 2016",
    "badge": "https://static.platzi.com/media/achievements/1350-09ddb033-354b-4c0c-84a4-56cbb71d0b08.png",
    "url": "",
    "career": "Arquitectura Frontend",
    "diploma_link": "https://platzi.com/@Alejozepol/curso/1034-html5-css3-2016/diploma/detalle/"
  },
  {
    "id": 13,
    "title": "Curso de Estrategia y Creación de Contenido Digital",
    "badge": "https://static.platzi.com/media/achievements/badges-contenidos-digitales-82cb6788-520c-48c4-9e1e-98fb0e5e40ba.png",
    "url": "",
    "career": "Producción de Video",
    "diploma_link": "https://platzi.com/@Alejozepol/curso/1481-contenidos-digitales/diploma/detalle/"
  },
  {
    "id": 14,
    "title": "Curso de Firebase para Web",
    "badge": "https://static.platzi.com/media/achievements/badge-firebase-web-441f64cc-bedf-4aea-937d-e2f413f2d96d.png",
    "url": "",
    "career": "Firebase",
    "diploma_link": "https://platzi.com/@Alejozepol/curso/1435-firebase-web/diploma/detalle/"
  },
  {
    "id": 15,
    "title": "Curso de HTML y CSS",
    "badge": "https://static.platzi.com/media/achievements/badges-html-css-b0a71550-d5e7-4e27-aca2-f09f1321a517.png",
    "url": "",
    "career": "Arquitectura Frontend",
    "diploma_link": "https://platzi.com/@Alejozepol/curso/1492-html-css/diploma/detalle/"
  },
  {
    "id": 16,
    "title": "Curso de Introducción al Marketing Digital",
    "badge": "https://static.platzi.com/media/achievements/1328-bdfaf9ae-05e1-44c3-9c14-fccbb491a7d3.png",
    "url": "",
    "career": "Marketing",
    "diploma_link": "https://platzi.com/@Alejozepol/curso/1328-introduccion-marketing/diploma/detalle/"
  },
  {
    "id": 17,
    "title": "Curso básico de Java 2015",
    "badge": "https://static.platzi.com/media/achievements/badge-Java-basico-2017.png",
    "url": "",
    "career": "JAVA",
    "diploma_link": "https://platzi.com/@Alejozepol/curso/1004-java-basico-2015/diploma/detalle/"
  },
  {
    "id": 19,
    "title": "Fundamentos de Bases de Datos 2017",
    "badge": "https://static.platzi.com/media/achievements/1183-4a1fb0f2-00d0-4ef3-ac49-bfd2f651531d.png",
    "url": "",
    "career": "Bases de datos",
    "diploma_link": "https://platzi.com/@Alejozepol/curso/1183-bd-2017/diploma/detalle/"
  },
  {
    "id": 21,
    "title": "Curso de PostgreSQL 2017",
    "badge": "https://static.platzi.com/media/achievements/100-aa73b9eb-3205-4baf-9af6-dc9c80e7ee9c.png",
    "url": "",
    "career": "Arquitectura Frontend",
    "diploma_link": "https://platzi.com/@Alejozepol/curso/100-postgresql-2017/diploma/detalle/"
  }
]

carreras:any = [{
  titulo:'Técnico Contabilidad y Finanza',
  entidad: 'Servicio Nacional de Aprendizaje SENA',
  logo: '../../assets/SENA.png'
},
{
  titulo: 'Técnologo Analisis y desarrollo de software',
  entidad: 'Servicio Nacional de Aprendizaje SENA',
  logo: '../../assets/SENA.png'
},
{
  titulo: 'Carrera en Email Marketing',
  entidad: 'Platzi',
  logo: '../../assets/goldenBD.svg'
},
{
  titulo: 'Carrera en Fundamentos de Programación',
  entidad: 'Platzi',
  logo: '../../assets/goldenPB.svg'
},
{
  titulo: 'Carrera en Diseño Grafico',
  entidad: 'Platzi',
  logo: '../../assets/goldenDG.svg'
}]

  experienciaLaboral:any =[
    {empresa:'Undervisa Master Trade',
      fechaInicio: 'Agosto/2018',
    fechaFin:'Julio/2019',
    cargo:'Co-fundador y CFO',
    actividad:[
      '-Planificación financiera',
      '-Administración de redes sociales',
      '-Elaboracion  de campañas de marketing',
      '-Elaboraciones de planes de Negocios',
      '-Desarrollo de web application PWA',
      '-Elaboracion y administracion de Paginas Web'
    ],
    logo:'../assets/Undervisa.svg'
    },
    {empresa:'Freelancer',
      fechaInicio: 'Noviembre/2014',
    fechaFin:'Marzo/2019',
    cargo:'Consultor Kactus HCM',
    actividad:[
      '-Proyectos de soporte e implementación de Kactus HCM (nomina y RRHH)',
      '-Elaboración de reportes SQL y Kactus Report ',
      '-Asesorías en legislación laboral',
      '-Elaboración informes de UGPP y liquidacion de planillas de correcion',
      '-Auditorias Nomina ',
      '-Liquidación de nomina y seguridad sociales',
      '-Interfaz contable',
      '-Optimización de procesos '
    ],
    logo:'../assets/LogoRedondo.svg'
    },
    {empresa:'DigitalWare',
      fechaInicio: 'Abril/2014',
    fechaFin:'Octubre/2014',
    cargo:'Consultor Senior Kactus HCM',
    actividad:[
      '-Soporte Técnico y funcional',
      '-Atención casos clientes',
      '-Replicas Errores',
      '-Calidad Producto',
      '-Consulta en todos los motores' ,
      '-Consulta, capacitación y soporte a clientes y consultores',
      '-Implementación aplicació'
    ],
    logo:'../assets/DigitalWare.jpg'
    },
    {empresa:'Heinsohn Business Tecnology',
      fechaInicio:  'Abril/2013',
      fechaFin:     'Febrero/2014',
      cargo:'Ingeniero y Líder de Soporte',
      actividad:[
        '-Lider Soporte',
        '-Soporte técnico y funcional',
        '-Atención casos clientes',
        '-Documentación Casos Pruebas',
        '-Generación de scripts y consulta Bases de datos',
        '-Consulta, capacitación y soporte a consultores',
        '-Implementación aplicación',
        '-Diseño Nuevos casos de uso'
      ],
      logo:'../assets/HN.png'
    },
    {empresa:'Almaviva S.A.',
    cargo:'Usuario Lider Kactus HR',
    fechaInicio:  'Febrero/2012',
    fechaFin:     'Abril/2013',
    actividad:[
      '-Liquidación, pago de Nómina y Seguridad Social',
      '-Reimplantación módulos Gestión Humana y Nomina KACTUS',
      '-Interfaz Kactus -> Seven',
      '-Instalación kactus ORACLE e INFORMIX',
      '-Migración base de datos de INFORMIX -> ORACLE',
      '-Soporte primer y segundo nivel',
      '-Atención empleados casos nomina',
      '-Parametrización para pago convención colectiva de trabajo',
      '-Creacion de reportes Kactus'
    ],
    logo:'../assets/almaviva.jpg'
  },
  {empresa:'Univerisidad Nacional Abierta y a Distancia UNAD.',
  cargo:'Contratista Kactus HR y seguridad social',
  fechaInicio:  'Julio/2010',
  fechaFin:     'Septiembre/2011',
  actividad:[
    '-Liquidación, pago de Nómina y Seguridad Social',
    '-Generacion de CDP y distribución de costos',
    '-Administración Base de datos Kactus',
    '-Actualización ServicePack',
    '-Soporte primer y segundo nivel',
    '-Atención empleados casos nomina',
    '-Creacion de reportes Kactus'
  ],
  logo:'../assets/unad.jpg'
},
{empresa:'Outsourcing Servicios Informaticos SA.',
cargo:'Analista Nómina',
fechaInicio:  'Marzo/2010',
fechaFin:     'Julio/2010',
actividad:[
  '-Liquidación, pago de Nómina y Seguridad Social',
  '-Actualización ServicePack',
  '-Soporte primer',
  '-Ingreso de novedades',
  '-Atención empleados casos nomina',
],
logo:'../assets/outsourcing.png'
},
{empresa:'Fundación Universitaria Panamericana - Compensar',
cargo:'Gestor de gestión humana',
fechaInicio:  'Noviembre/2008',
fechaFin:     'Agosto/2009',
actividad:[
  '-Liquidación, pago de Nómina y Seguridad Social',
  '-Bienestar de personal',
  '-Salud Ocupacional',
  '-Ingreso de novedades',
  '-Atención empleados casos nomina',
],
logo:'../assets/unipanamericana.jpg'
},
{empresa:'Compensar',
cargo:'Auxiliar técnologia',
fechaInicio:  'Marzo/2009',
fechaFin:     'Septiembre/2009',
actividad:[
  '-Atención clientes, externo e interno',
  '-Atención Proveedores',
  '-Solicitud pedidos Consumos',
  '-Solicitud pedidos activos Fijos',
  '-control manejo salida de activos fijos y elementos',
  '-registro novedades de nomina'
],
logo:'../assets/compensar.jpg'
},
{empresa:'Compensar',
cargo:'Aprendiz SENA Gestión Humana',
fechaInicio:  'Junio/2007',
fechaFin:     'Marzo/2009',
actividad:[
  '-Liquidador de Nomina Empresas Temporales (Aprox. 250 Pers.)',
  '-Tramitador de Seguridad Social colaboradores COMPENSAR',
  '-pago proveedores',
  '-Atención Colaboradores inquietudes de Seguridad Socia',
  '-Apoyo atención inquietudes de liquidación nomina y seguridad social',
  '-Archivo'
],
logo:'../assets/compensar.jpg'
},
  ]
  constructor() {

  }

  ngOnInit() {
  }

}
