import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GymComponent } from './layouts/gym/gym.component';
import { PlayerListComponent } from './layouts/players/player-list/player-list.component';
import { PlayerDetailComponent } from './layouts/players/player-detail/player-detail.component';
import { HomeComponent } from './layouts/home/home.component';
import { ClubListComponent } from './layouts/clubs/club-list/club-list.component';
import { EventListComponent } from './layouts/events/event-list/event-list.component';
import { EventDetailComponent } from './layouts/events/event-detail/event-detail.component';
import { RankingComponent } from './layouts/players/ranking/ranking.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
    path: 'players',
    component: PlayerListComponent
  },
  {
    path: 'player/:id',
    component: PlayerDetailComponent
  },
  {
    path: 'clubs',
    component: ClubListComponent
  },
  {
    path: 'events',
    component: EventListComponent
  },
  {
    path: 'event/:id',
    component: EventDetailComponent
  },
  {
    path: 'rankings',
    component: RankingComponent
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
