import { Component } from '@angular/core';
import { TrendingService } from '../trending.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  trendingMovie:any[]=[];

  constructor(private _trendingService:TrendingService){

    _trendingService.getTrending("all").subscribe((data)=>{
      this.trendingMovie = data.results.filter((item:any)=>{
       return item.media_type=="movie"
      })
     
      })


  }
}
