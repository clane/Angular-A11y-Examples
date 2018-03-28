import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListboxDemoComponent } from './listbox-demo.component';

describe('ListboxDemoComponent', () => {
  let component: ListboxDemoComponent;
  let fixture: ComponentFixture<ListboxDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListboxDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListboxDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
