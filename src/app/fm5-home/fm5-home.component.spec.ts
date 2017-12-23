import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FM5HomeComponent } from './fm5-home.component';

describe('FM5HomeComponent', () => {
  let component: FM5HomeComponent;
  let fixture: ComponentFixture<FM5HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FM5HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FM5HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
