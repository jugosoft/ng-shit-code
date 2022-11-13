import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyleChooser]'
})
export class StyleChooserDirective {

  @Input('appStyleChooser') colour: string = 'yellow';
  @Input('fontWeight') fontWeight: string;

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
    console.log(event);
    
  }

  @HostListener('mouseenter') 
  onMouse() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', this.colour);
    this.renderer.setStyle(this.elementRef.nativeElement, 'fontWeigth', this.fontWeight);
  }

  @HostListener('mouseleave') 
  onMouseLeave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', null);
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', null);
    this.renderer.setStyle(this.elementRef.nativeElement, 'fontWeigth', null);
  }
}
