import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallSheetComponent } from './install-sheet.component';

describe('InstallSheetComponent', () => {
  let component: InstallSheetComponent;
  let fixture: ComponentFixture<InstallSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
