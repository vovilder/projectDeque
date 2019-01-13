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
  first: number = 0;
  last: number = 0;
  peek: number = -1;

  constructor(){
    this.deque=new Deque();
  }

  transitionFirst() {
    if(this.deque.deque.length > 0) {
      this.last = this.deque.deque.length - 1;
      this.first = 1;
      setTimeout(()=> {
        this.first = 0;
      }, 1000);
    }
  }

  addFirstFunc(element:any){
    this.transitionFirst();
    this.deque.addFirst(element);
    this.last = this.deque.deque.length - 1;
    console.log(this.deque);
    this.clearall();
  }
  offerFirstFunc(element:any){
    this.transitionFirst();
    this.deque.offerFirst(element);
    this.last = this.deque.deque.length - 1;
    console.log(this.deque);
    this.clearall();
  }

  transitionLast() {
    if(this.deque.deque.length > 0) {
      setTimeout(()=> {
        this.last = this.deque.deque.length - 1;
      }, 1000);
    }
  }

  addLastFunc(element:any){
    this.deque.addLast(element);
    this.transitionLast();
    console.log(this.deque);
    this.clearall();
  }
  offerLastFunc(element:any){
    this.deque.offerLast(element);
    this.transitionLast();
    console.log(this.deque);
    this.clearall();

  }
  removeFirstFunc(){
    this.clearall();
    try {
      this.pElem(0);
      this.first = 1;
      setTimeout(()=> {
        this.retrieved=this.deque.removeFirst();
        this.first = 0;
        this.last = this.deque.deque.length - 1;
      }, 1000);
    } catch (error) {
      this.errormsg=new String(error).toString();
      console.log(this.errormsg);
    }

  }
  pollFirstFunc(){
    this.clearall();
    this.pElem(0);
    this.first = 1;
    setTimeout(()=> {
      this.retrieved=this.deque.pollFirst();
      this.first = 0;
      this.last = this.deque.deque.length - 1;
    }, 1000);
  }
  removeLastFunc(){
    this.clearall();
    try {
      this.pElem(this.deque.deque.length - 1);
      this.last = this.deque.deque.length - 2;
      setTimeout(()=> {
        this.retrieved=this.deque.removeLast();
      }, 1000);
    } catch (error) {
      this.errormsg=new String(error).toString();
      console.log(this.errormsg);
    }
  }

  pollLastFunc(){
    this.clearall();
    this.pElem(this.deque.deque.length - 1);
    this.last = this.deque.deque.length - 2;
    setTimeout(() => {
      this.retrieved=this.deque.pollLast();
    }, 1000);
  }

  getFirstFunc(){
    this.clearall();
    try {
      this.retrieved=this.deque.getFirst();
      this.pElem(0);
    } catch (error) {
      this.errormsg=new String(error).toString();
      console.log(this.errormsg);
    }
  }
  
  peekFirstFunc(){
    this.clearall();
    this.pElem(0);
    this.retrieved=this.deque.peekFirst();

  }
  getLastFunc(){
    this.clearall();
    try {
      this.retrieved=this.deque.getLast();
      this.pElem(this.deque.deque.length - 1)
    } catch (error) {
      this.errormsg=new String(error).toString();
      console.log(this.errormsg);
    }
  }
  peekLastFunc(){
    this.clearall();
    this.pElem(this.deque.deque.length - 1);
    this.retrieved=this.deque.peekLast();

  }
  clearall(){
    this.errormsg="";
    this.retrieved="";
    this.inputValue=new String();
  
  }

  pElem(index: number) {
    this.peek = index;
    setTimeout(()=>{
      this.peek = -1;
    }, 1000);
  }

  // pLast() {
  //   this.peek = this.deque.deque.length - 1;
  //   setTimeout(()=>{
  //     this.peek = -1;
  //   }, 1000);
  // }

}
