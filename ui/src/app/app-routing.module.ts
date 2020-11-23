import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitiesContainerComponent } from "./activities-module/activities-container/activities-container.component";
import {BillsContainerComponent} from "./bills-module/bills-container/bills-container.component";
import {BeatsContainerComponent} from "./beats-module/beats-container/beats-container.component";
import {BeatsDetailsComponent} from "./beats-module/beats-details/beats-details.component";
import {BeatsDetailsEditComponent} from "./beats-module/beats-details-edit/beats-details-edit.component";

const routes: Routes = [
    {
        path: 'beats', component: BeatsContainerComponent
    },
    {
        path: 'beat-details', component: BeatsDetailsComponent
    },
    {
        path: 'beat-edit', component: BeatsDetailsEditComponent
    },
    {
        path: 'activities', component: ActivitiesContainerComponent
    },
    {
        path: 'bills', component: BillsContainerComponent
    }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
