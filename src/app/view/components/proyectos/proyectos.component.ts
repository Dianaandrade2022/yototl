import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent {
  imgs:any = [
    {img:'../../../../assets/img/1.jpg',name:'Itacate: Historias pa’ alegrarte',desc:'El itacate es una hermosa costumbre mexicana, cuando  vamos a una reunión con amigos o fiesta y, la comida está tan buena, que pedimos “itacate” para llevar y como no solo de pan vive el hombre, ni de tortilla el mexicano. Nos lanzamos a la aventura de seleccionar historias que hicieran sentir nuestro yolotl contento y las convertimos en audio relatos. Este proyecto de producción sonora busca divertir y  potenciar la imaginación de aquellos que leen con las orejas y alimentan su corazón con historias. '},
    {img:'../../../../assets/img/2.webp',name:'Medios digitales comunitarios',desc:'¿Cuántas maneras hay de desembrujar un castillo?, seguro muchas,  pero aquí comenzamos con un proyecto de creación literaria, arte digital y la memoria colectiva de “El Castillo”, actualmente Centro Cultural La Carmela, con el objetivo de escuchar las historias y perspectivas que poseen sus habitantes jóvenes. Se llevó a cabo un taller de escritura para ayudarles a aterrizar sus ideas y transformarlas en un producto narrativo, el cual se difunde por medio de tecnologías digitales que los mismos jóvenes aprendieron a utilizar.  '},
    {img:'../../../../assets/img/3.jpg',name:'Los otros cuentos, finales diversos',desc:'Es un proyecto que surge a partir del encuentro de distintas realidades, teniendo como punto de partida a las infancias y buscando generar conciencia en la comunidad sobre la diversidad de personas e ideas. A través de la literatura infantil y juvenil (LIJ), el arte, la música y la recreación, para así volverse creadores  conscientes de otros mundos posibles que den lugar  a la reflexión, potencien  la imaginación y favorezcan la cohesión social. '},
  ]
}
