import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddToStockPageRoutingModule } from './add-to-stock-routing.module';

import { AddToStockPage } from './add-to-stock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddToStockPageRoutingModule
  ],
  declarations: [AddToStockPage]
})
export class AddToStockPageModule {}
