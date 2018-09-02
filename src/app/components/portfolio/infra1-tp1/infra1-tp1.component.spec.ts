import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FM5Infra1Tp1Component } from './fm5-infra1-tp1.component';

describe('FM5Infra1Tp1Component', () => {
  let component: FM5Infra1Tp1Component;
  let fixture: ComponentFixture<FM5Infra1Tp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FM5Infra1Tp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FM5Infra1Tp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
