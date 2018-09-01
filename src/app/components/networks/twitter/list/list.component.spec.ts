import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkTwitterListComponent } from './list.component';

describe('NetworkTwitterListComponent', () => {
  let component: NetworkTwitterListComponent;
  let fixture: ComponentFixture<NetworkTwitterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkTwitterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkTwitterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
