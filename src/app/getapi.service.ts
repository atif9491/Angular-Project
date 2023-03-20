import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetapiService {
 url = "https://api.negbuy.com/api/featured_product"
  constructor( private http:HttpClient ) { }
  articles(){
    return this.http.get(this.url)
  }
}
