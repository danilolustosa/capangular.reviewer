import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(el: ElementRef) {
    console.log(el);
    el.nativeElement.style.backgroundColor = 'yellow';
  }

}
