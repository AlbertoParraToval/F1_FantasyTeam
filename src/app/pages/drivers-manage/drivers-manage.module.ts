import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriversManagePageRoutingModule } from './drivers-manage-routing.module';

import { DriversManagePage } from './drivers-manage.page';
import { CoreModule } from "../../core/core.module";

@NgModule({
    declarations: [DriversManagePage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DriversManagePageRoutingModule,
        CoreModule
    ]
})
export class DriversManagePageModule {}
