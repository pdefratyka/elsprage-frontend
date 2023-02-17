import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GermanKeyboardComponent } from './components/german-keyboard/german-keyboard.component';
import { KeyComponent } from './components/key/key.component';
import { SideMenuComponent } from './containers/side-menu/side-menu.component';
import { TopMenuComponent } from './containers/top-menu/top-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    GermanKeyboardComponent,
    KeyComponent,
    SideMenuComponent,
    TopMenuComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule],
  exports: [GermanKeyboardComponent, SideMenuComponent, TopMenuComponent],
})
export class SharedModule {}
