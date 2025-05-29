import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverBorder]',
  standalone: true
})
export class HoverBorderDirective {
  @Input('appHoverBorder') borderColor: string = '#FF5100'; // Valor padrão laranja
  @Input() borderWidth: string = '2px';
  @Input() borderStyle: string = 'solid';

  private defaultBorder: string = ''; // Inicialize com valor vazio

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Armazena a borda original no construtor
    this.defaultBorder = this.el.nativeElement.style.border || 'none';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(`${this.borderWidth} ${this.borderStyle} ${this.borderColor}`);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.defaultBorder);
  }

  private setBorder(borderValue: string) {
    this.renderer.setStyle(this.el.nativeElement, 'border', borderValue);
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'border 0.3s ease');
  }
}
