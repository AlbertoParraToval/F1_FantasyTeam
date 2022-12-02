import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamsPageRoutingModule } from './teams-routing.module';

import { TeamsPage } from './teams.page';
import { CoreModule } from "../../core/core.module";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
//import { createTranslateLoader } from 'src/app/core/utils/translator';

@NgModule({
    declarations: [TeamsPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TeamsPageRoutingModule,
        CoreModule,
        HttpClientModule,
    /*ranslateModule.forChild({
      loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
      }
      }),*/
    ]
})
export class TeamsPageModule {}
