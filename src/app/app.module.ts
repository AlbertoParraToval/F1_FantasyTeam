import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule, LocaleId } from './core/core.module';
import { LocaleService } from './core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
//import { createTranslateLoader } from './core/utils/translator';




@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CoreModule,HttpClientModule,
    /*TranslateModule.forRoot({
      loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
      }
      })*/],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy, },{
    provide: LOCALE_ID,
    useClass: LocaleId,
    deps: [LocaleService],
  },],
  bootstrap: [AppComponent],
})
export class AppModule {}
