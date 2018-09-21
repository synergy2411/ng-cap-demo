import { Directive, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('defaultColor') defultColor : string;
  @HostBinding('style.backgroundColor') bgColor : any;

  @HostListener("mouseenter") mouseenter(){
    // console.log('Mouse Entered!');
    this.bgColor = this.defultColor;
  }
  @HostListener("mouseleave") mouseleave(){
    this.bgColor = "transparent";
  }

  constructor(private elementRef : ElementRef) { 
    console.log(this.elementRef.nativeElement);
    // this.elementRef.nativeElement.style.backgroundColor = "blue";
  }

}
