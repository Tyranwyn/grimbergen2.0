import {Injectable} from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  CollectionReference,
  DocumentReference
} from '@angular/fire/firestore';
import {Report, ReportInputDto, ReportDto, ReportDtoWithCurrentStatus} from '../models/report';
import {environment} from '../../../environments/environment';
import {from, Observable} from 'rxjs';
import {CategoryService} from './category.service';
import {UserDataService} from '../../auth/services/user-data.service';
import {StatusUpdateService} from './status-update.service';
import {map} from 'rxjs/operators';
import {ReportMapper} from "../mappers/report-mapper";
import {DocumentReferenceService} from "./document-reference.service";

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private reportCollection: AngularFirestoreCollection<Report>;

  constructor(private afs: AngularFirestore,
              private categoryService: CategoryService,
              private userDataService: UserDataService,
              private statusUpdateService: StatusUpdateService,
              private docRefService: DocumentReferenceService) {
    this.reportCollection = afs.collection<Report>(environment.collections.reports);
  }

  addReport(report: ReportInputDto): Observable<DocumentReference> {
    return from(this.reportCollection.add(ReportMapper.reportDtoToReportMapper(report, this.docRefService)));
  }

  getReports(): Observable<ReportDto[]> {
    return this.reportCollection.snapshotChanges()
      .pipe(map(actions => actions.map(this.convertReportActionToReportObservableDto())));
  }

  getReportsByUserId(uid: string): Observable<ReportDto[]> {
    const userRef: DocumentReference = this.afs.collection(environment.collections.userData).doc(uid).ref;
    const reportQueryFn = (ref: CollectionReference) => ref.where('user', '==', userRef)
      .orderBy('dateSubmitted', 'desc');
    return this.afs.collection<Report>(this.reportCollection.ref, reportQueryFn)
      .snapshotChanges()
      .pipe(map(actions => actions.map(this.convertReportActionToReportObservableDto())));
  }

  getReportsByUserIdWithCurrentStatus(uid: string): Observable<ReportDtoWithCurrentStatus[]> {
    return this.getReportsByUserId(uid)
      .pipe(map(reports =>
        reports.map(report =>
          ReportMapper.addCurrentStatusObservableToReportObservableDto(report, this.statusUpdateService))))
  }

  getReportById(id: string): Observable<ReportDto> {
    return this.reportCollection.doc<Report>(id)
      .valueChanges()
      .pipe(map(report =>
        ReportMapper.reportToReportObservableDto(report, this.userDataService, this.categoryService)));
  }

  private convertReportActionToReportObservableDto() {
    return a => {
      const report = a.payload.doc.data() as Report;
      return ReportMapper.reportToReportObservableDto({id: a.payload.doc.id, ...report}, this.userDataService, this.categoryService)
    };
  }

}
