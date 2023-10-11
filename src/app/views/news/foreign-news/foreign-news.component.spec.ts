import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignNewsComponent } from './foreign-news.component';

describe('ForeignNewsComponent', () => {
  let component: ForeignNewsComponent;
  let fixture: ComponentFixture<ForeignNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForeignNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeignNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
