# ngx-dragdrop

A minimal angular 2.0+ module library for Drag and Drop using native HTML5 Drag and Drop.

#### Demo: https://envyn.github.io/ngx-dragdrop/

## Installation
Install with [npm](http://www.npmjs.com/):

```sh
$ npm install ngx-dragdrop
```
Note: For angular 4-5 projects, use ngx-dragdrop@^1.0.1
```sh
$ npm install ngx-dragdrop@^1.0.1
```

Add the ngx-dragdrop module as a dependency to your application module:

```
import { NgxDragDropModule } from 'ngx-dragdrop';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    NgxDragDropModule,
    ...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Usage
#### Minimal Example
```html
<div [ngxDraggable]="true"
    [ngxDraggedClass]="'draggedClass'" 
    [ngxDragTag]="'dragType1'"
    [ngxDragData]="{a:4,b:6}">
</div>
<div (ngxDroppable)="onDrop($event)"
    [ngxDropData]="{dropObjectName:'foo'}"
    [ngxDropTags]="['dragType1','dragType2']">
</div>
```
```
onDrop(event:IOnDropData}){
    
}
```


### Drag API
#### `ngx-draggable`
```html
<div [ngxDraggable]="true">
```
If `ngxDraggable` is true, users will be able to drag the node/element.


#### `ngxDraggedClass`
```html
<div [ngxDraggable]="true" ngxDraggedClass="draggedCls">
```
`ngxDraggedClass` allows you to add a class(draggedCls) when the drag on the element starts.
The class is removed from the node on dragend.

#### `ngxDragTag`
```html
<div [ngxDraggable]="true" ngxDragTag="dragType1">
```
`ngxDragTag` allows you to categorise elements into different drag types.
A node of dragType 'foo' will only be droppable inside a node which has 'foo' in its `ngxDropTags`

#### `ngx-dragData`
```html
<div [ngxDraggable]="true" [ngxDragData]="{a:4,b:6}">
```
`ngxDragData` allows you to attach data to the draggable node.
>The data associated to `ngxDragData` would be serialised while dragStar and put into the HTML5 dataTransfer object.

### Drop API
#### `ngxDroppable`
```html
<div (ngxDroppable)="onDrop($event)">
```
if `ngxDroppable` is present, dragged elements can be dropped on them.
If an `ngxDragTag` is present on the dragged node, the same should be present in the `ngxDropTags` array for drag to be allowed

#### `ngxDropTags`
```html
<div (ngxDroppable)="onDrop($event)" [ngxDropTags]="['foo','bar','dragType1', 'dragType3']">
```
`ngxDropTags` allows you to determine all the dragTag types that are allowed to be dropped on this node.
This expects an array of strings

#### `ngxDropData`
```html
<div (ngxDroppable)="onDrop($event)" [ngxDropData]="{a:4,b:6}">
```
`ngxDropData` allows you to attach data to the droppable node.

#### Drop Event Object Interface
The object that is passed to the dropHandler defined as the value for (ngxDroppable) is of type `IOnDropData` with following keys:
 ``dragTag, dragData, dropData``
 >Since the directives use HTML dataTransfer Object, the `ngxDragData` is a copy(deserialized event dataTransfer object) of the original object, it is recommended that only uniquely identifying data for the dragged nodes be passed into `ngxDragData` and the original object if needed, be retrieved using this information.

## Contribute
* Fork the repo
* get your local git clone of the repo fork using `git clone ...`
* Run `yarn install --pure-lockfile`
* Run `yarn build-lib:w` to build the library locally and watch for changes
* Run `yarn start` (You should have your local app running at http://localhost:4200)
* Make fixes/changes
* Commit and push to fork
* Send pull request from GitHub

## License
MIT
