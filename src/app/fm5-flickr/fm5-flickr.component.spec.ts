import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FM5FlickrComponent } from './fm5-flickr.component';

describe('FM5FlickrComponent', () => {
  let component: FM5FlickrComponent;
  let fixture: ComponentFixture<FM5FlickrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FM5FlickrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FM5FlickrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
