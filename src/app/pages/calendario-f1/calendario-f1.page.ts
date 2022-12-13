import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { CalendarioCFormComponent, calendarModel } from 'src/app/core';
import { CircuitosService } from 'src/app/core/services/circuitos.service';

@Component({
  selector: 'app-calendario-f1',
  templateUrl: './calendario-f1.page.html',
  styleUrls: ['./calendario-f1.page.scss'],
})
export class CalendarioF1Page implements OnInit {
  circuitdata:calendarModel;
  form:FormGroup;
  constructor(

    private circuitSvc: CircuitosService,
    private modal: ModalController,
    private alert: AlertController
  ) {}

  ngOnInit() {}

  getCircuits(): calendarModel[] {
    return this.circuitSvc.getCircuit();
  }
  
  async presentCircuitForm(circuitdata: calendarModel) {
    const modal = await this.modal.create({
      component: CalendarioCFormComponent,
      componentProps: {
        circuitdata:circuitdata
      },
    });
    modal.present();
    modal.onDidDismiss().then((resultCircuit) => {
      if (resultCircuit && resultCircuit.data) {
        switch (resultCircuit.data.mode) {
          case 'New':
            this.circuitSvc.addCircuit(resultCircuit.data.circuitdata);
            break;
          case 'Edit':
            this.circuitSvc.updateCircuit(resultCircuit.data.circuitdata);
            break;
          default:
        }
      }
    });
  }

  onNewCircuit() {
    this.presentCircuitForm(null!);
  }

  onEditCircuit(circuitdata:calendarModel) {
    this.presentCircuitForm(circuitdata);
  }

  async onDeleteAlert(circuitdata: calendarModel) {
    const alert = await this.alert.create({
      header: 'Sure?, you will not able to back again ',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Operacion cancelada');
          },
        },
        {
          text: 'Delete',
          role: 'confirm',
          handler: () => {
            this.circuitSvc.deleteCircuitById(circuitdata.id);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  onDeleteCircuit(circuitdata:calendarModel) {
    this.onDeleteAlert(circuitdata);
  }
}
