import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SportsPage } from './sports.page';

const routes: Routes = [
  {
    path: '',
    component: SportsPage
  },
  {
    path: 'team',
    loadChildren: () => import('./team/team.module').then( m => m.TeamPageModule)
  },
  {
    path: 'teams',
    loadChildren: () => import('./teams/teams.module').then( m => m.TeamsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SportsPageRoutingModule {}
