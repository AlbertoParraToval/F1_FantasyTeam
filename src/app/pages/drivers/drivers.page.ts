import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { DriversFormsComponent, driversModel, DriversService } from 'src/app/core';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.page.html',
  styleUrls: ['./drivers.page.scss'],
})
export class DriversPage implements OnInit {

  driver: driversModel;
  form:FormGroup;
  constructor(

    private driverSvc: DriversService,
    private modal: ModalController,
    private alert: AlertController
  ) {}



  getDriver(): driversModel[] {
    return this.driverSvc.getDriver();
  }

  ngOnInit() {
  }

  async presentDriverForm(driverdata: driversModel) {
    const modal = await this.modal.create({
      component: DriversFormsComponent,
      componentProps: {
        driver: driverdata,
      },
    });
    modal.present();
    modal.onDidDismiss().then((result) => {
      if (result && result.data) {
        switch (result.data.mode) {
          case 'New':
            console.log("Patata")
            this.driverSvc.addDriver(result.data.driverdata);
            break;
          case 'Edit':
            this.driverSvc.updateDriver(result.data.driverdata);
            break;
          default:
        }
      }
    });
  }



  onNewDriver() {
    this.presentDriverForm(null!);
  }

  onEditDriver(driverdata: driversModel) {
    //console.log(driverdata) me lo lee
    this.presentDriverForm(driverdata);
  }

  async onDeleteAlert(driver: driversModel) {
    const alert = await this.alert.create({
      header: '¿Seguro, no podrás volver atrás?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Operacion cancelada');
          },
        },
        {
          text: 'Borrar',
          role: 'confirm',
          handler: () => {
            this.driverSvc.deleteDriverById(driver.id);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  onDeleteDriver(driverdata: driversModel) {
    console.log(driverdata)
    this.onDeleteAlert(driverdata);
  }
}
