import { TestBed } from '@angular/core/testing';

import { NgxDragDropService } from './dragDrop.service';

describe('NgxDragDropService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxDragDropService = TestBed.get(NgxDragDropService);
    expect(service)
      .toBeTruthy();
  });
});
