import { Component } from '@angular/core';

@Component({
  selector: 'app-all-notices',
  templateUrl: './all-notices.component.html',
  styleUrls: ['./all-notices.component.scss']
})
export class AllNoticesComponent {
  downloadImage(url:any) {
    var link = document.createElement('a');
    link.href = url;
    link.download = 'document.pdf';
    link.click();
  }
}
