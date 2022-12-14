import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { teamsModel } from '../../models';

@Component({
  selector: 'app-teams-forms',
  templateUrl: './teams-forms.component.html',
  styleUrls: ['./teams-forms.component.scss'],
})
export class TeamsFormsComponent implements OnInit {
  form: FormGroup;
  mode: 'New' | 'Edit' = 'New';

  @Input('teamdata') set team(teamdata: teamsModel) {
    if (teamdata) {
      this.form.controls['id'].setValue(teamdata.id);
      this.form.controls['name'].setValue(teamdata.name);
      this.form.controls['description'].setValue(teamdata.description);
      this.form.controls['image'].setValue(teamdata.image);
      this.mode = 'Edit';
    }
  }

  constructor(private fb: FormBuilder, private modal: ModalController) {
    this.form = this.fb.group({
      id: [null],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image:["",[]]
    });
  }

  onSubmit() {
    this.modal.dismiss({ teamdata: this.form.value, mode: this.mode }, 'ok');
  }

  onDismiss(_result: any) {
    this.modal.dismiss(null, 'cancel');
  }

  ngOnInit() {}
}
