import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlluserBooksComponent } from './alluser-books.component';

describe('AlluserBooksComponent', () => {
  let component: AlluserBooksComponent;
  let fixture: ComponentFixture<AlluserBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlluserBooksComponent]
    });
    fixture = TestBed.createComponent(AlluserBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
