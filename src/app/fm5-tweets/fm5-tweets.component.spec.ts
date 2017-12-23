import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FM5TweetsComponent } from './fm5-tweets.component';

describe('FM5TweetsComponent', () => {
  let component: FM5TweetsComponent;
  let fixture: ComponentFixture<FM5TweetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FM5TweetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FM5TweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
