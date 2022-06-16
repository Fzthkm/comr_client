import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppLayoutComponent} from "./shared/layouts/app-layout/app-layout.component";
import {ConsultantsComponent} from "./consultants/consultants.component";
import {OrganisationComponent} from "./organisation/organisation.component";
import {AppListComponent} from "./app-list/app-list.component";
import {AppCreateComponent} from "./app-create/app-create.component";
import {ConsultantListComponent} from "./consultant-list/consultant-list.component";
import {ConsultantLayoutComponent} from "./shared/layouts/consultant-layout/consultant-layout.component";
import {OrganisationLayoutComponent} from "./shared/layouts/organisation-layout/organisation-layout.component";
import {OrgCreateComponent} from "./org-create/org-create.component";
import {OrgListComponent} from "./org-list/org-list.component";

const routes: Routes = [
  {
    path: 'app', component: AppLayoutComponent, children: [
      {path: 'create', component: AppCreateComponent}
      , {path: 'list', component: AppListComponent}
    ]}
  , {path: 'consultants', component: ConsultantLayoutComponent, children:[
      {path: 'create', component: ConsultantsComponent}
      , {path: 'list', component: ConsultantListComponent}
    ]}
  , {path: 'organisation', component: OrganisationLayoutComponent, children: [
      {path: 'create', component: OrgCreateComponent}
      , {path: 'list', component: OrgListComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
