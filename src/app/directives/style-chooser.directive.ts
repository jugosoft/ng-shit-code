import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyleChooser]'
})
export class StyleChooserDirective {

  @Input('appStyleChooser') colourInput: string = 'yellow';
  @Input('fontWeight') fontWeightInput: string;

  @HostBinding('style.color') color: string | null;
  @HostBinding("style.fontWeight") fontWeight: string | null;
  @HostBinding("style.cursor") cursor: string | null;


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
    this.color = this.colourInput;
    this.fontWeight = this.fontWeightInput;
    this.cursor = 'pointer';
  }

  @HostListener('mouseleave') 
  onMouseLeave() {
    this.color = null;
    this.fontWeight = null;
    this.cursor = null;
  }
}
