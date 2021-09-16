import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobCategoryPageRoutingModule } from './job-category-routing.module';

import { JobCategoryPage } from './job-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobCategoryPageRoutingModule
  ],
  declarations: [JobCategoryPage]
})
export class JobCategoryPageModule {}
