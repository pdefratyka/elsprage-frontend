import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class RegisterErrorMessageService {
  public static DEFAULT_LOGIN_VALIDATION_ERROR =
    'ERROR.VALIDATION.REQUIRED_LOGIN';
  public static DEFAULT_PASSWORD_VALIDATION_ERROR =
    'ERROR.VALIDATION.REQUIRED_PASSWORD';
  public static DEFAULT_EMAIL_VALIDATION_ERROR =
    'ERROR.VALIDATION.REQUIRED_EMAIL';
  constructor() {}

  public static getLoginErrorMessage(errors: ValidationErrors): string {
    let loginError;
    if (errors && errors['required']) {
      loginError = RegisterErrorMessageService.DEFAULT_LOGIN_VALIDATION_ERROR;
    } else if (errors && errors['minlength']) {
      loginError = 'ERROR.VALIDATION.MIN_LOGIN_LENGTH';
    } else if (errors && errors['maxlength']) {
      loginError = 'ERROR.VALIDATION.MAX_LOGIN_LENGTH';
    }
    return loginError;
  }

  public static getPasswordErrorMessage(errors: ValidationErrors): string {
    let passwordError;
    if (errors && errors['required']) {
      passwordError =
        RegisterErrorMessageService.DEFAULT_PASSWORD_VALIDATION_ERROR;
    } else if (errors && errors['minlength']) {
      passwordError = 'ERROR.VALIDATION.MIN_PASSWORD_LENGTH';
    } else if (errors && errors['maxlength']) {
      passwordError = 'ERROR.VALIDATION.MAX_PASSWORD_LENGTH';
    }
    return passwordError;
  }

  public static getEmailErrorMessage(errors: ValidationErrors): string {
    let emailError;
    if (errors && errors['required']) {
      emailError = RegisterErrorMessageService.DEFAULT_EMAIL_VALIDATION_ERROR;
    } else if (errors && errors['invalidEmail']) {
      emailError = 'ERROR.VALIDATION.INVALID_EMAIL';
    }
    return emailError;
  }
}
