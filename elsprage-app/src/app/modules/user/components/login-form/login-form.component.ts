import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginUserRequest } from 'src/app/modules/shared/models/requests/login-user-request';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output()
  userLogin: EventEmitter<LoginUserRequest> = new EventEmitter<LoginUserRequest>();
  loginForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initLoginForm();
  }

  login(): void {
    this.userLogin.emit({
      login: this.loginForm.get('login').value,
      password: this.loginForm.get('password').value
    } as LoginUserRequest);
  }

  private initLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      login: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }
}
