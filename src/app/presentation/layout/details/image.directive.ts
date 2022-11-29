import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImage]'
})
export class ImageDirective {

  constructor(  private elementRef: ElementRef) { }
 @HostListener("click")
  imageChange(){
    var src:any=this.elementRef?.nativeElement.src
    var prv:any=document.getElementById("pic-1")
    prv.src=src
    console.log(this.elementRef?.nativeElement.src,"ji");
  }
}
