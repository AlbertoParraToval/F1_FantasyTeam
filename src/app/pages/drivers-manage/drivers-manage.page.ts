import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { DriversManagementFormComponent, driversManageModel, DriversManageService } from 'src/app/core';

@Component({
  selector: 'app-drivers-manage',
  templateUrl: './drivers-manage.page.html',
  styleUrls: ['./drivers-manage.page.scss'],
})
export class DriversManagePage implements OnInit {
  driversManage_: driversManageModel;
  constructor(
    private driversManagementsSvc:DriversManageService,
    private modal:ModalController,
    private alert:AlertController
  ) { }

  ngOnInit() {}

  getManagements(){
    return this.driversManagementsSvc.getManagement();
  }

  async presentManagementForm(driversManageData:DriversManagementFormComponent | null){
    console.log(driversManageData);
    const modal = await this.modal.create({
      component:DriversManagementFormComponent,
      componentProps:{
        driversManageData: driversManageData
      },
    }); 
      console.log(driversManageData);
    modal.present();
    console.log(driversManageData);
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.driversManagementsSvc.addManagement(result.data.driversManageData);
            break;
          case 'Edit':
            this.driversManagementsSvc.updateManagement(result.data.driversManageData);
            break;
          default:
        }
      }
    });
  }

  onEditManagement(driversManageData: DriversManagementFormComponent){
    console.log(driversManageData);
    this.presentManagementForm(driversManageData);
  }

  async onDeleteAlert(driversManageData: driversManageModel){
    const alert = await this.alert.create({
      header: '¿Está seguro de que desear borrar el fichaje?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log("Operacion cancelada");
          },
        },
        {
          text: 'Borrar',
          role: 'confirm',
          handler: () => {
            this.driversManagementsSvc.deleteManagementById(driversManageData.id);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  onNewDriverManagement(){
    this.presentManagementForm(null);  
  }

  onDeleteManagement(driversManageData: driversManageModel){
    this.onDeleteAlert(driversManageData);
    
  }
}
