import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GymComponent } from './gym/gym.component';

const routes: Routes = [
  {
    path: '',
    component: GymComponent,
    data: {
      title: "ttPlayers | table tennis player statistics"
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
