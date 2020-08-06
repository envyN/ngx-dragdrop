import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/root/app.component';
import { NgxDragDropModule } from 'ngx-dragdrop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { BasicExampleComponent } from './components/basic-example/basic-example.component';
import { AppModuleRouting } from './app.module.routing';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragNDropExampleComponent } from './components/drag-n-drop-example/drag-n-drop-example.component';
import { GroupedDragDropExampleComponent } from './components/grouped-drag-drop-example/grouped-drag-drop-example.component';
import { AngularComponentComponent } from './components/angular-component/angular-component.component';
import { TestComponent } from './components/angular-component/test/test.component';

@NgModule({
            declarations: [
              AppComponent,
              BasicExampleComponent,
              IntroductionComponent,
              DragNDropExampleComponent,
              GroupedDragDropExampleComponent,
              AngularComponentComponent,
              TestComponent
            ],
            imports: [
              AppModuleRouting,
              BrowserModule,
              NgxDragDropModule,
              BrowserAnimationsModule,
              ClarityModule,
              CommonModule,
              FormsModule
            ],
            providers: [],
            bootstrap: [AppComponent]
          })
export class AppModule {}
