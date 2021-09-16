import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatrimonyPage } from './matrimony.page';

const routes: Routes = [
  {
    path: '',
    component: MatrimonyPage
  },
  {
    path: 'matrimony-category/:id',
    loadChildren: () => import('./matrimony-category/matrimony-category.module').then( m => m.MatrimonyCategoryPageModule)
  },
  {
    path: 'matrimony-category/matrimony-category-type/:id',
    loadChildren: () => import('./matrimony-category/matrimony-category-type/matrimony-category-type.module').then( m => m.MatrimonyCategoryTypePageModule)
  },
  {
    path: 'matrimony-category/matrimony-category-type/matrimony-category-details/:id',
    loadChildren: () => import('./matrimony-category/matrimony-category-type/matrimony-category-details/matrimony-category-details.module').then( m => m.MatrimonyCategoryDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatrimonyPageRoutingModule {}
