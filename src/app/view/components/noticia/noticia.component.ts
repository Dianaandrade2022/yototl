import { Component } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss']
})
export class NoticiaComponent {
  logo:string = "../../../../assets/img/yolotl.webp";
  lista:any = [
    {url: '/admin/noticias', icon:'bi bi-newspaper me-2', name:'Noticias'},
    {url: '/admin/noticias/crear', icon:'bi bi-patch-plus-fill me-2', name:'Agregar'},
    // {url: 'admin/noticias/modificar', icon:'bi bi-cloud-upload-fill me-2', name:''},/
  ]
  noticias:any = [
    {_id:1, img:'https://media.istockphoto.com/id/938753602/vector/vector-news-icon-newspaper-news.jpg?s=612x612&w=0&k=20&c=WKbMQma_pZ9NbSZKLSZMVI02IesFz9UkMl6qBaHMTj4=', title:'titulo 1', autor:'autor 1', date: 'yyyy-mm-dd'},
    {_id:2, img:'https://media.istockphoto.com/id/938753602/vector/vector-news-icon-newspaper-news.jpg?s=612x612&w=0&k=20&c=WKbMQma_pZ9NbSZKLSZMVI02IesFz9UkMl6qBaHMTj4=', title:'titulo 2', autor:'autor 2', date: 'yyyy-mm-dd'},
    {_id:3, img:'https://media.istockphoto.com/id/938753602/vector/vector-news-icon-newspaper-news.jpg?s=612x612&w=0&k=20&c=WKbMQma_pZ9NbSZKLSZMVI02IesFz9UkMl6qBaHMTj4=', title:'titulo 3', autor:'autor 3', date: 'yyyy-mm-dd'},
    {_id:4, img:'https://media.istockphoto.com/id/938753602/vector/vector-news-icon-newspaper-news.jpg?s=612x612&w=0&k=20&c=WKbMQma_pZ9NbSZKLSZMVI02IesFz9UkMl6qBaHMTj4=', title:'titulo 4', autor:'autor 4', date: 'yyyy-mm-dd'},
    {_id:4, img:'https://media.istockphoto.com/id/938753602/vector/vector-news-icon-newspaper-news.jpg?s=612x612&w=0&k=20&c=WKbMQma_pZ9NbSZKLSZMVI02IesFz9UkMl6qBaHMTj4=', title:'titulo 4', autor:'autor 4', date: 'yyyy-mm-dd'},
    {_id:4, img:'https://media.istockphoto.com/id/938753602/vector/vector-news-icon-newspaper-news.jpg?s=612x612&w=0&k=20&c=WKbMQma_pZ9NbSZKLSZMVI02IesFz9UkMl6qBaHMTj4=', title:'titulo 4', autor:'autor 4', date: 'yyyy-mm-dd'},
  ]
}
