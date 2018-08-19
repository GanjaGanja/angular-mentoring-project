import { Injectable } from '@angular/core';
import { CourseListItem } from './course-list-item.model';

const courseItems: CourseListItem[] = [
  {
    id: 1,
    title: 'Course List Item 1',
    creationDate: new Date('05.05.2018'),
    duration: 3600,
    topRated: false,
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Proin malesuada, odio in ullamcorper congue, metus justo dictum velit, nec sollicitudin mauris urna eget purus.
      Phasellus nulla sem, placerat venenatis scelerisque eget, scelerisque pellentesque ex. Fusce molestie sed lectus in ultrices.
    `
  },
  {
    id: 2,
    title: 'Course List Item 2',
    creationDate: new Date('04.05.2018'),
    duration: 4780,
    topRated: true,
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Proin malesuada, odio in ullamcorper congue, metus justo dictum velit, nec sollicitudin mauris urna eget purus.
      Phasellus nulla sem, placerat venenatis scelerisque eget, scelerisque pellentesque ex. Fusce molestie sed lectus in ultrices.
    `
  },
  {
    id: 3,
    title: 'Course List Item 3',
    creationDate: new Date('06.30.2019'),
    duration: 2800,
    topRated: false,
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Proin malesuada, odio in ullamcorper congue, metus justo dictum velit, nec sollicitudin mauris urna eget purus.
      Phasellus nulla sem, placerat venenatis scelerisque eget, scelerisque pellentesque ex. Fusce molestie sed lectus in ultrices.
    `
  }
];

@Injectable({
  providedIn: 'root'
})
export class CourseListItemService {

  constructor() { }

  private getItemIndexById(courseListItemId: number): number {
    return this.getList().indexOf(this.getItemById(courseListItemId));
  }

  public getList(): CourseListItem[] {
    return courseItems;
  }

  public createCourse(newCourseListItem: CourseListItem): void {
    this.getList().push(newCourseListItem);
  }

  public getItemById(courseListItemId: number): CourseListItem {
    return this.getList().find(x => x.id === courseListItemId);
  }

  public updateItem(courseListItemId: number, newCourseListItem: CourseListItem): void {
    this.getList()[this.getItemIndexById(courseListItemId)] = newCourseListItem;
  }

  public removeItem(courseListItemId: number): void {
    this.getList().splice(this.getItemIndexById(courseListItemId), 1);
  }
}
