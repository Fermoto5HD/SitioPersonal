import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FM5MALComponent } from './fm5-mal.component';

describe('FM5MALComponent', () => {
  let component: FM5MALComponent;
  let fixture: ComponentFixture<FM5MALComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FM5MALComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FM5MALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
