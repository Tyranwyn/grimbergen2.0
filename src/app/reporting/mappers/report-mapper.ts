import {Report, ReportInputDto, ReportDto, ReportDtoWithCurrentStatus} from "../models/report";
import {UserDataService} from "../../auth/services/user-data.service";
import {CategoryService} from "../services/category.service";
import {StatusUpdateService} from "../services/status-update.service";
import {filter, mergeMap} from "rxjs/operators";
import {from, of} from "rxjs";
import {Status} from "../models/status";
import {DocumentSnapshot} from "@angular/fire/firestore";
import * as firebase from "firebase/app";
import {DocumentReferenceService} from "../services/document-reference.service";

export class ReportMapper {
  public static reportToReportObservableDto(report: Report, userDataService: UserDataService, categoryService: CategoryService): ReportDto {
    return {
      id: report.id,
      category: categoryService.getCategoryById(report.category.id),
      user: userDataService.getUserData(report.user.id),
      dateSubmitted: report.dateSubmitted,
      location: report.location,
      locationDescription: report.locationDescription,
      note: report.note,
      picture: report.picture,
    };
  }

  public static addCurrentStatusObservableToReportObservableDto(report: ReportDto, statusUpdateService: StatusUpdateService): ReportDtoWithCurrentStatus {
    return {
      currentStatus: statusUpdateService.getLastStatusUpdateByReportId(report.id)
        .pipe(
          filter(statusUpdate => statusUpdate !== undefined),
          mergeMap(statusUpdate => from(statusUpdate.status.get())),
          mergeMap((ds: DocumentSnapshot<Status>) => of(ds.data() as Status))
        ),
      ...report
    };
  }

  public static reportDtoToReportMapper(reportDto: ReportInputDto, docRefService: DocumentReferenceService) {
    return {
      user: docRefService.getUserDataReference(reportDto.userId),
      category: docRefService.getCategoryReference(reportDto.categoryId),
      location: {
        address: reportDto.location.address,
        mapsUrl: reportDto.location.mapsUrl,
        coords: new firebase.firestore.GeoPoint(reportDto.location.lat, reportDto.location.long)
      },
      locationDescription: reportDto.locationDescription,
      note: reportDto.note,
      picture: reportDto.picture,
      dateSubmitted: firebase.firestore.Timestamp.now()
    };
  }
}
