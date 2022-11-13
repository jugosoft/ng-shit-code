import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyleChooser]'
})
export class StyleChooserDirective {

  count: number = 0;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) { 
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
  }

  @HostListener('click', ['$event']) 
  onClick(event: Event) {
    alert('пнх');
  }

  @HostListener('mouseenter') 
  onMouse() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'yellow');
  }

  @HostListener('mouseleave') 
  onMouseLeave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', null);
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', null);
  }
}
