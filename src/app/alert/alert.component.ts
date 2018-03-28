import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private titleService: Title) {}
  componentTitle = 'Alert';
  setTitle(newTitle:string) { this.titleService.setTitle(newTitle); }
  @ViewChild('componentHeading') elementToFocusOnInit;

  alertText: string = "This is a live region, the alert text will appear here dynamically";
  alertsOn: boolean = true;
  intervalId: any; 
  stopAlerts() {
      this.alertsOn = false;
  }

  ngOnInit() {
    this.setTitle(this.componentTitle);
    this.elementToFocusOnInit.nativeElement.focus();
  }

  ngAfterViewInit() {

        let cnt = 0;
        this.setTitle('Alerts');  
        this.intervalId =  setInterval(()=>{
        this.alertText = "alert " + cnt;
        cnt = cnt + 1;

        if(this.alertsOn == false){ clearInterval(this.intervalId);}
  
    }, 1000);
  }

  ngOnDestroy(){
    clearInterval(this.intervalId);
  }

}
