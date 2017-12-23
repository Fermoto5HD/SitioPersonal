import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FM5DollarsIkebukuroComponent } from './fm5-dollars-ikebukuro.component';

describe('FM5DollarsIkebukuroComponent', () => {
  let component: FM5DollarsIkebukuroComponent;
  let fixture: ComponentFixture<FM5DollarsIkebukuroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FM5DollarsIkebukuroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FM5DollarsIkebukuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
