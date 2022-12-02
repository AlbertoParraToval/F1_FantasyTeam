import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutMePageRoutingModule } from './about-me-routing.module';

import { AboutMePage } from './about-me.page';
import { CoreModule } from "../../core/core.module";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/core/utils/translator';


@NgModule({
    declarations: [AboutMePage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AboutMePageRoutingModule,
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
export class AboutMePageModule {}
