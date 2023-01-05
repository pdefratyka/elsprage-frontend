import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CreateUserRequest } from 'src/app/modules/shared/models/requests/create-user-request';
import { UserPageAction, UserState } from '../../store';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private store: Store<UserState>) {
  }

  register(createUserRequest: CreateUserRequest): void {
    console.log("Hej");
    this.store.dispatch(UserPageAction.createUser({ createUserRequest }));
  }
}
