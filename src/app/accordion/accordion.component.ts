import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
})
export class AccordionComponent implements OnInit {

  constructor(private titleService: Title) {}
  componentTitle = 'Accordion';
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
