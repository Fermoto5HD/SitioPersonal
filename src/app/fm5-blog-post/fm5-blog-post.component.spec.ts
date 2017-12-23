import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FM5BlogPostComponent } from './fm5-blog-post.component';

describe('FM5BlogPostComponent', () => {
  let component: FM5BlogPostComponent;
  let fixture: ComponentFixture<FM5BlogPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FM5BlogPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FM5BlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
