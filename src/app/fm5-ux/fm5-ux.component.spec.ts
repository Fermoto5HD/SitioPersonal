import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FM5UXComponent } from './fm5-ux.component';

describe('FM5UXComponent', () => {
  let component: FM5UXComponent;
  let fixture: ComponentFixture<FM5UXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FM5UXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FM5UXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
