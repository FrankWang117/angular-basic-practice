import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [BrowserModule, RouterModule],
  exports: [],
  declarations: [LayoutComponent],
  providers: [],
})
export class LayoutModule {}
