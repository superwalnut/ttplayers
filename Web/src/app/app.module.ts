import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { SharedModule } from './shared/shared.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment';
import { AuthService } from "./service/auth.service";
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { GtagModule } from 'angular-gtag';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { TitleService } from './service/title.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutsModule,
    HttpClientModule,
    CarouselModule,
    SharedModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideAuth(() => getAuth()),
    AngularFireStorageModule,
    GtagModule.forRoot({
      trackingId: environment.firebase.measurementId, // Replace with your tracking ID
      trackPageviews: true
    }),
    RouterModule.forRoot(routes, { useHash: false, anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })
  ],
  providers: [AuthService, TitleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
