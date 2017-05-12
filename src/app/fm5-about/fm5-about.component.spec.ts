import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FM5AboutComponent } from './fm5-about.component';

describe('FM5AboutComponent', () => {
  let component: FM5AboutComponent;
  let fixture: ComponentFixture<FM5AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FM5AboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FM5AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
