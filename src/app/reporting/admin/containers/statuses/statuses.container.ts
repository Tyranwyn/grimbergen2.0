import { Component, OnInit } from '@angular/core';
import {StatusService} from "../../../services/status.service";
import {Observable} from "rxjs";
import {Status} from "../../../models/status";
import {DialogData} from "../../models/dialog-data.model";
import {Crud} from "../../models/crud.enum";

@Component({
  selector: 'app-statuses-container',
  templateUrl: './statuses.container.html',
  styleUrls: ['./statuses.container.scss']
})
export class StatusesContainer implements OnInit {
  statuses$: Observable<Status[]>;

  constructor(private statusService: StatusService) { }

  ngOnInit() {
    this.statuses$ = this.statusService.getStatuses();
  }

  crudCategory(dialogData: DialogData<Status>) {
    switch (dialogData.type) {
      case Crud.CREATE: this.statusService.addStatus(dialogData.resource); break;
      case Crud.UPDATE: this.statusService.updateStatus(dialogData.resource); break;
      case Crud.DELETE: this.statusService.deleteStatus(dialogData.resource.id); break;
    }
  }

}
