import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FM5NetworksComponent } from './fm5-networks.component';

describe('FM5NetworksComponent', () => {
  let component: FM5NetworksComponent;
  let fixture: ComponentFixture<FM5NetworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FM5NetworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FM5NetworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
