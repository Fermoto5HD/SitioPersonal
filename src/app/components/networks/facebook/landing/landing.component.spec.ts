import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkFacebookLandingComponent } from './landing.component';

describe('NetworkFacebookLandingComponent', () => {
  let component: NetworkFacebookLandingComponent;
  let fixture: ComponentFixture<NetworkFacebookLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkFacebookLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkFacebookLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
