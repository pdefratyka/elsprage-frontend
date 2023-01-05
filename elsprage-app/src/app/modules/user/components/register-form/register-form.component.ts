import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateUserRequest } from 'src/app/modules/shared/models/requests/create-user-request';
import { CreateUserResponse } from 'src/app/modules/shared/models/responses/create-user-response';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  @Output()
  userRegistration: EventEmitter<CreateUserRequest> = new EventEmitter<CreateUserRequest>();
  registerForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initRegisterForm();
  }

  register(): void {
    console.log("Register");
    this.userRegistration.emit({
      login: this.registerForm.get('login').value,
      password: this.registerForm.get('password').value,
      email: this.registerForm.get('email').value
    } as CreateUserRequest);
  }

  private initRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      login: ['', [Validators.required]],
      password: ['', Validators.required],
      email: ['', Validators.required],
    });
  }
}
