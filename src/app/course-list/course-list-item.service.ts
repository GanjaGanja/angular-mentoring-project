import { Injectable } from '@angular/core';
import { CourseListItem } from './course-list-item.model';

@Injectable({
  providedIn: 'root'
})
export class CourseListItemService {

  constructor() { }

  public getCourseItems(): CourseListItem[] {
    return [
      {
        id: 1,
        title: 'Course List Item 1',
        creationDate: '05.05.2018',
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
        creationDate: '01.01.2017',
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
        creationDate: '06.30.2018',
        duration: 2800,
        topRated: false,
        description: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Proin malesuada, odio in ullamcorper congue, metus justo dictum velit, nec sollicitudin mauris urna eget purus.
          Phasellus nulla sem, placerat venenatis scelerisque eget, scelerisque pellentesque ex. Fusce molestie sed lectus in ultrices.
        `
      }
    ];
  }

  public getList(): void {
    console.log('getList() called');
  }

  public createCourse(): void {
    console.log('createCourse() called');
  }

  public getItemById(): void {
    console.log('getItemById() called');
  }

  public updateItem(): void {
    console.log('updateItem() called');
  }

  public removeItem(): void {
    console.log('removeItem() called');
  }
}
