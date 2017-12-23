import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FM5PortfolioGridComponent } from './fm5-portfolio-grid.component';

describe('FM5PortfolioGridComponent', () => {
  let component: FM5PortfolioGridComponent;
  let fixture: ComponentFixture<FM5PortfolioGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FM5PortfolioGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FM5PortfolioGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
