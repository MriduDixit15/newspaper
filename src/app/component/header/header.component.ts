import { Component, OnInit, EventEmitter ,Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../service/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { LoginComponent } from './login/login.component';

export interface User{
  userid:string,
  password:string,
  username:string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {
user:User;
isLogin = "false";
  constructor(public dialog: MatDialog,private authService:AuthService, private _snackBar: MatSnackBar) { 
  	this.user = <User>JSON.parse(localStorage.getItem('user'));
    this.isLogin = localStorage.getItem('isLogin');
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(LoginComponent, {
      width: '350px',
      data: { email: "", password: "" }
    });

    dialogRef.afterClosed().subscribe(result => {
      const login = this.authService.checkLogin(result.email,result.password);
      if(login != "false"){
        localStorage.setItem('user', JSON.stringify(login))   ;
        localStorage.setItem('isLogin', "true");
        this.user = <User>login;
        this.isLogin = "true";
        this._snackBar.open("Successfully login", "Success", {
              duration: 3000
            });
      }else{
        localStorage.setItem('isLogin', "false");
        this._snackBar.open("Wrong Details", "Failed", {
              duration: 3000
            });
      }
    });
  }

  logout(){
    localStorage.setItem('isLogin', "false");
    localStorage.removeItem('user');
    this.isLogin = "false";
  }

}
