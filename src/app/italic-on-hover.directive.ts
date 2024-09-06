import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightOnHover]',
  standalone: true,
})
export class HighlightOnHoverDirective {

  private originalColor: string | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseover') onMouseOver() {
    this.originalColor = this.el.nativeElement.style.color;
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
  }

  @HostListener('mouseout') onMouseOut() {
    if (this.originalColor !== null) {
      this.renderer.setStyle(this.el.nativeElement, 'color', this.originalColor);
    }
  }
}
