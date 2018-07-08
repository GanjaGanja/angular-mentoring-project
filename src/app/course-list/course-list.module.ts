import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../shared/material/material.module';

import { HighlightBorderDirective } from './../shared/directives/highlight-border/highlight-border.directive';

import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    HighlightBorderDirective,
    CourseListComponent,
    CourseListItemComponent
  ],
  exports: [
    CourseListComponent
  ]
})
export class CourseListModule { }
