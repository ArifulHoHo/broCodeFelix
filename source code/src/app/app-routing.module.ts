import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { ShowDetailComponent } from './pages/show-detail/show-detail.component';
import { ShowsListComponent } from './pages/shows-list/shows-list.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'list/:type', component: ShowsListComponent },
  { path: 'list/:type/:genreId', component: ShowsListComponent },
  { path: 'detail/:id/:type', component: ShowDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
