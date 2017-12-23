import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FM5TraktComponent } from './fm5-trakt.component';

describe('FM5TraktComponent', () => {
  let component: FM5TraktComponent;
  let fixture: ComponentFixture<FM5TraktComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FM5TraktComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FM5TraktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
