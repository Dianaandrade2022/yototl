import { Component, OnInit } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { Storage, getDownloadURL, ref } from '@angular/fire/storage';
@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss']
})
export class NoticiaComponent implements OnInit{
  logo:string = "../../../../assets/img/yolotl.webp";
  lista:any = [
    {url: '/admin/noticias', icon:'bi bi-newspaper me-2', name:'Noticias'},
    {url: '/admin/noticias/crear', icon:'bi bi-patch-plus-fill me-2', name:'Agregar'},
    // {url: 'admin/noticias/modificar', icon:'bi bi-cloud-upload-fill me-2', name:''},/
  ]
  notices:any = []
  getimg = ''
  noticias:any = [
    {_id:1, img:'https://media.istockphoto.com/id/938753602/vector/vector-news-icon-newspaper-news.jpg?s=612x612&w=0&k=20&c=WKbMQma_pZ9NbSZKLSZMVI02IesFz9UkMl6qBaHMTj4=', title:'titulo 1', autor:'autor 1', date: 'yyyy-mm-dd'},
    {_id:2, img:'https://media.istockphoto.com/id/938753602/vector/vector-news-icon-newspaper-news.jpg?s=612x612&w=0&k=20&c=WKbMQma_pZ9NbSZKLSZMVI02IesFz9UkMl6qBaHMTj4=', title:'titulo 2', autor:'autor 2', date: 'yyyy-mm-dd'},
    {_id:3, img:'https://media.istockphoto.com/id/938753602/vector/vector-news-icon-newspaper-news.jpg?s=612x612&w=0&k=20&c=WKbMQma_pZ9NbSZKLSZMVI02IesFz9UkMl6qBaHMTj4=', title:'titulo 3', autor:'autor 3', date: 'yyyy-mm-dd'},
    {_id:4, img:'https://media.istockphoto.com/id/938753602/vector/vector-news-icon-newspaper-news.jpg?s=612x612&w=0&k=20&c=WKbMQma_pZ9NbSZKLSZMVI02IesFz9UkMl6qBaHMTj4=', title:'titulo 4', autor:'autor 4', date: 'yyyy-mm-dd'},
    {_id:4, img:'https://media.istockphoto.com/id/938753602/vector/vector-news-icon-newspaper-news.jpg?s=612x612&w=0&k=20&c=WKbMQma_pZ9NbSZKLSZMVI02IesFz9UkMl6qBaHMTj4=', title:'titulo 4', autor:'autor 4', date: 'yyyy-mm-dd'},
    {_id:4, img:'https://media.istockphoto.com/id/938753602/vector/vector-news-icon-newspaper-news.jpg?s=612x612&w=0&k=20&c=WKbMQma_pZ9NbSZKLSZMVI02IesFz9UkMl6qBaHMTj4=', title:'titulo 4', autor:'autor 4', date: 'yyyy-mm-dd'},
  ]
  ngOnInit(): void {
    this.mostrarnoticias()
  }
  constructor(
    private firestore:Firestore,
  ) {}
  async mostrarnoticias(){
    const refdata = collection(this.firestore, 'noticias');
    const querySnapshot = await getDocs(refdata)
    const promises = querySnapshot.docs.map(async (doc) => {
      const id = doc.id;
      const data = doc.data();
      // const imgRef = ref(this.storage, 'images/' + data["img"]);
      // const imgUrl = await getDownloadURL(imgRef);
      // data["img"] = imgUrl
      // const docref = ref(this.storage, 'archivos/' + data["document"]);
      // const docurl = await getDownloadURL(docref);
      // data["document"] = docurl
      return { data , id };
    });
    this.notices = await Promise.all(promises);
    this.notices = [...this.notices];
  }
  downloadImage(url:any) {
    var link = document.createElement('a');
    link.href = url;
    link.download = 'document.pdf';
    link.click();
  }
}
