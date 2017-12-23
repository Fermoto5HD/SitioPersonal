import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FM5AllbrandnewComponent } from './fm5-allbrandnew.component';

describe('FM5AllbrandnewComponent', () => {
  let component: FM5AllbrandnewComponent;
  let fixture: ComponentFixture<FM5AllbrandnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FM5AllbrandnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FM5AllbrandnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
