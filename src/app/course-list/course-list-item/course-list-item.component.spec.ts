import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

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
    title: 'title string',
    creationDate: 'creation string',
    duration: 60,
    description: 'description string'
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

  it('should return id of item to delete on "Delete" button click', () => {
    fixture.detectChanges();

    const expectedCourseItem = {
      id: 1,
      title: 'title string',
      creationDate: 'creation string',
      duration: 60,
      description: 'description string'
    };

    const deleteButton = fixture.debugElement.query(By.css('.course-button:last-child'));
    deleteButton.triggerEventHandler('click', null);

    expect(testHost.courseItem.id).toEqual(expectedCourseItem.id);
  });
});
