import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriversPageRoutingModule } from './drivers-routing.module';

import { DriversPage } from './drivers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriversPageRoutingModule
  ],
  declarations: [DriversPage]
})
export class DriversPageModule {}
