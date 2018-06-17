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
        description: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Proin malesuada, odio in ullamcorper congue, metus justo dictum velit, nec sollicitudin mauris urna eget purus.
          Phasellus nulla sem, placerat venenatis scelerisque eget, scelerisque pellentesque ex. Fusce molestie sed lectus in ultrices.
        `
      },
      {
        id: 2,
        title: 'Course List Item 2',
        creationDate: '15.05.2018',
        duration: 4780,
        description: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Proin malesuada, odio in ullamcorper congue, metus justo dictum velit, nec sollicitudin mauris urna eget purus.
          Phasellus nulla sem, placerat venenatis scelerisque eget, scelerisque pellentesque ex. Fusce molestie sed lectus in ultrices.
        `
      },
      {
        id: 3,
        title: 'Course List Item 3',
        creationDate: '30.06.2018',
        duration: 2800,
        description: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Proin malesuada, odio in ullamcorper congue, metus justo dictum velit, nec sollicitudin mauris urna eget purus.
          Phasellus nulla sem, placerat venenatis scelerisque eget, scelerisque pellentesque ex. Fusce molestie sed lectus in ultrices.
        `
      }
    ];
  }
}
