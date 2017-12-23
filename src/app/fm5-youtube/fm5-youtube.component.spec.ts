import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FM5YoutubeComponent } from './fm5-youtube.component';

describe('FM5YoutubeComponent', () => {
  let component: FM5YoutubeComponent;
  let fixture: ComponentFixture<FM5YoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FM5YoutubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FM5YoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
