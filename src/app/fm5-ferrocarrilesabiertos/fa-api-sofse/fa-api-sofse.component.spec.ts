import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FAApiSofseComponent } from './fa-api-sofse.component';

describe('FAApiSofseComponent', () => {
  let component: FAApiSofseComponent;
  let fixture: ComponentFixture<FAApiSofseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FAApiSofseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FAApiSofseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
