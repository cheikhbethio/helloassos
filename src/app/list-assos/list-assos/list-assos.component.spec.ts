import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAssosComponent } from './list-assos.component';

describe('ListAssosComponent', () => {
  let component: ListAssosComponent;
  let fixture: ComponentFixture<ListAssosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAssosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAssosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
