import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseListItem } from '../course-list-item.model';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss']
})
export class CourseListItemComponent implements OnInit {
  @Input() public courseItem: CourseListItem;
  @Output() public deleteItem: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public handleDelete(): void {
    this.deleteItem.emit(this.courseItem.id);
  }
}
