import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { UserRoutingModule } from './user-routing.module';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { effects, userReducer } from './store';
import { EffectsModule } from '@ngrx/effects';
import { TranslationConfigModule } from '../shared/configs/translation-config.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RegisterFormComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    TranslationConfigModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    StoreModule.forFeature('user', userReducer, {}),
    EffectsModule.forFeature(effects),
  ]
})
export class UserModule { }
