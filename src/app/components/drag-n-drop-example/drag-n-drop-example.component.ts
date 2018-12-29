import { Component, OnInit } from '@angular/core';
import { IOnDropData } from 'ngx-dragdrop';

@Component({
             selector: 'app-drag-n-drop-example',
             templateUrl: './drag-n-drop-example.component.html',
             styleUrls: ['./drag-n-drop-example.component.scss']
           })
export class DragNDropExampleComponent implements OnInit {
  public drag1 = true;
  public drop1Done = false;
  public drop2Done = false;
  public drop3Actions: string[] = [];
  public drop31Done = false;
  public drop32Done = false;
  public drop2Val = '';
  public drop31Val = '';
  public drop32Val = '';
  public drop1Code = `import { IOnDropData } from 'ngx-dragdrop';
@Component({...})
export class TestComponent {
  ...
  public onDrop(d: IOnDropData){
  }
  ...
}`;
  public drop2Code = `import { IOnDropData } from 'ngx-dragdrop';
@Component({...})
export class TestComponent {
  ...
  public onDrop(d: IOnDropData){
  this.dropVal = d.dragData.name;
  }
  ...
}`;
  public drop3Code = `import { IOnDropData } from 'ngx-dragdrop';
@Component({...})
export class TestComponent {
  ...
  public onDrop(d: IOnDropData) {
    console.log(d.dropData.name, d.dragData.name);
  }
  ...
}`;

  constructor() { }

  ngOnInit() {
  }

  public onDrop1(d: any) {
    this.drop1Done = true;
    window.setTimeout(() => {
                        this.drop1Done = false;
                      },
                      1000);
  }

  public onDrop2(d: IOnDropData) {
    this.drop2Done = true;
    this.drop2Val = d.dragData.name;
    window.setTimeout(() => {
                        this.drop2Done = false;
                      },
                      1000);
  }

  public onDrop3(d: IOnDropData) {
    if (d.dropData.name === 'drop1') {
      this.drop31Done = true;
      this.drop31Val = d.dragData.name;
      this.drop3Actions.unshift(new Date() + ': ' + d.dragData.name + ' dropped on ' + d.dropData.name);
      window.setTimeout(() => {
                          this.drop31Done = false;
                        },
                        3000);
    }
    if (d.dropData.name === 'drop2') {
      this.drop32Done = true;
      this.drop32Val = d.dragData.name;
      this.drop3Actions.unshift(new Date() + ': ' + d.dragData.name + ' dropped on ' + d.dropData.name);
      window.setTimeout(() => {
                          this.drop32Done = false;
                        },
                        3000);
    }
  }
}
