import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeCountPackComponent } from './time-count-pack/time-count-pack.component';
import { ProgressBarPackComponent } from './progress-bar-pack/progress-bar-pack.component';
import { TrueBarComponent } from './progress-bar-pack/true-bar/true-bar.component';
import { RedirectorComponent } from './redirector/redirector.component';
import { NameCardPackComponent } from './name-card-pack/name-card-pack.component';
import { TrueNameCardComponent } from './name-card-pack/true-name-card/true-name-card.component';
import { TrueTimeCountComponent } from './time-count-pack/true-time-count/true-time-count.component';
import { RatingPackComponent } from './rating-pack/rating-pack.component';
import { TrueRatingComponent } from './rating-pack/true-rating/true-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeCountPackComponent,
    ProgressBarPackComponent,
    TrueBarComponent,
    RedirectorComponent,
    NameCardPackComponent,
    TrueNameCardComponent,
    TrueTimeCountComponent,
    RatingPackComponent,
    TrueRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
