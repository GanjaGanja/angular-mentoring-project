import { Routes } from '@angular/router';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { AddCoursesPageComponent } from './add-courses-page/add-courses-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginPageComponent } from './login/login-page/login-page.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'courses', component: CoursesPageComponent },
  { path: 'courses/:id', component: AddCoursesPageComponent },
  { path: 'courses/new', component: AddCoursesPageComponent },

  { path: 'login', component: LoginPageComponent },

  { path: '**', component: PageNotFoundComponent }
];
