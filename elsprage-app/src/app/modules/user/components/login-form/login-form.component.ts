import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from 'src/app/modules/shared/models/requests/login-request';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  @Output()
  userLogin: EventEmitter<LoginRequest> = new EventEmitter<LoginRequest>();
  loginForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  login(): void {
    this.userLogin.emit({
      login: this.loginForm.get('login').value,
      password: this.loginForm.get('password').value,
    } as LoginRequest);
  }

  private initLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      login: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }
}
