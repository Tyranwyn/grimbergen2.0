import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusesContainer } from './statuses.container';

describe('StatusesComponent', () => {
  let component: StatusesContainer;
  let fixture: ComponentFixture<StatusesContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusesContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusesContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
