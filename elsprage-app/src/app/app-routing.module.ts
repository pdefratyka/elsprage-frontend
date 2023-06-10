import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'words',
    loadChildren: () =>
      import('./modules/word/word.module').then((module) => module.WordModule),
  },
  {
    path: 'packets',
    loadChildren: () =>
      import('./modules/packet/packet.module').then(
        (module) => module.PacketModule
      ),
  },
  {
    path: 'learn',
    loadChildren: () =>
      import('./modules/learning/learning.module').then((module) => module.LearningModule),
  },
  {
    path: 'games',
    loadChildren: () =>
      import('./modules/game/game.module').then((module) => module.GameModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/user/user.module').then((module) => module.UserModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
