import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginRequest } from 'src/app/modules/shared/models/requests/login-request';
import { UserPageAction } from '../../store';
import { UserState } from '../../store/reducers/user.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private store: Store<UserState>) {
  }

  login(loginUserRequest: LoginRequest): void {
    this.store.dispatch(UserPageAction.loginUser({ loginUserRequest }));
  }
}
