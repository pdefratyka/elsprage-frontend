import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'words',
    loadChildren: () =>
      import('./modules/word/word.module').then(
        (module) => module.WordModule
      ),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./modules/user/user.module').then(
        (module) => module.UserModule
      ),
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
