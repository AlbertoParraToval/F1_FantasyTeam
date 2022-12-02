import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup } from '@ionic/angular';
import { driversModel } from '../../models';
import { DriversService } from '../../services';


export const DRIVER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectableDriverComponent),
  multi: true
};

@Component({
  selector: 'app-selectable-driver',
  templateUrl: './selectable-driver.component.html',
  styleUrls: ['./selectable-driver.component.scss'],
  providers:[DRIVER_VALUE_ACCESSOR]
})
export class SelectableDriverComponent implements OnInit {
  drivers:driversModel

  propagateChange = (_: any) => { }
  isDisabled:boolean = false;

  constructor( private driverSvc:DriversService) { }


  writeValue(obj: any): void {
    this.drivers = (this.driverSvc.getDriverById(obj));
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  ngOnInit() {}
  
  getDrivers(){
    return this.driverSvc.getDriver();
  } 

  onDriverClicked(drivers:driversModel, accordion:IonAccordionGroup){
    this.drivers = drivers;
    accordion.value='';
    this.propagateChange(this.drivers.id);
  }

}
