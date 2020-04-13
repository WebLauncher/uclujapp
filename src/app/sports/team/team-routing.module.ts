import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamPage } from './team.page';

const routes: Routes = [
  {
    path: ':teamId',
    component: TeamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamPageRoutingModule {}
