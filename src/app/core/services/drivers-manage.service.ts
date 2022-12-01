import { Injectable } from '@angular/core';
import { driversManageModel, teamsModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DriversManageService {
    public driversManagement : driversManageModel[] = [
    {
      id:1,
      driverId:1,
      teamId:1,
    },
    {
      id:2,
      driverId:2,
      teamId:2,
    },
    {
      id:3,
      driverId:3,
      teamId:3,
    },
    {
      id:4,
      driverId:4,
      teamId:4,
    }
    ,
    {
      id:5,
      driverId:5,
      teamId:5,
    }
    ,
    {
      id:6,
      driverId:6,
      teamId:6,
    }
    ,
    {
      id:7,
      driverId:7,
      teamId:7,
    }
    ,
    {
      id:8,
      driverId:8,
      teamId:8,
    }
    ]
    

    id:number = this.driversManagement.length + 1;
  
    constructor() {
  
    }
  
    getManagement(){
      return this.driversManagement;
    }
  
    getManagementById(id:number){
      return this.driversManagement.find(a=>a.id==id);
    }
  
    getManagementByTeamkId(id:number): driversManageModel[]{
      return this.driversManagement.filter(a=>a.id == id);
    }
  
    getManagementByDriverId(id:number):driversManageModel[]{
      return this.driversManagement.filter(a=>a.id == id);
    }
  
    deleteManagementById(id:number){
      this.driversManagement = this.driversManagement.filter(a=>a.id != id); 
    }
  
    addManagement(driversManageData:driversManageModel){
      driversManageData.id = this.id++;
      this.driversManagement.push(driversManageData);
    }
  
    updateManagement(driversManageUpdate:driversManageModel){
      var driversManageData = this.driversManagement.find(a=>a.id==driversManageUpdate.id);
      if(driversManageData){
        driversManageData.teamId = driversManageUpdate.teamId;
        driversManageData.driverId = driversManageUpdate.driverId;
      }
    }
  }
