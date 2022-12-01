import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
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

  @Input('driverManagementData') set driverManagement(driverManagementData:driversManageModel){
    if(driverManagementData){
      this.form.controls['id'].setValue(driverManagementData.id);
      this.form.controls['driverId'].setValue(driverManagementData.driverId);
      this.form.controls['taskId'].setValue(driverManagementData.teamId);
      this.mode = "Edit";
    }

  }
  constructor(private formBuilder:FormBuilder,
              private driversSVC:DriversService,
              private teamsSVC:TeamsService,
              private modal:ModalController
    ) {
    this.form = this.formBuilder.group({ 
      id:[null],
      teamId:[-1,Validators.min(0)],
      driverId:[-1,Validators.min(0)],
    });
  }

  ngOnInit() {}

  onSubmit(){
      this.modal.dismiss({assign: this.form.value, mode: this.mode}, 'ok')
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
