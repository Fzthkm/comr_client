import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ConsultantListComponent } from './consultant/consultant-list/consultant-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppLayoutComponent } from './shared/layouts/app-layout/app-layout.component';
import { WorkplaceComponent } from './workplace/workplace.component';
import { AppListComponent } from './app/app-list/app-list.component';
import { AppCreateComponent } from './app/app-create/app-create.component';
import { ConsultantLayoutComponent } from './shared/layouts/consultant-layout/consultant-layout.component';
import { OrganisationLayoutComponent } from './shared/layouts/organisation-layout/organisation-layout.component';
import { OrgListComponent } from './organisation/org-list/org-list.component';
import { OrgCreateComponent } from './organisation/org-create/org-create.component';
import { ConsultantCreateComponent } from './consultant/consultant-create/consultant-create.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultantListComponent,
    AppLayoutComponent,
    WorkplaceComponent,
    AppListComponent,
    AppCreateComponent,
    ConsultantLayoutComponent,
    OrganisationLayoutComponent,
    OrgListComponent,
    OrgCreateComponent,
    ConsultantCreateComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
