import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { AuthService } from './../../_services/authService';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface DialogData {
  animal: string;
  name: string;
}



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  

  static mycode: string;


  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    /*
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;<<
    }
    */
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    if (this.form.invalid) {
      alert('invalid input');
      return;
    }
    
    this.authService.login(username, password).subscribe({
      next: data => {
          this.tokenStorage.saveToken(data.token);
          this.tokenStorage.saveUser(data);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;
          console.log(data);
  
          this.router.navigate(['add-post']);
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
    });
  }
}