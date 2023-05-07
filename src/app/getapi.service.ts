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

export class GetapiServicenews {
 url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7870aae03e51446489920cf3aafb8319"
  constructor( private http:HttpClient ) { }
  articles(){
    return this.http.get(this.url)
  }
}
