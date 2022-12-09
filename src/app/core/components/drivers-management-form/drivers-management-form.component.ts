import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { lastValueFrom } from 'rxjs';
import { driversManageModel } from '../../models';
import { DriversService, TeamsService } from '../../services';

@Component({
  selector: 'app-drivers-management-form',
  templateUrl: './drivers-management-form.component.html',
  styleUrls: ['./drivers-management-form.component.scss'],
})
export class DriversManagementFormComponent implements OnInit {

  
  form:FormGroup;
  mode: "New" | "Edit" = "New";
  button_text: "";
  @Input('driversManageData') set driverManagement(driversManageData:driversManageModel){    
    if(driversManageData){
      this.form.controls['id'].setValue(driversManageData.id);
      this.form.controls['driverId'].setValue(driversManageData.driverId);
      this.form.controls['teamId'].setValue(driversManageData.teamId);
      this.form.controls['duracionContrato'].setValue(driversManageData.duracionContrato);
      this.mode = "Edit";
    }

  }
  constructor(private formBuilder:FormBuilder,
              private driversSVC:DriversService,
              private teamsSVC:TeamsService,
              private modal:ModalController,
              private translate:TranslateService
    ) {
    this.form = this.formBuilder.group({ 
      id:[null],
      teamId:[-1,Validators.min(1)],
      driverId:[-1,Validators.min(1)],
      duracionContrato:[-1,Validators.min(1)],
    });
  }

  async ngOnInit() {
    if(this.mode == "Edit")
      this.button_text = await lastValueFrom(this.translate.get('assignment.edit'));  
    else
      this.button_text = await this.translate.get('assignment.new').toPromise();
  }



  onSubmit(){
      this.modal.dismiss({driversManageData: this.form.value, mode: this.mode}, 'ok')
  }

  onDismiss(_result:any){
    this.modal.dismiss(null,'cancel'); 
  }

  getDrivers(){
    return this.driversSVC.getDriver();
  }

  getTeams(){
    return this.teamsSVC.getTeam();
  }


}
