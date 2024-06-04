import { AuthService } from './../shared/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  constructor(
    private _FormBuilder: FormBuilder,
    private _AuthService: AuthService
  ) {}
  forgotPassForm: FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
  });

  handleForm() {
    this._AuthService.sendOtp(this.forgotPassForm.value).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}
