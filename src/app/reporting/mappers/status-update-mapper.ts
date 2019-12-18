import {StatusUpdate, StatusUpdateDto} from "../models/status-update";
import {from} from "rxjs";
import {Status} from "../models/status";

export class StatusUpdateMapper {
  public static mapStatusUpdatesToDto(statusUpdates: StatusUpdate[]): StatusUpdateDto[] {
    const dtos: StatusUpdateDto[] = [];
    statusUpdates.forEach(update => {
      dtos.push({
        id: update.id,
        status: from(update.status.get().then(u => u.data() as Status)),
        datumStatusChange: update.datumStatusChange,
        note: update.note
      });
    });
    return dtos;
  }
}
