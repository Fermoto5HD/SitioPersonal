import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FM5LoginComponent } from './fm5-login.component';

describe('FM5LoginComponent', () => {
  let component: FM5LoginComponent;
  let fixture: ComponentFixture<FM5LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FM5LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FM5LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
