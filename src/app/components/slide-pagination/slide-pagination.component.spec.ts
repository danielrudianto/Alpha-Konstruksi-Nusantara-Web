import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidePaginationComponent } from './slide-pagination.component';

describe('SlidePaginationComponent', () => {
  let component: SlidePaginationComponent;
  let fixture: ComponentFixture<SlidePaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlidePaginationComponent]
    });
    fixture = TestBed.createComponent(SlidePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
