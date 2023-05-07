import { Component } from '@angular/core';
import { GetapiServicenews } from '../../getapi.service'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  articles: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7870aae03e51446489920cf3aafb8319')
      .subscribe(response => {
        this.articles = response.articles;
        console.log(this.articles)
      });
  }
}


