import { Component } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  trendingMovie:any[]=[];
  trendingTvshows:any[]=[];

constructor(private _trendingService:TrendingService){
  _trendingService.getTrending("all").subscribe((data)=>{
  this.trendingMovie = data.results.filter((item:any)=>{
   return item.media_type=="movie"
  })
  this.trendingTvshows = data.results.filter((item:any)=>{
    return item.media_type=="tv"
   })
  })
}
}
