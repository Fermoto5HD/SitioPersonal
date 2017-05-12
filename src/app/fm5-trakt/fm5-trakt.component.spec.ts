import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fm5TraktComponent } from './fm5-trakt.component';

describe('Fm5TraktComponent', () => {
  let component: Fm5TraktComponent;
  let fixture: ComponentFixture<Fm5TraktComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fm5TraktComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fm5TraktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
