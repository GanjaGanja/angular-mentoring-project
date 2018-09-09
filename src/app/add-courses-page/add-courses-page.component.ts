import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CourseListItem } from '../course-list/course-list-item.model';
import { CourseListItemService } from '../course-list/course-list-item.service';

@Component({
  selector: 'app-add-courses-page',
  templateUrl: './add-courses-page.component.html',
  styleUrls: ['./add-courses-page.component.scss']
})
export class AddCoursesPageComponent implements OnInit {
  public courseItem: CourseListItem;
  private newCourseItem: CourseListItem = {
    id: 0,
    title: '',
    creationDate: new Date(),
    duration: 0,
    description: ''
  }
  private courseItemId: number;

  constructor(
    private courseListService: CourseListItemService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.courseItemId = +params['id'];

      if (this.courseItemId) {
        this.courseItem = this.courseListService.getItemById(this.courseItemId);
      } else {
        this.courseItem = this.newCourseItem;
      }
    });
  }

  private navigateToCoursesPage(): void {
    this.router.navigate(['courses']);
  }

  public handleSubmit(): void {
    if (this.courseItemId) {
      this.courseListService.updateItem(this.courseItem.id, this.courseItem);
    } else {
      this.courseListService.createCourse(this.courseItem);
    }

    this.navigateToCoursesPage();
  }

  public handleCancel(): void {
    this.navigateToCoursesPage();
  }
}
