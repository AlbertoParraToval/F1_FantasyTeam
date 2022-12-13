import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { calendarModel } from '../../models';

@Component({
  selector: 'app-calendario-cform',
  templateUrl: './calendario-cform.component.html',
  styleUrls: ['./calendario-cform.component.scss'],
})
export class CalendarioCFormComponent implements OnInit {
  form: FormGroup;
  mode: 'New' | 'Edit' = 'New';

  @Input('circuitdata') set circuitdata(circuitdata: calendarModel) {
    if (circuitdata) {
      this.form.controls['id'].setValue(circuitdata.id);
      this.form.controls['nomCircuito'].setValue(circuitdata.nomCircuito);
      this.form.controls['Pais'].setValue(circuitdata.Pais);
      this.form.controls['foto'].setValue(circuitdata.foto);
      this.mode = 'Edit';
    }
  }

  constructor(private fb: FormBuilder, private modal: ModalController) {
    this.form = this.fb.group({
      id: [null],
      nomCircuito: ['', [Validators.required]],
      Pais: ['', [Validators.required]],
      foto:["",[]]
    });
  }

  onSubmit() {
    this.modal.dismiss({ circuitdata: this.form.value, mode: this.mode }, 'ok');
  }

  onDismiss(_result: any) {
    this.modal.dismiss(null, 'cancel');
  }

  ngOnInit() {}
}