import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordFormComponent } from './components/word-form/word-form.component';
import { AddWordComponent } from './containers/add-word/add-word.component';
import { WordRoutingModule } from './word-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects, wordReducer } from './store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WordFormComponent,
    AddWordComponent
  ],
  imports: [
    CommonModule,
    WordRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('word', wordReducer, {}),
    EffectsModule.forFeature(effects),
  ]
})
export class WordModule { }
