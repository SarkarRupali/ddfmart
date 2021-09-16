import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatrimonyCategoryDetailsPageRoutingModule } from './matrimony-category-details-routing.module';

import { MatrimonyCategoryDetailsPage } from './matrimony-category-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatrimonyCategoryDetailsPageRoutingModule
  ],
  declarations: [MatrimonyCategoryDetailsPage]
})
export class MatrimonyCategoryDetailsPageModule {}
