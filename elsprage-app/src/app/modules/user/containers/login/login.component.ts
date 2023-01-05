import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginUserRequest } from 'src/app/modules/shared/models/requests/login-user-request';
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

  login(loginUserRequest: LoginUserRequest): void {
    this.store.dispatch(UserPageAction.loginUser({ loginUserRequest }));
  }
}
