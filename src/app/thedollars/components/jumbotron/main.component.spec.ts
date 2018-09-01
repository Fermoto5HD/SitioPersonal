import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DollarsJumbotronComponent } from './main.component';

describe('DollarsJumbotronComponent', () => {
  let component: DollarsJumbotronComponent;
  let fixture: ComponentFixture<DollarsJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DollarsJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DollarsJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
