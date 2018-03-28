import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
    selector: 'app-reverse-accordion',
    template: `
        <h2 tabindex="-1" #componentHeading>{{componentTitle}}</h2>
        <p>Use the following link to toggle the appearance of the accordion's content.
         The content will display above the accordion button and focus will move to the 
         heading of the new content.
         </p>
        <app-reverse-accordion-content *ngIf="show"></app-reverse-accordion-content>
        <button 
          id="accLink" 
          href="#" 
          (click)="toggle()" 
          aria-controls="insertionPointAbove" 
          [attr.aria-expanded]="expanded"
        >
          <span class="icon">+</span> Accordion Button
        </button>
       
  `,
 
})

export class ReverseAccordionComponent implements OnInit {

  constructor(private titleService: Title) {}
  componentTitle = 'Reverse Accordion';
  setTitle(newTitle:string) { this.titleService.setTitle(newTitle); }
  @ViewChild('componentHeading') elementToFocusOnInit;
 

  ngOnInit() {
    this.setTitle(this.componentTitle);
    this.elementToFocusOnInit.nativeElement.focus();
  }
  show: boolean = false;
  expanded: boolean = false;

  
  toggle() {
    this.show = !this.show;
    this.expanded = !this.expanded;
  
  }

}
