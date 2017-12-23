import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FM5RepositoriesComponent } from './fm5-repositories.component';

describe('FM5RepositoriesComponent', () => {
  let component: FM5RepositoriesComponent;
  let fixture: ComponentFixture<FM5RepositoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FM5RepositoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FM5RepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
