import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tootip',
  templateUrl: './tootip.component.html',
  styleUrls: ['./tootip.component.css']
})
export class TootipComponent implements OnInit {

  constructor(private titleService: Title) {}
  componentTitle = 'Tooltip';
	id = null;
 

  setTitle(newTitle:string) { this.titleService.setTitle(newTitle); }
  @ViewChild('componentHeading') elementToFocusOnInit;

  show: boolean = false;
  ariaHidden: boolean = !this.show;
  //When show is true ariaHidden is false
  //bound with the attribute binding [attr.aria-hidden]="ariaHidden"
  open() {
      //show the tooltip
      this.show = true;
      this.ariaHidden = !this.show;
			this.id = "tooltip";
  }

  close() {
      //hide the tooltip
      this.show = false;
      this.ariaHidden = !this.show;
			this.id = null;
  }

  mockNavigate(e) {
      e.preventDefault();
      alert('mock navigation occured');
  }
 
  ngOnInit() {
    this.setTitle(this.componentTitle);
    this.elementToFocusOnInit.nativeElement.focus();
  }
}
