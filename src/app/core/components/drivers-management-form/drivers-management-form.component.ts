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
              private modal:ModalController
    ) {
    this.form = this.formBuilder.group({ 
      id:[null],
      teamId:[0,Validators.min(1)],
      driverId:[0,Validators.min(1)],
      duracionContrato:[0,Validators.min(1)],
    });
  }

  ngOnInit() {}

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
