import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './core/pagenotfound/pagenotfound.component';
import { CustomRoutes } from './core/routes';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/page/page.module').then((m) => m.PageModule),
  },
  {
    path: CustomRoutes.elements,
    loadChildren: () =>
      import('./features/page/page.module').then((m) => m.PageModule),
  },
  {
    path: CustomRoutes.elements + '/:tag',
    loadChildren: () =>
      import('./features/detail/detail.module').then((m) => m.DetailModule),
  },
  {
    path: CustomRoutes.components,
    loadChildren: () =>
      import('./features/page/page.module').then((m) => m.PageModule),
  },
  {
    path: CustomRoutes.components + '/:tag',
    loadChildren: () =>
      import('./features/detail/detail.module').then((m) => m.DetailModule),
  },
  { path: '404', component: PagenotfoundComponent },
  { path: '**', pathMatch: 'full', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
