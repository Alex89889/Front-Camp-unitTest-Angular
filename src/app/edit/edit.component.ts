import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { NewsService } from '../news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public news;
	private _newsService;
	myForm : FormGroup;
	private newsId;
	mArticles:Array<any>;

    constructor(private newsService: NewsService, private route: ActivatedRoute){
		this._newsService = newsService;
		let params = this.route.params.subscribe(params => this.newsId = params['newsId']);
		this.news = this._newsService.getOne(this.newsId);
        this.myForm = new FormGroup({
            "headling": new FormControl(this.news[0].headling, Validators.required),
			"shortDescription": new FormControl(this.news[0].shortDescription, Validators.required),
            "content": new FormControl(this.news[0].content),
			"date": new FormControl(this.news[0].date),
			"auhtor": new FormControl(this.news[0].auhtor),
			"id": new FormControl(this.news[0].id)
        });
    }

  ngOnInit() {
	
	  
  }
  
  editNews(headling, shortDescription, content, date, auhtor) {
    
	this._newsService.add(this.news[0].id, headling, shortDescription, content, date, auhtor);
	this.news = this._newsService.getAll();
	console.log(this.news);
	alert("News added!");
	}
}
