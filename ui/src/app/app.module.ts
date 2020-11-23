import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardTemplateComponent } from './utils/card-template/card-template.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './nav/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from "@angular/material/menu";
import { ActivitiesContainerComponent } from './activities-module/activities-container/activities-container.component';
import {MatCardModule} from "@angular/material/card";
import {ActivitiesHttpService} from "./activities-module/activities-http.service";
import {HttpClientModule} from "@angular/common/http";
import { ActivityCreatorDialogComponent } from './activities-module/activity-creator-dialog/activity-creator-dialog.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatBadgeModule} from "@angular/material/badge";
import { DeleteConfirmationDialogComponent } from './utils/delete-confirmation-dialog/delete-confirmation-dialog.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { ActivitiesListDisplayComponent } from './activities-module/activities-list-display/activities-list-display.component';
import { ActivitiesCardDisplayComponent } from './activities-module/activities-card-display/activities-card-display.component';
import {MatTableModule} from "@angular/material/table";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSortModule} from "@angular/material/sort";
import {SnackbarService} from "./utils/snackbar-service/snackbar.service";
import { BillsContainerComponent } from './bills-module/bills-container/bills-container.component';
import { BillsListDisplayComponent } from './bills-module/bills-list-display/bills-list-display.component';
import { BillCreatorDialogComponent } from './bills-module/bill-creator-dialog/bill-creator-dialog.component';
import { BeatsContainerComponent } from './beats-module/beats-container/beats-container.component';
import { BeatsCardComponent } from './beats-module/beats-card-display/beats-card.component';
import {BillsHttpService} from "./bills-module/bills-http.service";
import {BeatsHttpService} from "./beats-module/beats-http.service";
import { BeatsDetailsComponent } from './beats-module/beats-details/beats-details.component';
import {BeatsDetailsEditComponent} from "./beats-module/beats-details-edit/beats-details-edit.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {BeatsCreatorStepperComponent} from './beats-module/beats-creator-stepper/beats-creator-stepper.component';
import {MatStepperModule} from "@angular/material/stepper";
import { BeatsTagsComponent } from './beats-module/beats-tags/beats-tags.component';
import {MatChipsModule} from "@angular/material/chips";
import {MatTabsModule} from "@angular/material/tabs";
import {BeatsFileUploadComponent} from "./beats-module/beats-file-upload/beats-file-upload.component";
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';

@NgModule({
  exports: [
    MatMomentDateModule
  ],
  declarations: [
    AppComponent,
    CardTemplateComponent,
    MainNavComponent,
    ActivitiesContainerComponent,
    ActivityCreatorDialogComponent,
    DeleteConfirmationDialogComponent,
    ActivitiesListDisplayComponent,
    ActivitiesCardDisplayComponent,
    BillsContainerComponent,
    BillsListDisplayComponent,
    BillCreatorDialogComponent,
    BeatsContainerComponent,
    BeatsCardComponent,
    BeatsDetailsComponent,
    BeatsDetailsEditComponent,
    BeatsCreatorStepperComponent,
    BeatsTagsComponent,
    BeatsFileUploadComponent
  ],
  entryComponents: [
    ActivityCreatorDialogComponent,
    DeleteConfirmationDialogComponent,
    BillCreatorDialogComponent,
    BeatsCreatorStepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatTableModule,
    MatSlideToggleModule,
    FormsModule,
    MatSortModule,
    MatGridListModule,
    MatStepperModule,
    MatChipsModule,
    MatTabsModule
  ],
  providers: [
    ActivitiesHttpService,
    ActivitiesContainerComponent,
    ActivityCreatorDialogComponent,
    ActivitiesCardDisplayComponent,
    SnackbarService,
    BillsHttpService,
    BeatsHttpService,
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {hasBackdrop: true}
    },
    {
      provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS,
      useValue: { useUtc: true }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
