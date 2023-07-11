import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  logo:string = "../../../../assets/img/yolotl.webp";
  rutas:Array<string> = [
    '/inicio',
    '/inicio#equipo',
    '/inicio#proyectos',
    '/inicio#servicios',
    '/inicio#aliados',
    '/inicio#contacto',
    '/login',
    '/inicio#noticias'
  ]
  varActual = window.location.pathname;
}
