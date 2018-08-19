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

  public logItemId(id: number): void {
    console.log(`Delete Course Item Id = ${id}`);
  }
}
