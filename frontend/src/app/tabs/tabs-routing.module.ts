import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'grocery-list',
        loadChildren: () =>
          import('./grocery-list/grocery-list.module').then(
            (m) => m.GroceryListPageModule
          ),
      },
      {
        path: 'scan',
        loadChildren: () =>
          import('./scan/scan.module').then((m) => m.ScanPageModule),
      },
      {
        path: 'inventory',
        loadChildren: () =>
          import('./inventory/inventory.module').then(
            (m) => m.InventoryPageModule
          ),
      },
      {
        path: 'recipies',
        loadChildren: () =>
          import('./recipies/recipies.module').then(
            (m) => m.RecipiesPageModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then(
            (m) => m.SettingsPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/grocery-list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
