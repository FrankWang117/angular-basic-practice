import { Routes } from '@angular/router';
import { FunctionalDIComponent } from './di/di.component';
import { FunctionalDragDropComponent } from './drag-drop/drag-drop.component';
import { FunctionalDynamicComponent } from './dynamic-component/dynamic.component';
import { FunctionalEditorBasicComponent } from './slate-editor/basic/basic.component';
import { FunctionalEditorDataTransformComponent } from './slate-editor/data-transform/data-transform.component';
import { FunctionalEditorComponent } from './slate-editor/editor.component';
import { FunctionalEditorEmailComponent } from './slate-editor/email/email.component';
import { FunctionalEditorInsertDynamicDataComponent } from './slate-editor/insert-dynamic-data/insert.component';
import { FunctionalEditorMentionsComponent } from './slate-editor/mentions/mentions.component';
import { FunctionalEditorMoreTemplateComponent } from './slate-editor/more-template/more.component';
import { FunctionalEditorReadOnlyComponent } from './slate-editor/read-only/read-only.component';
import { FunctionalEditorUnilineComponent } from './slate-editor/uniline/uniline.component';
import { FunctionalStructuralDirectiveComponent } from './structural-directive/structural.component';

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
            {
                path: 'transform',
                component: FunctionalEditorDataTransformComponent,
            },
            {
                path: 'dynamic',
                component: FunctionalEditorInsertDynamicDataComponent,
            },
            {
                path: 'more',
                component: FunctionalEditorMoreTemplateComponent,
            },
            {
                path: 'read-only',
                component: FunctionalEditorReadOnlyComponent,
            },
        ],
    },
    {
        path: 'structural-directive',
        component: FunctionalStructuralDirectiveComponent,
    },
    {
        path: 'di',
        component: FunctionalDIComponent,
    },
];
