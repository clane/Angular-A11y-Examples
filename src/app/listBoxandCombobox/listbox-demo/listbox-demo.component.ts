import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-listbox-demo',
  templateUrl: './listbox-demo.component.html',
  styleUrls: ['./listbox-demo.component.css']
})
export class ListboxDemoComponent implements OnInit {

  selectedId: number = 0;
  expanded:boolean = false;
  
  constructor(private titleService: Title) {}
  componentTitle = 'Listbox Demo';
  setTitle(newTitle:string) { this.titleService.setTitle(newTitle); }
  @ViewChild('componentHeading') elementToFocusOnInit;

  toggleExpanded() { 
    this.expanded = !this.expanded;
  }

  ngOnInit() {
    this.setTitle(this.componentTitle);
    this.elementToFocusOnInit.nativeElement.focus();
  }

}
