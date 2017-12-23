import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FM5InstagramComponent } from './fm5-instagram.component';

describe('Fm5InstagramComponent', () => {
  let component: FM5InstagramComponent;
  let fixture: ComponentFixture<FM5InstagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FM5InstagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FM5InstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
