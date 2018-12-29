import { Component, OnInit } from '@angular/core';

@Component({
             selector: 'app-basic-example',
             templateUrl: './basic-example.component.html',
             styleUrls: ['./basic-example.component.scss']
           })
export class BasicExampleComponent implements OnInit {
  public drag1 = true;
  public drag1Code = `@Component({...})
export class TestComponent {
  ...
  public isDraggable = true;
  ...
}`;
  public drag2StyleCode = `.draggable {
  opacity: 0.2;
  color: red;
}`;

  constructor() { }

  ngOnInit() {
  }

}
