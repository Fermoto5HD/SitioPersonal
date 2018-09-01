import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DollarsLoginComponent } from './login.component';

describe('DollarsLoginComponent', () => {
  let component: DollarsLoginComponent;
  let fixture: ComponentFixture<DollarsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DollarsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DollarsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
