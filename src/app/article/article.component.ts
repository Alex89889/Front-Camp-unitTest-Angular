import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
	
	public news;
	private _newsService;

  constructor(private newsService: NewsService) { 
	this._newsService=newsService;
	
  }

  ngOnInit() {
	this.news = this._newsService.getAll();
  }
  
  removeNews(idNews: number){
	this._newsService.remove(idNews);
	this.news = this._newsService.getAll();
  }
  
  addNews(headling: string, shortDescription: string, content: string, image: string, date: string, auhtor: string){
	let newsId = 10;
	this._newsService.add(newsId, headling,shortDescription, content, image, date, auhtor);
	this.news = this._newsService.getAll();
  }
  
  filter(){
		console.log("Filter");
	}

}
