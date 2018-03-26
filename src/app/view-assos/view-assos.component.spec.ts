import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssosComponent } from './view-assos.component';

describe('ViewAssosComponent', () => {
  let component: ViewAssosComponent;
  let fixture: ComponentFixture<ViewAssosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAssosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAssosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
