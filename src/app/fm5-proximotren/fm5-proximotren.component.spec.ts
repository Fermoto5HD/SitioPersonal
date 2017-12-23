import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FM5ProximotrenComponent } from './fm5-proximotren.component';

describe('FM5ProximotrenComponent', () => {
  let component: FM5ProximotrenComponent;
  let fixture: ComponentFixture<FM5ProximotrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FM5ProximotrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FM5ProximotrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
