/* Copyright VMware, Inc. All rights reserved. VMware Confidential */
import {NgModule, ModuleWithProviders} from "@angular/core";
import {NgxDraggableDirective} from "./draggable.directive";
import {NgxDroppableDirective} from "./droppable.directive";
import {NgxDragDropService} from "./dragDrop.service";
@NgModule({
  declarations: [
    NgxDraggableDirective,
    NgxDroppableDirective],
  providers: [NgxDragDropService],
  exports: [NgxDraggableDirective, NgxDroppableDirective]
})
export class NgxDragDropModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxDragDropModule,
      providers: []
    };
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: NgxDragDropModule,
      providers: []
    };
  }
}
