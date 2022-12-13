import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { InformationComponent } from './components/information/information.component';
import { IonicModule, LoadingController } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule, SelectControlValueAccessor } from '@angular/forms';
import { DriversCComponent } from './components/drivers-c/drivers-c.component';
import { DriversFormsComponent } from './components/drivers-forms/drivers-forms.component';
import {  SelectableDriverComponent, SelectableTeamComponent, TeamsCComponent, TeamsFormsComponent } from './components';
import { DriversManagementComponent } from './components/drivers-management/drivers-management.component';
import { DriversManagementFormComponent } from './components/drivers-management-form/drivers-management-form.component';
import { LocaleService } from './services';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { createTranslateLoader } from './utils/translator';
import en from '@angular/common/locales/en';
import es from '@angular/common/locales/es';
import { ReproductorMusicComponent } from './components/reproductor-music/reproductor-music.component';


registerLocaleData(en);
registerLocaleData(es);

export class LocaleId extends String {
  constructor(private localeService: LocaleService) {
    super();
  }
  
  override toString(): string {
    return this.localeService.locale;
  }
  
  override valueOf(): string {
    return this.toString();
  }
}



@NgModule({
  declarations: [InformationComponent, DriversCComponent, DriversFormsComponent, TeamsCComponent, TeamsFormsComponent, DriversManagementComponent, DriversManagementFormComponent, SelectableDriverComponent,SelectableTeamComponent,ReproductorMusicComponent,],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
      }
      }),
      
    
    
  ],
  exports:[InformationComponent, DriversCComponent, DriversFormsComponent, TeamsCComponent,TeamsFormsComponent,DriversManagementComponent, DriversManagementFormComponent,SelectableDriverComponent,SelectableTeamComponent,ReproductorMusicComponent,],
  
  providers:[{
    provide: LOCALE_ID,
    useClass: LocaleId,
    deps: [LocaleService],
  },]
})
export class CoreModule { }
