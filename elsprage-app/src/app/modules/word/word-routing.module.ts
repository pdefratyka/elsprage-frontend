import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWordComponent } from './containers/add-word/add-word.component';

const wordRoutes: Routes = [{ path: 'add', component: AddWordComponent }];

@NgModule({
  imports: [RouterModule.forChild(wordRoutes)],
  exports: [RouterModule],
})
export class WordRoutingModule { }
