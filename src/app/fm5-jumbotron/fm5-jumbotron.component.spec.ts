import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FM5JumbotronComponent } from './fm5-jumbotron.component';

describe('FM5JumbotronComponent', () => {
  let component: FM5JumbotronComponent;
  let fixture: ComponentFixture<FM5JumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FM5JumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FM5JumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
