import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DollarsBlogEditComponent } from './edit.component';

describe('DollarsBlogEditComponent', () => {
  let component: DollarsBlogEditComponent;
  let fixture: ComponentFixture<DollarsBlogEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DollarsBlogEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DollarsBlogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
