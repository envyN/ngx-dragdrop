/* Copyright VMware, Inc. All rights reserved. VMware Confidential */
import {Directive, Renderer, ElementRef, Input, HostListener, Output, EventEmitter} from "@angular/core";
import {NgxDragDropService} from "./dragDrop.service";
@Directive({
    selector: '[ngx-droppable]'
})
export class NgxDroppableDirective {

    constructor(private el: ElementRef, private dragDropService: NgxDragDropService) {
    }

    @Output('ngx-droppable')
    private onDropData: EventEmitter<any> = new EventEmitter();

    @Input('ngx-dropTags')
    private dropTags: string[] = [this.dragDropService.instanceName];

    @Input('ngx-dropData')
    private dropData: any;

    @HostListener('dragenter', ['$event'])
    onDragEnter(event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        if (this.el.nativeElement === event.target) {
            if (this.dropTags.indexOf(this.dragDropService.instanceName) !== -1) {
                event.target.classList.add(this.dragDropService.instanceName);
            }
        }
    }


    @HostListener('dragover', ['$event'])
    onDragOver(event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        if (this.el.nativeElement === event.target) {
            if (this.dropTags.indexOf(this.dragDropService.instanceName) !== -1) {
                event.dataTransfer.effectAllowed = 'all';
                event.dataTransfer.dropEffect = 'move';
            } else {
                event.dataTransfer.effectAllowed = 'none';
                event.dataTransfer.dropEffect = 'none';
            }
        }
    }

    @HostListener('dragleave', ['$event'])
    onDragLeave(event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        if (this.el.nativeElement === event.target) {
            if (this.dropTags.indexOf(this.dragDropService.instanceName) !== -1) {
                event.target.classList.remove(this.dragDropService.instanceName);
            }
        }
    }

    @HostListener('drop', ['$event'])
    onDrop(event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        if (this.el.nativeElement === event.target) {
            let dragTag = this.dragDropService.instanceName;
            let data = event.dataTransfer.getData('data');
            let dragData = JSON.parse(data).dd;
            if (this.dropTags.indexOf(this.dragDropService.instanceName) !== -1) {
                event.target.classList.remove(this.dragDropService.instanceName);
                this.onDropData.emit({dragTag, dragData: dragData, dropData: this.dropData})
            }
        }
    }
}
