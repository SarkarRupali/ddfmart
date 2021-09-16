import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatrimonyCategoryPageRoutingModule } from './matrimony-category-routing.module';

import { MatrimonyCategoryPage } from './matrimony-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatrimonyCategoryPageRoutingModule
  ],
  declarations: [MatrimonyCategoryPage]
})
export class MatrimonyCategoryPageModule {}
