import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorNameListPageRoutingModule } from './doctor-name-list-routing.module';

import { DoctorNameListPage } from './doctor-name-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorNameListPageRoutingModule
  ],
  declarations: [DoctorNameListPage]
})
export class DoctorNameListPageModule {}
