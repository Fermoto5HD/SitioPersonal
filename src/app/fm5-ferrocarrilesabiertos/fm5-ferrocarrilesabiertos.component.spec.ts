import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fm5FerrocarrilesabiertosComponent } from './fm5-ferrocarrilesabiertos.component';

describe('Fm5FerrocarrilesabiertosComponent', () => {
  let component: Fm5FerrocarrilesabiertosComponent;
  let fixture: ComponentFixture<Fm5FerrocarrilesabiertosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fm5FerrocarrilesabiertosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fm5FerrocarrilesabiertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
