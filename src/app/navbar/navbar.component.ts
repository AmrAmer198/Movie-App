import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  showMenueItem:boolean=true;
logOut(){
  localStorage.removeItem('token')
  this._router.navigateByUrl('/login')
}
constructor(private _router:Router){
  let token = localStorage.getItem('token');
  if(token){
    this.showMenueItem=true
  }
  else{
    this.showMenueItem=false 
  }
}

}
