import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { NgCodeDiffModule } from 'ng-code-diff';
import { SlateModule } from 'slate-angular';
import { AppRoutingModule } from '../app-routing.module';
import { FunctionalDIChild1Component } from './di/child-1.component';
import { FunctionalDIComponent } from './di/di.component';
import { FunctionalDragDropComponent } from './drag-drop/drag-drop.component';
import { FunctionalDynamicComponent } from './dynamic-component/dynamic.component';
import { FunctionalEditorBasicComponent } from './slate-editor/basic/basic.component';
import { TheBaseElementComponent } from './slate-editor/common/label/base-element.component';
import { CommonLabelComponent } from './slate-editor/common/label/label.component';
import { FunctionalEditorDataTransformComponent } from './slate-editor/data-transform/data-transform.component';
import { FunctionalEditorComponent } from './slate-editor/editor.component';
import { FunctionalEditorEmailComponent } from './slate-editor/email/email.component';
import { FunctionalEditorInsertDynamicDataComponent } from './slate-editor/insert-dynamic-data/insert.component';
import { FunctionalEditorMentionsComponent } from './slate-editor/mentions/mentions.component';
import { FunctionalEditorMoreTemplateComponent } from './slate-editor/more-template/more.component';
import { FunctionalEditorReadOnlyComponent } from './slate-editor/read-only/read-only.component';
import { FunctionalEditorUnilineComponent } from './slate-editor/uniline/uniline.component';
import { FunctionalStructuralDirectiveComponent } from './structural-directive/structural.component';

@NgModule({
    imports: [
        BrowserModule,
        DragDropModule,
        MatButtonModule,
        MatMenuModule,
        MatSlideToggleModule,
        MatTabsModule,
        MatToolbarModule,
        MatIconModule,
        NgCodeDiffModule,
        FormsModule,
        SlateModule,
        AppRoutingModule,
    ],
    exports: [],
    declarations: [
        FunctionalDragDropComponent,
        FunctionalDynamicComponent,
        FunctionalEditorComponent,
        FunctionalEditorBasicComponent,
        FunctionalEditorUnilineComponent,
        FunctionalEditorEmailComponent,
        FunctionalEditorMentionsComponent,
        FunctionalEditorDataTransformComponent,
        FunctionalEditorInsertDynamicDataComponent,
        FunctionalEditorMoreTemplateComponent,
        FunctionalEditorReadOnlyComponent,
        FunctionalDIComponent,
        FunctionalDIChild1Component,
        TheBaseElementComponent,
        CommonLabelComponent,
        FunctionalStructuralDirectiveComponent,
    ],
    providers: [],
    entryComponents: [],
})
export class FunctionalModule {}
