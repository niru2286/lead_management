import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateLeadComponent } from './leads/create-lead/create-lead.component';
import { HttpClientModule } from '@angular/common/http';
import { TopTilesComponent } from './dashboard/top-tiles/top-tiles.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { TopBarComponent } from './shared/top-bar/top-bar.component';
import { IndexLeadComponent } from './leads/index-lead/index-lead.component';
import { AddCallComponent } from './shared/calls/add-call/add-call.component';
import { ViewCallComponent } from './shared/calls/view-call/view-call.component';
import { ViewEditLeadComponent } from './leads/view-edit-lead/view-edit-lead.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddContactsComponent } from './shared/contacts/add-contacts/add-contacts.component';
import { ViewContactsComponent } from './shared/contacts/view-contacts/view-contacts.component';
import { ViewNotesComponent } from './shared/notes/view-notes/view-notes.component';
import { AddNotesComponent } from './shared/notes/add-notes/add-notes.component';
import { ProductsIndexComponent } from './masters/products-index/products-index.component';
import { ViewEditProductsComponent } from './masters/view-edit-products/view-edit-products.component';
import { SourcesIndexComponent } from './masters/sources-index/sources-index.component';
import { ViewEditSourcesComponent } from './masters/view-edit-sources/view-edit-sources.component';
import { UsersIndexComponent } from './masters/users-index/users-index.component';
import { ViewEditUsersComponent } from './masters/view-edit-users/view-edit-users.component';
import { ExceptionHandler } from './shared/services/errorhandler';
import { TeamsIndexComponent } from './masters/teams-index/teams-index.component';
import { ViewEditTeamsComponent } from './masters/view-edit-teams/view-edit-teams.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateLeadComponent,
    TopTilesComponent,
    SideMenuComponent,
    TopBarComponent,
    IndexLeadComponent,
    AddCallComponent,
    ViewCallComponent,
    ViewEditLeadComponent,
    AddContactsComponent,
    ViewContactsComponent,
    ViewNotesComponent,
    AddNotesComponent,
    ProductsIndexComponent,
    ViewEditProductsComponent,
    SourcesIndexComponent,
    ViewEditSourcesComponent,
    UsersIndexComponent,
    ViewEditUsersComponent,
    TeamsIndexComponent,
    ViewEditTeamsComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ExceptionHandler
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
