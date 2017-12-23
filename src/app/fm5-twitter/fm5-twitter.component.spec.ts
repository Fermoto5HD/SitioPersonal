import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FM5TwitterComponent } from './fm5-twitter.component';

describe('FM5TwitterComponent', () => {
  let component: FM5TwitterComponent;
  let fixture: ComponentFixture<FM5TwitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FM5TwitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FM5TwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
