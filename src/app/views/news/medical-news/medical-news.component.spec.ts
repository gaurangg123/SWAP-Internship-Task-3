import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalNewsComponent } from './medical-news.component';

describe('MedicalNewsComponent', () => {
  let component: MedicalNewsComponent;
  let fixture: ComponentFixture<MedicalNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
