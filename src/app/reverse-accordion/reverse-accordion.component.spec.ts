import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseAccordionComponent } from './reverse-accordion.component';

describe('ReverseAccordionComponent', () => {
  let component: ReverseAccordionComponent;
  let fixture: ComponentFixture<ReverseAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReverseAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReverseAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
