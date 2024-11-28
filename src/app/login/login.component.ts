import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

public loginForm:FormGroup = new FormGroup({
  email: new FormControl(),
  password: new FormControl(),
})

constructor(private _loginService:LoginService, private _router:Router){}

login(){
  console.log(this.loginForm);
  this._loginService.login(this.loginForm.value).subscribe(
    (data:any)=>{
      alert("Login Success!!!");
      // go to dashboard
      this._router.navigateByUrl("/dashboard");
      // store token
      sessionStorage.setItem('token',data.token);
    },
    (err:any)=>{
      alert("Invalid Credentials");
    }
  )
}

}
