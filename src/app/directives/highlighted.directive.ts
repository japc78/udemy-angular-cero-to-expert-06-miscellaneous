import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  constructor( private elemento: ElementRef ) {
    console.log('test');
    elemento.nativeElement.style.textDecoration = "underline";
  }

  @Input('appHighlighted') newColor: string;

  @HostListener('mouseenter') mouseHover(): void {
    // this.elemento.nativeElement.style.backgroundColor = "yellow";
    this.resaltar(this.newColor || 'yellow');
  }
  @HostListener('mouseleave') mouseExit(): void {
    // this.elemento.nativeElement.style.backgroundColor = null;
    this.resaltar(null);
  }

  private resaltar(color: string): void {
    this.elemento.nativeElement.style.backgroundColor = color;
  }
}
