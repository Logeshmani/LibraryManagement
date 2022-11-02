import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProjectComponent } from './ProjectManagement/create-project/create-project.component';
import { AddResourceComponent } from './ProjectManagement/add-resource/add-resource.component';
import { ProjectsComponent } from './ProjectManagement/projects/projects.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddSprintComponent } from './SprintManagement/add-sprint/add-sprint.component';
import { AddMeetingsComponent } from './SprintManagement/add-meetings/add-meetings.component';
import { ReScheduleMeetingComponent } from './SprintManagement/re-schedule-meeting/re-schedule-meeting.component';
import { CreateProductBacklogComponent } from './ProductBacklogManagement/create-product-backlog/create-product-backlog.component';
import { UserStoriesListComponent } from './ProductBacklogManagement/user-stories-list/user-stories-list.component';
import { UserStoryDetailsComponent } from './ProductBacklogManagement/user-story-details/user-story-details.component';
import { NewDefectComponent } from './DefectsManagement/new-defect/new-defect.component';
import { DefectsListComponent } from './DefectsManagement/defects-list/defects-list.component';
import { DefectDetailsComponent } from './DefectsManagement/defect-details/defect-details.component';
import { DefectsReportComponent } from './DefectsManagement/defects-report/defects-report.component';
import { UseStoryReportComponentComponent } from './ProductBacklogManagement/use-story-report-component/use-story-report-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateProjectComponent,
    AddResourceComponent,
    ProjectsComponent,
    NavBarComponent,
    AddSprintComponent,
    AddMeetingsComponent,
    ReScheduleMeetingComponent,
    CreateProductBacklogComponent,
    UserStoriesListComponent,
    UserStoryDetailsComponent,
    NewDefectComponent,
    DefectsListComponent,
    DefectDetailsComponent,
    DefectsReportComponent,
    UseStoryReportComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
