import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { driversModel } from '../../models';

@Component({
  selector: 'app-drivers-forms',
  templateUrl: './drivers-forms.component.html',
  styleUrls: ['./drivers-forms.component.scss'],
})
export class DriversFormsComponent implements OnInit {
  form: FormGroup;
  mode:"New" | "Edit" = "New";

  @Input('driverdata') set driver(driverdata: driversModel){
    //console.log(driverdata)
    if(driverdata){
      this.form.controls['id'].setValue(driverdata.id);
      this.form.controls['name'].setValue(driverdata.name);
      this.form.controls['nickname'].setValue(driverdata.nickname);
      this.form.controls['dorsal'].setValue(driverdata.dorsal);
      this.mode = "Edit";
    }
  }


  constructor(
    private fb:FormBuilder,
    private modal:ModalController,

  ) { 
    this.form = this.fb.group({
      id:[null],
      name:['', [Validators.required]],
      nickname:['', [Validators.required]],
      dorsal:['', [Validators.required]],
    });
  }

  onSubmit(){
    this.modal.dismiss({driverdata: this.form.value, mode:this.mode}, 'ok');
  }

  onDismiss(_result: any){
    this.modal.dismiss(null, 'cancel');
  }

  ngOnInit() {}
}