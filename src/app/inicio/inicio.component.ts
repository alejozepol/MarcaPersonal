import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public areasConocimiento:any =[{
    id:'RRHH',
    nombre: `Legislación Laboral,
    Nómina y
    gestión Humana` ,
    imagen: '../assets/NominaYGestionHumana.svg'
  },
{
  id: 'BD',
  nombre: `Bases de Datos` ,
  imagen: '../assets/BasesDeDatos.svg'
},
{
  id: 'Kactus',
  nombre: `kactus HCM` ,
  imagen: '../assets/kactus.svg'
},
{
  id: 'ME',
  nombre: `Email Marketing` ,
  imagen: '../assets/EMarketing.svg'
},
{
  id: 'Fronend',
  nombre: `Desarrollo Fronent` ,
  imagen: '../assets/web.svg'
},
{
  id: 'Photoshop',
  nombre: `Adobe Photoshop` ,
  imagen: '../assets/ps.svg'
},
{
  id: 'Ilustrator',
  nombre: `Adobe Ilustrator` ,
  imagen: '../assets/ai.svg'
},
{
  id: 'XD',
  nombre: `Adobe XD` ,
  imagen: '../assets/XD.svg'
},
{
  id: 'Excel',
  nombre: `Office Excel` ,
  imagen: '../assets/excel.svg'
}

]

  constructor() {

  }

  ngOnInit() {
  }


}
