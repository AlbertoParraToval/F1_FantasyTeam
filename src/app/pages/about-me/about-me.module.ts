import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutMePageRoutingModule } from './about-me-routing.module';

import { AboutMePage } from './about-me.page';
import { CoreModule } from "../../core/core.module";

@NgModule({
    declarations: [AboutMePage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AboutMePageRoutingModule,
        CoreModule
    ]
})
export class AboutMePageModule {}
