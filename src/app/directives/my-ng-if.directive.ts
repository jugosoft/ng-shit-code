import { AfterViewInit, Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyNgIf]'
})
export class MyNgIfDirective implements OnChanges {
  @Input() appMyNgIf: boolean;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.appMyNgIf) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
