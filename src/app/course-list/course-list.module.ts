import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseListComponent } from './course-list/course-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CourseItemComponent,
    CourseListComponent
  ],
  exports: [
    CourseListComponent
  ]
})
export class CourseListModule { }
