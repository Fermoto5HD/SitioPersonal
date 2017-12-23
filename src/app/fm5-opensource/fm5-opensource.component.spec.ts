import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FM5OpenSourceComponent } from './fm5-opensource.component';

describe('FM5OpenSourceComponent', () => {
  let component: FM5OpenSourceComponent;
  let fixture: ComponentFixture<FM5OpenSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FM5OpenSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FM5OpenSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
