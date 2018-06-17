import { TestBed, inject } from '@angular/core/testing';

import { CourseListItemService } from './course-list-item.service';

describe('CourseListItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseListItemService]
    });
  });

  it('should be created', inject([CourseListItemService], (service: CourseListItemService) => {
    expect(service).toBeTruthy();
  }));
});
