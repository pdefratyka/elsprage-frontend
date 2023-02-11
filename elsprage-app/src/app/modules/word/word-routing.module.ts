import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWordComponent } from './containers/add-word/add-word.component';
import { EditWordComponent } from './containers/edit-word/edit-word.component';
import { WordsComponent } from './containers/words/words.component';

const wordRoutes: Routes = [
  { path: 'add', component: AddWordComponent },
  { path: 'edit/:id', component: EditWordComponent },
  { path: '', component: WordsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(wordRoutes)],
  exports: [RouterModule],
})
export class WordRoutingModule {}
