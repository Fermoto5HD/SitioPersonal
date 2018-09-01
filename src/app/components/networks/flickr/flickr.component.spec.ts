import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkFlickrComponent } from './flickr.component';

describe('NetworkFlickrComponent', () => {
  let component: NetworkFlickrComponent;
  let fixture: ComponentFixture<NetworkFlickrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkFlickrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkFlickrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
