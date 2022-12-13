import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarioF1PageRoutingModule } from './calendario-f1-routing.module';

import { CalendarioF1Page } from './calendario-f1.page';
import { CoreModule } from "../../core/core.module";

@NgModule({
    declarations: [CalendarioF1Page],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CalendarioF1PageRoutingModule,
        CoreModule
    ]
})
export class CalendarioF1PageModule {}
