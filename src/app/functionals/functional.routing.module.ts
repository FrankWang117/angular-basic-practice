import { Routes } from '@angular/router';
import { FunctionalDragDropComponent } from './drag-drop/drag-drop.component';
import { FunctionalDynamicComponent } from './dynamic-component/dynamic.component';

export const functionalRoutes: Routes = [
  {
    path: 'drag',
    component: FunctionalDragDropComponent,
  },
  {
    path: 'dynamic',
    component: FunctionalDynamicComponent,
  },
];
