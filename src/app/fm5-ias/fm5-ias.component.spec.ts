import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FM5IASComponent } from './fm5-ias.component';

describe('FM5IASComponent', () => {
  let component: FM5IASComponent;
  let fixture: ComponentFixture<FM5IASComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FM5IASComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FM5IASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
