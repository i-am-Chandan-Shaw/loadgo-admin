import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[pTooltip]',
})
export class TooltipVisibilityDirective {
  @Input() tooltipState!: boolean;
  @Output() tooltipStateChange = new EventEmitter();
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter', ['$event']) onMouseEnter(e: Event) {
    let nativeElement = this.el.nativeElement as HTMLElement;
    let comparisonVar;
    comparisonVar =
      nativeElement.classList.contains('text-clamp')
        ? (nativeElement.offsetHeight < nativeElement.scrollHeight - 1)
        : (nativeElement.offsetWidth < nativeElement.scrollWidth);

    if (comparisonVar) {
      this.tooltipState = false;
      this.tooltipStateChange.emit(false);
      this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    } else if (this.tooltipState != undefined) {
      e.stopImmediatePropagation();
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltipState != undefined) {
      this.tooltipState = true;
      this.renderer.setStyle(this.el.nativeElement, 'cursor', 'default');
      this.tooltipStateChange.emit(true);
    }
  }
}
