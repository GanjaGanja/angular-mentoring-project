import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ROUTES } from '../app.routes';
import { MaterialModule } from './../shared/material/material.module';
import { CoreModule } from './../core/core.module';

import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    MaterialModule,
    CoreModule
  ],
  declarations: [
    CourseListComponent,
    CourseListItemComponent
  ],
  exports: [
    CourseListComponent
  ]
})
export class CourseListModule { }
