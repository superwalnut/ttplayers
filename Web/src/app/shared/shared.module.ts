import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { LoaderComponent } from './components/loader/loader.component';
import { MenuComponent } from './components/navigation/menu/menu.component';
import { TapToTopComponent } from './components/tap-to-top/tap-to-top.component';
import { GymFooterComponent } from './components/gym-footer/gym-footer.component';
import { GymNavComponent } from './components/gym-nav/gym-nav.component';
import { PlayerAutocompleteComponent } from './components/player-autocomplete/player-autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [MenuComponent, TapToTopComponent, LoaderComponent, GymFooterComponent, GymNavComponent, PlayerAutocompleteComponent],
  exports: [
    MenuComponent,
    LoaderComponent,
    TapToTopComponent,
    GymFooterComponent,
    GymNavComponent,
    PlayerAutocompleteComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ]
})
export class SharedModule { }
