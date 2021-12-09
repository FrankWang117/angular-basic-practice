import { NgModule } from '@angular/core';
import { FunctionalDragDropComponent } from './drag-drop/drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserModule } from '@angular/platform-browser';
import { FunctionalDynamicComponent } from './dynamic-component/dynamic.component';
import { FunctionalEditorComponent } from './slate-editor/editor.component';
import { FormsModule } from '@angular/forms';
import { SlateModule } from 'slate-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FunctionalEditorBasicComponent } from './slate-editor/basic/basic.component';
import { FunctionalEditorUnilineComponent } from './slate-editor/uniline/uniline.component';
import { AppRoutingModule } from '../app-routing.module';
import { FunctionalEditorEmailComponent } from './slate-editor/email/email.component';
import { FunctionalEditorMentionsComponent } from './slate-editor/mentions/mentions.component';
import { FunctionalEditorDataTransformComponent } from './slate-editor/data-transform/data-transform.component';
import { FunctionalEditorInsertDynamicDataComponent } from './slate-editor/insert-dynamic-data/insert.component';
import { TheBaseElementComponent } from './slate-editor/common/label/base-element.component';
import { CommonLabelComponent } from './slate-editor/common/label/label.component';
import { FunctionalEditorMoreTemplateComponent } from './slate-editor/more-template/more.component';
import { FunctionalEditorReadOnlyComponent } from './slate-editor/read-only/read-only.component';

@NgModule({
  imports: [
    BrowserModule,
    DragDropModule,
    MatButtonModule,
    MatMenuModule,
    MatSlideToggleModule,
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
    TheBaseElementComponent,
    CommonLabelComponent,
  ],
  providers: [],
  entryComponents: [],
})
export class FunctionalModule {}
