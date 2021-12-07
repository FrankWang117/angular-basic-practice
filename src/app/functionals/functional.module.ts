import { NgModule } from '@angular/core';
import { FunctionalDragDropComponent } from './drag-drop/drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserModule } from '@angular/platform-browser';
import { FunctionalDynamicComponent } from './dynamic-component/dynamic.component';
import { FunctionalEditorComponent } from './slate-editor/editor.component';
import { FormsModule } from '@angular/forms';
import { SlateModule } from 'slate-angular';
import { FunctionalEditorBasicComponent } from './slate-editor/basic/basic.component';
import { FunctionalEditorUnilineComponent } from './slate-editor/uniline/uniline.component';
import { AppRoutingModule } from '../app-routing.module';
import { FunctionalEditorEmailComponent } from './slate-editor/email/email.component';
import { FunctionalEditorMentionsComponent } from './slate-editor/mentions/mentions.component';

@NgModule({
  imports: [
    BrowserModule,
    DragDropModule,
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
  ],
  providers: [],
  entryComponents: [],
})
export class FunctionalModule {}
