import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GermanKeyboardComponent } from './components/german-keyboard/german-keyboard.component';
import { KeyComponent } from './components/key/key.component';

@NgModule({
  declarations: [
    GermanKeyboardComponent,
    KeyComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [GermanKeyboardComponent],
})
export class SharedModule { }
