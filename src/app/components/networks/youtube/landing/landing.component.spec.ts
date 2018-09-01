import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkYouTubeLandingComponent } from './landing.component';

describe('NetworkYouTubeLandingComponent', () => {
  let component: NetworkYouTubeLandingComponent;
  let fixture: ComponentFixture<NetworkYouTubeLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkYouTubeLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkYouTubeLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
