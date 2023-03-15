import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingService } from '../trending.service';



@Component({
  selector: 'app-trending-details',
  templateUrl: './trending-details.component.html',
  styleUrls: ['./trending-details.component.scss']
})
export class TrendingDetailsComponent {
  type:any;
  id:any;
  itemDetails:any

constructor(private _trendingService:TrendingService,private _activateRoute:ActivatedRoute){
 this.type= _activateRoute.snapshot.paramMap.get('type')
 this.id= _activateRoute.snapshot.paramMap.get('id')
 this._trendingService.getTrendingDetails(this.type,this.id).subscribe((data)=>{
  this.itemDetails = data
 

 })
}
}
