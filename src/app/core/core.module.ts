import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './components/information/information.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DriversCComponent } from './components/drivers-c/drivers-c.component';
import { DriversFormsComponent } from './components/drivers-forms/drivers-forms.component';



@NgModule({
  declarations: [InformationComponent, DriversCComponent, DriversFormsComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[InformationComponent, DriversCComponent, DriversFormsComponent]
})
export class CoreModule { }
