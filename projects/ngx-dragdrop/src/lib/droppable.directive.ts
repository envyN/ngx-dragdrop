/* Copyright VMware, Inc. All rights reserved. VMware Confidential */
import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { NgxDragDropService } from './dragDrop.service';

export interface IOnDropData {
  dragTag: string;
  dragData: any;
  dropData: any;
}

@Directive({
             selector: '[ngxDroppable]'
           })
export class NgxDroppableDirective {

  constructor(private el: ElementRef, private dragDropService: NgxDragDropService) {
  }

  @Output()
  public ngxDroppable: EventEmitter<IOnDropData> = new EventEmitter();

  @Input()
  public ngxDropTags: string[] = [this.dragDropService.instanceName];

  @Input()
  public ngxDropData: any;

  @HostListener('dragenter', ['$event'])
  onDragEnter(event) {
    if (event.preventDefault) {
      event.preventDefault();
    }
    if (event.stopPropagation) {
      event.stopPropagation();
    }
    if (this.el.nativeElement === event.target) {
      if (this.ngxDropTags.indexOf(this.dragDropService.instanceName) !== -1) {
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
      if (this.ngxDropTags.indexOf(this.dragDropService.instanceName) !== -1) {
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
      if (this.ngxDropTags.indexOf(this.dragDropService.instanceName) !== -1) {
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
      const dragTag = this.dragDropService.instanceName;
      const data = event.dataTransfer.getData('data');
      let dragData;
      try {
        dragData = JSON.parse(data).dd;
        if (this.ngxDropTags.indexOf(this.dragDropService.instanceName) !== -1) {
          event.target.classList.remove(this.dragDropService.instanceName);
          this.ngxDroppable.emit({dragTag, dragData: dragData, dropData: this.ngxDropData});
        }
      } catch (e) {
        if (console && typeof console.log === 'function') {
          console.log(e);
          console.log('Drop failed! Data: ', data);
        }
      }
    }
  }
}
