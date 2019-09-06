import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  public proyectosDesarrollo: any = [{
      titulo:"Calculadora",
      lenguaje: 'Java',
      video:'https://www.youtube.com/embed/NRfctAuYmaU',
      descripcion:'calculara desarollada en Java para converitr numeros enteros a base 2,8, 10 y 16',
      urlCodigo:'https://github.com/alejozepol/calculadora'
    },
    {
      titulo:"granja Aleatoria",
      lenguaje: 'JavaScript',
      video:'',
      descripcion:'Dando click en la imagen la cantidad de animales cambia',
      urlCodigo:''
    },
    {
      titulo:"Nuevo Curso de Email Marketing",
      lenguaje: 'Email Marketing',
      video:'',
      descripcion:'tres Camapañas dieñadas como proyecto personal para el envio de campaña del nuevo curso de platzi de Email Marketing',
      urlCodigo:'https://github.com/alejozepol/DisenoMaquetacionEmail',
      urlProyecto:''
    },
    {
      titulo:"PlatziSquers",
      lenguaje: 'Angular',
      video:'',
      descripcion:'Plataforma diseña da en angular como proyecto personal como directorio de sitios inscritos con utilizacion de ubicación de google Map y desplegado en FireBase',
      urlCodigo:''
    },
    {
      titulo:"Juego Memoria",
      lenguaje: 'Angular',
      video:'',
      descripcion:'',
      urlCodigo:'https://github.com/alejozepol/PruebaTuMemoria',
      urlProyecto:''
    },
    {
      titulo:"Mockats aplicacion undervisa",
      lenguaje: ['html', 'css', 'javaScript'],
      video:'',
      descripcion:'diseño de posibles pantallas para la aplicacion de Undervisa',
      urlCodigo:'https://github.com/alejozepol/PruebaTuMemoria',
      urlProyecto:''
    },
    {
      titulo:"Incripcion equipo fulboll",
      lenguaje: ['angular'],
      video:'',
      descripcion:'Interfaz para la creacion de equipos y sus jugadores de manera asincronica',
      urlCodigo:'https://github.com/alejozepol/PruebaTuMemoria',
      urlProyecto:''
    },
        {
      titulo:"Incripcion equipo fulboll",
      lenguaje: ['angular'],
      video:'',
      descripcion:'Interfaz para la creacion de equipos y sus jugadores de manera asincronica',
      urlCodigo:'https://github.com/alejozepol/PruebaTuMemoria',
      urlProyecto:''
    },
    {
      titulo:"formularios de incripcion",
      lenguaje: ['Email Marketing', 'javaScript', 'CSS', 'HTML'],
      video:'',
      descripcion:'Mediante la utilizacion del archivo de javascript suministrado por mailchimnp se diseñar y conecto la informacion suministrada por el usuario en los dos funcionarios a las diferentes lista para envio de campañas de correo electronico.',
      urlCodigo:'https://github.com/alejozepol/PruebaTuMemoria',
      urlProyecto:''
    },
    {
      titulo:"Campaña undervisa 1",
      lenguaje: ['Email Marketing', 'javaScript', 'CSS', 'HTML'],
      video:'',
      descripcion:'Mediante la utilizacion del archivo de javascript suministrado por mailchimnp se diseñar y conecto la informacion suministrada por el usuario en los dos funcionarios a las diferentes lista para envio de campañas de correo electronico.',
      urlCodigo:'https://github.com/alejozepol/PruebaTuMemoria',
      urlProyecto:''
    },
    {
      titulo:"Campaña undervisa 2",
      lenguaje: ['Email Marketing', 'javaScript', 'CSS', 'HTML'],
      video:'',
      descripcion:'Mediante la utilizacion del archivo de javascript suministrado por mailchimnp se diseñar y conecto la informacion suministrada por el usuario en los dos funcionarios a las diferentes lista para envio de campañas de correo electronico.',
      urlCodigo:'https://github.com/alejozepol/PruebaTuMemoria',
      urlProyecto:''
    },
    {
      titulo:"Campaña undervisa 3",
      lenguaje: ['Email Marketing', 'javaScript', 'CSS', 'HTML'],
      video:'',
      descripcion:'Mediante la utilizacion del archivo de javascript suministrado por mailchimnp se diseñar y conecto la informacion suministrada por el usuario en los dos funcionarios a las diferentes lista para envio de campañas de correo electronico.',
      urlCodigo:'https://github.com/alejozepol/PruebaTuMemoria',
      urlProyecto:''
    },
    {
      titulo:"Presentacion de negocios Undervisa",
      lenguaje: ['javaScript', 'CSS', 'HTML'],
      video:'',
      descripcion:'Mediante la utilizacion del archivo de javascript suministrado por mailchimnp se diseñar y conecto la informacion suministrada por el usuario en los dos funcionarios a las diferentes lista para envio de campañas de correo electronico.',
      urlCodigo:'https://github.com/alejozepol/PruebaTuMemoria',
      urlProyecto:''
    },
    {
      titulo:"Parqueadero",
      lenguaje: ['Java'],
      video:'',
      descripcion:'',
      urlCodigo:'https://github.com/alejozepol/PruebaTuMemoria',
      urlProyecto:''
    },
    {
      titulo:"SIPRE",
      lenguaje: ['Java'],
      video:'',
      descripcion:'Proyecto realizado en java como formacion academica el cual ayuda a administrar los auxilios por convencion colectiva de trabajo controlando presupuesto, otorgacion y requisitos',
      urlCodigo:'https://github.com/alejozepol/PruebaTuMemoria',
      urlProyecto:''
    }
  ]



  constructor() {
   }

  ngOnInit() {
  }

}
