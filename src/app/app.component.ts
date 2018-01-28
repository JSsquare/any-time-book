import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'book';

  ngOnInit() { 
  	firebase.initializeApp({
  		apiKey: 'AIzaSyBaeri1Nf-V3dwzCLaG4Urxhp_gAYTv0js',
    	authDomain: 'ng-any-time-book.firebaseapp.com'
  	});
  }
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
