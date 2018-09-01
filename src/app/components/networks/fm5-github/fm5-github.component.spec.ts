import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FM5GithubComponent } from './fm5-github.component';

describe('FM5GithubComponent', () => {
  let component: FM5GithubComponent;
  let fixture: ComponentFixture<FM5GithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FM5GithubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FM5GithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
