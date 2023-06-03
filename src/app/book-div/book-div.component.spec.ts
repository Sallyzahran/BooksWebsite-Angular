import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDivComponent } from './book-div.component';

describe('BookDivComponent', () => {
  let component: BookDivComponent;
  let fixture: ComponentFixture<BookDivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookDivComponent]
    });
    fixture = TestBed.createComponent(BookDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
