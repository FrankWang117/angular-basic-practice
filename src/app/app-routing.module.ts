import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { functionalRoutes } from './functionals/functional.routing.module';
import { LayoutComponent } from './layout/layout.component';

// TODO
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
  },
  ...functionalRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
