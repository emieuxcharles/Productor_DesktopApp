import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'connect',
    loadChildren: () => import('./modals/connect/connect.module').then( m => m.ConnectPageModule)
  },
  {
    path: 'add-to-stock',
    loadChildren: () => import('./modals/add-to-stock/add-to-stock.module').then( m => m.AddToStockPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
