import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FM5BlogComponent } from './fm5-blog.component';

describe('FM5BlogComponent', () => {
  let component: FM5BlogComponent;
  let fixture: ComponentFixture<FM5BlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FM5BlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FM5BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
