import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatrimonyCategoryDetailsPage } from './matrimony-category-details.page';

const routes: Routes = [
  {
    path: '',
    component: MatrimonyCategoryDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatrimonyCategoryDetailsPageRoutingModule {}
