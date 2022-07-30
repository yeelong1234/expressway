import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TollfarePageRoutingModule } from './tollfare-routing.module';

import { TollfarePage } from './tollfare.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TollfarePageRoutingModule
  ],
  declarations: [TollfarePage]
})
export class TollfarePageModule {}
