import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'src/app/services/data';
import { AuthService } from './../../_services/authService';



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


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    /*
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
    */
  }

  goToItems() {
    
  }

  onSubmit(): void {
    const { username, password } = this.form;

    if (this.form.invalid) {
      return;
    }
    
    this.authService.loginv2(username, password).subscribe({
      next: data => {
        if(data.token != '') {
          window.localStorage.setItem('token', data.token);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.router.navigate(['list-user']);
          console.log(data.user_email);
        }else {
          this.isLoggedIn = false;
          console.log(data.user_display_name);
        }
        // this.roles = this.tokenStorage.getUser().roles;
        // this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });

   /*this.authService.login(username, password).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        console.log(data);
        console.log(this.tokenStorage);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        // this.reloadPage();
        this.router.navigateByUrl('/write-post');
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });*/
  }

  reloadPage(): void {
    window.location.reload();
  }

  public static getToken(){ 
    return this.mycode;
  }

}