import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkInstagramComponent } from './instagram.component';

describe('NetworkInstagramComponent', () => {
  let component: NetworkInstagramComponent;
  let fixture: ComponentFixture<NetworkInstagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkInstagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
