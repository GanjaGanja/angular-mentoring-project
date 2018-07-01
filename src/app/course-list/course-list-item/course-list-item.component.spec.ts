import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { CourseListItem } from '../course-list-item.model';
import { CourseListItemComponent } from './course-list-item.component';

@Component({
  template: `
    <app-course-list-item
      [courseItem]="courseItem"
      (click)="handleDelete($event)"
    ></app-course-list-item>`
})
class TestHostComponent {
  public courseItem: CourseListItem = {
    id: 1,
    title: 'string',
    creationDate: 'string',
    duration: 60,
    description: 'string'
  };
  public deletedCourseItem: CourseListItem;
  public handleDelete(deletedCourseItem: CourseListItem) {
    this.deletedCourseItem.id = deletedCourseItem.id;
  }
}

describe('CourseListItemComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseListItemComponent,
        TestHostComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(testHost).toBeTruthy();
  });
});
