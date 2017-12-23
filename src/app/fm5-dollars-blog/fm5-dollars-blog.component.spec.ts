import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FM5DollarsBlogComponent } from './fm5-dollars-blog.component';

describe('FM5DollarsBlogComponent', () => {
  let component: FM5DollarsBlogComponent;
  let fixture: ComponentFixture<FM5DollarsBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FM5DollarsBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FM5DollarsBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
