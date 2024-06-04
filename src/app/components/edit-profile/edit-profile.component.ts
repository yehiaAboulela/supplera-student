import { User } from './../shared/interfaces/user';
import { GetTokenService } from './../shared/services/get-token.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserService } from './../shared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  constructor(
    private _UserService: UserService,
    private _FormBuilder: FormBuilder,
    private _GetTokenService: GetTokenService
  ) {}
  user: User = {} as User;
  editProfileForm: FormGroup = this._FormBuilder.group({
    firstName: [null, [Validators.required]],
    lastName: [null, [Validators.required]],
    phone: [null, [Validators.required]],
  });
  ngOnInit() {
    this._UserService.getUser(this._GetTokenService.getUserId().id).subscribe({
      next: (res) => {
        console.log(res);
        this.user = res.user;
      },
    });
  }

  handleForm(): void {
    this._UserService
      .updateProfile(
        this.editProfileForm.value,
        this._GetTokenService.getUserId().id
      )
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
