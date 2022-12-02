import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { TeamsFormsComponent, teamsModel, TeamsService } from 'src/app/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

  taskInfo: teamsModel;
  form:FormGroup;
  constructor(

    private teamsSvc: TeamsService,
    private modal: ModalController,
    private alert: AlertController
  ) {}

  ngOnInit() {}

  getTeams(): teamsModel[] {
    
    return this.teamsSvc.getTeam();
  }
  async presentTeamForm(teamdata: teamsModel) {
    //console.log(userdata) me lo lee
    const modal = await this.modal.create({
      component: TeamsFormsComponent,
      componentProps: {
        team: teamdata,
        
      },
    });
    modal.present();
    modal.onDidDismiss().then((resultTask) => {
      if (resultTask && resultTask.data) {
        switch (resultTask.data.mode) {
          case 'New':
            console.log("Patata")
            this.teamsSvc.addTeam(resultTask.data.teamdata);
            break;
          case 'Edit':
            this.teamsSvc.updateTeam(resultTask.data.teamdata);
            break;
          default:
        }
      }
    });
  }

  onNewTeam() {
    this.presentTeamForm(null!);
  }

  onEditTeam(teamdata:teamsModel) {
    console.log(teamdata) 
    this.presentTeamForm(teamdata);
  }

  async onDeleteAlert(team:teamsModel) {
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
            this.teamsSvc.deleteTeamById(team.id);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  onDeleteTeam(teamdata:teamsModel) {
    //console.log(taskdata)
    this.onDeleteAlert(teamdata);
  }
}

