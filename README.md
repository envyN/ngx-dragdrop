# ngx-dragdrop

A minimal angular 2.0+ module library for Drag and Drop using native HTML5 Drag and Drop.

#### Demo: todo

## Installation
Install with [npm](http://www.npmjs.com/):

```sh
$ npm install ngx-dragdrop
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
<div [ngx-draggable]="true"
    [ngx-draggedClass]="'draggedClass'" 
    [ngx-dragTag]="'dragType1'"
    [ngx-dragData]="{a:4,b:6}">
</div>
<div (ngx-droppable)="onDrop($event)"
    [ngx-dropData]="{dropObjectName:'foo'}"
    [ngx-dropTags]="['dragType1','dragType2']">
</div>
```
```
onDrop(event:{dragTag, dragData, dropData}){
    
}
```


### Drag API
#### `ngx-draggable`
```html
<div [ngx-draggable]="true">
```
If `ngx-draggable` is true, users will be able to drag the node/element.


#### `ngx-draggedClass`
```html
<div [ngx-draggable]="true" ngx-draggedClass="draggedCls">
```
`ngx-draggedClass` allows you to add a class(draggedCls) when the drag on the element starts.
The class is removed from the node on dragend.

#### `ngx-dragTag`
```html
<div [ngx-draggable]="true" ngx-dragTag="dragType1">
```
`ngx-dragTag` allows you to categorise elements into different drag types.
A node of dragType 'foo' will only be droppable inside a node which has 'foo' in its `ngx-dropTags`

#### `ngx-dragData`
```html
<div [ngx-draggable]="true" [ngx-dragData]="{a:4,b:6}">
```
`ngx-dragData` allows you to attach data to the draggable node.
>The data associated to `ngx-dragData` would be serialised while dragStar and put into the HTML5 dataTransfer object.

### Drop API
#### `ngx-droppable`
```html
<div (ngx-droppable)="onDrop($event)">
```
if `ngx-droppable` is present, dragged elements can be dropped on them.
If an `ngx-dragTag` is present on the dragged node, the same should be present in the `ngx-dropTags` array for drag to be allowed

#### `ngx-dropTags`
```html
<div (ngx-droppable)="onDrop($event)" [ngx-dropTags]="['foo','bar','dragType1', 'dragType3']">
```
`ngx-dropTags` allows you to determine all the dragTag types that are allowed to be dropped on this node.
This expects an array of strings

#### `ngx-dropData`
```html
<div (ngx-droppable)="onDrop($event)" [ngx-dropData]="{a:4,b:6}">
```
`ngx-dropData` allows you to attach data to the droppable node.

#### Drop Event Object Interface
The object that is passed to the dropHandler defined as the value for (ngx-droppable) has the following keys:
 ``dragTag, dragData, dropData``
 >Since the directives use HTML dataTransfer Object, the `ngx-dragData` is a copy(deserialized event dataTransfer object) of the original object, it is recommended that only uniquely identifying data for the dragged nodes be passed into `ngx-dragData` and the original object if needed, be retrieved using this information.

## Build
Check out `/src` for the original source code.

## License
MIT
