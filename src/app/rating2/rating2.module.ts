import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rating2PageRoutingModule } from './rating2-routing.module';

import { Rating2Page } from './rating2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rating2PageRoutingModule
  ],
  declarations: [Rating2Page]
})
export class Rating2PageModule {}
