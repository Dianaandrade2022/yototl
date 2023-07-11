import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent {
  services:any = [
    {name:'Yolselik: lecturas tiernas',desc:'Intervenciones culturales para la primera infancia y sus primeros cuidadores, para fomentar espacios flexibles de comunicación y exploración a través de diversos lenguajes, del arte, la música, el juego y la recreación.'},
    {name:'Oídos lectores, manos creadoras',desc:'A través de este proyecto se pretende crear laboratorios itinerantes, sustentados en los emprendimientos femeninos y comunidades juveniles y LGTBIQ+, fomentando la ayuda en materia de gestión emocional y autorrealización personal.'},
    {name:'Yolotl TV: Historias pregoneras',desc:'Intervenciones con la pantalla que cuenta y canta para fortalecer los lazos de pertenencia comunitaria y fomentar los derechos culturales a través de producciones audiovisuales diversas con flexibles posibilidades de implementación a partir de la duración, espacios y presupuesto disponibles.'},
  ]
}
