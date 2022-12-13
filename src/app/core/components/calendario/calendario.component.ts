import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { calendarModel } from '../../models';
import { CircuitosService } from '../../services/circuitos.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss'],
})
export class CalendarioComponent implements OnInit {
  @Input() circuitdata: calendarModel;
  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter();

  constructor(private CircuitSvc: CircuitosService) {}

  ngOnInit() {}

  onEditClick() {
    this.onEdit.emit(this.circuitdata);
  }

  onDeleteClick() {
    this.onDelete.emit(this.circuitdata);
  }
}

