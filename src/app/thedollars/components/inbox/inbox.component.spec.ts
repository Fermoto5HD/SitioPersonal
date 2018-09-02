import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DollarsInboxComponent } from './inbox.component';

describe('DollarsInboxComponent', () => {
  let component: DollarsInboxComponent;
  let fixture: ComponentFixture<DollarsInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DollarsInboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DollarsInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
