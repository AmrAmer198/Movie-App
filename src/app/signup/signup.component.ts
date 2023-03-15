import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent  {
  constructor(private _authService:AuthService,private _router:Router){

  }
  registerForm:FormGroup = new FormGroup({
    'first_name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(9)]),
    'last_name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(9)]),
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.pattern(/^[a-z][0-9]{3}$/)]),

  });

 
  register(){
    if(this.registerForm.invalid){
      return
    }
    this._authService.registerData(this.registerForm.value).subscribe((data)=>{
      if(data.message=='success'){
        localStorage.setItem('token',data.token)
        console.log(data)
        this._router.navigateByUrl("/login")
      }else{
        this.registerForm.reset()
        alert(data.message)
      }
     },(eror)=>{
      console.log(eror)
     })
  }

 
  
}
