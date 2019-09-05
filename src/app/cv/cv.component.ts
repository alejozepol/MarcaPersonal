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
    logo:'../assets/Undervisa.svg'
    },
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
  ]
  constructor() { }

  ngOnInit() {
  }

}
