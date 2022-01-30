import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopTilesComponent } from './dashboard/top-tiles/top-tiles.component';
import { IndexLeadComponent } from './leads/index-lead/index-lead.component';
import { ViewEditLeadComponent } from './leads/view-edit-lead/view-edit-lead.component';
import { ProductsIndexComponent } from './masters/products-index/products-index.component';
import { SourcesIndexComponent } from './masters/sources-index/sources-index.component';
import { TeamsIndexComponent } from './masters/teams-index/teams-index.component';
import { UsersIndexComponent } from './masters/users-index/users-index.component';

const routes: Routes = [
  {
    path: 'lead-index', component: IndexLeadComponent
  },
  {
    path: 'lead-view', component: ViewEditLeadComponent
  },
  {
    path: 'product-master-index', component: ProductsIndexComponent,
  },
  {
    path: 'source-master-index', component: SourcesIndexComponent,
  },
  {
    path: 'users-master-index', component: UsersIndexComponent,
  },
  {
    path: 'team-master-index', component: TeamsIndexComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
