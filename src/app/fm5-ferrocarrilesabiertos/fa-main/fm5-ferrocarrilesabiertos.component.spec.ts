import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FM5FerrocarrilesAbiertosComponent } from './fm5-ferrocarrilesabiertos.component';

describe('FM5FerrocarrilesAbiertosComponent', () => {
  let component: FM5FerrocarrilesAbiertosComponent;
  let fixture: ComponentFixture<FM5FerrocarrilesAbiertosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FM5FerrocarrilesAbiertosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FM5FerrocarrilesAbiertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
