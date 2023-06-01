import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetalisComponent } from './book-detalis.component';

describe('BookDetalisComponent', () => {
  let component: BookDetalisComponent;
  let fixture: ComponentFixture<BookDetalisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookDetalisComponent]
    });
    fixture = TestBed.createComponent(BookDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
