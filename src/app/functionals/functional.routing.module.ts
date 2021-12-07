import { Routes } from '@angular/router';
import { FunctionalDragDropComponent } from './drag-drop/drag-drop.component';
import { FunctionalDynamicComponent } from './dynamic-component/dynamic.component';
import { FunctionalEditorBasicComponent } from './slate-editor/basic/basic.component';
import { FunctionalEditorComponent } from './slate-editor/editor.component';
import { FunctionalEditorEmailComponent } from './slate-editor/email/email.component';
import { FunctionalEditorMentionsComponent } from './slate-editor/mentions/mentions.component';
import { FunctionalEditorUnilineComponent } from './slate-editor/uniline/uniline.component';

export const functionalRoutes: Routes = [
  {
    path: 'drag',
    component: FunctionalDragDropComponent,
  },
  {
    path: 'dynamic',
    component: FunctionalDynamicComponent,
  },
  {
    path: 'editor',
    component: FunctionalEditorComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'basic',
      },
      {
        path: 'basic',
        component: FunctionalEditorBasicComponent,
      },
      {
        path: 'uniline',
        component: FunctionalEditorUnilineComponent,
      },
      {
        path: 'email',
        component: FunctionalEditorEmailComponent,
      },
      {
        path: 'mention',
        component: FunctionalEditorMentionsComponent,
      },
    ],
  },
];
