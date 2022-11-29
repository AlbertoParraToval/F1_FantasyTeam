import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { driversModel } from '../../models';
import { DriversService } from '../../services';

@Component({
  selector: 'app-drivers-c',
  templateUrl: './drivers-c.component.html',
  styleUrls: ['./drivers-c.component.scss'],
})
export class DriversCComponent implements OnInit {


  @Input() driverdata: driversModel;
  @Output() onDelete = new EventEmitter;
  @Output() onEdit = new EventEmitter;

  constructor(
    private driverSvc: DriversService
  ) { }

  ngOnInit() {}


    onEditClick() {
      //console.log(this.userdata) me pilla el userdata
      this.onEdit.emit(this.driverdata);
    }


    onDeleteClick() {
      //console.log(this.userdata) me pilla el userdata
      this.onDelete.emit(this.driverdata);
      }
}
