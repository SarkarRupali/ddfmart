import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TourTravelsPageRoutingModule } from './tour-travels-routing.module';

import { TourTravelsPage } from './tour-travels.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TourTravelsPageRoutingModule
  ],
  declarations: [TourTravelsPage]
})
export class TourTravelsPageModule {}
