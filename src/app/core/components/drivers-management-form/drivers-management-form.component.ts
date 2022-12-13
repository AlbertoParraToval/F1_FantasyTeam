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
  @Input('driversManageData') set driversManageData(d:driversManageModel){    
    if(d){
      this.form.controls['id'].setValue(d.id);
      this.form.controls['driverId'].setValue(d.driverId);
      this.form.controls['teamId'].setValue(d.teamId);
      this.form.controls['duracionContrato'].setValue(d.duracionContrato);
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
      this.button_text = await lastValueFrom(this.translate.get('driversManageData.edit'));  
    else
      this.button_text = await this.translate.get('driversManageData.new').toPromise();
  }

  onSubmit(){
      this.modal.dismiss({driversManageData: this.form.value, mode: this.mode}, 'ok');
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
