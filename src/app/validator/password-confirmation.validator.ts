import { AbstractControl } from '@angular/forms';

export const passwordConfirmationValidator = (control: AbstractControl) => {
  let password = control?.get('password');
  let confirm_password = control?.get('confirm_password');
  let doesntMatch = password?.value !== confirm_password?.value;
  if (doesntMatch) {
    control?.get('confirm_password')?.setErrors({passwordNotMatch: true});
  }
  return doesntMatch ? {passwordNotMatch: true} : null;
};
