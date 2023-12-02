import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { SharedModule } from '../shared/shared.module';
import { GymAboutComponent } from './gym/gym-about/gym-about.component';
import { GymBMIComponent } from './gym/gym-bmi/gym-bmi.component';
import { GymBrandComponent } from './gym/gym-brand/gym-brand.component';
import { GymCounterComponent } from './gym/gym-counter/gym-counter.component';
import { GymPricingComponent } from './gym/gym-pricing/gym-pricing.component';
import { GymScheduleComponent } from './gym/gym-schedule/gym-schedule.component';
import { GymTestimonialComponent } from './gym/gym-testimonial/gym-testimonial.component';
import { HomeEventsComponent } from './gym/home-events/home-events.component';
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
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { RankingComponent } from './players/ranking/ranking.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { ResendEmailVerificationComponent } from './resend-email-verification/resend-email-verification.component';
import { PlayerDetailBasicInfoComponent } from '../layouts/players/player-detail/player-detail-basic-info/player-detail-basic-info.component';
import { PlayerListTileComponent } from './players/player-list/player-list-tile/player-list-tile.component';
import { PlayerRankingComponent } from './players/player-detail/player-ranking/player-ranking.component';
import { PlayerWinRateComponent } from './players/player-detail/player-win-rate/player-win-rate.component';
import { PlayerOpponentComponent } from './players/player-detail/player-opponent/player-opponent.component';
import { PlayerMatchComponent } from './players/player-detail/player-match/player-match.component';
import { ClubProfileDetailComponent } from './clubs/club-profile-detail/club-profile-detail.component';
import { NgxGaugeModule } from 'ngx-gauge';
import { ClubProfileHeaderComponent } from './clubs/club-profile-detail/club-profile-header/club-profile-header.component';
import { ClubProfileAboutUsComponent } from './clubs/club-profile-detail/club-profile-about-us/club-profile-about-us.component';
import { ClubProfileContactUsComponent } from './clubs/club-profile-detail/club-profile-contact-us/club-profile-contact-us.component';
import { ClubProfileEventsComponent } from './clubs/club-profile-detail/club-profile-events/club-profile-events.component';
import { ClubProfilePlayersComponent } from './clubs/club-profile-detail/club-profile-players/club-profile-players.component';
import { FriendListComponent } from './dashboard/friend-list/friend-list.component'
import { FriendDetailTileComponent } from './dashboard/friend-list/friend-detail-tile/friend-detail-tile.component';
import { CompetitorListComponent } from './dashboard/competitor-list/competitor-list.component';
import { CompetitorDetailTileComponent } from './dashboard/competitor-list/competitor-detail-tile/competitor-detail-tile.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { PlayerMatchPercentageComponent } from './players/player-detail/player-match-percentage/player-match-percentage.component';
import { PlayerMatchScoreStatsComponent } from './players/player-detail/player-match-score-stats/player-match-score-stats.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { RankingItemComponent } from './players/ranking/ranking-item/ranking-item.component';
import { PlayerMatchScoreStatsItemThreeSetsComponent } from './players/player-detail/player-match-score-stats/player-match-score-stats-item-three-sets/player-match-score-stats-item-three-sets.component';
import { PlayerMatchScoreStatsItemFiveSetsComponent } from './players/player-detail/player-match-score-stats/player-match-score-stats-item-five-sets/player-match-score-stats-item-five-sets.component';
import { PlayerMatchScoreStatsItemSevenSetsComponent } from './players/player-detail/player-match-score-stats/player-match-score-stats-item-seven-sets/player-match-score-stats-item-seven-sets.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    GymComponent, GymAboutComponent, GymScheduleComponent, GymWorkoutAboutComponent, GymCounterComponent, HomeEventsComponent, GymTestimonialComponent, GymPricingComponent, GymBMIComponent, GymBrandComponent, 
    PlayerDetailComponent, PlayerListComponent, SidebarComponent, GymHeaderComponent, PlayerHistoryComponent, PlayerTotalCounterComponent, PlayerSummaryComponent, PlayerSetsStatisticsComponent, ClubDetailComponent, TeamPlayersComponent, 
    HomeComponent, ClubListComponent, EventListComponent, EventDetailComponent, RankingComponent, DashboardComponent, ForgotPasswordComponent, LoginComponent, RegisterComponent, ProfileComponent, LogoutComponent, ResendEmailVerificationComponent,
    PlayerDetailBasicInfoComponent,
    PlayerListTileComponent,
    FriendDetailTileComponent,
    PlayerRankingComponent,
    PlayerWinRateComponent,
    PlayerOpponentComponent,
    PlayerMatchComponent,
    ClubProfileDetailComponent,
    ClubProfileHeaderComponent,
    ClubProfileAboutUsComponent,
    ClubProfileContactUsComponent,
    ClubProfileEventsComponent,
    ClubProfilePlayersComponent,
    FriendListComponent,
    CompetitorListComponent,
    CompetitorDetailTileComponent,
    PrivacyComponent,
    TermsComponent,
    PlayerMatchPercentageComponent,
    PlayerMatchScoreStatsComponent,
    CookiePolicyComponent,
    RankingItemComponent,
    PlayerMatchScoreStatsItemThreeSetsComponent,
    PlayerMatchScoreStatsItemFiveSetsComponent,
    PlayerMatchScoreStatsItemSevenSetsComponent,
    FaqComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    CarouselModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxGaugeModule,
  ],
  exports: [],
})

export class LayoutsModule { }
