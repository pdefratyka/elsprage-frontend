import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from 'src/app/modules/shared/models/responses/login-response';
import { ToastService } from '../notification/toast.service';
import { TokenService } from '../common/token.service';

@Injectable({
  providedIn: 'root',
})
export class UserHelperService {
  constructor(
    private readonly toastService: ToastService,
    private readonly tokenService: TokenService,
    private readonly router: Router
  ) {}

  public handleLoginSuccess(loginResponse: LoginResponse): void {
    this.tokenService.setToken(loginResponse.token);
    this.toastService.displayTranslatedToastSuccess('SUCCESS.LOGIN');
    this.router.navigate(['/words']);
  }

  public handleLoginFailure(error: HttpErrorResponse): void {
    const errorTranslationKey = this.getLoginErrorTranslationKey(error);
    this.toastService.displayTranslatedToastError(errorTranslationKey);
  }

  public handleRegisterSuccess(): void {
    this.toastService.displayTranslatedToastSuccess('SUCCESS.REGISTER');
    this.router.navigate(['/login']);
  }

  public handleRegisterFailure(error: HttpErrorResponse): void {
    const errorTranslationKey = this.getRegisterErrorTranslationKey(error);
    this.toastService.displayTranslatedToastError(errorTranslationKey);
  }

  private getRegisterErrorTranslationKey(error: HttpErrorResponse): string {
    let errorTranslationKey = 'ERROR.INTERNAL_SERVER_ERROR';
    if (error.status === 400 && error.error.message.includes('exists')) {
      if (error.error.message.includes('login')) {
        errorTranslationKey = 'ERROR.LOGIN_ALREADY_IN_USE';
      } else if (error.error.message.includes('email')) {
        errorTranslationKey = 'ERROR.EMAIL_ALREADY_IN_USE';
      }
    }
    return errorTranslationKey;
  }

  private getLoginErrorTranslationKey(error: HttpErrorResponse): string {
    let errorTranslationKey = 'ERROR.INTERNAL_SERVER_ERROR';
    if (error.status === 400) {
      errorTranslationKey = 'ERROR.BAD_CREDENTIALS';
    }
    return errorTranslationKey;
  }
}
