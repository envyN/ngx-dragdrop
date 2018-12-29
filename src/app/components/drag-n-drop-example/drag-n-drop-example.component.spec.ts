import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragNDropExampleComponent } from './drag-n-drop-example.component';

describe('DragNDropExampleComponent', () => {
  let component: DragNDropExampleComponent;
  let fixture: ComponentFixture<DragNDropExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragNDropExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragNDropExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
