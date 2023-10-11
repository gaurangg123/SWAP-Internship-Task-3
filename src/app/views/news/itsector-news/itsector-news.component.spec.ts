import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItsectorNewsComponent } from './itsector-news.component';

describe('ItsectorNewsComponent', () => {
  let component: ItsectorNewsComponent;
  let fixture: ComponentFixture<ItsectorNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItsectorNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItsectorNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
