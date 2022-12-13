import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { teamsModel } from '../../models';
import { TeamsService } from '../../services';

@Component({
  selector: 'app-teams-c',
  templateUrl: './teams-c.component.html',
  styleUrls: ['./teams-c.component.scss'],
})
export class TeamsCComponent implements OnInit {
  @Input() teamdata: teamsModel;
  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter();

  constructor(private teamsSvc: TeamsService) {}

  ngOnInit() {}

  onEditClick() {
    this.onEdit.emit(this.teamdata);
  }

  onDeleteClick() {
    this.onDelete.emit(this.teamdata);
  }
}
