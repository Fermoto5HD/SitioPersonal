import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FM5BlogPostDisqusComponent } from './fm5-blog-post-disqus.component';

describe('FM5BlogPostDisqusComponent', () => {
  let component: FM5BlogPostDisqusComponent;
  let fixture: ComponentFixture<FM5BlogPostDisqusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FM5BlogPostDisqusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FM5BlogPostDisqusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
