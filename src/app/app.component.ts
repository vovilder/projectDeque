import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DequeProject';
  

  addFirst(element:any){
    console.log(element);
  }
  offerFirst(element:any){
    console.log(element);
  }
  addLast(element:any){
    console.log(element);
  }
  offerLast(element:any){
    console.log(element);
  }
}
