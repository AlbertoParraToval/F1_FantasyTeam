import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { driversManageModel, driversModel, teamsModel } from '../../models';
import { DriversManageService, DriversService, TeamsService } from '../../services';

@Component({
  selector: 'app-drivers-management',
  templateUrl: './drivers-management.component.html',
  styleUrls: ['./drivers-management.component.scss'],
})
export class DriversManagementComponent implements OnInit {

  @Output() onEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Input() driversManageData : driversManageModel;

  
  constructor(
    private driversSvc: DriversService,
    private teamsSvc: TeamsService,
    private driversManagementsSvc: DriversManageService
  ) {}

  ngOnInit() {}


  getTeams():teamsModel{
    var teamId = this.driversManageData.teamId;
    if(teamId)
      return this.teamsSvc.getTeamById(teamId);
      return undefined!;
  }

  getDriver():driversModel{
    var driverId = this.driversManageData.driverId;
    if(driverId)
      return this.driversSvc.getDriverById(driverId);
      return undefined!;
  }

  onEditClick(){
    this.onEdit.emit(this.driversManageData);
    console.log(this.driversManageData);
  }

  onDeleteClick(){
    this.onDelete.emit(this.driversManageData);
    console.log(this.driversManageData);
  }
}