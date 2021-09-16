import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TourTravelsPage } from './tour-travels.page';

const routes: Routes = [
  {
    path: '',
    component: TourTravelsPage
  },
  {
    path: 'category/:id',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'category/category-details/:id',
    loadChildren: () => import('./category/category-details/category-details.module').then( m => m.CategoryDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TourTravelsPageRoutingModule {}
