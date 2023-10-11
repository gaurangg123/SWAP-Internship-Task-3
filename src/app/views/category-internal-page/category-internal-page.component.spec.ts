import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryInternalPageComponent } from './category-internal-page.component';

describe('CategoryInternalPageComponent', () => {
  let component: CategoryInternalPageComponent;
  let fixture: ComponentFixture<CategoryInternalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryInternalPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryInternalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
