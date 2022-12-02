import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup } from '@ionic/angular';
import { teamsModel } from '../../models';
import { TeamsService } from '../../services';


export const USER_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectableTeamComponent),
  multi: true
};


@Component({
  selector: 'app-selectable-team',
  templateUrl: './selectable-team.component.html',
  styleUrls: ['./selectable-team.component.scss'],
})
export class SelectableTeamComponent implements OnInit,ControlValueAccessor {
  selectedTeam:teamsModel;
  propagateChange = (_: any) => { }
  isDisabled:boolean = false;

  constructor( private teamsSvc:TeamsService) { }



  writeValue(obj: any): void {
    console.log(this.teamsSvc.getTeamById(obj).image);
    this.selectedTeam = this.teamsSvc.getTeamById(obj);
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
  
  getTeams(){
    return this.teamsSvc.getTeam();
  } 

  onTeamClicked(selectedTeam:teamsModel, accordion:IonAccordionGroup){
    console.log(selectedTeam);
    this.selectedTeam = selectedTeam;
    accordion.value='';
    this.propagateChange(this.selectedTeam.id);
  }

}
