import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesContainer } from './categories.container';

describe('CategoryComponent', () => {
  let component: CategoriesContainer;
  let fixture: ComponentFixture<CategoriesContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
