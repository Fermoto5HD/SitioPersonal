import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FM5WebsiteComponent } from './fm5-website.component';

describe('FM5WebsiteComponent', () => {
  let component: FM5WebsiteComponent;
  let fixture: ComponentFixture<FM5WebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FM5WebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FM5WebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
