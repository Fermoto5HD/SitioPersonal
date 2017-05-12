import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fm5BlogComponent } from './fm5-blog.component';

describe('Fm5BlogComponent', () => {
  let component: Fm5BlogComponent;
  let fixture: ComponentFixture<Fm5BlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fm5BlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fm5BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
