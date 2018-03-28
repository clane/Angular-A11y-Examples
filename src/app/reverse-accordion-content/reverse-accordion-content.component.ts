import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-reverse-accordion-content',
  templateUrl: './reverse-accordion-content.component.html',
  styleUrls: ['./reverse-accordion-content.component.css']
})
export class ReverseAccordionContentComponent implements OnInit {

  constructor() {}

  @ViewChild('componentHeading') elementToFocusOnInit;

  ngOnInit() {
    this.elementToFocusOnInit.nativeElement.focus();
  }

}
