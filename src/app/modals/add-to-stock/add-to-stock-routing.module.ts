import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddToStockPage } from './add-to-stock.page';

const routes: Routes = [
  {
    path: '',
    component: AddToStockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddToStockPageRoutingModule {}
