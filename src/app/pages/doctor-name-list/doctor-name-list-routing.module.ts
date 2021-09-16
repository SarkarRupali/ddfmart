import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorNameListPage } from './doctor-name-list.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorNameListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorNameListPageRoutingModule {}
