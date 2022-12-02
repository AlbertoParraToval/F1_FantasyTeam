import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriversManagePageRoutingModule } from './drivers-manage-routing.module';

import { DriversManagePage } from './drivers-manage.page';
import { CoreModule } from "../../core/core.module";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/core/utils/translator';

@NgModule({
    declarations: [DriversManagePage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DriversManagePageRoutingModule,
        CoreModule,
        HttpClientModule,
       TranslateModule.forChild({
      loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
      }
      }),
    ]
})
export class DriversManagePageModule {}
