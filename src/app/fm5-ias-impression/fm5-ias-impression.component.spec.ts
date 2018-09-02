import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fm5IasImpressionComponent } from './fm5-ias-impression.component';

describe('Fm5IasImpressionComponent', () => {
  let component: Fm5IasImpressionComponent;
  let fixture: ComponentFixture<Fm5IasImpressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fm5IasImpressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fm5IasImpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
