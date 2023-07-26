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
import { WordSearchComponent } from './components/word-list/word-search/word-search.component';
import { PagePickerComponent } from './components/word-list/page-picker/page-picker.component';
import { TextWithSynonymsPipe } from './pipes/text-with-synonyms.pipe';
import { FirstWordPipe } from './pipes/first-word.pipe';
import { UmlautKeyDirective } from './directives/umlaut-key.directive';
import { TimerComponent } from './components/timer/timer.component';
import { TimerPipe } from './pipes/timer.pipe';

@NgModule({
  declarations: [
    GermanKeyboardComponent,
    KeyComponent,
    SideMenuComponent,
    TopMenuComponent,
    WordListComponent,
    SingleWordComponent,
    WordSearchComponent,
    PagePickerComponent,
    TextWithSynonymsPipe,
    FirstWordPipe,
    UmlautKeyDirective,
    TimerComponent,
    TimerPipe,
  ],
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule],
  exports: [
    GermanKeyboardComponent,
    SideMenuComponent,
    TopMenuComponent,
    WordListComponent,
    TextWithSynonymsPipe,
    FirstWordPipe,
    UmlautKeyDirective,
    TimerComponent,
    TimerPipe
  ],
})
export class SharedModule {}
