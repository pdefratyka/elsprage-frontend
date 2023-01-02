import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordFormComponent } from './components/word-form/word-form.component';
import { AddWordComponent } from './containers/add-word/add-word.component';
import { WordRoutingModule } from './word-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects, wordReducer } from './store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WordListComponent } from './components/word-list/word-list.component';
import { WordsComponent } from './containers/words/words.component';
import { SingleWordComponent } from './components/single-word/single-word.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    WordFormComponent,
    AddWordComponent,
    WordListComponent,
    WordsComponent,
    SingleWordComponent
  ],
  imports: [
    CommonModule,
    WordRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature('word', wordReducer, {}),
    EffectsModule.forFeature(effects),
  ]
})
export class WordModule { }
