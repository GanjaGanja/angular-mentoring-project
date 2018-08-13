import { Directive, ElementRef, Renderer2, Input, AfterViewInit } from '@angular/core';
import * as moment from 'moment';

@Directive({
  selector: '[appHighlightBorder]'
})
export class HighlightBorderDirective implements AfterViewInit {
  @Input('appHighlightBorder') appHighlightBorder: Date;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  public ngAfterViewInit(): void {
    this.addBorderColor();
  }

  private selectBorderColor(dateToCompare: Date): string {
    const currentDate = moment();
    const twoWeeksAgoDate = moment(currentDate).subtract(14, 'days');
    const creationDate = moment(new Date(dateToCompare));

    if (creationDate < currentDate && creationDate >= twoWeeksAgoDate) {
      return 'green';
    } else if (creationDate > currentDate) {
      return 'blue';
    } else {
      return 'transparent';
    }
  }

  private addBorderColor(): void {
    const borderColor = this.selectBorderColor(this.appHighlightBorder);

    this.renderer.setStyle(this.el.nativeElement, 'border', `1px solid ${borderColor}`);
  }

}
