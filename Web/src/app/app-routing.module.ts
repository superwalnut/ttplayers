import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GymComponent } from './layouts/gym/gym.component';
import { PlayerListComponent } from './layouts/players/player-list/player-list.component';
import { PlayerDetailComponent } from './layouts/players/player-detail/player-detail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'gym',
    pathMatch: 'full',
  },
  {
    path: 'gym',
    component: GymComponent
  },
  {
    path: 'players/:keyword',
    component: PlayerListComponent
  },
  {
    path: 'player/:id',
    component: PlayerDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
