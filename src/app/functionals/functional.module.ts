import { NgModule } from '@angular/core';
import { FunctionalDragDropComponent } from './drag-drop/drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule, DragDropModule],
  exports: [],
  declarations: [FunctionalDragDropComponent],
  providers: [],
  entryComponents: [],
})
export class FunctionalModule {}
