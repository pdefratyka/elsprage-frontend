import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearningPacketsComponent } from './containers/learning-packets/learning-packets.component';
import { LearningComponent } from './containers/learning/learning.component';

const learningRoutes: Routes = [
  { path: '', component: LearningPacketsComponent },
  { path: ':id', component: LearningComponent },
];

@NgModule({
  imports: [RouterModule.forChild(learningRoutes)],
  exports: [RouterModule],
})
export class LearningRoutingModule { }
