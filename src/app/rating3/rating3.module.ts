import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rating3PageRoutingModule } from './rating3-routing.module';

import { Rating3Page } from './rating3.page';
import { NgbRatingModule} from '@ng-bootstrap/ng-bootstrap'; 



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rating3PageRoutingModule,
    NgbRatingModule,
  
  ],
  declarations: [Rating3Page]
  
})

export class Rating3PageModule {

}
