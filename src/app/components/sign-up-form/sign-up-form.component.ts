import { AuthService } from './../shared/services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css'],
})
export class SignUpFormComponent {
  constructor(
    private _FormBuilder: FormBuilder,
    private _Router: Router,
    private _AuthService: AuthService
  ) {}
  ngOnInit(): void {}
  wrongInput = false;

  registerForm: FormGroup = this._FormBuilder.group({
    firstName: [null, [Validators.required]],
    lastName: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
    // phone: [null, [Validators.required]],
    password: [null, [Validators.required, Validators.minLength(6)]],
    confirmPassword: [null, [Validators.required]],
    // address: [null, [Validators.required]],
    // city: [null, [Validators.required]],
    age: [null, [Validators.required]],
  });
  confirmPassword(group: FormGroup): void {
    const password = group.get('password');
    const confirmPassword = group.get('confirmPassword');
    if (password?.value != confirmPassword?.value) {
      confirmPassword?.setErrors({ missmatch: 'password dosnt match' });
    }
    if (password?.value === '') {
      confirmPassword?.setErrors({ empty: 'feild cant be empty' });
    }
  }

  handleForm() {
    this._AuthService.registerForm(this.registerForm.value).subscribe({
      next: (response) => {
        // console.log(response);
        if (response.message == 'success') {
          this._Router.navigate(['/signin']);
        } else {
          this.registerForm.markAllAsTouched();
          this.wrongInput = true;
        }
      },
      error: (err) => {
        this.wrongInput = true;
      },
    });
  }
}
