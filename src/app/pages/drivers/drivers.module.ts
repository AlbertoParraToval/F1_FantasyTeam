import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriversPageRoutingModule } from './drivers-routing.module';

import { DriversPage } from './drivers.page';
import { CoreModule } from "../../core/core.module";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { createTranslateLoader } from 'src/app/core/utils/translator';


@NgModule({
    declarations: [DriversPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DriversPageRoutingModule,
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
export class DriversPageModule {}
