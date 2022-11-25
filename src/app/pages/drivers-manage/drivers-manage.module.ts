import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriversManagePageRoutingModule } from './drivers-manage-routing.module';

import { DriversManagePage } from './drivers-manage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriversManagePageRoutingModule
  ],
  declarations: [DriversManagePage]
})
export class DriversManagePageModule {}
