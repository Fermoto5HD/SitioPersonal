import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbrandnewComponent } from './landing.component';

describe('AllbrandnewComponent', () => {
  let component: AllbrandnewComponent;
  let fixture: ComponentFixture<AllbrandnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllbrandnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllbrandnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
