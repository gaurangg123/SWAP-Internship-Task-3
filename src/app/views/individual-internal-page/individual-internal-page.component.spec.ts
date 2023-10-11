import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualInternalPageComponent } from './individual-internal-page.component';

describe('IndividualInternalPageComponent', () => {
  let component: IndividualInternalPageComponent;
  let fixture: ComponentFixture<IndividualInternalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualInternalPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualInternalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
