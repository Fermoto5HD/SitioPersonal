import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DollarsLeaderComponent } from './main.component';

describe('DollarsLeaderComponent', () => {
  let component: DollarsLeaderComponent;
  let fixture: ComponentFixture<DollarsLeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DollarsLeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DollarsLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
