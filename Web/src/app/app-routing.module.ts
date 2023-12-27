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
import { MyClubComponent } from './layouts/dashboard/my-club/my-club.component';
import { BlogsComponent } from './layouts/blogs/blogs.component';
import { BlogDetailComponent } from './layouts/blogs/blog-detail/blog-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'TTPlayers |  Australian Table Tennis Players - STATISTICS & RANKING'}
  },
  {
    path: 'players/:keyword',
    component: PlayerListComponent,
    data: { title: 'Australian Table Tennis Players Search'}
  },
  {
    path: 'players',
    component: PlayerListComponent,
    data: { title: 'Australian Table Tennis Players Search'}
  },
  {
    path: 'player/:id',
    component: PlayerDetailComponent,
    data: { title: "Australian Table Tennis Player's match history and statistics"}
  },
  {
    path: 'clubs',
    component: ClubListComponent,
    data: { title: "Australian Table Tennis Clubs"}
  },
  {
    path: 'club/:id',
    component: ClubProfileDetailComponent,
    data: { title: "Australian Table Tennis Club's details"}
  },
  {
    path: 'events',
    component: EventListComponent,
    data: { title: "Australian Table Tennis Events"}
  },
  {
    path: 'event/:id',
    component: EventDetailComponent,
    data: { title: "Australian Table Tennis Event Details"}
  },
  {
    path: 'rankings',
    component: RankingComponent,
    data: { title: "Australian Table Tennis Players' rankings"}
  },
  {
    path: 'friends',
    component: FriendListComponent, canActivate: [AuthGuard]
  },
  {
    path: 'competitors',
    component: CompetitorListComponent, canActivate: [AuthGuard]
  },
  {
    path:'my-clubs',
    component: MyClubComponent, canActivate: [AuthGuard]
  },
  { path: 'wiki', loadChildren: () => import('./layouts/wiki-routing.module').then(m => m.WikiRoutingModule) },
  { path: 'blogs', component: BlogsComponent, data: {title:"Australian Table Tennis Blogs"} },
  { path: 'blogs/:slug', component: BlogDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'resend-email-verification', component: ResendEmailVerificationComponent },
  { path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard]},
  { path: 'profile', component:ProfileComponent , canActivate: [AuthGuard]},
  { path: 'privacy', component:PrivacyComponent, data: {title:"TTPlayers Privacies"} },
  { path: 'terms', component: TermsComponent , data: {title:"TTPlayers Terms and Conditions"} },
  { path: 'cookie', component: CookiePolicyComponent , data: {title:"TTPlayers Cookie Policy"} },
  { path: 'faq', component: FaqComponent, data: {title:"TTPlayers FAQ"} },
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
