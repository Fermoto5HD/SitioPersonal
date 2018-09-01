import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioProximotrenComponent } from './portfolio-proximotren.component';

describe('PortfolioProximotrenComponent', () => {
  let component: PortfolioProximotrenComponent;
  let fixture: ComponentFixture<PortfolioProximotrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioProximotrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioProximotrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
