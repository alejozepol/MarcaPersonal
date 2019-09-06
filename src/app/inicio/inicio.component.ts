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

servicios:any =[{
  titulo:'Auditorias',
  descripcion:'Presto servicios de autorias en nómina, seguridad social, contabilización de nomina o verificacion de procesos Gestión Humana',
  imagen:'../../assets/auditoria.jpg'
},{
  titulo:'Desarrollo Web',
  descripcion:'Elaboración de paginas web, presentaciones, e-commerce utilizando HTML5, CCS3, JavaScripts y framework como anguelar, bootstrap y otros mas',
  imagen:'../../assets/desarrolloWeb.jpg'
},
{
  titulo:'Nomina y seguridad social',
  descripcion:'administración y liquidación de nomina y/o seguridad social de pequeño y grande volumen con conocimientos en beneficios por convenciones colectivas o beneficios extralegales con la ley presente en 🇨🇴 Colombia',
  imagen:'../../assets/Nomina.jpg'
},
{
  titulo:'Reportes y liquidación UGPP',
  descripcion:'Presto servicios de informes, reportes, verificación y liquidación de requerimientos UGPP, generacion de planillas de correción',
  imagen:'../../assets/ugpp.png'
},
{
  titulo:'Soporte, mantenimiento o implementación en KACTUS HCM',
  descripcion:'Presto servicio como consultor o usuario lider del sistema KACTUS HCM desarrollado por DigitalWare en modulos de nomina y/o gestión humana',
  imagen:'../../assets/kactus.png'
},
{
  titulo:'Campañas de Email marketing',
  descripcion:'Mediante campañas de e-mail marketing podemos comunicarnos con nuestros clientes',
  imagen:'../../assets/emailMarketing.png'
}

]
  constructor() {

  }

  ngOnInit() {
  }


}
