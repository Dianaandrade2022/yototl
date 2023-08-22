import { Component, Injectable, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Storage } from '@angular/fire/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class AppComponent implements OnInit{
  title = 'Yolotl';

  ngOnInit(): void {

  }
  constructor(
    private firestore:Firestore,
  ){

  }

}
