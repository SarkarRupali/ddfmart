import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobLoanPageRoutingModule } from './job-loan-routing.module';

import { JobLoanPage } from './job-loan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobLoanPageRoutingModule
  ],
  declarations: [JobLoanPage]
})
export class JobLoanPageModule {}
