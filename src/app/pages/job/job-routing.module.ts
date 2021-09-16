import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobPage } from './job.page';

const routes: Routes = [
  {
    path: '',
    component: JobPage
  },
  {
    path: 'job-category/:id',
    loadChildren: () => import('./job-category/job-category.module').then( m => m.JobCategoryPageModule)
  },
  {
    path: 'job-category/category-details/:id',
    loadChildren: () => import('./job-category/job-category-details/job-category-details.module').then( m => m.JobCategoryDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobPageRoutingModule {}
