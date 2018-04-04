import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyACF9LXdAOAr8QAxJ63yMuO5Y-LETilhVI",
      authDomain: "appcelula-391e5.firebaseapp.com"

    })
  }
}
