import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { }
  registerData(value:any):Observable<any>{
   return this._http.post("https://eo9ofrk8ojafk2b.m.pipedream.net",value)
  }
  loginData(loginValue:any):Observable<any>{
    return this._http.post("https://eo9ofrk8ojafk2b.m.pipedream.net",loginValue)
  }
}
