import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriversPage } from './drivers.page';

const routes: Routes = [
  {
    path: '',
    component: DriversPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriversPageRoutingModule {}
