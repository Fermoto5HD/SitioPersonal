import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FM5ContactComponent } from './fm5-contact.component';

describe('FM5ContactComponent', () => {
  let component: FM5ContactComponent;
  let fixture: ComponentFixture<FM5ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FM5ContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FM5ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
