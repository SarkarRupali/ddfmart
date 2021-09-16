import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobCategoryDetailsPageRoutingModule } from './job-category-details-routing.module';

import { JobCategoryDetailsPage } from './job-category-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobCategoryDetailsPageRoutingModule
  ],
  declarations: [JobCategoryDetailsPage]
})
export class JobCategoryDetailsPageModule {}
