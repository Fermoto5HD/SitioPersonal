import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DollarsIkebukuroComponent } from './dollars-ikebukuro.component';

describe('DollarsIkebukuroComponent', () => {
  let component: DollarsIkebukuroComponent;
  let fixture: ComponentFixture<DollarsIkebukuroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DollarsIkebukuroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DollarsIkebukuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
