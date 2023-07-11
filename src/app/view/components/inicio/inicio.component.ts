import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  logo:string = "../../../../assets/img/yolotl.webp";
  imgs:Array<string> =[
    '../../../../assets/img/Banner1.png',
    '../../../../assets/img/Banner1.png',
    '../../../../assets/img/Banner1.png',
  ]
  }
