import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomRoutes } from './core/routes';

const routes: Routes = [
  {
    path: CustomRoutes.elements,
    loadChildren: () => import('./page/page.module').then((m) => m.PageModule),
  },
  {
    path: CustomRoutes.components,
    loadChildren: () => import('./page/page.module').then((m) => m.PageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
