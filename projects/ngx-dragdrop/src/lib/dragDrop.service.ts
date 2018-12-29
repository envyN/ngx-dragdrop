/* Copyright VMware, Inc. All rights reserved. VMware Confidential */
import { Injectable } from '@angular/core';

@Injectable({
              providedIn: 'root'
            })
export class NgxDragDropService {
  public name: string;
  public defaultInstanceName = 'ngx-dragdrop';

  get instanceName() {
    return this.name;
  }

  set instanceName(name: string) {
    this.name = name;
  }

  constructor() {
    this.setDefaultInstance();
  }

  setDefaultInstance() {
    this.name = this.defaultInstanceName;
  }

  isDefaultInstance() {
    return this.name === this.defaultInstanceName;
  }
}
