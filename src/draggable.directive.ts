/* Copyright VMware, Inc. All rights reserved. VMware Confidential */
import {Directive, Renderer, ElementRef, Input, HostListener} from "@angular/core";
import {NgxDragDropService} from "./dragDrop.service";
@Directive({
    selector: '[ngx-draggable]'
})
export class NgxDraggableDirective {
    private _isDraggable: boolean = false;

    constructor(private el: ElementRef, private dragDropService: NgxDragDropService) {
    }

    @Input('ngx-draggable')
    set isDraggable(dragEnabled) {
        this.el.nativeElement.setAttribute('draggable', dragEnabled);
        this._isDraggable = dragEnabled;
    }

    get isDraggable() {
        return this._isDraggable;
    }

    @Input('ngx-dragTag')
    private dragTag: string;

    @Input('ngx-draggedClass')
    private draggedClass: string;

    @Input('ngx-dragData')
    private dragData: any;

    @HostListener('dragstart', ['$event'])
    onDragStart(event) {
        if (this.el.nativeElement === event.target) {
            event.target.classList.add(this.draggedClass);
            event.dataTransfer.setData('data', JSON.stringify({dd: this.dragData}));
            if (this.dragTag) {
                this.dragDropService.instanceName = this.dragTag;
            }
            else {
                this.dragDropService.setDefaultInstance();
            }
        }
    }

    @HostListener('dragend', ['$event'])
    onDragEnd(event) {
        if (this.el.nativeElement === event.target) {
            event.target.classList.remove(this.draggedClass);
        }
    }
}
