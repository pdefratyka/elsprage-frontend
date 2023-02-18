import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordFormComponent } from './components/word-form/word-form.component';
import { AddWordComponent } from './containers/add-word/add-word.component';
import { WordRoutingModule } from './word-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { wordEffects, wordReducer } from './store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WordListComponent } from './components/word-list/word-list.component';
import { WordsComponent } from './containers/words/words.component';
import { SingleWordComponent } from './components/single-word/single-word.component';
import { SharedModule } from '../shared/shared.module';
import { EditWordFormComponent } from './components/edit-word-form/edit-word-form.component';
import { EditWordComponent } from './containers/edit-word/edit-word.component';



@NgModule({
  declarations: [
    WordFormComponent,
    AddWordComponent,
    WordListComponent,
    WordsComponent,
    SingleWordComponent,
    EditWordFormComponent,
    EditWordComponent
  ],
  imports: [
    CommonModule,
    WordRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature('word', wordReducer, {}),
    EffectsModule.forFeature(wordEffects),
  ]
})
export class WordModule { }
