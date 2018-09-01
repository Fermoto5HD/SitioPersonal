import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DollarsPortfolioListComponent } from './list.component';

describe('DollarsPortfolioListComponent', () => {
  let component: DollarsPortfolioListComponent;
  let fixture: ComponentFixture<DollarsPortfolioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DollarsPortfolioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DollarsPortfolioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
