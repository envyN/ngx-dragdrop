import { NgModule } from '@angular/core';
import { NgxDraggableDirective } from './draggable.directive';
import { NgxDroppableDirective } from './droppable.directive';

@NgModule({
            imports: [],
            declarations: [
              NgxDraggableDirective,
              NgxDroppableDirective
            ],
            exports: [
              NgxDraggableDirective,
              NgxDroppableDirective
            ]
          })
export class NgxDragDropModule {}
