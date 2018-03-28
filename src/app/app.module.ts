import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import { ReverseAccordionComponent } from './reverse-accordion/reverse-accordion.component';
import { ReverseAccordionContentComponent } from './reverse-accordion-content/reverse-accordion-content.component';
import { AccordionComponent } from './accordion/accordion.component';
import { TootipComponent } from './tootip/tootip.component';
import { AlertComponent } from './alert/alert.component';
import { ListboxComponent } from './listBoxandCombobox/listbox/listbox.component';
import { ComboboxComponent } from './listBoxandCombobox/combobox/combobox.component';
import { ListboxDemoComponent } from './listBoxandCombobox/listbox-demo/listbox-demo.component';


const appRoutes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'reverseAccordion', component: ReverseAccordionComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'tooltip', component:  TootipComponent },
  { path: 'alert', component:   AlertComponent },
  { path: 'combobox', component: ComboboxComponent },
  { path: 'listboxDemo', component: ListboxDemoComponent },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
];

@NgModule({

  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
   
  
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent,
    ReverseAccordionComponent,
    ReverseAccordionContentComponent,
    AccordionComponent,
    TootipComponent,
    AlertComponent,
    ListboxComponent,
    ComboboxComponent,
    ListboxDemoComponent,
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
