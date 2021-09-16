import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryDetailsPageRoutingModule } from './category-details-routing.module';

import { CategoryDetailsPage } from './category-details.page';
// import { VideoPlayer } from '@ionic-native/video-player/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryDetailsPageRoutingModule
  ],
  declarations: [CategoryDetailsPage],
  // providers: [
  //   VideoPlayer]
})
export class CategoryDetailsPageModule {}
