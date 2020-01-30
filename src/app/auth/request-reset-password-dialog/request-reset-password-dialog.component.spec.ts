import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestResetPasswordDialogComponent } from './request-reset-password-dialog.component';

describe('RequestResetPasswordDialogComponent', () => {
  let component: RequestResetPasswordDialogComponent;
  let fixture: ComponentFixture<RequestResetPasswordDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestResetPasswordDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestResetPasswordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
