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

  goToItems() {
    
  }

  onSubmit(): void {
    const { username, password } = this.form;

    if (this.form.invalid) {
      alert('invalid input');
      return;
    }
    
    this.authService.login(username, password).subscribe({
      next: data => {
        console.log(JSON.stringify(data));
        if(JSON.parse(JSON.stringify(data)).statusCode === 200) {

          this.tokenStorage.saveUser(data);
          console.log(data);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser();
          this.tokenStorage.saveToken(JSON.parse(this.tokenStorage.getUser()).data.token);
          // for debuging purposes very helpful : console.log(JSON.parse(this.tokenStorage.getUser()).data.token);
          //this.reloadPage();
          this.router.navigate(['add-post']);
        } else { alert('Check if you have entered the correct username or password') }
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

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: 'bluh', animal: 'bluh'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

}

export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}