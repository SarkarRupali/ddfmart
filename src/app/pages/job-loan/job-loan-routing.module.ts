import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobLoanPage } from './job-loan.page';

const routes: Routes = [
  {
    path: '',
    component: JobLoanPage
  },
  {
    path: 'loan',
    loadChildren: () => import('./loan/loan.module').then( m => m.LoanPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobLoanPageRoutingModule {}
