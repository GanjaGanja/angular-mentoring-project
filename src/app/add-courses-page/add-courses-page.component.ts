import { Component, OnInit } from '@angular/core';
import { AddCoursesPage } from './add-courses-page.model';

@Component({
  selector: 'app-add-courses-page',
  templateUrl: './add-courses-page.component.html',
  styleUrls: ['./add-courses-page.component.scss']
})
export class AddCoursesPageComponent implements OnInit {
  public addCourse: AddCoursesPage;

  constructor() { }

  ngOnInit() {
  }

  public handleSubmit(): void {
    console.log('submit button pressed');
  }

  public handleCancel(): void {
    console.log('cancel button pressed');
  }
}
