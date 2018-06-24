import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CourseListModule } from './course-list/course-list.module';
import { CoursesPageComponent } from './courses-page/courses-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesPageComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CourseListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
