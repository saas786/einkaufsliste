import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroceryListPage } from './grocery-list.page';

const routes: Routes = [
  {
    path: '',
    component: GroceryListPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroceryListPageRoutingModule {}
