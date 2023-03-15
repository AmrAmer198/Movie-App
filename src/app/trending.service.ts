import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private _httpClient:HttpClient) {
   
   }
   getTrending(mediaType:any):Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=e6d0599e9d61035dc8fc970f4c69b62b`)
  }
  getTrendingDetails(mediaType:any,id:any):Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=e6d0599e9d61035dc8fc970f4c69b62b&language=en-US`)
  }
}
