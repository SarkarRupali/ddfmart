import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobCategoryDetailsPage } from './job-category-details.page';

const routes: Routes = [
  {
    path: '',
    component: JobCategoryDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobCategoryDetailsPageRoutingModule {}
