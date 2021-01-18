import { IndexesComponent } from './indexes/indexes.component';
import { HomeComponent } from './home/home.component';
import { CommoditiesComponent } from './commodities/commodities.component';
import { CoinsComponent } from './coins/coins.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'coins', component: CoinsComponent },
  { path: 'commodities', component: CommoditiesComponent },
  { path: 'indexes', component: IndexesComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
