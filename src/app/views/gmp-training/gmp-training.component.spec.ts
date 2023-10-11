import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmpTrainingComponent } from './gmp-training.component';

describe('GmpTrainingComponent', () => {
  let component: GmpTrainingComponent;
  let fixture: ComponentFixture<GmpTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GmpTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GmpTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
