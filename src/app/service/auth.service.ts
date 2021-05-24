import { Injectable } from '@angular/core';
import *  as  datauser from '../../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any = (datauser as any).default;
  returndata:any;
  constructor() {
  }

  checkLogin(email,password){
  	this.returndata = "false";
  	for (var i = 0; i < this.user.length; i++) {
		 if(email === this.user[i].userid && password === this.user[i].password){
		 	this.returndata = this.user[i];
		 	break;
		 }else{
		 	this.returndata = "false";
		 }
	}
  	return this.returndata;
  }
}
