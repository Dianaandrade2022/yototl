import { Component } from '@angular/core';

@Component({
  selector: 'app-aliados',
  templateUrl: './aliados.component.html',
  styleUrls: ['./aliados.component.scss']
})
export class AliadosComponent {
  aliados:any = [
    {id:1,name:'Vindeya ',img:'../../../../assets/img/aliados/1.jpg',link:'https://www.instagram.com/vindeyaanalitica/'},
    {id:2,name:'Manyfesto Producciones',img:'../../../../assets/img/aliados/2.jpg',link:'https://www.instagram.com/manyfesto_producciones/'},
    {id:3,name:'Fortune cookie',img:'../../../../assets/img/aliados/3.jpg',link:'https://www.instagram.com/fortunecookie.studio/'},
    {id:4,name:'ARCA',img:'../../../../assets/img/aliados/4.jpg',link:'https://www.instagram.com/lanietov/'}
  ]
}
