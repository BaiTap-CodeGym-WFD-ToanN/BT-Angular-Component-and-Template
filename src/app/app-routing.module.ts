import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TimeCountPackComponent} from './time-count-pack/time-count-pack.component';
import {ProgressBarPackComponent} from './progress-bar-pack/progress-bar-pack.component';
import {RedirectorComponent} from './redirector/redirector.component';
import {NameCardPackComponent} from './name-card-pack/name-card-pack.component';
import {RatingPackComponent} from './rating-pack/rating-pack.component';

const routes: Routes = [
  {path: '', component: RedirectorComponent},
  {path: 'time', component: TimeCountPackComponent},
  {path: 'progress', component: ProgressBarPackComponent},
  {path: 'name', component: NameCardPackComponent},
  {path: 'rating', component: RatingPackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
