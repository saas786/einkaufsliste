import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsPageRoutingModule } from './settings-routing.module';

import { SettingsPage } from './settings.page';
import { UserSettingsPage } from './user/user.component';
import { CreateUserComponent } from './user/create/create.component';
import { MyCommonModule } from '../../common/common.module';
import { ManageUsersComponent } from './user/manage/manage.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsPageRoutingModule,
    MyCommonModule,
  ],
  declarations: [
    SettingsPage,
    UserSettingsPage,
    CreateUserComponent,
    ManageUsersComponent,
  ],
})
export class SettingsPageModule {}
