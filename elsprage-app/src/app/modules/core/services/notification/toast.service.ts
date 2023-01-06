import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(
    private readonly toastr: ToastrService,
    private readonly translateService: TranslateService
  ) {}
  success(message: string, title?: string) {
    this.toastr.success(message, title);
  }
  error(message: string, title?: string) {
    this.toastr.error(message, title);
  }

  displayTranslatedToastError(translationKey: string): void {
    this.translateService
      .get(translationKey)
      .subscribe((translation: string) => {
        this.error(translation);
      });
  }

  displayTranslatedToastSuccess(translationKey: string): void {
    this.translateService
      .get(translationKey)
      .subscribe((translation: string) => {
        this.success(translation);
      });
  }
}
