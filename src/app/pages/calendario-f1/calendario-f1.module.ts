import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarioF1PageRoutingModule } from './calendario-f1-routing.module';

import { CalendarioF1Page } from './calendario-f1.page';
import { CoreModule } from "../../core/core.module";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/core/utils/translator';

@NgModule({
    declarations: [CalendarioF1Page],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CalendarioF1PageRoutingModule,
        HttpClientModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
        CoreModule,
    ]
})
export class CalendarioF1PageModule {}
