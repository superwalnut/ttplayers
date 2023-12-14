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
import { FooterFixedMobileMenuComponent } from './components/footer-fixed-mobile-menu/footer-fixed-mobile-menu.component';
import { GymCopyrightComponent } from './components/gym-copyright/gym-copyright.component';
import { ClubAutocompleteComponent } from './components/club-autocomplete/club-autocomplete.component';
@NgModule({
  declarations: [MenuComponent, 
    TapToTopComponent, 
    LoaderComponent, 
    GymFooterComponent, 
    GymNavComponent, 
    PlayerAutocompleteComponent, 
    FooterFixedMobileMenuComponent,
    GymCopyrightComponent,
    ClubAutocompleteComponent
  ],
  exports: [
    MenuComponent,
    LoaderComponent,
    TapToTopComponent,
    GymFooterComponent,
    GymNavComponent,
    PlayerAutocompleteComponent,
    GymCopyrightComponent,
    ClubAutocompleteComponent
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
