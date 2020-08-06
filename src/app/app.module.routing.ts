import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BasicExampleComponent } from './components/basic-example/basic-example.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { DragNDropExampleComponent } from './components/drag-n-drop-example/drag-n-drop-example.component';
import { GroupedDragDropExampleComponent } from './components/grouped-drag-drop-example/grouped-drag-drop-example.component';
import { AngularComponentComponent } from './components/angular-component/angular-component.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: IntroductionComponent
  },
  {
    path: 'basic',
    component: BasicExampleComponent
  },
  {
    path: 'dragdrop',
    component: DragNDropExampleComponent
  },
  {
    path: 'groupeddragdrop',
    component: GroupedDragDropExampleComponent
  },
  {
    path: 'angularcomponent',
    component: AngularComponentComponent
  },
  {
    path: '**',
    redirectTo: 'about',
    pathMatch: 'full'
  }
];

@NgModule({
            imports: [RouterModule.forRoot(routes,
                                           {
                                             useHash: true,
                                             preloadingStrategy: PreloadAllModules
                                           })],
            exports: [RouterModule]
          })
export class AppModuleRouting {}
