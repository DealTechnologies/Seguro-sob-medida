
import { Component, Inject, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private authService: AuthService,

  ) { }


  form = {
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  };
  notLogged = false;

  formMode = "login";


  ngOnInit(): void {
  }

  submitLogin(): void {
    const user = {
      user: this.form.user.value,
      password: this.form.password.value
    };
    this.authService.doLogin(user)
      .subscribe(resp => {
        this.notLogged = false;
        this.authService.authenticateUser(resp);
        this.onNoClick();
      }, error => {
        console.log(error);
        this.notLogged = true;
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
