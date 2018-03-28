import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseAccordionContentComponent } from './reverse-accordion-content.component';

describe('ReverseAccordionContentComponent', () => {
  let component: ReverseAccordionContentComponent;
  let fixture: ComponentFixture<ReverseAccordionContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReverseAccordionContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReverseAccordionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
