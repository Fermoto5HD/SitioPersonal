import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FM5PortfolioComponent } from './fm5-portfolio.component';

describe('FM5PortfolioComponent', () => {
  let component: FM5PortfolioComponent;
  let fixture: ComponentFixture<FM5PortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FM5PortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FM5PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
