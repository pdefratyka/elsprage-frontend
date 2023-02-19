import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GermanKeyboardComponent } from './components/german-keyboard/german-keyboard.component';
import { KeyComponent } from './components/key/key.component';
import { SideMenuComponent } from './containers/side-menu/side-menu.component';
import { TopMenuComponent } from './containers/top-menu/top-menu.component';
import { RouterModule } from '@angular/router';
import { WordListComponent } from './components/word-list/word-list.component';
import { SingleWordComponent } from './components/word-list/single-word/single-word.component';

@NgModule({
  declarations: [
    GermanKeyboardComponent,
    KeyComponent,
    SideMenuComponent,
    TopMenuComponent,
    WordListComponent,
    SingleWordComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule],
  exports: [
    GermanKeyboardComponent,
    SideMenuComponent,
    TopMenuComponent,
    WordListComponent,
  ],
})
export class SharedModule {}
