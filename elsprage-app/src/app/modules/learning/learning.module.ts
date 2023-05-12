import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningPacketsComponent } from './containers/learning-packets/learning-packets.component';
import { LearningRoutingModule } from './learning-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LearningPacketsListComponent } from './components/learning-packets-list/learning-packets-list.component';
import { SingleLearningPacketComponent } from './components/single-learning-packet/single-learning-packet.component';
import { learningReducer } from './store/reducers';
import { learningEffects } from './store/effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LearningComponent } from './containers/learning/learning.component';
import { LearningModeComponent } from './components/learning-mode/learning-mode.component';
import { LearningTranslateComponent } from './components/learning-translate/learning-translate.component';
import { LearningTranslateSingleComponent } from './components/learning-translate/learning-translate-single/learning-translate-single.component';
import { LearningProgressComponent } from './components/learning-translate/learning-progress/learning-progress.component';
import { LearningResultComponent } from './components/learning-result/learning-result.component';



@NgModule({
  declarations: [
    LearningPacketsComponent,
    LearningPacketsListComponent,
    SingleLearningPacketComponent,
    LearningComponent,
    LearningModeComponent,
    LearningTranslateComponent,
    LearningTranslateSingleComponent,
    LearningProgressComponent,
    LearningResultComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    LearningRoutingModule,
    StoreModule.forFeature('learning', learningReducer, {}),
    EffectsModule.forFeature(learningEffects),
  ]
})
export class LearningModule { }
