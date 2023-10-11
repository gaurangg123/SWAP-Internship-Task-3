import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulatoryGuidelinesComponent } from './regulatory-guidelines.component';

describe('RegulatoryGuidelinesComponent', () => {
  let component: RegulatoryGuidelinesComponent;
  let fixture: ComponentFixture<RegulatoryGuidelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegulatoryGuidelinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulatoryGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
