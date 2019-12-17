import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsContainer } from './reports.container';

describe('ReportsComponent', () => {
  let component: ReportsContainer;
  let fixture: ComponentFixture<ReportsContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
