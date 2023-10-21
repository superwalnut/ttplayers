import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { LoaderComponent } from './components/loader/loader.component';
import { MenuComponent } from './components/navigation/menu/menu.component';
import { TapToTopComponent } from './components/tap-to-top/tap-to-top.component';
import { GymFooterComponent } from './components/gym-footer/gym-footer.component';
import { GymNavComponent } from './components/gym-nav/gym-nav.component';

@NgModule({
  declarations: [MenuComponent, TapToTopComponent, LoaderComponent, GymFooterComponent, GymNavComponent],
  exports: [
    MenuComponent,
    LoaderComponent,
    TapToTopComponent,
    GymFooterComponent,
    GymNavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot()
  ]
})
export class SharedModule { }
