import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './components/information/information.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DriversCComponent } from './components/drivers-c/drivers-c.component';
import { DriversFormsComponent } from './components/drivers-forms/drivers-forms.component';
import { TeamsCComponent, TeamsFormsComponent } from './components';
import { DriversManagementComponent } from './components/drivers-management/drivers-management.component';
import { DriversManagementFormComponent } from './components/drivers-management-form/drivers-management-form.component';



@NgModule({
  declarations: [InformationComponent, DriversCComponent, DriversFormsComponent, TeamsCComponent, TeamsFormsComponent, DriversManagementComponent, DriversManagementFormComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports:[InformationComponent, DriversCComponent, DriversFormsComponent, TeamsCComponent,TeamsFormsComponent,DriversManagementComponent, DriversManagementFormComponent]
})
export class CoreModule { }
