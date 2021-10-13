import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPage } from './settings.page';
import { CreateUserComponent } from './user/create/create.component';
import { ManageUsersComponent } from './user/manage/manage.component';
import { UserSettingsPage } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage,
  },
  {
    path: 'users',
    component: UserSettingsPage,
  },
  {
    path: 'users/create',
    component: CreateUserComponent,
  },
  {
    path: 'users/manage',
    component: ManageUsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsPageRoutingModule {}
