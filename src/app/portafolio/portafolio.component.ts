import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  public proyectosDesarrollo: any = [
    {
      titulo:"Aplicacion Undervisa",
      lenguaje: ['Angular', 'HTML', 'CSS', 'TypeScript'],
      video:'bb',
      descripcion:'Aplicacion realizada en PWA con Angular para enviar y administrar señales de forex',
      urlCodigo:'https://github.com/alejozepol/interfaz/tree/master/firstPips',
      urlProyecto:'https://fistpips.web.app/',
      imagen: '../../assets/appUndervisa.PNG'
    },
    {
      titulo:"Calculadora",
      lenguaje:[ 'Java'],
      video:'https://www.youtube.com/embed/NRfctAuYmaU',
      descripcion:'calculara desarollada en Java para converitr numeros enteros a base 2,8, 10 y 16',
      urlCodigo:'https://github.com/alejozepol/calculadora',
      imagen: '../../assets/calcularadora.PNG'
    },
    {
      titulo:"Curso de Email Marketing",
      lenguaje: ['Email Marketing', 'HTML', 'CSS', 'JavaScript', 'Adobe XD'],
      video:'',
      descripcion:'tres Camapañas dieñadas como proyecto personal para el envio de campaña del nuevo curso de platzi de Email Marketing',
      urlCodigo:'https://github.com/alejozepol/DisenoMaquetacionEmail',
      urlProyecto:'https://alejozepol.github.io/DisenoMaquetacionEmail/',
      imagen: '../../assets/emailMarketing.png'
    },
    {
      titulo:"PlatziSquers",
      lenguaje: ['Angular'],
      video:'',
      descripcion:'Plataforma diseña da en angular como proyecto personal como directorio de sitios inscritos con utilizacion de ubicación de google Map y desplegado en FireBase',
      urlCodigo:'https://github.com/alejozepol/PlatziSqueare',
      urlProyecto:'https://square-1554571264303.web.app',
      imagen: '../../assets/platziSqueare.PNG'
    },
    {
      titulo:"Juego Memoria",
      lenguaje:[ 'Angular'],
      video:'',
      descripcion:'Un juego de memoria de 10 niveles para recordar en que orden ilumina cada emogi',
      urlCodigo:'https://github.com/alejozepol/PruebaTuMemoria',
      urlProyecto:'https://juegoemogis.web.app/',
      imagen: '../../assets/juegoMemoria.PNG'
    },
    {
      titulo:"Mockats aplicacion undervisa",
      lenguaje: ['html', 'css', 'javaScript'],
      video:'',
      descripcion:'diseño de posibles pantallas para la aplicacion de Undervisa',
      urlCodigo:'https://github.com/alejozepol/interfaz/settings',
      urlProyecto:'https://alejozepol.github.io/interfaz/',
      imagen: '../../assets/mockupsUndervisa.PNG'
    },
    {
      titulo:"Incripcion equipo fulboll",
      lenguaje: ['angular'],
      video:'',
      descripcion:'Interfaz para la creacion de equipos y sus jugadores de manera asincronica',
      urlCodigo:'https://github.com/alejozepol/PruebaTuMemoria',
      urlProyecto:'https://github.com/alejozepol/proyectoTypeScript',
      imagen: '../../assets/inscripcionEquipoFutbol.PNG'
    },
    {
      titulo:"granja Aleatoria",
      lenguaje: ['JavaScript'],
      descripcion:'Por medio de javaScript cada vez ques e recarga la pagina muestra una cantidad diferentes de vacas',
      urlCodigo:'https://github.com/alejozepol/villaPlatzi/settings',
      imagen: '../../assets/villaPlatzi.PNG',
      urlProyecto:'https://alejozepol.github.io/villaPlatzi/'
    },
    {
      titulo:"formularios de más informacion",
      lenguaje: ['Email Marketing', 'javaScript', 'CSS', 'HTML'],
      video:'',
      descripcion:'Mediante la utilizacion del archivo de javascript se captura la información para envio de campañas de marketing',
      urlCodigo:'https://github.com/undervisa/FormularioInformacion',
      urlProyecto:'https://undervisa.github.io/FormularioInformacion/',
      imagen: '../../assets/formularioMasInformacion.PNG'
    },
    {
      titulo:"formularios de Incripcion",
      lenguaje: ['Email Marketing', 'javaScript', 'CSS', 'HTML'],
      video:'',
      descripcion:'Mediante una conexion con la base de datos de mailchimp se realiza la inscrion y redirecciona a la pasarela de pago .',
      urlCodigo:'http://inscripcion.undervisa.ga/',
      urlProyecto:'https://undervisa.github.io/FormularioInformacion/',
      imagen: '../../assets/formularioInscripcion.PNG'
    },
    {
      titulo:"Campaña Email Undervisa",
      lenguaje: ['Email Marketing', 'javaScript', 'CSS', 'HTML'],
      video:'',
      descripcion:'mediante varias campañas de correo se comunico al cliente el proposito de cada una de ellas.',
      urlCodigo:'https://github.com/undervisa/TemplateCorreos',
      urlProyecto:'',
      imagen: '../../assets/campañasEmail.PNG'
    },
    {
      titulo:"Presentacion de negocios Undervisa",
      lenguaje: ['javaScript', 'CSS', 'HTML'],
      video:'',
      descripcion:'Presentacion de negocios para undervisa Master Trader',
      urlCodigo:'https://github.com/undervisa/PresentacionDeNegocio',
      urlProyecto:'https://undervisa.ga/',
      imagen: '../../assets/PresentacionNegocioUndervisa.PNG'
    }

  ]



  constructor() {
   }

  ngOnInit() {
  }

}
