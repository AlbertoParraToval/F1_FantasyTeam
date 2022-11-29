import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { driversModel, DriversService } from 'src/app/core';

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

}
