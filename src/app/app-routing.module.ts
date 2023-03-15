import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuardService } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NetworkComponent } from './network/network.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { SignupComponent } from './signup/signup.component';
import { TrendingDetailsComponent } from './trending-details/trending-details.component';
import { TvshowsComponent } from './tvshows/tvshows.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'trending-details/:type/:id',component:TrendingDetailsComponent},
  {path:'about',component:AboutComponent},
  {path:'tvshows',component:TvshowsComponent,canActivate:[AuthGuardService]},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'people',component:PeopleComponent},
  {path:'network',component:NetworkComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'movies',component:MoviesComponent},
  {path:'**',component:NotfoundComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
