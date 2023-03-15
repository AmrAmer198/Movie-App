import { Component } from '@angular/core';
import { TrendingService } from '../trending.service';
@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent {
  trendingTvshows:any[]=[];

  constructor(private _trendingService:TrendingService){
    _trendingService.getTrending("all").subscribe((data)=>{
    
    this.trendingTvshows = data.results.filter((item:any)=>{
      return item.media_type=="tv"
     })
    })
  }
}
