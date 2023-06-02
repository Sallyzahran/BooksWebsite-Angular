import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorAdminComponent } from './author-admin.component';

describe('AuthorAdminComponent', () => {
  let component: AuthorAdminComponent;
  let fixture: ComponentFixture<AuthorAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorAdminComponent]
    });
    fixture = TestBed.createComponent(AuthorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
