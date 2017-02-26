/* Copyright VMware, Inc. All rights reserved. VMware Confidential */
import {Injectable} from "@angular/core";
@Injectable()
export class NgxDragDropService {
    private name: string;
    private defaultInstanceName: string = 'ngx-dragdrop';

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
