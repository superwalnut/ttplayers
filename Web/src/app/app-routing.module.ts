import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GymComponent } from './layouts/gym/gym.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'gym',
    pathMatch: 'full',
  },
  {
    path: 'gym',
    component: GymComponent
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
