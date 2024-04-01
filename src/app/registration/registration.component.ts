import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordConfirmationValidator } from '../validator/password-confirmation.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group(
      {
        firstName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(17),
          ],
        ],
        lastName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(17),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        mobile: ['', [Validators.required, Validators.pattern('^995\\d{9}$')]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.pattern('^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).+$'),
          ],
        ],
        confirm_password: ['', Validators.required,],
        company: ['', Validators.required],
      },
      { validators: [passwordConfirmationValidator] }
    );
  }

  ngOnInit(): void {
  }
  get userName() {
    return this.userForm.get('firstName');
  }
  get userLastName() {
    return this.userForm.get('lastName');
  }
  get userEmail() {
    return this.userForm.get('email');
  }
  get userMobile() {
    return this.userForm.get('mobile');
  }
  get userPassword() {
    return this.userForm.get('password');
  }
  get userConfirm_password() {
    return this.userForm.get('confirm_password')
  }
  get userCompany() {
    return this.userForm.get('company');
  }
  onSubmit() {
    console.log(this.userForm.value);
  }
}
