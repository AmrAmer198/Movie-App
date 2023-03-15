import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


FormGroup
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _authService:AuthService,private _router:Router){}

  loginForm:FormGroup = new FormGroup({
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.pattern(/^[a-z][0-9]{3}$/)]),

  });

  login(){
    if(this.loginForm.invalid){
      return
    }
    this._authService.loginData(this.loginForm.value).subscribe((data)=>{
     console.log(data)
     },(eror)=>{
      console.log(eror)
     })
  }
  
 
}
