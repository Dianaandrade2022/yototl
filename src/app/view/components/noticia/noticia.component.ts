import { Component, OnInit } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';;
import { getDownloadURL, ref, Storage } from '@angular/fire/storage';
@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss']
})
export class NoticiaComponent implements OnInit{
  logo:string = "../../../../assets/img/yolotl.webp";
  notices:any
  getimg = ''
  constructor(
    private firestore:Firestore,
  ) {}
  ngOnInit(): void {
    this.mostrarnoticias()

  }

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
    console.log(this.notices)
  }
  downloadImage(url:any) {
  const downloadUrl = `https://firebasestorage.googleapis.com/v0/b/yototl.appspot.com/o/archivos%2F${url}?alt=media&token=4b09254e-2ab8-4450-8b5c-23bb121cb95e`;
  var link = document.createElement('a');
  link.href = downloadUrl;
  link.download = 'document.pdf';
  link.click();
    // var link = document.createElement('a');
    // link.href = `https://firebasestorage.googleapis.com/v0/b/yototl.appspot.com/o/archivos%2F${url}?alt=media&token=4b09254e-2ab8-4450-8b5c-23bb121cb95e`;
    // console.log(link.href)
    // link.download = 'document.pdf';
    // link.click();
  }
}
