import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {

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
  constructor() { }

  ngOnInit() {
  }

}
