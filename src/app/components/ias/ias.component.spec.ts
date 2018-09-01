import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IASComponent } from './ias.component';

describe('IASComponent', () => {
  let component: IASComponent;
  let fixture: ComponentFixture<IASComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IASComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
