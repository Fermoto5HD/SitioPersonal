import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkTwitterLandingComponent } from './landing.component';

describe('NetworkTwitterLandingComponent', () => {
  let component: NetworkTwitterLandingComponent;
  let fixture: ComponentFixture<NetworkTwitterLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkTwitterLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkTwitterLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
