import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DollarsBlogComponent } from './list.component';

describe('DollarsBlogComponent', () => {
  let component: DollarsBlogComponent;
  let fixture: ComponentFixture<DollarsBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DollarsBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DollarsBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
