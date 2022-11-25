import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriversManagePage } from './drivers-manage.page';

const routes: Routes = [
  {
    path: '',
    component: DriversManagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriversManagePageRoutingModule {}
