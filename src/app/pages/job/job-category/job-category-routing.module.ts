import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobCategoryPage } from './job-category.page';

const routes: Routes = [
  {
    path: '',
    component: JobCategoryPage
  },
  {
    path: 'category-details/:id',
    loadChildren: () => import('./job-category-details/job-category-details.module').then( m => m.JobCategoryDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobCategoryPageRoutingModule {}
