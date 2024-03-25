import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      userEmail: [''],
      userPassword: [''],
    });
  }
  closeUser = true;
  showRegistration = false;

  ngOnInit(): void {}
  onFormSubmit() {
    console.log(this.profileForm.value);
    this.profileForm.get('userEmail')?.setValue('');
    this.profileForm.get('userPassword')?.setValue('');
  }
  //hide user show reg
  onCloseUser() {
    this.closeUser = !this.closeUser;
    this.showRegistration = !this.showRegistration;
  }
}
