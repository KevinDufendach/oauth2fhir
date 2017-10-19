import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfteralaunchComponent } from './afteralaunch.component';

describe('AfteralaunchComponent', () => {
  let component: AfteralaunchComponent;
  let fixture: ComponentFixture<AfteralaunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfteralaunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfteralaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
