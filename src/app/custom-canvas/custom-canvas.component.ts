import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-custom-canvas',
  templateUrl: './custom-canvas.component.html',
  styleUrls: ['./custom-canvas.component.css']
})
export class CustomCanvasComponent implements OnInit, AfterViewInit {

  @Input() value: any;
  @ViewChild('cs') customCanvas: ElementRef;
  public context: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let content = (<HTMLCanvasElement>this.customCanvas.nativeElement).getContext('2d');
    content.font = "60px Arial";
    content.fillText(this.value,0,50);    
  }

}
