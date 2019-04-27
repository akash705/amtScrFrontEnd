import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontDesign';
  constructor(){
    
  }
  ngOnInit() { 
    // check for localStorage
    console.log('Route to Dashboard if token is present in LocalStorage');
    
  }
}
