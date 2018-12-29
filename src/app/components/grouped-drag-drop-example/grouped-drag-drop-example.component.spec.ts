import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedDragDropExampleComponent } from './grouped-drag-drop-example.component';

describe('GroupedDragDropExampleComponent', () => {
  let component: GroupedDragDropExampleComponent;
  let fixture: ComponentFixture<GroupedDragDropExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupedDragDropExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedDragDropExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
