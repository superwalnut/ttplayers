import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { CountToModule } from 'angular-count-to';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { SharedModule } from '../shared/shared.module';
import { GymAboutComponent } from './gym/gym-about/gym-about.component';
import { GymBMIComponent } from './gym/gym-bmi/gym-bmi.component';
import { GymBrandComponent } from './gym/gym-brand/gym-brand.component';
import { GymCopyrightComponent } from './gym/gym-copyright/gym-copyright.component';
import { GymCounterComponent } from './gym/gym-counter/gym-counter.component';
import { GymPricingComponent } from './gym/gym-pricing/gym-pricing.component';
import { GymScheduleComponent } from './gym/gym-schedule/gym-schedule.component';
import { GymTestimonialComponent } from './gym/gym-testimonial/gym-testimonial.component';
import { GymTrainerComponent } from './gym/gym-trainer/gym-trainer.component';
import { GymWorkoutAboutComponent } from './gym/gym-workout-about/gym-workout-about.component';
// Gym Layout
import { GymComponent } from './gym/gym.component';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { PlayerDetailComponent } from './players/player-detail/player-detail.component';
import { PlayerListComponent } from './players/player-list/player-list.component';
import { SidebarComponent } from './players/player-list/sidebar/sidebar.component';
import { GymHeaderComponent} from './gym/gym-header/gym-header.component';
import { PlayerHistoryComponent } from './players/player-detail/player-history/player-history.component';
import { PlayerTotalCounterComponent } from './players/player-detail/player-total-counter/player-total-counter.component';
import { PlayerSummaryComponent } from './players/player-detail/player-summary/player-summary.component';
import { PlayerSetsStatisticsComponent } from './players/player-detail/player-sets-statistics/player-sets-statistics.component';
import { ClubDetailComponent } from './players/player-detail/club-detail/club-detail.component';
import { TeamPlayersComponent } from './players/player-detail/team-players/team-players.component';
import { HomeComponent } from './home/home.component';
import { ClubListComponent } from './clubs/club-list/club-list.component';
import { EventListComponent } from './events/event-list/event-list.component';

@NgModule({
  declarations: [
    GymComponent, GymAboutComponent, GymScheduleComponent, GymWorkoutAboutComponent, GymCounterComponent, GymTrainerComponent, GymTestimonialComponent, GymPricingComponent, GymBMIComponent, GymBrandComponent, GymCopyrightComponent, 
    PlayerDetailComponent, PlayerListComponent, SidebarComponent, GymHeaderComponent, PlayerHistoryComponent, PlayerTotalCounterComponent, PlayerSummaryComponent, PlayerSetsStatisticsComponent, ClubDetailComponent, TeamPlayersComponent, HomeComponent, ClubListComponent, EventListComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    CarouselModule,
    NgbModule,
    SharedModule,
    CountToModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTypeaheadModule
  ],
  exports: [],
})

export class LayoutsModule { }
