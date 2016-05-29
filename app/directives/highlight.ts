import { Directive, ElementRef, Input } from '@angular/core';

declare var hljs any;
@Directive({
  selector: '[highlight]'
})
export class HighlightCodeDirective {
  codeElement: ElementRef;

  constructor(private eltRef:ElementRef) {
	  this.codeElement = eltRef;
  }

  ngAfterViewInit() {
	  console.log(this.codeElement.nativeElement);
    hljs.highlightBlock(this.codeElement.nativeElement);
  }
}
