import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ConsultantListComponent } from './consultant-list/consultant-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import { AppLayoutComponent } from './shared/layouts/app-layout/app-layout.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { ConsultantsComponent } from './consultants/consultants.component';
import { WorkplaceComponent } from './workplace/workplace.component';
import { AppListComponent } from './app-list/app-list.component';
import { AppCreateComponent } from './app-create/app-create.component';
import { ConsultantLayoutComponent } from './shared/layouts/consultant-layout/consultant-layout.component';
import { OrganisationLayoutComponent } from './shared/layouts/organisation-layout/organisation-layout.component';
import { OrgListComponent } from './org-list/org-list.component';
import { OrgCreateComponent } from './org-create/org-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultantListComponent,
    AppLayoutComponent,
    OrganisationComponent,
    ConsultantsComponent,
    WorkplaceComponent,
    AppListComponent,
    AppCreateComponent,
    ConsultantLayoutComponent,
    OrganisationLayoutComponent,
    OrgListComponent,
    OrgCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
