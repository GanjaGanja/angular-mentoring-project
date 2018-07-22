import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { CourseListModule } from './course-list/course-list.module';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { AddCoursesPageComponent } from './add-courses-page/add-courses-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesPageComponent,
    AddCoursesPageComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    LoginModule,
    CourseListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
