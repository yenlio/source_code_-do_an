import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerPostsComponent } from './manager-posts.component';

describe('ManagerPostsComponent', () => {
  let component: ManagerPostsComponent;
  let fixture: ComponentFixture<ManagerPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
