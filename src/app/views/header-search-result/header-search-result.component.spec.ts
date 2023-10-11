import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSearchResultComponent } from './header-search-result.component';

describe('HeaderSearchResultComponent', () => {
  let component: HeaderSearchResultComponent;
  let fixture: ComponentFixture<HeaderSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSearchResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
