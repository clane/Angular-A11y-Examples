import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  appTitle = "Angular 5 a11y Demo";

  modalShouldBeVisible:boolean = false;
  
  @ViewChild('showModalLink') elementToFocusWhenModalCloses:ElementRef;

  showModal(e) { 
    e.preventDefault();
    this.modalShouldBeVisible = true; 
  }

  closeModal(){
    this.modalShouldBeVisible = false;
    this.elementToFocusWhenModalCloses.nativeElement.focus();
  }

}

