import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DequeProject';
  

  addFirstFunc(element:any){
    console.log(element);
  }
  offerFirstFunc(element:any){
    console.log(element);
  }
  addLastFunc(element:any){
    console.log(element);
  }
  offerLastFunc(element:any){
    console.log(element);
  }
}
