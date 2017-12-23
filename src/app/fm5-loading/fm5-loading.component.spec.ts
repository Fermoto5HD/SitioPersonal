import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FM5LoadingComponent } from './fm5-loading.component';

describe('FM5LoadingComponent', () => {
  let component: FM5LoadingComponent;
  let fixture: ComponentFixture<FM5LoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FM5LoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FM5LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
