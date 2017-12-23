import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FM5Error404Component } from './fm5-error404.component';

describe('FM5Error404Component', () => {
  let component: FM5Error404Component;
  let fixture: ComponentFixture<FM5Error404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FM5Error404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FM5Error404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
