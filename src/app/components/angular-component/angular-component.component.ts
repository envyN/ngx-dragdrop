import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-component',
  templateUrl: './angular-component.component.html',
  styleUrls: ['./angular-component.component.scss']
})
export class AngularComponentComponent implements OnInit {
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
