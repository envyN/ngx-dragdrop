import { Component, OnInit } from '@angular/core';
import { IOnDropData } from 'ngx-dragdrop';

@Component({
             selector: 'app-grouped-drag-drop-example',
             templateUrl: './grouped-drag-drop-example.component.html',
             styleUrls: ['./grouped-drag-drop-example.component.scss']
           })
export class GroupedDragDropExampleComponent implements OnInit {
  public characters = [
    {
      name: 'Ned Stark',
      series: 'got'
    },
    {
      name: 'Daenerys',
      series: 'got'
    },
    {
      name: 'Chandler Bing',
      series: 'friends'
    },
    {
      name: 'Monica Geller',
      series: 'friends'
    },
    {
      name: 'Jon Snow',
      series: 'got'
    },
    {
      name: 'Cersei Lannister',
      series: 'got'
    },
    {
      name: 'Rachel Green',
      series: 'friends'
    },
    {
      name: 'Joey Tribbiani',
      series: 'friends'
    },
    {
      name: 'Tyrion Lannister',
      series: 'got'
    },
    {
      name: 'Khal Drogo',
      series: 'got'
    },
    {
      name: 'Ross Geller',
      series: 'friends'
    },
    {
      name: 'Phoebe',
      series: 'friends'
    }
  ];
  public gotChars = [];
  public friendsChars = [];

  constructor() { }

  ngOnInit() {
  }

  public getContainer(containerName: string) {
    switch (containerName) {
      case 'friends':
        return this.friendsChars;
      case 'got':
        return this.gotChars;
      case 'all':
        return this.characters;
    }
  }

  public onDrop(d: IOnDropData) {
    if (d.dropData !== d.dragData.container) {
      const dropContainer = this.getContainer(d.dropData);
      const dragContainer = this.getContainer(d.dragData.container);
      const dragIndex = dragContainer.findIndex((ch) => {
        return ch.name === d.dragData.char.name;
      });
      if (dragIndex > -1) {
        const removed = dragContainer.splice(dragIndex, 1);
        dropContainer.push(...removed);
      }
    }
  }
}
