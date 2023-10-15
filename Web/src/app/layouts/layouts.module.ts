import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountToModule } from 'angular-count-to';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { SharedModule } from '../shared/shared.module';
import { GymAboutComponent } from './gym/gym-about/gym-about.component';
import { GymBMIComponent } from './gym/gym-bmi/gym-bmi.component';
import { GymBrandComponent } from './gym/gym-brand/gym-brand.component';
import { GymCopyrightComponent } from './gym/gym-copyright/gym-copyright.component';
import { GymCounterComponent } from './gym/gym-counter/gym-counter.component';
import { GymFooterComponent } from './gym/gym-footer/gym-footer.component';
import { GymHeaderComponent } from './gym/gym-header/gym-header.component';
import { GymNavComponent } from './gym/gym-nav/gym-nav.component';
import { GymPricingComponent } from './gym/gym-pricing/gym-pricing.component';
import { GymScheduleComponent } from './gym/gym-schedule/gym-schedule.component';
import { GymTestimonialComponent } from './gym/gym-testimonial/gym-testimonial.component';
import { GymTrainerComponent } from './gym/gym-trainer/gym-trainer.component';
import { GymWorkoutAboutComponent } from './gym/gym-workout-about/gym-workout-about.component';
// Gym Layout
import { GymComponent } from './gym/gym.component';
import { LayoutsRoutingModule } from './layouts-routing.module';

@NgModule({
  declarations: [
    GymComponent, GymNavComponent, GymHeaderComponent, GymAboutComponent, GymScheduleComponent, GymWorkoutAboutComponent, GymCounterComponent, GymTrainerComponent, GymTestimonialComponent, GymPricingComponent, GymBMIComponent, GymBrandComponent, GymFooterComponent, GymCopyrightComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    CarouselModule,
    NgbModule,
    SharedModule,
    CountToModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
})

export class LayoutsModule { }
