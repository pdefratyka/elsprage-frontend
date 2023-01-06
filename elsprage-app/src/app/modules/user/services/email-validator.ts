import { FormControl } from '@angular/forms';

export function emailValidator(control: FormControl) {
  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return emailRegex.test(control.value) ? null : { invalidEmail: true };
}
