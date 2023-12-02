import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GymComponent } from './layouts/gym/gym.component';
import { PlayerListComponent } from './layouts/players/player-list/player-list.component';
import { PlayerDetailComponent } from './layouts/players/player-detail/player-detail.component';
import { HomeComponent } from './layouts/home/home.component';
import { ClubListComponent } from './layouts/clubs/club-list/club-list.component';
import { ClubProfileDetailComponent } from './layouts/clubs/club-profile-detail/club-profile-detail.component';
import { EventListComponent } from './layouts/events/event-list/event-list.component';
import { EventDetailComponent } from './layouts/events/event-detail/event-detail.component';
import { RankingComponent } from './layouts/players/ranking/ranking.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './layouts/forgot-password/forgot-password.component';
import { AuthGuard } from './auth/auth.guard';
import { RegisterComponent } from './layouts/register/register.component';
import { LoginComponent } from './layouts/login/login.component';
import { ProfileComponent } from './layouts/profile/profile.component';
import { LogoutComponent } from './layouts/logout/logout.component';
import { ResendEmailVerificationComponent } from './layouts/resend-email-verification/resend-email-verification.component';
import { FriendListComponent } from './layouts/dashboard/friend-list/friend-list.component';
import { CompetitorListComponent } from './layouts/dashboard/competitor-list/competitor-list.component';
import { PrivacyComponent } from './layouts/privacy/privacy.component';
import { TermsComponent } from './layouts/terms/terms.component';
import { CookiePolicyComponent } from './layouts/cookie-policy/cookie-policy.component';
import { FaqComponent } from './layouts/faq/faq.component';

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
    path: 'club/:id',
    component: ClubProfileDetailComponent
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
  },
  {
    path: 'friends',
    component: FriendListComponent, canActivate: [AuthGuard]
  },
  {
    path: 'competitors',
    component: CompetitorListComponent, canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'resend-email-verification', component: ResendEmailVerificationComponent },
  { path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard]},
  { path: 'profile', component:ProfileComponent , canActivate: [AuthGuard]},
  { path: 'privacy', component:PrivacyComponent},
  { path: 'terms', component: TermsComponent },
  { path: 'cookie', component: CookiePolicyComponent },
  { path: 'faq', component: FaqComponent}
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
