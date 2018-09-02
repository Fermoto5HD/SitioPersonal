import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioFerrocarrilesAbiertosComponent } from './ferrocarrilesabiertos.component';

describe('PortfolioFerrocarrilesAbiertosComponent', () => {
  let component: PortfolioFerrocarrilesAbiertosComponent;
  let fixture: ComponentFixture<PortfolioFerrocarrilesAbiertosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioFerrocarrilesAbiertosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioFerrocarrilesAbiertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
