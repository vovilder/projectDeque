import { Component, ViewChild, ElementRef } from '@angular/core';
import { Deque } from './deque';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  deque:Deque;
  errormsg:string="";
  retrieved:any; //Запазва стойност на резултат
  // test:any;
  // @ViewChild("addFirst")firstadd:ElementRef;
  // @ViewChild("addLast")lastadd:ElementRef;
  // @ViewChild("offerFirst")firstoffer:ElementRef;
  // @ViewChild("offerLast")lastoffer:ElementRef;
  inputValue:any="";

  constructor(){
    this.deque=new Deque();
  }

  addFirstFunc(element:any){
    this.deque.addFirst(element);
    console.log(this.deque);
    this.clearall();
  }
  offerFirstFunc(element:any){
    this.deque.offerFirst(element);
    console.log(this.deque);
    this.clearall();
  }
  addLastFunc(element:any){
    this.deque.addLast(element);
    console.log(this.deque);
    this.clearall();
  }
  offerLastFunc(element:any){
    this.deque.offerLast(element);
    console.log(this.deque);
    this.clearall();

  }
  removeFirstFunc(){
    this.clearall();
    try {
      this.retrieved=this.deque.removeFirst();
    } catch (error) {
      this.errormsg=new String(error).toString();
      console.log(this.errormsg);
    }

  }
  pollFirstFunc(){
    this.clearall();
    this.retrieved=this.deque.pollFirst();
  }
  removeLastFunc(){
    this.clearall();
    try {
      this.retrieved=this.deque.removeLast();
    } catch (error) {
      this.errormsg=new String(error).toString();
      console.log(this.errormsg);
    }
  }
  pollLastFunc(){
    this.clearall();
    this.retrieved=this.deque.pollLast();
  }
  getFirstFunc(){
    this.clearall();
    try {
      this.retrieved=this.deque.getFirst();
    } catch (error) {
      this.errormsg=new String(error).toString();
      console.log(this.errormsg);
    }
  }
  peekFirstFunc(){
    this.clearall();
    this.retrieved=this.deque.peekFirst();

  }
  getLastFunc(){
    this.clearall();
    try {
      this.retrieved=this.deque.getLast();
    } catch (error) {
      this.errormsg=new String(error).toString();
      console.log(this.errormsg);
    }
  }
  peekLastFunc(){
    this.clearall();
    this.retrieved=this.deque.peekLast();

  }
  clearall(){
    this.errormsg="";
    this.retrieved="";
    this.inputValue=new String();
    
  }
}
