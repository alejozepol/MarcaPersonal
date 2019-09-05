import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {

  experienciaLaboral:any =[
    {fechaInicio: 'Agosto/2018',
    fechaFin:'Julio/2019',
    cargo:'Co-fundador y CFO',
    empresa:'Undervisa Master Trade',
    actividad:[
      '-Planificación financiera',
      '-Administración de redes sociales',
      '-Elaboracion  de campañas de marketing',
      '-Elaboraciones de planes de Negocios',
      '-Desarrollo de web application PWA',
      '-Elaboracion y administracion de Paginas Web'
    ],
    logo:'../assets/Undervisa.svg'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
