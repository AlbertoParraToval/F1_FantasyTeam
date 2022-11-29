import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriversPageRoutingModule } from './drivers-routing.module';

import { DriversPage } from './drivers.page';
import { CoreModule } from "../../core/core.module";

@NgModule({
    declarations: [DriversPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DriversPageRoutingModule,
        CoreModule
    ]
})
export class DriversPageModule {}
