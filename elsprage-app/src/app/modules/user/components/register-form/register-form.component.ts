import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateUserRequest } from 'src/app/modules/shared/models/requests/create-user-request';
import { emailValidator } from '../../services/email-validator';
import { RegisterErrorMessageService } from '../../services/register-error-message.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  @Output()
  userRegistration: EventEmitter<CreateUserRequest> = new EventEmitter<CreateUserRequest>();
  registerForm: FormGroup;
  loginError = RegisterErrorMessageService.DEFAULT_LOGIN_VALIDATION_ERROR;
  passwordError = RegisterErrorMessageService.DEFAULT_PASSWORD_VALIDATION_ERROR;
  emailError = RegisterErrorMessageService.DEFAULT_EMAIL_VALIDATION_ERROR;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initRegisterForm();
  }

  register(): void {
    this.userRegistration.emit({
      login: this.login.value,
      password: this.password.value,
      email: this.email.value,
    } as CreateUserRequest);
  }

  updateLoginError(): void {
    this.loginError = RegisterErrorMessageService.getLoginErrorMessage(
      this.login.errors
    );
  }

  updatePasswordError(): void {
    this.passwordError = RegisterErrorMessageService.getPasswordErrorMessage(
      this.password.errors
    );
  }

  updateEmailError(): void {
    this.emailError = RegisterErrorMessageService.getEmailErrorMessage(
      this.email.errors
    );
  }

  private initRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      login: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(80),
        ],
      ],
      email: ['', [Validators.required, emailValidator]],
    });
  }

  get login() {
    return this.registerForm.get('login');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get email() {
    return this.registerForm.get('email');
  }
}
