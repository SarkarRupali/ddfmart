import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatrimonyCategoryTypePage } from './matrimony-category-type.page';

const routes: Routes = [
  {
    path: '',
    component: MatrimonyCategoryTypePage
  },
  {
    path: 'matrimony-category-details/:id',
    loadChildren: () => import('./matrimony-category-details/matrimony-category-details.module').then( m => m.MatrimonyCategoryDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatrimonyCategoryTypePageRoutingModule {}
