import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppLayoutComponent} from "./shared/layouts/app-layout/app-layout.component";
import {AppListComponent} from "./app/app-list/app-list.component";
import {AppCreateComponent} from "./app/app-create/app-create.component";
import {ConsultantListComponent} from "./consultant/consultant-list/consultant-list.component";
import {ConsultantLayoutComponent} from "./shared/layouts/consultant-layout/consultant-layout.component";
import {OrganisationLayoutComponent} from "./shared/layouts/organisation-layout/organisation-layout.component";
import {OrgCreateComponent} from "./organisation/org-create/org-create.component";
import {OrgListComponent} from "./organisation/org-list/org-list.component";
import {ConsultantCreateComponent} from "./consultant/consultant-create/consultant-create.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {OrgDetailComponent} from "./organisation/org-detail/org-detail.component";
import {ConsultantDetailComponent} from "./consultant/consultant-detail/consultant-detail.component";
import {AppDetailComponent} from "./app/app-detail/app-detail.component";

const routes: Routes = [
  {
    path: 'app', component: AppLayoutComponent, children: [
      {path: 'create', component: AppCreateComponent}
      , {path: 'list', component: AppListComponent}
      , {path: ':id', component: AppDetailComponent}
    ]}
  , {path: 'consultants', component: ConsultantLayoutComponent, children:[
      {path: 'create', component: ConsultantCreateComponent}
      , {path: 'list', component: ConsultantListComponent}
      , {path: ':id', component: ConsultantDetailComponent}
    ]}
  , {path: 'org', component: OrganisationLayoutComponent, children: [
      {path: 'create', component: OrgCreateComponent}
      , {path: 'list', component: OrgListComponent}
      , {path: ':id', component: OrgDetailComponent}
    ]}
  , {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
