import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusUpdatesDialogComponent } from './status-updates-dialog.component';

describe('StatusUpdatesDialogComponent', () => {
  let component: StatusUpdatesDialogComponent;
  let fixture: ComponentFixture<StatusUpdatesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusUpdatesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusUpdatesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
