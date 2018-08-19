import { Component, OnInit } from '@angular/core';
import { CourseListItem } from '../course-list-item.model';
import { CourseListItemService } from '../course-list-item.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  public courseListItems: CourseListItem[] = [];

  constructor(private courseListService: CourseListItemService) {
    console.log('CourseListItemService DI created');
  }

  ngOnInit() {
    this.courseListItems = this.courseListService.getList();
  }

  private removeCourseListItemById(id: number): void {
    this.courseListService.removeItem(id);
  }

  public openConfirmWindow(id: number) {
    if (window.confirm('Do you really want to delete this course?')) {
      this.removeCourseListItemById(id);
    }
  }
}
