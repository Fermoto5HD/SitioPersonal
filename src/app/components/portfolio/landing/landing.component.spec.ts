import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioLandingComponent } from './landing.component';

describe('PortfolioLandingComponent', () => {
  let component: PortfolioLandingComponent;
  let fixture: ComponentFixture<PortfolioLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
