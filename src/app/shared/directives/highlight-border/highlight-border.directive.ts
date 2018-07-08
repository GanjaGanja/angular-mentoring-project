import { Directive, ElementRef, Renderer2, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appHighlightBorder]'
})
export class HighlightBorderDirective implements AfterViewInit {
  @Input() highlightColor: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  public ngAfterViewInit(): void {
    this.addHighlightColor(this.highlightColor);
  }

  private addHighlightColor(color: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'border', `1px solid ${color}`);
  }
}
