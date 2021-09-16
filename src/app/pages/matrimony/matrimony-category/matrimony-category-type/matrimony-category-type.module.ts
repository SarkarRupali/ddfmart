import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatrimonyCategoryTypePageRoutingModule } from './matrimony-category-type-routing.module';

import { MatrimonyCategoryTypePage } from './matrimony-category-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatrimonyCategoryTypePageRoutingModule
  ],
  declarations: [MatrimonyCategoryTypePage]
})
export class MatrimonyCategoryTypePageModule {}
