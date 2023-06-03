import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBooksStatusComponent } from './user-books-status.component';

describe('UserBooksStatusComponent', () => {
  let component: UserBooksStatusComponent;
  let fixture: ComponentFixture<UserBooksStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserBooksStatusComponent]
    });
    fixture = TestBed.createComponent(UserBooksStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
